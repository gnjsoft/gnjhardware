import { Service, Benefit, Testimonial, DiagnosticIssue, BusinessProblem, EHSResultSolution } from './types';

export const services: Service[] = [
  {
    id: 'laptop-repair',
    title: 'Enterprise Laptop Repair',
    description: 'Precision micro-soldering, internal board repair, hinge recovery, defective LCD screen replacements, and premium lithium battery upgrades for corporate fleets (Lenovo ThinkPad, HP EliteBook, Dell Latitude, Apple MacBook).',
    category: 'laptop-desktop',
    features: [
      'Genuine OEM spare parts with 120-day warranty',
      'Motherboard micro-soldering & powerIC replacement',
      'Thermal module cleaning & phase-change paste swap',
      'Secure transit logistics for bulk offsite repairs'
    ],
    basePrice: '$69',
    typicalTurnaround: 'Same day / Next day'
  },
  {
    id: 'desktop-repair',
    title: 'Workstation & Desktop Repair',
    description: 'Component diagnostics, heavy-duty RAM expansion, high-integrity PCIe SSD cloning, workstation motherboard level repairs, and ultra-durable power supply (PSU) installations to protect critical office roles.',
    category: 'laptop-desktop',
    features: [
      'High-speed SSD cloning with zero data loss guarantee',
      'Diagnostic resolution for Blue Screen of Death (BSOD)',
      'Enterprise-grade certified silent PSU replacements',
      'System de-dusting and optimal cable management'
    ],
    basePrice: '$59',
    typicalTurnaround: 'Same day service'
  },
  {
    id: 'server-maintenance',
    title: 'Server Hardware Infrastructure',
    description: 'Proactive physical maintenance for rackmount server systems (Dell PowerEdge, HPE ProLiant), RAID reconstruction, network storage controller swaps, redundant fan replacements, and battery backups (UPS).',
    category: 'servers',
    features: [
      'Hot-swappable enterprise SAS disks & hardware arrays',
      'RAID resilience config (RAID 1, 5, 10, RAID 50/60)',
      'Chassis air ducting refresh & multi-fan replacement',
      'Physical UPS load calibration & critical battery service'
    ],
    basePrice: '$199',
    typicalTurnaround: 'Immediate emergency SLA'
  },
  {
    id: 'network-setup',
    title: 'Network Setup & Troubleshooting',
    description: 'Structured Cat6/Cat6A cabling, neat server rack layouts, physical firewall mounting, custom Cisco / Ubiquiti UniFi high-density Wi-Fi Access Point deployment, and network physical signal pin diagnostics.',
    category: 'networking',
    features: [
      'Structured cable dressing with neat patch panels',
      'Enterprise wireless heatmapping & signal placement',
      'Physical router/firewall bracket and rack installations',
      'Advanced digital diagnostic signal testing & fiber splicing'
    ],
    basePrice: '$149',
    typicalTurnaround: 'Scheduled appointment'
  },
  {
    id: 'amc-services',
    title: 'Hardware AMC (Annual Contracts)',
    description: 'Predictable flat-rate annual agreements to keep your office computers, secure on-premise storage, network backbone, and printing grids functional. Includes preventative visits, scheduled dusting, and prioritized response.',
    category: 'amc-support',
    features: [
      'Nominated primary hardware engineer with fast on-site SLA',
      'Scheduled monthly biological/dust deep-cleansing audits',
      'Unlimited remote hardware guidance & configuration',
      'Discounted flat-rate rental workstation terminals'
    ],
    basePrice: 'Custom Quote',
    typicalTurnaround: 'Immediate 365-day SLA active'
  },
  {
    id: 'printer-repair',
    title: 'Printer Repair & Servicing',
    description: 'Specialized physical diagnosis and repair for enterprise laser printers, multi-function fax copy machines, paper feed roller replacements, fuser-unit rebuilds, and network printing sync.',
    category: 'printers',
    features: [
      'Multi-sheet jamming & rollers alignment servicing',
      'Laser scanner cleaning & fuser unit rebuilds',
      'Physical print head recovery & color calibration',
      'Professional wireless setting up & network diagnostics'
    ],
    basePrice: '$79',
    typicalTurnaround: 'Same day / Next day'
  }
];

