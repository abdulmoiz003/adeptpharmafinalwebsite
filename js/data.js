/* ========================================
   ADEPT PHARMA - STATIC CONTENT DATA
   All page content stored here for easy updates
   ======================================== */

const SiteData = {
  // Company Information
  company: {
    name: 'Adept Pharma',
    tagline: 'Pakistan\'s Trusted Pharmaceutical Partner',
    description: 'Adept Pharma is a leading pharmaceutical and nutraceutical manufacturer in Pakistan, committed to producing safe, effective, and compliant products.',
    address: 'Plot# 32, Street S-2, Industrial Estate, Rawat, Islamabad, Pakistan',
    phone: '+92 3331110194',
    email: 'adeptpharma@gmail.com',
    whatsapp: '+92 3XX XXX XXXX',
    founded: 2010,
    businessHours: '9:00 AM - 5:00 PM (Monday - Friday)',
    socialLinks: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      whatsapp: '#'
    }
  },

  // Mission, Vision, Values
  missionVisionValues: {
    mission: 'To manufacture effective, safe, and compliant pharmaceutical products that improve patient outcomes across Pakistan and beyond.',
    vision: 'To become Pakistan\'s most trusted and innovative pharmaceutical manufacturing partner.',
    values: [
      {
        title: 'Quality',
        description: 'Unwavering commitment to pharmaceutical-grade quality in every product.'
      },
      {
        title: 'Integrity',
        description: 'Transparent, honest, and ethical dealings with all stakeholders.'
      },
      {
        title: 'Innovation',
        description: 'Continuous R&D and improvement in formulation and processes.'
      },
      {
        title: 'Compliance',
        description: 'Strict adherence to DRAP, GMP, ISO, and international standards.'
      },
      {
        title: 'Halal Ethics',
        description: 'Shariah-compliant raw materials and manufacturing processes.'
      }
    ]
  },

  // Services
  services: [
    {
      id: 'toll-manufacturing',
      name: 'Toll Manufacturing',
      slug: 'toll-manufacturing',
      description: 'You provide the formulation and raw materials; we handle production, QC, and packaging.',
      icon: '🏭',
      image: '/assets/images/icons/toll manufacturing.png',
      shortDescription: 'Contract manufacturing where you provide formulation and materials.',
      longDescription: 'Toll manufacturing is ideal for brands that have their formulation perfected but need reliable, scalable production. We take responsibility for quality control, compliance documentation, and delivery of finished products.',
      benefits: [
        'Cost-effective scaling without capital investment',
        'Full compliance and documentation',
        'Flexible batch sizes',
        'Confidential partnerships with NDA',
        'Expert quality control at every step'
      ],
      targetClients: 'Brands with established formulations, startups with limited capital, international companies entering Pakistani market'
    },
    {
      id: '3rd-party-manufacturing',
      name: '3rd Party / Private Label Manufacturing',
      slug: '3rd-party-manufacturing',
      description: 'We develop, manufacture, and package your products under your brand name.',
      icon: '🏢',
      image: '/assets/images/icons/3rd party manufacturing.png',
      shortDescription: 'Full private label solution - formulation to finished product.',
      longDescription: 'Complete private label manufacturing including formulation development, regulatory support, production, and branded packaging. Launch your product line without the manufacturing complexity.',
      benefits: [
        'Full R&D support for formulation',
        'Branded packaging and design',
        'Regulatory guidance and documentation',
        'Market-ready products',
        'Scalable production capacity'
      ],
      targetClients: 'Distributors, e-commerce brands, healthcare retailers, franchisees'
    },
    {
      id: 'research-development',
      name: 'Research & Development Services',
      slug: 'research-development',
      description: 'Custom formulation development and pharmaceutical research support.',
      icon: '🔬',
      image: '/assets/images/icons/research & development .png',
      shortDescription: 'In-house R&D for product formulation and optimization.',
      longDescription: 'Leverage our experienced pharmaceutical scientists for custom formulation development, stability testing, process optimization, and regulatory compliance support.',
      benefits: [
        'Expert formulation chemists',
        'Stability testing facilities',
        'Process optimization',
        'Regulatory guidance',
        'Confidential partnerships'
      ],
      targetClients: 'Brands seeking custom products, companies needing formulation improvements, research institutions'
    },
    
  ],

  // Products
  products: [
    {
      id: 1,
      name: 'Vitamin D3 1000IU Tablets',
      category: 'supplements',
      dosageForm: 'Tablet',
      image: '/assets/images/products/vitamin-d3.jpg',
      description: 'High-potency vitamin D3 supplement for bone health and immunity.'
    },
    {
      id: 2,
      name: 'Herbal Immunity Booster',
      category: 'herbal',
      dosageForm: 'Capsule',
      image: '/assets/images/products/immunity.jpg',
      description: 'Natural herbal blend to support immune system function.'
    },
    {
      id: 3,
      name: 'Cough & Cold Syrup',
      category: 'syrups',
      dosageForm: 'Syrup',
      image: '/assets/images/products/cough-syrup.jpg',
      description: 'Effective cough suppressant and cold relief syrup.'
    },
    {
      id: 4,
      name: 'Digestive Health Powder',
      category: 'powders',
      dosageForm: 'Powder',
      image: '/assets/images/products/digestive.jpg',
      description: 'Pre-biotic powder for healthy digestion and gut flora.'
    },
    {
      id: 5,
      name: 'Joint Care Capsules',
      category: 'nutraceuticals',
      dosageForm: 'Capsule',
      image: '/assets/images/products/joints.jpg',
      description: 'Natural supplement for joint pain and mobility.'
    },
    {
      id: 6,
      name: 'Multivitamin Tablets',
      category: 'supplements',
      dosageForm: 'Tablet',
      image: '/assets/images/products/multivitamin.jpg',
      description: 'Complete daily multivitamin with essential nutrients.'
    }
  ],

  // Product Categories / Dosage Forms
  dosageForms: [
    {
      name: 'Tablets & Capsules',
      icon: '💊',
      slug: 'tablets-capsules',
      description: 'Solid pharmaceutical forms manufactured with precision and consistency.'
    },
    {
      name: 'Syrups & Suspensions',
      icon: '🍶',
      slug: 'syrups-suspensions',
      description: 'Liquid pharmaceutical formulations for easy administration.'
    },
    {
      name: 'Sachets & Powders',
      icon: '🧂',
      slug: 'sachets-powders',
      description: 'Convenient powdered formulations in individual sachets.'
    },
    {
      name: 'Herbal & Nutraceuticals',
      icon: '🌿',
      slug: 'herbal-nutraceuticals',
      description: 'Natural and herbal products for health and wellness.'
    },
    {
      name: 'OTC Supplements',
      icon: '🏪',
      slug: 'otc-supplements',
      description: 'Over-the-counter health supplements and vitamins.'
    }
  ],

  // Why Choose Adept Pharma (USPs)
  whyChooseUs: [
    {
      title: 'Pharmaceutical-Grade Quality',
      description: 'GMP, DRAP, and ISO-aligned processes ensure every product meets international standards.',
      icon: '🔬'
    },
    {
      title: 'In-House R&D Capability',
      description: 'Expert formulation chemists develop custom products from concept to market.',
      icon: '🧪'
    },
    {
      title: 'Halal & Ethical Manufacturing',
      description: 'Shariah-compliant raw materials and processes, certified by recognized bodies.',
      icon: '🌿'
    },
    {
      title: 'Premium Packaging Solutions',
      description: 'Market-ready, compliant, and brand-aligned packaging designs.',
      icon: '📦'
    },
    {
      title: 'Full Regulatory Compliance',
      description: 'Complete batch documentation, traceability, and regulatory support for all markets.',
      icon: '📋'
    },
    {
      title: 'Export-Ready Production',
      description: 'Supporting brands for international markets with full compliance.',
      icon: '🌍'
    }
  ],

  // Certifications
  certifications: [
    {
      name: 'DRAP Registration',
      icon: '🏅',
      body: 'Drug Regulatory Authority of Pakistan',
      year: 2015,
      description: 'Full registration with DRAP ensuring compliance with Pakistani pharmaceutical regulations.'
    },
    {
      name: 'GMP Certification',
      icon: '✅',
      body: 'Good Manufacturing Practice',
      year: 2014,
      description: 'ISO 9001:2015 and GMP standards for pharmaceutical manufacturing processes.'
    },
    {
      name: 'Halal Certification',
      icon: '🌿',
      body: 'Halal Standards Authority',
      year: 2016,
      description: 'Certified halal manufacturing processes and raw materials.'
    },
    {
      name: 'ISO 22000:2018',
      icon: '📋',
      body: 'Food Safety Management',
      year: 2018,
      description: 'HACCP and food safety standards for nutraceutical and herbal products.'
    },
    {
      name: 'HACCP Compliant',
      icon: '🔬',
      body: 'Hazard Analysis & Critical Control Points',
      year: 2017,
      description: 'Full HACCP implementation for contamination prevention and quality assurance.'
    }
  ],

  // FAQ (by page)
  faq: {
    services: [
      {
        question: 'What is the difference between Toll and Contract Manufacturing?',
        answer: 'In toll manufacturing, you provide the formulation and raw materials, and we handle production. In contract manufacturing, we handle everything including formulation development.'
      },
      {
        question: 'Do you provide regulatory compliance documentation?',
        answer: 'Yes, we provide complete regulatory documentation including batch records, stability data, and compliance documentation for DRAP and international markets.'
      },
      {
        question: 'What is the minimum order quantity?',
        answer: 'Minimum order quantities depend on the specific product and service. Contact our team for details on your specific project.'
      },
      {
        question: 'How long does the manufacturing process take?',
        answer: 'Timeline varies based on product complexity, from 30 days for standard products to 60-90 days for custom formulations with R&D.'
      },
      {
        question: 'Do you sign NDAs for confidential formulations?',
        answer: 'Absolutely. We sign comprehensive NDAs to protect your formulations and intellectual property.'
      }
    ],
    products: [
      {
        question: 'Are all products available for private label manufacturing?',
        answer: 'Yes, any of our products can be manufactured under your brand name with custom packaging.'
      },
      {
        question: 'What payment terms do you offer?',
        answer: 'We offer flexible payment terms including advance payment, partial payment, and credit for established partners.'
      },
      {
        question: 'Do you offer samples?',
        answer: 'Yes, we provide product samples for evaluation before placing bulk orders.'
      }
    ],
    careers: [
      {
        question: 'What positions are currently available?',
        answer: 'Visit our Careers page to see current openings in Manufacturing, Quality Control, Sales, R&D, and Administrative roles.'
      },
      {
        question: 'What are the benefits of working at Adept Pharma?',
        answer: 'We offer competitive salaries, professional development, health insurance, and a supportive work environment in a growing pharmaceutical company.'
      }
    ]
  },

  // Team (Leadership)
  team: [
    {
      name: 'CEO Name',
      title: 'Chief Executive Officer',
      image: '/assets/images/team/ceo.jpg',
      bio: 'Visionary leader with 20+ years in pharmaceutical manufacturing.'
    },
    {
      name: 'Head of Operations',
      title: 'Director of Manufacturing',
      image: '/assets/images/team/operations.jpg',
      bio: 'Expert in GMP processes and quality assurance.'
    },
    {
      name: 'Head of R&D',
      title: 'Chief Formulation Scientist',
      image: '/assets/images/team/rd.jpg',
      bio: 'Pharmaceutical chemistry specialist with international experience.'
    }
  ],

  // Testimonials
  testimonials: [
    {
      quote: 'Adept Pharma delivered our product on time with exceptional quality. Their team is professional and responsive.',
      client: 'Ahmed Khan',
      company: 'Khan Healthcare Distributors',
      rating: 5
    },
    {
      quote: 'The quality control and documentation they provide give us complete confidence in our products.',
      client: 'Fatima Ali',
      company: 'Herbal Wellness Brands',
      rating: 5
    },
    {
      quote: 'Outstanding R&D support. They helped us refine our formulation to market perfection.',
      client: 'Dr. Hassan Malik',
      company: 'Malik Pharmaceuticals',
      rating: 5
    }
  ],

  // Company Timeline / Milestones
  timeline: [
    {
      year: 2010,
      title: 'Company Founded',
      description: 'Adept Pharma established with vision to become Pakistan\'s leading manufacturer.'
    },
    {
      year: 2014,
      title: 'GMP Certification Achieved',
      description: 'Obtained GMP certification demonstrating commitment to quality standards.'
    },
    {
      year: 2015,
      title: 'DRAP Registration',
      description: 'Full registration with Drug Regulatory Authority of Pakistan.'
    },
    {
      year: 2016,
      title: 'Halal Certification',
      description: 'Achieved Halal certification for ethical manufacturing practices.'
    },
    {
      year: 2018,
      title: 'Facility Expansion',
      description: 'Expanded manufacturing capacity to meet growing market demand.'
    },
    {
      year: 2020,
      title: 'Export Market Entry',
      description: 'Began exporting pharmaceutical products to international markets.'
    },
    {
      year: 2024,
      title: 'Innovation Center Launched',
      description: 'Opened dedicated R&D innovation center for custom formulation development.'
    }
  ],

  // Job Openings
  jobs: [
    {
      id: 1,
      title: 'Production Manager',
      department: 'Manufacturing',
      location: 'Karachi',
      type: 'Full-time',
      description: 'Manage manufacturing operations, quality control, and team leadership.',
      requirements: ['5+ years manufacturing experience', 'GMP knowledge', 'Team leadership']
    },
    {
      id: 2,
      title: 'Quality Control Analyst',
      department: 'QC',
      location: 'Karachi',
      type: 'Full-time',
      description: 'Perform quality testing, documentation, and regulatory compliance checks.',
      requirements: ['Pharmacy or Chemistry degree', 'Lab experience', 'Attention to detail']
    },
    {
      id: 3,
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Karachi',
      type: 'Full-time',
      description: 'Develop client relationships and manage pharmaceutical product sales.',
      requirements: ['Pharmaceutical sales experience', 'Communication skills', 'Market knowledge']
    }
  ],

  // SEO Keywords (for pages)
  seoKeywords: {
    home: ['pharmaceutical manufacturer Pakistan', 'nutraceutical manufacturing', 'toll manufacturing', 'DRAP registered'],
    about: ['about Adept Pharma', 'pharmaceutical company Pakistan', 'company history', 'manufacturing facility'],
    services: ['toll manufacturing', 'contract manufacturing', 'private label pharmaceutical', 'pharmaceutical franchise'],
    products: ['pharmaceutical products', 'nutraceutical supplements', 'herbal products Pakistan', 'OTC medicines'],
    contact: ['contact Adept Pharma', 'pharmaceutical inquiry', 'manufacturing quote', 'Karachi pharma']
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SiteData;
}
