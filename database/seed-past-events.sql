-- Seed 6 past free events
-- Run against an existing slstl_membership DB:
--   mysql -u root -p slstl_membership < database/seed-past-events.sql

USE slstl_membership;

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