export const benefits: Benefit[] = [
  {
    title: 'Fast Response Time',
    description: 'Outages wait for no one. Our regional field engineers are dispatched immediately and arrive at your office floor in an average of 90 minutes.'
  },
  {
    title: 'Expert Technicians',
    description: 'Our specialists are dually certified in Dell, HP, Apple, Cisco, and hold active CompTIA A+ and IEEE hardware credentials.'
  },
  {
    title: 'Affordable Pricing',
    description: 'Enjoy pre-authorized quote ceilings, clear fixed-rate service hours, and cost savings compared to purchasing brand new machines.'
  },
  {
    title: 'On-site Support',
    description: 'No packing heavy computer rigs or printers. Our mobile units bring high-grade oscilloscope multi-meters and spare parts right to your workbench.'
  },
  {
    title: 'Trusted by Businesses',
    description: 'Over 120 regional companies, creative teams, healthcare labs, schools, and professional offices rely on us for seamless daily computing.'
  }
];

export const businessProblems: BusinessProblem[] = [
  {
    id: 'downtime',
    title: 'Catastrophic Downtime Issues',
    description: 'Unplanned hardware Outages freeze staff progress, stopping corporate communication systems and costing thousands in wasted salary hours.',
    metric: 'Avg. $5,600 / minute lost during IT outages'
  },
  {
    id: 'failures',
    title: 'Sudden Workstation Failures',
    description: 'A blue screen, a dead motherboard power transistor, or a warning RAID drive light can disrupt operations and cause devastating physical data loss.',
    metric: 'Over 40% of standard drives fail within 4 years'
  },
  {
    id: 'high-maintenance',
    title: 'Astronomical Maintenance Costs',
    description: 'Unpredictable hourly technician rates, emergency rush dispatch fees, and inflated prices for legacy spare parts burden tight quarterly budgets.',
    metric: 'Save up to 45% using structured AMC models'
  },
  {
    id: 'lack-staff',
    title: 'Inadequate Physical IT Support',
    description: 'Typical managed IT services specialize in cloud configurations and software licenses. They lack specialized tools for workbench micro-soldering and mechanical repairs.',
    metric: '9 out of 10 IT companies only work on software'
  }
];

export const ehsSolutions: EHSResultSolution[] = [
  {
    id: 'proactive',
    title: 'Proactive Hardware Maintenance',
    description: 'We perform regular dusting, heat-sink ventilation checks, voltage tests, and capacitor visual testing to resolve silicon degradation before physical issues stop your office workflow.',
    highlight: 'Reduces unpredictable hardware issues by up to 88%'
  },
  {
    id: 'onsite',
    title: 'Guaranteed On-Site SLA Response',
    description: 'Avoid packaging heavy machinery or driving to retail stores. Our fully stocked service vehicles bring oscilloscope multi-meters, diagnostic tools, and backup devices directly to your office floor.',
    highlight: 'Emergency field engineer arrival within 2-4 hours'
  },
  {
    id: 'fast-dispatch',
    title: 'Ultra-Fast Dispatch Lifeline',
    description: 'Our dispatch routing software assigns the nearest local field specialist matching your exact device vendor guidelines, securing quick initial debugging and prompt problem resolution.',
    highlight: 'Best-in-class average response speed under 90 minutes'
  },
  {
    id: 'cost-effective',
    title: 'All-Inclusive Value AMC Agreements',
    description: 'Our Annual Maintenance Contracts consolidate physical cleaning, regular terminal testing, backup power checks, and prioritised labor hours into one easily manageable, flat-rate monthly invoice.',
    highlight: 'A predictable, transparent corporate IT budget'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Siddharth Mehta',
    role: 'Managing Director',
    company: 'Capital Trade & Logistics',
    rating: 5,
    content: 'We contracted with this team for an AMC when we moved into our new double-story office. They handled the structured cabling, mounted seven network access points, and now maintain all 35 office desktops. Downtime is a thing of the past for us.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80'
  },
  {
    id: 't2',
    name: 'Sarah Peterson',
    role: 'Operations & IT Admin',
    company: 'Oakwood Law Group LLC',
    rating: 5,
    content: 'Our high-volume laser printer was giving endless multi-sheet errors right before a major filing deadline. Their technician arrived within 2 hours, cleaned the feed rollers, and tuned the alignment gears. Outstanding, punctual response!',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80'
  },
  {
    id: 't3',
    name: 'David Vance',
    role: 'VP of Technology',
    company: 'Synergy Healthcare Partners',
    rating: 5,
    content: 'Upgraded all of our hospital reception Lenovo laptops to enterprise PCIe solid-state drives and refreshed their cooling components. This prolonged their lifecycle by years, saving us immense hardware depreciation expenses. Highly recommend.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80'
  }
];

