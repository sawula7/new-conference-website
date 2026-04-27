export interface EventTicket {
  type: string
  price: number  // 0 = free
  description: string
}

export interface EventSpeaker {
  name: string
  role: string       // title / position
  bio: string
  photo?: string     // URL; leave undefined for initials avatar
}

export interface EventContact {
  name: string
  role?: string
  email?: string
  phone?: string
}

export interface SLSTLEvent {
  slug: string
  title: string
  shortTitle: string
  date: string          // ISO date for sorting
  dateDisplay: string   // Human-readable date
  time: string
  endTime?: string
  location: string
  venue: string
  platform?: string     // e.g. "Zoom" for virtual events
  organizer: string
  category: string
  sessionType?: string  // e.g. "Knowledge Sharing Session"
  status: 'upcoming' | 'past'
  badge?: 'sales-end-soon' | null
  tickets: EventTicket[]
  currency: string
  description: string   // Brochure / full description (HTML allowed)
  highlights: string[]
  speakers?: EventSpeaker[]
  contact?: EventContact
  gradient: string      // CSS gradient for placeholder image
}

export const events: SLSTLEvent[] = [
  {
    slug: 'rethinking-transport-ai',
    title: 'Rethinking Transport & Logistics with Artificial Intelligence',
    shortTitle: 'Rethinking Transport & Logistics with AI',
    date: '2026-09-15',
    dateDisplay: 'Tue, Sep 15, 2026',
    time: '9:00 AM',
    endTime: '5:00 PM',
    location: 'Colombo, Sri Lanka',
    venue: 'ITC Ratnadipa, a Luxury Collection Hotel, Colombo',
    organizer: 'SLSTL',
    category: 'Conference',
    sessionType: 'Knowledge Sharing Session',
    status: 'upcoming',
    badge: null,
    currency: 'LKR',
    tickets: [
      { type: 'Early Bird',      price: 3500,  description: 'Limited early-bird seats — includes lunch and refreshments.' },
      { type: 'Standard',        price: 5000,  description: 'Full-day access, lunch, refreshments, and certificate.' },
      { type: 'Student / Member', price: 2000, description: 'Valid student ID or SLSTL membership required at entry.' },
    ],
    highlights: [
      'Keynote addresses by leading AI & transport researchers',
      'Panel discussion: AI-driven supply chain optimisation',
      'Workshop: Machine learning for traffic prediction',
      'Networking lunch and Q&A sessions',
      'Certificate of participation',
    ],
    speakers: [
      {
        name: 'Dr. Damayanthi Herath',
        role: 'Director, Engineering Education Unit & Senior Lecturer, Faculty of Engineering, University of Peradeniya',
        bio: 'Dr. Damayanthi Herath serves as the Director of the Engineering Education Unit and Senior Lecturer at the Faculty of Engineering, University of Peradeniya, Sri Lanka. She holds a B.Sc. (Hons) in Computer Engineering from the University of Peradeniya and a Ph.D. from the Melbourne School of Engineering, The University of Melbourne, Australia. Her research expertise spans computational intelligence, -omics data analysis, and edutainment, with a robust publication record and numerous presentations at international conferences. She is currently leading the Data Engineering and Research (DEAR) group and Computational Biology (CompBio) group at Peradeniya.',
      },
    ],
    contact: {
      name: 'Maryse De Costa',
      role: 'Event Manager',
      email: 'admin.secretary@slstl.lk',
      phone: '+94 77 566 9579',
    },
    description: `
      <p>Join us for a landmark one-day forum organised by the Sri Lanka Society of Transport &amp; Logistics (SLSTL),
      bringing together researchers, industry practitioners, and policymakers to explore how Artificial Intelligence
      is transforming transport and logistics systems globally and in South Asia.</p>

      <p>From autonomous vehicles and smart traffic management to AI-powered demand forecasting and last-mile delivery
      optimisation, this event will showcase cutting-edge research and real-world case studies from across the region.</p>

      <h3>Who Should Attend?</h3>
      <p>Transport planners, logistics managers, supply chain professionals, academics, postgraduate students, and
      government officials with an interest in the digitisation of transport and logistics.</p>

      <h3>Programme Overview</h3>
      <ul>
        <li><strong>09:00 – 09:30</strong> Registration &amp; Welcome Tea</li>
        <li><strong>09:30 – 10:30</strong> Opening Ceremony &amp; Keynote Address</li>
        <li><strong>10:30 – 12:30</strong> Technical Sessions (Track A &amp; Track B)</li>
        <li><strong>12:30 – 13:30</strong> Networking Lunch</li>
        <li><strong>13:30 – 15:30</strong> Panel Discussion &amp; Workshop</li>
        <li><strong>15:30 – 16:00</strong> Refreshments &amp; Networking</li>
        <li><strong>16:00 – 17:00</strong> Closing Ceremony &amp; Awards</li>
      </ul>
    `,
    gradient: 'linear-gradient(135deg, #0a3d52 0%, #1786a5 60%, #1a96ba 100%)',
  },
  {
    slug: 'port-access-highway',
    title: 'Port Access Elevated Highway — Expert Panel Discussion',
    shortTitle: 'Port Access Elevated Highway',
    date: '2024-11-20',
    dateDisplay: 'Wed, Nov 20, 2024',
    time: '2:00 PM',
    endTime: '5:00 PM',
    location: 'Colombo, Sri Lanka',
    venue: 'SLSTL Secretariat, Colombo',
    organizer: 'SLSTL',
    category: 'Panel Discussion',
    status: 'past',
    badge: null,
    currency: 'LKR',
    tickets: [
      { type: 'General Admission', price: 0, description: 'Free entry — registration required.' },
    ],
    highlights: [
      'Expert panel including port authority and transport engineers',
      'Q&A with government and industry stakeholders',
      'Discussion on economic and environmental impact',
      'Post-event report distributed to all attendees',
    ],
    contact: {
      name: 'SLSTL Secretariat',
      email: 'admin.secretary@slstl.lk',
    },
    description: `
      <p>An expert panel discussion on the proposed Port Access Elevated Highway project, which aims to
      decongest the Colombo Port access routes and improve freight movement efficiency.</p>
      <p>Panellists included senior engineers from the Sri Lanka Ports Authority, road planning experts,
      and academic researchers, with open Q&amp;A from the floor.</p>
    `,
    gradient: 'linear-gradient(135deg, #0d5f7e 0%, #259cc0 100%)',
  },
  {
    slug: 'excel-workshops',
    title: 'Advanced Excel for Logistics Professionals — Workshop Series',
    shortTitle: 'Advanced Excel Workshops',
    date: '2023-08-10',
    dateDisplay: 'Thu, Aug 10, 2023',
    time: '9:00 AM',
    endTime: '4:00 PM',
    location: 'Colombo, Sri Lanka',
    venue: 'SLSTL Training Centre, Colombo',
    organizer: 'SLSTL',
    category: 'Workshop',
    status: 'past',
    badge: null,
    currency: 'LKR',
    tickets: [
      { type: 'Member Rate',    price: 3000, description: 'SLSTL members — bring your membership card.' },
      { type: 'Standard Rate', price: 4500, description: 'Open to all transport & logistics professionals.' },
    ],
    highlights: [
      'Hands-on data analysis with real logistics datasets',
      'Pivot tables, VLOOKUP, and advanced formulas',
      'Dashboard building for KPI tracking',
      'Participants receive course materials and certificate',
    ],
    contact: {
      name: 'SLSTL Secretariat',
      email: 'admin.secretary@slstl.lk',
    },
    description: `
      <p>A hands-on, full-day workshop designed for logistics and supply chain professionals who want to
      take their Excel skills to the next level. Participants learned advanced data analysis techniques
      directly applicable to inventory management, routing, and performance tracking.</p>
    `,
    gradient: 'linear-gradient(135deg, #137089 0%, #4ab5d4 100%)',
  },
  {
    slug: 'ipfa',
    title: 'International Professional Forum on Aviation (IPFA)',
    shortTitle: 'IPFA — International Aviation Forum',
    date: '2022-06-15',
    dateDisplay: 'Wed, Jun 15, 2022',
    time: '8:30 AM',
    location: 'Colombo, Sri Lanka',
    venue: 'Cinnamon Grand Colombo',
    organizer: 'SLSTL',
    category: 'Forum',
    status: 'past',
    badge: null,
    currency: 'LKR',
    tickets: [
      { type: 'General Admission', price: 0, description: 'Free entry for registered delegates.' },
    ],
    highlights: [
      'International speakers from IATA and regional airlines',
      'Focus on post-pandemic air transport recovery',
      'Cargo logistics and air freight panel',
    ],
    description: `
      <p>A multidisciplinary international forum on aviation, focusing on the recovery and transformation
      of air transport systems in the post-COVID era, with special attention to cargo logistics,
      connectivity, and regulatory frameworks in South Asia.</p>
    `,
    gradient: 'linear-gradient(135deg, #0f5a70 0%, #1786a5 100%)',
  },
  {
    slug: 'pt-covid19',
    title: 'Public Transport & COVID-19 — Impact and Recovery Seminar',
    shortTitle: 'PT-COVID19 Seminar',
    date: '2020-09-22',
    dateDisplay: 'Tue, Sep 22, 2020',
    time: '10:00 AM',
    location: 'Online (Virtual)',
    venue: 'Zoom Webinar',
    platform: 'Zoom',
    organizer: 'SLSTL',
    category: 'Webinar',
    status: 'past',
    badge: null,
    currency: 'LKR',
    tickets: [
      { type: 'Free Registration', price: 0, description: 'Open to all via Zoom — link sent upon registration.' },
    ],
    highlights: [
      'Research findings on ridership decline during lockdowns',
      'Policy recommendations for transport recovery',
      'Case studies from Sri Lanka and Singapore',
    ],
    description: `
      <p>An online seminar examining the profound impact of the COVID-19 pandemic on public transport
      systems in Sri Lanka and the wider South Asian region, with evidence-based recommendations for
      sustainable recovery and adaptation.</p>
    `,
    gradient: 'linear-gradient(135deg, #a07a0c 0%, #f0c040 100%)',
  },
  {
    slug: 'kvline',
    title: 'Kelani Valley Line Upgrade — Urban Rail Connectivity Forum',
    shortTitle: 'KVLINE — Kelani Valley Rail Forum',
    date: '2019-03-14',
    dateDisplay: 'Thu, Mar 14, 2019',
    time: '9:00 AM',
    location: 'Colombo, Sri Lanka',
    venue: 'National Transport Commission Auditorium',
    organizer: 'SLSTL',
    category: 'Forum',
    status: 'past',
    badge: null,
    currency: 'LKR',
    tickets: [
      { type: 'General Admission', price: 0, description: 'Free — open to transport professionals and students.' },
    ],
    highlights: [
      'Feasibility findings for KV Line electrification',
      'Comparative study with South Asian metro systems',
      'Community impact and land-use planning discussion',
    ],
    description: `
      <p>A forum focused on the long-discussed Kelani Valley Railway Line upgrade, examining feasibility,
      funding models, alignment options, and the potential transformative impact on urban mobility in
      the greater Colombo metropolitan area.</p>
    `,
    gradient: 'linear-gradient(135deg, #c49a10 0%, #d4a520 60%, #f4d83c 100%)',
  },
]

export function getEvent(slug: string): SLSTLEvent | undefined {
  return events.find(e => e.slug === slug)
}
