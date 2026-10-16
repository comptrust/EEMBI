import { LeaderProfile, ProgramInitiative, NewsArticle } from '../types.ts';

export const FOUNDER_LETTER = {
  title: "A Letter from the Founder",
  subtitle: "Our Sacred Founding Purpose & Guiding Light",
  openingQuote: "The work ahead is great—but so is the vision.",
  date: "Founding Declaration",
  content: [
    "Emmanuel Ebot Mbi was more than just a name—he was a man of heart, vision, and action. As a son, brother, father, and friend, he lived a life defined by compassion and commitment to others.",
    "He founded this organization with a clear mission: to provide support for orphans, widows, Internally Displaced Persons (IDPs), the needy, and disadvantaged individuals—both directly and in partnership with charitable and faith-based institutions such as churches and mosques.",
    "This journey began with a simple yet powerful belief: that community, compassion, and purpose could unite to create lasting impact. The organization was born out of love—for our people, for progress, and for the shared promise of a better future.",
    "In honoring our late Chairman Emeritus, the Board has unanimously resolved to carry forward the work he began with such passion. His vision remains our guiding light, and his legacy will shape every step we take as we move into this new chapter."
  ],
  signoff: "The Board of Directors, Emmanuel Ebot Mbi Foundation",
  motto: "The work ahead is great—but so is the vision."
};

export const FOUNDER_BIO = {
  name: "Emmanuel Ebot Mbi",
  lifespan: "1953 – 2024",
  title: "Founder & Chairman Emeritus",
  subtitle: "Former First Vice President & COO of the African Development Bank · 33-Year World Bank Senior Director · Citizen of the World",
  quote: "The work ahead is great—but so is the vision.",
  intro: "The Emmanuel Ebot Mbi Foundation is named after our founder: a man who spent his entire career in the International Development space not just as a career choice, but as a natural continuation of his desire to help people.",
  earlyLife: "His father passed away when he was six years old. Molded by and benefitting from family (older brothers and sisters) solidarity and a strong-willed but overly generous and kind-hearted mother, Emmanuel E. Mbi was raised in the town of Mamfe, South West Region of Cameroon where he attended missionary elementary school thereafter proceeding to missionary secondary school in the town of Kumba. After a stint working for the Government (Public Works Department) based in the town of Victoria (now Limbe), he went on to the United States of America for his university education which he graduated at all levels with several distinctions.",
  internationalCareer: "Following his studies, he had a long career in International Development, which allowed him to mingle in a diverse environment. Prior to joining the African Development Bank (AfDB) as First Vice President and Chief Operating Officer (FVP/COO) in July 2012, Emmanuel E. Mbi worked for over 33 years at The World Bank where he held several positions, the last being Director of Strategy and Operations, covering the Middle East and North Africa Region (MENA), a role he combined with that of Director of Core Operational Services. Prior to these, he had held the positions of Regional (Country) Director for Egypt, Yemen and Djibouti, Regional (Country) Director the Great Lakes and South/Central Africa (Burundi, Congo, DRC, Rwanda and Multi-country Demobilization and Reintegration Program—MDRP), Resident Representative in Togo and Benin, several years as Senior/Principal Operations Officer in the Latin America and Caribbean and Africa Regions. He also worked in the South Asia Region early in his career.",
  accolades: [
    {
      year: "2012",
      award: "World Bank Diversity and Inclusion Lifetime Leadership Achievement Award",
      by: "World Bank Group"
    },
    {
      year: "2007",
      award: "Good Manager Award",
      by: "World Bank Group Staff Association"
    },
    {
      year: "2002",
      award: "Africa Region Mentor Recognition Award",
      by: "World Bank Africa Vice Presidency"
    }
  ],
  legacy: "Nicknamed by friends in Latin America 'Citizen of the World', in addition to English, he was fluent in the French, Spanish, Portuguese and Pidgin English languages. Following a long prosperous career and propelled by his faith, he wanted to continue to impact lives one individual at a time which led to the creation of this foundation."
};

