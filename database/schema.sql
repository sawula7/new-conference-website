-- SLSTL Membership Management Database Schema
-- Run: mysql -u root -p < database/schema.sql

CREATE DATABASE IF NOT EXISTS slstl_membership CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE slstl_membership;

-- ─── Users ────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  email        VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role         ENUM('user','manager','admin') NOT NULL DEFAULT 'user',
  status       ENUM('pending','active','rejected','suspended') NOT NULL DEFAULT 'pending',
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ─── Membership Applications ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS membership_applications (
  id                  INT AUTO_INCREMENT PRIMARY KEY,
  user_id             INT NOT NULL,

  -- Section 1: Personal info
  title               VARCHAR(20),
  full_name           VARCHAR(255) NOT NULL,
  last_name_initials  VARCHAR(100),
  gender              VARCHAR(10),
  nic_no              VARCHAR(50),
  age                 INT,

  -- Section 2: Employment history (JSON array of rows)
  employment          JSON,

  -- Section 3: Contact
  address             TEXT,
  work_phone          VARCHAR(50),
  home_phone          VARCHAR(50),
  mobile              VARCHAR(50),
  fax                 VARCHAR(50),
  email_1             VARCHAR(255),
  email_2             VARCHAR(255),
  publish_name        BOOLEAN DEFAULT FALSE,
  share_email         BOOLEAN DEFAULT FALSE,
  share_mobile        BOOLEAN DEFAULT FALSE,

  -- Section 4: Qualifications (JSON array)
  qualifications      JSON,

  -- Section 5: Professional works (JSON array)
  professional_works  JSON,

  -- Section 6: Areas of interest
  areas_of_interest   TEXT,

  -- Section 7: Membership declaration
  apply_for           VARCHAR(100) NOT NULL,
  upgrade_from        VARCHAR(100),
  current_mem_no      VARCHAR(20),
  ms_number           VARCHAR(50),

  -- Section 8: Proposers (JSON array [{name, mem_no}])
  proposers           JSON,

  -- Review
  status              ENUM('pending','approved','rejected') NOT NULL DEFAULT 'pending',
  reviewed_by         INT,
  reviewed_at         TIMESTAMP NULL,
  review_notes        TEXT,

  created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ─── Member Profiles (approved members) ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS member_profiles (
  id                   INT AUTO_INCREMENT PRIMARY KEY,
  user_id              INT UNIQUE NOT NULL,
  membership_number    VARCHAR(10) UNIQUE NOT NULL,   -- e.g. "001"
  membership_category  VARCHAR(100) NOT NULL,
  application_id       INT NOT NULL,
  approved_by          INT NOT NULL,
  approved_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id)         REFERENCES users(id),
  FOREIGN KEY (application_id)  REFERENCES membership_applications(id)
);

-- ─── Fee Schedule ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS membership_fees (
  id                   INT AUTO_INCREMENT PRIMARY KEY,
  membership_category  VARCHAR(100) NOT NULL,
  year                 YEAR NOT NULL,
  amount               DECIMAL(10,2) NOT NULL,
  due_date             DATE,
  description          VARCHAR(255),
  created_by           INT,
  created_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_cat_year (membership_category, year)
);

-- ─── Member Payments ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS member_payments (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  user_id          INT NOT NULL,
  fee_id           INT NOT NULL,
  order_id         VARCHAR(100) UNIQUE NOT NULL,
  amount           DECIMAL(10,2) NOT NULL,
  currency         VARCHAR(10) DEFAULT 'LKR',
  status           ENUM('pending','completed','cancelled','failed') NOT NULL DEFAULT 'pending',
  payhere_order_id VARCHAR(100),
  payhere_data     JSON,
  paid_at          TIMESTAMP NULL,
  created_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (fee_id)  REFERENCES membership_fees(id)
);

-- ─── Password Reset Tokens ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  user_id    INT NOT NULL,
  token      VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  used       BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ─── Events ───────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS events (
  id                    INT AUTO_INCREMENT PRIMARY KEY,
  title                 VARCHAR(255) NOT NULL,
  slug                  VARCHAR(255) UNIQUE NOT NULL,
  short_description     VARCHAR(500),
  description           TEXT,
  event_date            DATE,
  time_start            VARCHAR(20),
  time_end              VARCHAR(20),
  venue                 VARCHAR(255),
  location              VARCHAR(500),
  category              VARCHAR(50) DEFAULT 'webinar',
  platform              VARCHAR(50),
  status                ENUM('draft','published','cancelled') NOT NULL DEFAULT 'draft',
  image_url             VARCHAR(500),
  is_free               BOOLEAN DEFAULT FALSE,
  general_fee           DECIMAL(10,2) DEFAULT 0.00,
  member_fee            DECIMAL(10,2) DEFAULT 0.00,
  student_fee           DECIMAL(10,2) DEFAULT 0.00,
  capacity              INT,
  registration_deadline DATE,
  extra_data            JSON,
  created_by            INT,
  created_at            TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at            TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id)
);

-- ─── Event Registrations ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS event_registrations (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  event_id     INT NOT NULL,
  user_id      INT NOT NULL,
  order_id     VARCHAR(100) UNIQUE NOT NULL,
  amount       DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  currency     VARCHAR(10) DEFAULT 'LKR',
  status       ENUM('pending','completed','cancelled','free') NOT NULL DEFAULT 'pending',
  payhere_data JSON,
  paid_at      TIMESTAMP NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_event_user (event_id, user_id),
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id)  REFERENCES users(id)  ON DELETE CASCADE
);

-- ─── Seed initial fee schedule ────────────────────────────────────────────────
-- Update amounts as needed for each year
INSERT IGNORE INTO membership_fees (membership_category, year, amount, description) VALUES
  ('Associate Member',  2026, 1000.00, 'Annual membership fee 2026'),
  ('Regular Member',    2026, 2000.00, 'Annual membership fee 2026'),
  ('Fellow Member',     2026, 4000.00, 'Annual membership fee 2026');

-- ─── Default admin account ────────────────────────────────────────────────────
-- Password: Admin@SLSTL2026  (change immediately after first login)
-- Hash generated with bcrypt salt rounds 12
INSERT IGNORE INTO users (email, password_hash, role, status) VALUES (
  'admin@slstl.lk',
  '$2b$12$Ip62U./QnQWPaYM8D9zbxOoqcUA7.36ENtkrNVe2fL0WvN9vC2nzm',
  'admin',
  'active'
);