export const diagnosticIssues: DiagnosticIssue[] = [
  {
    id: 'laptop',
    name: 'Laptop Repairs',
    baseCost: 69,
    symptoms: [
      { id: 'screen', text: 'Cracked or Flickering LCD Screen', priceAdjustment: 110 },
      { id: 'dead', text: 'Won\'t Power On or Charging Failure', priceAdjustment: 80 },
      { id: 'slow', text: 'Overheating / Thermal Fan Noise / Running Slow', priceAdjustment: 35 },
      { id: 'keyboard', text: 'Broken Keys / Defective Trackpad', priceAdjustment: 45 },
      { id: 'liquid', text: 'Liquid Damage Repair & Cleaning', priceAdjustment: 140 }
    ]
  },
  {
    id: 'desktop',
    name: 'Desktop Workstations',
    baseCost: 59,
    symptoms: [
      { id: 'boot', text: 'No Video Output / Power Fan Spins But No Boot', priceAdjustment: 50 },
      { id: 'psu', text: 'Dead Power Supply (Fully Unresponsive)', priceAdjustment: 45 },
      { id: 'drive', text: 'Storage Drive Upgrade to High-speed 1TB SSD', priceAdjustment: 85 },
      { id: 'blue', text: 'Frequent Crashes & Windows Blue Screen (BSOD)', priceAdjustment: 60 }
    ]
  },
  {
    id: 'server',
    name: 'Server Maintenance',
    baseCost: 199,
    symptoms: [
      { id: 'raid', text: 'Redundant RAID drive reconstruction (Failed Disk)', priceAdjustment: 230 },
      { id: 'power', text: 'Faulty redundant power supplies (Dual PSU upgrade)', priceAdjustment: 150 },
      { id: 'backup', text: 'Configure automated NAS / Offsite Backup Systems', priceAdjustment: 120 },
      { id: 'thermal', text: 'Chassis Overheating / Fan Failures', priceAdjustment: 110 }
    ]
  },
  {
    id: 'network',
    name: 'Network Setup & Cabling',
    baseCost: 149,
    symptoms: [
      { id: 'cable', text: 'Physical Cabling / Adding New Wall Ethernet Jacks', priceAdjustment: 75 },
      { id: 'wifi', text: 'Weak Wi-Fi signal & Dead Office Zones', priceAdjustment: 120 },
      { id: 'router', text: 'Configure Secure Firewalls / VPN Connections', priceAdjustment: 150 },
      { id: 'switch', text: 'Switch Port Breakdown / Patch Panel Dressing', priceAdjustment: 95 }
    ]
  },
  {
    id: 'printer',
    name: 'Printer Repair',
    baseCost: 79,
    symptoms: [
      { id: 'jam', text: 'Paper Jams / Feeding Mechanism Issue', priceAdjustment: 35 },
      { id: 'fuser', text: 'Fuser Module Defective streaking', priceAdjustment: 70 },
      { id: 'network', text: 'Printer Offline / Network Sync Port issue', priceAdjustment: 40 },
      { id: 'dust', text: 'Ink/Toner cartridge leakage deep cleaning', priceAdjustment: 50 }
    ]
  }
];