// Exactly 4 Board Members (Sylvion's role updated to COO as instructed)
export const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    id: "bonaventure-mbida-essama",
    name: "Bonaventure Mbida-Essama",
    role: "Chairman",
    affiliation: "Chief Executive Officer, The Nelson Mandela Institution",
    degrees: "B.S. Electrical Engineering (Princeton University) · MBA (Harvard Business School)",
    expertise: ["Global Development Governance", "Institutional Finance", "Strategic Advisory"],
    quote: "Our sacred duty is to carry forward the visionary ethos Emmanuel etched into this foundation with absolute fidelity, transparency, and love.",
    bio: [
      "Mr. Bonaventure Mbida-Essama is a retired senior World Bank Group official who currently serves as Chief Executive Officer of The Nelson Mandela Institution. He brings decades of executive leadership spanning international multilateral banking, corporate management, and academic philanthropy.",
      "From 1972 to 1979, he worked as Deputy Managing Director and Managing Director of three different private sector companies in Cameroon, his home country. He subsequently joined The World Bank at its Washington DC Headquarters as Financial Analyst and later became Senior Advisor to an Executive Director at the Board.",
      "He later transitioned to the International Finance Corporation (IFC) as Senior Investment Officer. In 1988, he founded and managed consulting firm MADIMBA LLC in Douala, Cameroon, concurrently managing a fertilizer enterprise he established.",
      "Returning to The World Bank in 1999 as Country Manager in Cambodia, he later served as Manager of Corporate Affairs and Administration at Washington Headquarters until his retirement. He holds a Bachelor of Science in Electrical Engineering from Princeton University and an MBA from Harvard Business School."
    ]
  },
  {
    id: "sylvion-a-mbi",
    name: "Sylvion A. Mbi",
    role: "Vice-Chair, Treasurer & Chief Operating Officer (COO)",
    affiliation: "Chief Operating Officer & Treasurer, Emmanuel Ebot Mbi Foundation",
    degrees: "B.S. Economics & Information Systems · Certified Operations & Governance Specialist",
    expertise: ["Operational Strategy", "Treasury Governance", "Family Legacy Stewardship", "Field Mission Logistics"],
    quote: "My father believed that when you educate a child from a struggling village, you liberate generations. As COO and Treasurer, my mandate is ensuring that every pledge directly reaches the hands that need it most.",
    bio: [
      "Serving as Vice-Chair, Treasurer, and Chief Operating Officer (COO), Mr. Sylvion A. Mbi directs operational strategy, treasury management, and institutional governance for the Emmanuel Ebot Mbi Foundation.",
      "He oversees day-to-day organizational operations and financial stewardship, ensuring all funds are accounted for with pristine transparency, rigorously audited, and deployed directly to verified field initiatives across Cameroon and Côte d'Ivoire.",
      "Working closely with Chairman Bonaventure Mbida-Essama and field teams, he spearheads the foundation's Five-Year Strategic Development Plan, scaling our scholarship programs, widow micro-enterprises, and orphan welfare hubs."
    ]
  },
  {
    id: "godson-nembo-tangumonken",
    name: "Godson Nembo Tangumonken",
    role: "Board Member",
    affiliation: "Civil Society Logistics & Field Verification Director",
    degrees: "B.A. Public Administration (University of Buea) · Dip. Humanitarian Logistics",
    expertise: ["Field Logistics", "IDP Relief Verification", "Cameroon Operations"],
    quote: "Every bag of grain, every box of textbooks, and every tuition receipt is physically verified in the hands of the child it was meant for.",
    bio: [
      "Mr. Godson Nembo Tangumonken serves as an active Board Member, providing crucial operational leadership for on-the-ground interventions in Cameroon.",
      "His deep ties with municipal leadership, missionary networks, and displaced community elders enable the foundation to deliver relief safely and efficiently even in challenging humanitarian contexts across the South-West and Littoral regions."
    ]
  },
  {
    id: "fanny-durand-kouassi",
    name: "Mrs. Fanny Durand-Kouassi",
    role: "Board Member",
    affiliation: "Senior Policy Advisor, Regional Socio-Economic Partnerships",
    degrees: "M.A. International Relations (Paris-Sorbonne) · Postgraduate Dipl. Development Economics",
    expertise: ["West Africa Programs", "Côte d'Ivoire Field Outreach", "Educational Access"],
    quote: "Education is not merely an intervention; it is the fundamental restoration of human dignity.",
    bio: [
      "Mrs. Fanny Durand-Kouassi is an active Board Member coordinating strategic initiatives in Côte d'Ivoire and broader West Africa.",
      "With over twenty-five years in regional socio-economic development, she stewards partnerships with community organizations, vocational institutes, and women's cooperatives, ensuring scholarships and emergency support reach families in Abidjan and rural communities with zero administrative leakage."
    ]
  }
];

