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

-- ─── Seed past events ────────────────────────────────────────────────────────
INSERT IGNORE INTO events
  (title, slug, short_description, description, event_date, time_start, time_end, venue, location, category, platform, status, is_free, general_fee, member_fee, student_fee, extra_data)
VALUES
(
  'AI in the Front Seat: Rethinking Transport and Logistics with Artificial Intelligence',
  'ai-front-seat-knowledge-sharing-2025',
  'A knowledge sharing session on the potential of AI in transport and logistics, presenting use cases and ideas for innovation.',
  'The transport and logistics sector faces persistent challenges, including dynamic traffic conditions, operational inefficiencies, and escalating costs, all of which demand innovative solutions to enhance performance and resilience. This talk aims to discuss the potential of Artificial Intelligence in the context of Transport and logistics, presenting use cases and ideas for innovation.',
  '2025-07-17', '17:00', '18:00',
  'Online (Zoom)', NULL,
  'webinar', 'Zoom', 'published', TRUE, 0, 0, 0,
  JSON_OBJECT(
    'speakers', JSON_ARRAY(
      JSON_OBJECT('name','Dr. Damayanthi Herath','bio','Director of Engineering Education Unit and Senior Lecturer, Faculty of Engineering, University of Peradeniya. Leads the DEAR group and CompBio group.')
    ),
    'contact', JSON_OBJECT('name','Maryse De Costa','email','admin.secretary@slstl.lk','phone','+94 77 566 9579')
  )
),
(
  'Knowledge Sharing Session: Port Access Elevated Highway',
  'port-access-elevated-highway-kss-2024',
  'Two-part knowledge sharing session on the concept, planning, construction, and challenges of the Port Access Elevated Highway project.',
  'A knowledge sharing session featuring two presentations: "Concept Development, Formulation and Planning of Port Access Elevated Highway" and "Construction and Challenges of Port Access Elevated Highway". The Zoom link will be emailed to registered participants.',
  '2024-03-28', '17:30', NULL,
  'Online (Zoom)', NULL,
  'webinar', 'Zoom', 'published', TRUE, 0, 0, 0,
  JSON_OBJECT(
    'speakers', JSON_ARRAY(
      JSON_OBJECT('name','Eng. H M K G G Bandara','bio','Former Director Planning, Road Development Authority, Sri Lanka; General Manager, Master Hellie''s Engineering Consultants Pvt. Ltd'),
      JSON_OBJECT('name','Eng. K W Kandambi','bio','Project Director, Port Access Elevated Highway Project (PAEHP)')
    ),
    'contact', JSON_OBJECT('name','Ms. Maryse De Costa','phone','+94 77 566 9579')
  )
),
(
  'SLSTL Advanced Excel Workshops — Skill Development Series',
  'advanced-excel-workshops-2023',
  'Two hands-on Excel workshops: Advanced Excel Formulas for Data Analysis and Introduction to Excel Macro/VBA, conducted at SLIDA.',
  'Workshop 1 — Advanced Excel Formulas for Data Analysis (3 hours): Learn to build Excel tools and write powerful dynamic Excel formulas from scratch. Workshop 2 — Advanced Introduction to Excel Macro/VBA (3 hours): Automate routine Excel tasks using Excel Macro/VBA and perform them in a single click. Resource Person: Eng. (Dr.) T. Sivakumar. Venue: Sri Lanka Institute of Development Administration (SLIDA), Nawala Road, Narahenpita, Colombo 07.',
  '2023-01-18', '10:00', '16:00',
  'SLIDA, Narahenpita, Colombo 07', 'Sri Lanka Institute of Development Administration, Nawala Road, Narahenpita, Colombo 07',
  'workshop', NULL, 'published', TRUE, 0, 0, 0,
  JSON_OBJECT(
    'speakers', JSON_ARRAY(
      JSON_OBJECT('name','Eng. (Dr.) T. Sivakumar','bio','Resource Person, SLSTL')
    ),
    'contact', JSON_OBJECT('name','Administrator','email','admin.secretary@slstl.lk')
  )
),
(
  'Public Lecture: Infrastructure Project Formulation and Appraisal',
  'infrastructure-project-formulation-public-lecture-2018',
  'A free public lecture with emphasis on transport & highways, followed by a panel discussion, organised by SLSTL in collaboration with IESL.',
  'Infrastructure Project Formulation and Appraisal — with Emphasis to Transport & Highways. Organised by the Sri Lanka Society of Transport and Logistics in collaboration with the Civil Engineering Sectional Committee of the Institute of Engineers Sri Lanka (IESL). Followed by a Panel Discussion. Refreshments will be served at 17:00.',
  '2018-10-25', '17:30', '19:00',
  'Wimalasuendra Auditorium, The Institute of Engineers Sri Lanka (IESL)', 'Wimalasuendra Auditorium, IESL, Colombo',
  'seminar', NULL, 'published', TRUE, 0, 0, 0,
  JSON_OBJECT(
    'speakers', JSON_ARRAY(
      JSON_OBJECT('name','Eng. Namalie Siyambalapitiya','bio','Director (Planning), Road Development Authority')
    ),
    'contact', JSON_OBJECT('name','Ms. Shashini Ranabahu','phone','071 641 4095','email','ranabahu.sss@gmail.com')
  )
),
(
  'Online Panel Discussion: Public Transport Preparedness Under COVID-19',
  'public-transport-preparedness-covid19-panel-2020',
  'An online panel discussion on public transport preparedness and response strategies during the COVID-19 pandemic.',
  'Join us for an online panel discussion on Public Transport Preparedness Under COVID-19, featuring senior representatives from Sri Lanka Transport Board, Railways, Western Province Passenger Transport, and academia. Zoom link will be emailed to registered participants.',
  '2020-05-09', '17:00', NULL,
  'Online (Zoom)', NULL,
  'webinar', 'Zoom', 'published', TRUE, 0, 0, 0,
  JSON_OBJECT(
    'speakers', JSON_ARRAY(
      JSON_OBJECT('name','Mr. Kingsley Ranawaka','bio','Chairman, Sri Lanka Transport Board'),
      JSON_OBJECT('name','Eng. Dilantha Fernando','bio','General Manager, Sri Lanka Railways'),
      JSON_OBJECT('name','Mr. Jagath Perera','bio','General Manager, Western Province Passenger Transport'),
      JSON_OBJECT('name','Dr. N. Shirani Chandrasiri','bio','President, Sri Lanka College of Microbiologists'),
      JSON_OBJECT('name','Prof. Asoba Perera','bio','Professor, University of Moratuwa')
    ),
    'contact', JSON_OBJECT('name','Ms. S.H. Uthpalee','email','events@slstl.lk','phone','070 222 8071')
  )
),
(
  'Online Panel Discussion: Why Electrification of the KV Line Should Not Derail',
  'kv-line-electrification-panel-discussion-2020',
  'An online panel discussion separating fact from fiction on the electrification of the KV line, featuring leading experts from transport, economics, and engineering.',
  'Join us for an online panel discussion on "Why Electrification of the KV Line Should Not Derail — Separating Fact from Fiction". Featuring prominent panelists from the transport and logistics sector. Zoom link provided upon registration.',
  '2020-11-03', '18:00', '20:00',
  'Online (Zoom)', NULL,
  'webinar', 'Zoom', 'published', TRUE, 0, 0, 0,
  JSON_OBJECT(
    'speakers', JSON_ARRAY(
      JSON_OBJECT('name','Eng. (Dr.) Tilak Siyambalapitiya','bio','Managing Director, Resource Management Associates (Pvt) Ltd'),
      JSON_OBJECT('name','Prof. Lalithasiri Gunaruwan','bio','Department of Economics, University of Colombo'),
      JSON_OBJECT('name','Eng. Priyal De Silva','bio','Retired GMR-SLR; Past President of IESL; Past Chairman of CRT'),
      JSON_OBJECT('name','Eng. (Dr.) T. Sivakumar','bio','President, Sri Lanka Society of Transport & Logistics; Senior Lecturer, Department of Transport & Logistics Management, University of Moratuwa'),
      JSON_OBJECT('name','Eng. (Dr.) Tissa U Liyanage','bio','Chairman, Master Hellie''s Engineering Consultants (Pvt) Ltd')
    ),
    'moderator', 'Prof. Amal S. Kumarage, Department of Transport & Logistics Management, University of Moratuwa',
    'contact', JSON_OBJECT('name','Mr. Mavin De Silva','phone','0702702221','email','mavinds@uom.lk')
  )
);

-- ─── Default admin account ────────────────────────────────────────────────────
-- Password: Admin@SLSTL2026  (change immediately after first login)
-- Hash generated with bcrypt salt rounds 12
INSERT IGNORE INTO users (email, password_hash, role, status) VALUES (
  'admin@slstl.lk',
  '$2b$12$Ip62U./QnQWPaYM8D9zbxOoqcUA7.36ENtkrNVe2fL0WvN9vC2nzm',
  'admin',
  'active'
);
