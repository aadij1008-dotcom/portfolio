export interface ExperienceItem {
  id: string;
  company: string;
  companyInitials: string;
  position: string;
  location?: string;
  duration: string;
  responsibilities: string[];
}

export interface CompetencyCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    iconName:
      | 'Handshake'
      | 'Settings2'
      | 'ShieldCheck'
      | 'Workflow'
      | 'Users'
      | 'Target'
      | 'HeartHandshake'
      | 'Headset'
      | 'Ticket'
      | 'AlertCircle'
      | 'MessageSquareText'
      | 'FileSpreadsheet'
      | 'Cpu';
  }[];
}

export interface EducationItem {
  id: string;
  qualification: string;
  institution: string;
  year: string;
  location?: string;
}

export interface LanguageItem {
  id: string;
  language: string;
  levelLabel: string;
  proficiencyPercent: number;
  detail: string;
}

export interface ValuePropItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName:
    | 'ShieldCheck'
    | 'Languages'
    | 'Users'
    | 'TrendingUp'
    | 'Globe'
    | 'Award';
}

export const portfolioData = {
  profile: {
    name: 'Aaditya Kashyap',
    title: 'Operations & Vendor Management Professional',
    experienceYears: '9+ Years',
    location: 'Berlin, Germany',
    email: 'aadityakashyap88828@gmail.com',
    phone: '+49 15255629376',
    summaryShort:
      'Operations and customer support expert with over 9 years of experience in vendor management, catalog operations, multilingual service, and international logistics.',
    summaryDetailed:
      'Experienced in German and English vendor communications, SLA compliance, mentoring vendor associates, export documentation, and operational process improvement.',
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Languages', href: '#languages' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    heading: "Hello, I'm Aaditya Kashyap",
    headline: 'Operations & Vendor Management Professional',
    supportingText:
      'Driving operational excellence through vendor management, multilingual communication, customer experience, and process improvement.',
    highlights: [
      {
        label: '9+ Years of Professional Experience',
        sublabel: 'International Operations & Support',
      },
      {
        label: 'Vendor Management',
        sublabel: 'Catalog, Accounts & Onboarding',
      },
      {
        label: 'Operations Excellence',
        sublabel: 'SLA Compliance & Process Accuracy',
      },
      {
        label: 'German & English Communication',
        sublabel: 'Cross-Border Stakeholder Support',
      },
    ],
    visualPath: '/src/assets/images/operations_network_visual_1794852380936.jpg',
  },
  about: {
    paragraphs: [
      'I am an experienced Operations and Customer Support professional with over 9 years of experience across vendor management, catalog operations, customer service, and international logistics.',
      'During my professional journey at Amazon and Concentrix, I have developed expertise in vendor communications, SLA compliance, mentoring, catalog accuracy, escalation handling, and workflow optimization.',
      'I have worked with international stakeholders and supported German and English-speaking vendors and customers.',
      'I am passionate about operational excellence, process development, stakeholder communication, and delivering quality-driven results.',
    ],
    highlights: [
      {
        title: 'Vendor & Stakeholder Management',
        description:
          'Managing bilingual vendor relationships, resolving catalog and payment issues, and collaborating across international teams.',
        iconName: 'Handshake' as const,
      },
      {
        title: 'Operational Excellence',
        description:
          'Maintaining strict SLA adherence, quality assurance, export documentation control, and workflow optimization.',
        iconName: 'ShieldCheck' as const,
      },
      {
        title: 'Multilingual Customer Experience',
        description:
          'Delivering high-satisfaction support in German and English across complex order, return, and account escalations.',
        iconName: 'Globe' as const,
      },
    ],
  },
  experience: [
    {
      id: 'amazon-mentor',
      company: 'Amazon India',
      companyInitials: 'AZ',
      position: 'Vendor Associate Mentor',
      duration: 'August 2023 – December 2025',
      responsibilities: [
        'Mentored new Vendor Associates.',
        'Improved onboarding efficiency and process accuracy.',
        'Managed bilingual German and English vendor communications.',
        'Resolved catalog and account issues.',
        'Ensured 100% adherence to SLA and quality standards in vendor support operations.',
      ],
    },
    {
      id: 'amazon-translation',
      company: 'Amazon India',
      companyInitials: 'AZ',
      position: 'Translation Associate II',
      duration: 'September 2022 – August 2023',
      responsibilities: [
        'Maintained catalog data accuracy.',
        'Handled multilingual vendor communications.',
        'Resolved payment and account-related issues through cross-team collaboration.',
        'Contributed to workflow optimization initiatives to improve response efficiency.',
      ],
    },
    {
      id: 'concentrix-amazon',
      company: 'Concentrix – Amazon.de Project',
      companyInitials: 'CX',
      position: 'Senior Customer Service Representative',
      location: 'Gurgaon',
      duration: 'August 2019 – September 2022',
      responsibilities: [
        'Delivered bilingual German and English customer support.',
        'Achieved top customer satisfaction scores.',
        'Mentored new team members on orders, returns, and complex account queries.',
        'Coordinated international logistics to ensure timely shipment processing.',
      ],
    },
    {
      id: 'savi-impex',
      company: 'Savi Impex',
      companyInitials: 'SI',
      position: 'Export Operations Executive',
      location: 'Delhi',
      duration: 'December 2014 – August 2018',
      responsibilities: [
        'Managed export documentation.',
        'Coordinated international shipments.',
        'Supported international logistics and timely shipment processing.',
      ],
    },
  ] as ExperienceItem[],
  competencies: [
    {
      id: 'vendor-ops',
      title: 'Vendor and Operations Management',
      description:
        'Core operational governance, vendor lifecycle support, SLA compliance, and team capability building.',
      skills: [
        { name: 'Vendor Management', iconName: 'Handshake' },
        { name: 'Operations Management', iconName: 'Settings2' },
        { name: 'SLA Compliance', iconName: 'ShieldCheck' },
        { name: 'Process Development', iconName: 'Workflow' },
        { name: 'Team Mentoring', iconName: 'Users' },
        { name: 'Result Orientation', iconName: 'Target' },
      ],
    },
    {
      id: 'customer-experience',
      title: 'Customer Experience',
      description:
        'Structured issue resolution, escalation governance, and stakeholder communication across regions.',
      skills: [
        { name: 'Customer Relationship Management', iconName: 'HeartHandshake' },
        { name: 'Customer Support', iconName: 'Headset' },
        { name: 'Ticketing Systems', iconName: 'Ticket' },
        { name: 'Escalation Handling', iconName: 'AlertCircle' },
        { name: 'Stakeholder Communications', iconName: 'MessageSquareText' },
      ],
    },
    {
      id: 'business-tools',
      title: 'Business and Administrative Tools',
      description:
        'Everyday operational productivity and modern AI-assisted workflow tools.',
      skills: [
        { name: 'MS Office Suite', iconName: 'FileSpreadsheet' },
        { name: 'Artificial Intelligence', iconName: 'Cpu' },
      ],
    },
  ] as CompetencyCategory[],
  education: [
    {
      id: 'ba-banking',
      qualification: 'Bachelor of Arts (Banking)',
      institution: 'Delhi University',
      year: '2017',
      location: 'Delhi',
    },
    {
      id: 'diploma-healthcare',
      qualification: 'Diploma in Health Care Administration',
      institution: 'AIILSG',
      year: '2017',
    },
  ] as EducationItem[],
  languages: [
    {
      id: 'english',
      language: 'English',
      levelLabel: 'Advanced',
      proficiencyPercent: 92,
      detail:
        'Fluent professional command for vendor relations, stakeholder reporting, mentoring, and documentation.',
    },
    {
      id: 'german',
      language: 'German',
      levelLabel: 'Intermediate (B1 working-level proficiency)',
      proficiencyPercent: 62,
      detail:
        'Working-level bilingual capability applied across Amazon.de vendor and customer communications.',
    },
    {
      id: 'hindi',
      language: 'Hindi',
      levelLabel: 'Expert',
      proficiencyPercent: 100,
      detail:
        'Native-level mastery supporting seamless cross-team collaboration and regional operations.',
    },
  ] as LanguageItem[],
  valueProposition: {
    title: 'What I Bring to an Organization',
    items: [
      {
        id: 'reliability',
        number: '01',
        title: 'Operational Reliability',
        description: 'Experience maintaining SLA and quality standards.',
        iconName: 'ShieldCheck',
      },
      {
        id: 'vendor-comm',
        number: '02',
        title: 'Vendor Communication',
        description:
          'Experience communicating with German and English-speaking vendors.',
        iconName: 'Languages',
      },
      {
        id: 'team-dev',
        number: '03',
        title: 'Team Development',
        description:
          'Experience mentoring and onboarding new Vendor Associates.',
        iconName: 'Users',
      },
      {
        id: 'process-imp',
        number: '04',
        title: 'Process Improvement',
        description:
          'Experience contributing to workflow optimization and operational accuracy.',
        iconName: 'TrendingUp',
      },
      {
        id: 'intl-ops',
        number: '05',
        title: 'International Operations',
        description:
          'Experience in export documentation and international logistics.',
        iconName: 'Globe',
      },
      {
        id: 'cx',
        number: '06',
        title: 'Customer Experience',
        description:
          'Experience supporting customers and resolving complex account issues.',
        iconName: 'Award',
      },
    ] as ValuePropItem[],
  },
  contact: {
    headline: "Let's Connect and Create Operational Excellence",
    supportingText:
      'Open to professional networking, suitable career opportunities, and collaborations in vendor management, operations, customer experience, and international business support.',
    email: 'aadityakashyap88828@gmail.com',
    phone: '+49 15255629376',
    location: 'Berlin, Germany',
    socialPlaceholders: {
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
  },
};