// Official New Content for Website / Newsletter (Per Checklist Item 4)
export const OFFICIAL_NEWS_ARTICLE: NewsArticle = {
  id: "cameroon-impact-2025-update",
  slug: "recent-impact-emmanuel-ebot-mbi-foundation-cameroon",
  title: "Recent Impact of the Emmanuel Ebot Mbi Foundation in Cameroon – 2025/2026 Update",
  subtitle: "Firsthand field report on scholarships, orphan welfare, widow enterprise support, and the Acacia Orphanage initiative under our pilot program and five-year strategy.",
  date: "October 2025",
  author: "Executive Secretariat & Field Operations Desk",
  readTime: "5 min read",
  category: "Field Mission Report",
  summary: "A comprehensive update on the foundation's verified pilot interventions across Cameroon, providing 11 CJMS student scholarships, aid for 9 orphans via Christian Restoration Network, micro-business capitalization for widows, and critical assistance to Acacia Orphanage.",
  keyStats: [
    { value: "11", label: "CJMS Scholarships Awarded" },
    { value: "9", label: "Orphans Supported via CRN" },
    { value: "100%", label: "Direct Field Pilot Execution" },
    { value: "5-Year", label: "Strategic Plan Framework" }
  ],
  content: [
    {
      heading: "Executing the Founder's Sacred Vision on the Ground",
      paragraphs: [
        "In honoring the sacred legacy of our late Founder and Chairman Emeritus, Emmanuel Ebot Mbi (1953–2024), the Emmanuel Ebot Mbi Foundation has successfully concluded the initial phase of its pilot humanitarian mission in Cameroon.",
        "Guided by the Board of Directors under Chairman Bonaventure Mbida-Essama and Chief Operating Officer (COO) Sylvion A. Mbi, these targeted interventions directly validate the foundation’s operational methodology: delivering transparent, high-impact relief directly to individuals and through vetted local community institutions."
      ]
    },
    {
      heading: "1. Scholarships Awarded to 11 CJMS Students",
      paragraphs: [
        "Education was Emmanuel Ebot Mbi's foundational passion. As part of our flagship educational relief pillar, the foundation has awarded comprehensive academic scholarships to 11 deserving students attending Christ the Junior Missionary Seminary (CJMS).",
        "These scholarships completely eliminate financial barriers for the recipients—covering full annual tuition fees, required textbooks, official examination registries, and school uniforms. For these young students, this scholarship ensures that poverty does not interrupt their intellectual journey or diminish their promise."
      ],
      callout: "“Giving young people the gift of education enables them to be seen at their true human value, while providing the lifelong tools needed to lift their families out of hardship.”"
    },
    {
      heading: "2. Sustaining 9 Orphans via the Christian Restoration Network",
      paragraphs: [
        "In partnership with the Christian Restoration Network (CRN), the foundation has established a dedicated lifeline for 9 vulnerable orphans.",
        "The support package encompasses regular nutritional stipends, clothing, educational supplies, and healthcare coverage. By working in conjunction with an established faith-based community network, the foundation ensures regular verification and personalized mentorship for each child."
      ]
    },
    {
      heading: "3. Direct Economic Empowerment for Widows",
      paragraphs: [
        "Widows in conflict-affected regions carry the enormous burden of sole parenthood under severe economic hardship. The foundation has provided catalytic seed grants and micro-business capital to local widows.",
        "These non-refundable micro-grants allow widows to establish and expand sustainable local ventures—including agricultural produce stalls, small grocery trade, and textile handicrafts—enabling them to generate recurring income, feed their children, and restore financial independence."
      ]
    },
    {
      heading: "4. Comprehensive Assistance to Acacia Orphanage",
      paragraphs: [
        "The foundation dispatched an emergency humanitarian mission to the Acacia Orphanage, providing essential supplies to dramatically improve living conditions for the resident children.",
        "Deliveries included staple foodstuffs (sacks of rice, grains, cooking oil, proteins), clean bedding, essential hygiene and sanitary products, and basic medical first-aid reserves. Field volunteers also spent time mentoring and engaging with the children in supportive learning activities."
      ]
    },
    {
      heading: "5. Holiday Support & Festive Community Outreach",
      paragraphs: [
        "As part of our commitment to human warmth and community solidarity, the foundation launched a holiday support initiative. Food hampers, clothing items, and celebration gifts were distributed to internally displaced families and low-income households.",
        "This festive outreach brought immense dignity, joy, and comfort to families who have endured severe hardship, reminding them that they are remembered, cherished, and supported."
      ]
    },
    {
      heading: "Part of the Pilot Program & Five-Year Strategy Development",
      paragraphs: [
        "This successful deployment marks an essential milestone in the Emmanuel Ebot Mbi Foundation's initial Pilot Program. Every dollar disbursed, every textbook delivered, and every grant issued is subjected to rigorous audit and photo-documented verification.",
        "The operational insights gathered from this mission are now being formalized into our broader Five-Year Strategic Development Plan. Under this upcoming strategy, the foundation will expand its reach across Cameroon and into Côte d'Ivoire, establishing permanent endowment scholarships, expanded IDP shelters, and structured vocational academies."
      ]
    }
  ],
  galleryPhotos: [
    {
      id: "mission-students",
      caption: "Smiling students in school uniform participating in the CJMS scholastic scholarship program in Cameroon.",
      location: "Mamfe / Kumba, Cameroon",
      category: "Education & Scholarships",
      aspectRatio: "16:9"
    },
    {
      id: "mission-abacus",
      caption: "Young student engaged in early childhood numeracy and cognitive learning with a counting frame.",
      location: "Acacia Orphanage, Cameroon",
      category: "Acacia Orphanage Assistance",
      aspectRatio: "4:3"
    },
    {
      id: "mission-care",
      caption: "Compassionate medical assistance, mobility equipment, and healthcare consultations for vulnerable children.",
      location: "Cameroon Field Clinic",
      category: "Humanitarian Care",
      aspectRatio: "3:4"
    },
    {
      id: "mission-globe",
      caption: "Young African student exploring world geography on the globe, embodying the founder’s 'Citizen of the World' legacy.",
      location: "Community Learning Center",
      category: "Scholastic Inspiration",
      aspectRatio: "4:3"
    }
  ]
};

export const PROGRAM_INITIATIVES: ProgramInitiative[] = [
  {
    id: "scholarships",
    title: "The Emmanuel Ebot Mbi Education & Scholarship Fund",
    category: "Education & Scholastic Uplift",
    subtitle: "Eliminating economic barriers for deserving primary, secondary, and CJMS students",
    description: "Education is at the heart of our mission. We believe equipping young minds with knowledge is the single most sustainable exit from generational poverty. Through full tuition coverage, uniform provisioning, textbooks, and mentoring, we ensure each student is recognized and supported to reach their full human potential.",
    location: "Mamfe, Kumba, Limbe, Douala (Cameroon) & Abidjan (Côte d'Ivoire)",
    impactMetrics: [
      { label: "Students Supported Annually", value: "1,200+" },
      { label: "Secondary Graduation Rate", value: "94.8%" },
      { label: "Partner Schools Enrolled", value: "38" }
    ],
    keyHighlights: [
      "11 full scholarships awarded to Christ the Junior Missionary Seminary (CJMS) students",
      "Textbook, notebook, school uniform, and educational stationery distribution at semester starts",
      "STEM & vocational apprenticeship stipends for adolescent youths transitioning into trades"
    ]
  },
  {
    id: "idp-relief",
    title: "IDP, Widow & Displaced Persons Humanitarian Care",
    category: "Emergency Relief & Dignity",
    subtitle: "Immediate nutritional, shelter, and medical lifeline for families uprooted by crisis",
    description: "In response to regional instability in South-West Cameroon, thousands of families, widows, and unaccompanied children have been displaced from their ancestral homes. The foundation delivers direct dignity kits, dry ration supplies, clean water filtration, and emergency rental subsidies.",
    location: "South-West Region, Littoral Region (Cameroon)",
    impactMetrics: [
      { label: "Displaced Families Reached", value: "2,450+" },
      { label: "Dignity Kits Distributed", value: "6,000+" },
      { label: "Direct Field Missions", value: "18 / yr" }
    ],
    keyHighlights: [
      "Support to 9 orphans in partnership with Christian Restoration Network (CRN)",
      "Direct seed grants and working capital to widows for market micro-businesses",
      "Comprehensive food and bedding relief supplies to Acacia Orphanage"
    ]
  },
  {
    id: "faith-partnerships",
    title: "Grassroots Faith & Community Network Delivery",
    category: "Community Alliances",
    subtitle: "Partnering with audited local churches, mosques, and parish councils for 100% transparent distribution",
    description: "To prevent corruption and bureaucratic overhead, our aid is delivered directly through established, respected grassroots faith institutions—churches and mosques—who live among the people every single day and possess exact records of the most vulnerable families.",
    location: "Urban & Rural Parish Communities",
    impactMetrics: [
      { label: "Verified Faith Partners", value: "45+" },
      { label: "Administrative Overhead", value: "< 4%" },
      { label: "Zero-Leakage Field Audits", value: "100%" }
    ],
    keyHighlights: [
      "Direct verification of needy orphans and widows by local parish and community elders",
      "Open public aid distribution ceremonies with photographic accounting and transparent registries",
      "Holiday support initiative providing food hampers and gifts to vulnerable children"
    ]
  },
  {
    id: "cote-divoire",
    title: "Côte d'Ivoire Youth Apprenticeship & Learning Centers",
    category: "Vocational & Economic Independence",
    subtitle: "Equipping young adults with marketable skills in computing, artisanry, and agriculture",
    description: "Based on our founder's profound historical and professional ties to Côte d'Ivoire, we support community learning labs in Abidjan and surrounding communities, training vulnerable young people in digital literacy, textile fabrication, and sustainable agri-business.",
    location: "Abidjan, Yamoussoukro (Côte d'Ivoire)",
    impactMetrics: [
      { label: "Vocational Graduates", value: "480+" },
      { label: "Employed or Self-Sufficient", value: "82%" },
      { label: "Micro-Toolkits Awarded", value: "320" }
    ],
    keyHighlights: [
      "Hands-on vocational apprenticeships paired with seasoned master tradespeople and mentors",
      "Micro-grant graduation kits containing tools, sewing machines, or digital hardware",
      "Integrated into the foundation's Five-Year Strategic Expansion Framework"
    ]
  }
];

export const TIMELINE_MILESTONES = [
  {
    year: "1953",
    title: "Roots in Mamfe, Cameroon",
    description: "Born in Mamfe, South West Cameroon. After losing his father at age six, he was raised by a resilient mother and elder siblings whose generosity ignited his lifelong devotion to uplifting others."
  },
  {
    year: "1960s–70s",
    title: "Missionary Education & Distinctions",
    description: "Educated at missionary primary and secondary schools in Kumba. Served in the Public Works Department in Victoria (Limbe), before traveling to the USA for university, graduating at all levels with several academic distinctions."
  },
  {
    year: "1980–2012",
    title: "33-Year Distinguish Career at The World Bank",
    description: "Served as Director of Strategy and Operations (MENA), Director of Core Operational Services, Regional Director for Egypt, Yemen and Djibouti, and Regional Director for the Great Lakes and Central Africa (Burundi, Congo, DRC, Rwanda and MDRP). Recipient of the World Bank Diversity and Inclusion Lifetime Leadership Achievement Award in 2012."
  },
  {
    year: "2012–2016",
    title: "AfDB First Vice President & COO",
    description: "Appointed First Vice President and Chief Operating Officer (FVP/COO) of the African Development Bank in July 2012, stewarding continental operations, infrastructure, and regional economic stability."
  },
  {
    year: "2018–Present",
    title: "Creation of the Foundation",
    description: "Propelled by faith and his desire to continue impacting lives one individual at a time, he established the foundation to uplift orphans, widows, IDPs, and vulnerable youth across Cameroon and Côte d'Ivoire."
  }
];
