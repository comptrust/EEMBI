import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr';

export interface Translations {
  nav: {
    home: string;
    founder: string;
    leadership: string;
    news: string;
    programs: string;
    contact: string;
    donate: string;
    address: string;
    taxExempt: string;
  };
  hero: {
    headline: string;
    prosper: string;
    subtitle: string;
    donateBtn: string;
    founderBtn: string;
    impactBtn: string;
    badge1: string;
    badge2: string;
    badge3: string;
  };
  founderCard: {
    role: string;
    datesAndPlace: string;
    quote: string;
    afdb: string;
    worldBank: string;
    citizen: string;
    archiveTitle: string;
    archiveSub: string;
    archiveBio: string;
  };
  metrics: {
    legacyVal: string;
    legacyLabel: string;
    wbVal: string;
    wbLabel: string;
    scholVal: string;
    scholLabel: string;
    fundVal: string;
    fundLabel: string;
  };
  about: {
    tag: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    p1: string;
    p2: string;
    founderBadge: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    learnMore: string;
  };
  mission: {
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    studentsCount: string;
    studentsLabel: string;
    supervision: string;
    viewBtn: string;
  };
  newsletter: {
    tag: string;
    title: string;
    subtitle: string;
    placeholder: string;
    btn: string;
    success: string;
  };
  footer: {
    tagline: string;
    registered: string;
    quickLinks: string;
    initiatives: string;
    governance: string;
    chairName: string;
    cooName: string;
    rights: string;
  };
  pages: {
    founderTitle: string;
    founderInHonor: string;
    leadershipTitle: string;
    leadershipSubtitle: string;
    programsTitle: string;
    programsSubtitle: string;
    newsTitle: string;
    newsSubtitle: string;
    contactTitle: string;
    contactSubtitle: string;
    donationTitle: string;
    donationSubtitle: string;
  };
}

export const translationsMap: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      founder: 'Our Founder',
      leadership: 'Our People',
      news: 'Cameroon 2025 Update',
      programs: 'Programs',
      contact: 'Contact Us',
      donate: 'Donate Now',
      address: '5000 Thayer Center, Suite C, Oakland, MD 21550 USA',
      taxExempt: '501(c)(3) Charitable Foundation',
    },
    hero: {
      headline: 'A Generous Person Will ',
      prosper: 'Prosper;',
      subtitle:
        "Impacting lives, changing futures one individual at a time. Through academic scholarships, direct support to widows and orphans, and grassroots community alliances in Cameroon and Côte d'Ivoire.",
      donateBtn: 'Donate Now',
      founderBtn: 'About Our Founder',
      impactBtn: 'Cameroon 2025 Impact Update',
      badge1: '11 CJMS Scholarships Awarded',
      badge2: 'Acacia Orphanage Relief Delivered',
      badge3: '501(c)(3) Tax-Deductible',
    },
    founderCard: {
      role: 'Founder & Chairman Emeritus',
      datesAndPlace: '1953 – 2024 · Mamfe, Cameroon',
      quote: '"The work ahead is great—but so is the vision."',
      afdb: 'AfDB VP / COO',
      worldBank: 'World Bank 33+ Yrs',
      citizen: 'Citizen of the World',
      archiveTitle: 'Official Photograph Archive',
      archiveSub: 'Founder & Chairman Emeritus · Citizen of the World',
      archiveBio:
        '"A man who spent his entire career in the International Development space not just as a career choice, but as a natural continuation of his desire to help people."',
    },
    metrics: {
      legacyVal: '1953 – 2024',
      legacyLabel: "Founder Emmanuel Ebot Mbi's Lifelong Legacy",
      wbVal: '33+ Years',
      wbLabel: 'World Bank & AfDB Senior Leadership',
      scholVal: '11 CJMS',
      scholLabel: 'Academic Scholarships Awarded in Cameroon',
      fundVal: '100% Direct',
      fundLabel: 'Grassroots Community Aid Delivery Model',
    },
    about: {
      tag: '🌿 Welcome To Emmanuel Ebot Mbi Foundation',
      titleStart: 'We Are Committed To ',
      titleHighlight: 'Impacting Lives',
      titleEnd: ' Changing Futures One Individual At A Time',
      p1: 'Named in loving memory of Emmanuel Ebot Mbi, who dedicated over 33 years across the World Bank and the African Development Bank, the foundation continues his lifelong devotion to uplifting humanity.',
      p2: 'From granting secondary school scholarships to children in Cameroon to delivering emergency food and infant care supplies to Acacia Orphanage in Yaoundé, our mission is transparent, direct, and rooted in community trust.',
      founderBadge: 'Founder & Chairman Emeritus',
      pillar1Title: 'Academic Scholarships',
      pillar1Desc: 'Full tuition, textbooks, uniforms, and mentoring for promising youth across Cameroon.',
      pillar2Title: 'Orphan & Widow Relief',
      pillar2Desc: 'Nutritional aid, medical checkups, and dignity packages delivered directly to families.',
      pillar3Title: 'Grassroots Alliances',
      pillar3Desc: 'Direct partnerships with faith-based organizations and local councils without administrative bloat.',
      learnMore: 'Discover Our Full Impact',
    },
    mission: {
      badge: 'Field Mission · Cameroon January 2025',
      title: 'Delivering Real Hope on the Ground',
      subtitle: 'Official Report by Board Leadership in Cameroon',
      desc: 'In January 2025, Board Chair Bonaventure Mbida-Essama and COO Sylvion A. Mbi traveled across Cameroon to personally oversee scholarship disbursements at CJMS and relief distribution at Acacia Orphanage.',
      studentsCount: '11 Students',
      studentsLabel: 'CJMS Academic Scholarships in Cameroon',
      supervision: 'Supervised by Board Chair Bonaventure Mbida-Essama & COO Sylvion A. Mbi',
      viewBtn: 'Read Full Update & View Cameroon Photos',
    },
    newsletter: {
      tag: 'Verified Foundation Newsletter',
      title: 'Subscribe To Our Field Dispatch',
      subtitle: 'Receive quarterly updates, audited field reports, and student stories directly to your inbox.',
      placeholder: 'Enter your email address...',
      btn: 'Subscribe',
      success: 'Thank you for subscribing! Your address is registered.',
    },
    footer: {
      tagline: 'Impacting lives, changing futures one individual at a time.',
      registered: 'Registered 501(c)(3) Public Charity in the United States of America.',
      quickLinks: 'Navigation',
      initiatives: 'Initiatives',
      governance: 'Leadership & Board',
      chairName: 'Bonaventure Mbida-Essama, Chair',
      cooName: 'Sylvion A. Mbi, COO & Treasurer',
      rights: 'All rights reserved. Dedicated to the perpetual memory of Emmanuel Ebot Mbi (1953 – 2024).',
    },
    pages: {
      founderTitle: 'About Our Founder',
      founderInHonor: 'In Perpetual Honor & Memory · 1953 – 2024',
      leadershipTitle: 'Our Leadership & Board of Directors',
      leadershipSubtitle: 'Guiding the foundation with transparency, fiduciary rigor, and unwavering fidelity to Emmanuel Ebot Mbi’s vision.',
      programsTitle: 'Our Core Programs & Initiatives',
      programsSubtitle: 'Targeted humanitarian aid and academic opportunity reaching those who need it most.',
      newsTitle: 'Cameroon Mission Update — January 2025',
      newsSubtitle: 'Firsthand account of scholarship distributions, school supplies, and orphanage support.',
      contactTitle: 'Contact the Foundation',
      contactSubtitle: 'Reach out to our leadership team in the United States and Cameroon.',
      donationTitle: 'Support Our Mission',
      donationSubtitle: '100% of your tax-deductible contribution directly funds scholarships and community care.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      founder: 'Notre Fondateur',
      leadership: 'Notre Équipe',
      news: 'Cameroun 2025',
      programs: 'Programmes',
      contact: 'Contact',
      donate: 'Faire un Don',
      address: '5000 Thayer Center, Suite C, Oakland, MD 21550 USA',
      taxExempt: 'Fondation Caritative Reconnue 501(c)(3)',
    },
    hero: {
      headline: "L'Âme Généreuse Sera ",
      prosper: 'Comblée;',
      subtitle:
        "Impacter des vies, transformer des avenirs, une personne à la fois. Par des bourses scolaires, un soutien direct aux veuves et orphelins, et des alliances communautaires au Cameroun et en Côte d'Ivoire.",
      donateBtn: 'Faire un Don',
      founderBtn: 'Notre Fondateur',
      impactBtn: 'Rapport d’Impact Cameroun 2025',
      badge1: '11 Bourses d’Études CJMS Décernées',
      badge2: 'Aide Directe à l’Orphelinat Acacia',
      badge3: 'Dons Déductibles d’Impôt 501(c)(3)',
    },
    founderCard: {
      role: 'Fondateur et Président Émérite',
      datesAndPlace: '1953 – 2024 · Mamfe, Cameroun',
      quote: '« La tâche à accomplir est immense—mais la vision l’est tout autant. »',
      afdb: 'VP / DG BAD',
      worldBank: 'Banque Mondiale 33+ Ans',
      citizen: 'Citoyen du Monde',
      archiveTitle: 'Archives Photographiques Officielles',
      archiveSub: 'Fondateur & Président Émérite · Citoyen du Monde',
      archiveBio:
        '« Un homme qui a consacré toute sa carrière au développement international, non par simple choix de carrière, mais dans le prolongement naturel de sa vocation à servir son prochain. »',
    },
    metrics: {
      legacyVal: '1953 – 2024',
      legacyLabel: 'L’Héritage Perpétuel d’Emmanuel Ebot Mbi',
      wbVal: '33+ Ans',
      wbLabel: 'Haut Leadership à la Banque Mondiale et à la BAD',
      scholVal: '11 Bourses',
      scholLabel: 'Bourses Scolaires CJMS Attribuées au Cameroun',
      fundVal: '100% Direct',
      fundLabel: 'Modèle de Déploiement Communautaire Intégral',
    },
    about: {
      tag: '🌿 Bienvenue à la Fondation Emmanuel Ebot Mbi',
      titleStart: 'Nous Sommes Déterminés à ',
      titleHighlight: 'Impacter des Vies',
      titleEnd: ' et Transformer des Destins, Une Personne à la Fois',
      p1: 'Créée à la mémoire bienveillante d’Emmanuel Ebot Mbi, qui a œuvré pendant plus de 33 ans au sein de la Banque Mondiale et de la Banque Africaine de Développement, la fondation poursuit son œuvre humanitaire dévouée.',
      p2: 'De l’octroi de bourses d’études secondaires au Cameroun à la distribution de secours d’urgence et d’équipements à l’Orphelinat Acacia de Yaoundé, notre mission est transparente, directe et enracinée dans les communautés.',
      founderBadge: 'Fondateur & Président Émérite',
      pillar1Title: 'Bourses Scolaires',
      pillar1Desc: 'Frais de scolarité complets, manuels, uniformes et mentorat pour la jeunesse méritante.',
      pillar2Title: 'Soutien aux Orphelins & Veuves',
      pillar2Desc: 'Assistance alimentaire, suivi médical et colis de dignité remis directement aux familles.',
      pillar3Title: 'Alliances Communautaires',
      pillar3Desc: 'Partenariats directs avec des organisations confessionnelles et leaders locaux sans déperdition.',
      learnMore: 'Découvrir Tout Notre Impact',
    },
    mission: {
      badge: 'Mission de Terrain · Cameroun Janvier 2025',
      title: 'Apporter un Espoir Concret sur le Terrain',
      subtitle: 'Rapport Officiel de la Délégation du Conseil au Cameroun',
      desc: 'En janvier 2025, le Président du Conseil Bonaventure Mbida-Essama et le Directeur des Opérations Sylvion A. Mbi se sont rendus sur place au Cameroun pour superviser personnellement l’attribution des bourses CJMS et les livraisons à l’Orphelinat Acacia.',
      studentsCount: '11 Élèves',
      studentsLabel: 'Bourses Académiques CJMS au Cameroun',
      supervision: 'Sous la direction du Président Bonaventure Mbida-Essama et du COO Sylvion A. Mbi',
      viewBtn: 'Lire le Rapport Complet & Voir les Photos',
    },
    newsletter: {
      tag: 'Bulletin Officiel de la Fondation',
      title: 'Abonnez-vous à Notre Courrier de Terrain',
      subtitle: 'Recevez nos rapports de mission audités, nos bilans trimestriels et les témoignages de nos boursiers.',
      placeholder: 'Entrez votre adresse email...',
      btn: 'S’inscrire',
      success: 'Merci pour votre inscription ! Votre email a été enregistré.',
    },
    footer: {
      tagline: 'Impacter des vies, transformer des avenirs, une personne à la fois.',
      registered: 'Organisation caritative 501(c)(3) légalement enregistrée aux États-Unis.',
      quickLinks: 'Navigation',
      initiatives: 'Nos Actions',
      governance: 'Conseil & Gouvernance',
      chairName: 'Bonaventure Mbida-Essama, Président',
      cooName: 'Sylvion A. Mbi, COO & Trésorier',
      rights: 'Tous droits réservés. Dédié à la mémoire perpétuelle d’Emmanuel Ebot Mbi (1953 – 2024).',
    },
    pages: {
      founderTitle: 'Notre Fondateur',
      founderInHonor: 'En Hommage Perpétuel et Mémoire · 1953 – 2024',
      leadershipTitle: 'Notre Conseil d’Administration',
      leadershipSubtitle: 'Diriger la fondation avec rigueur fiduciaire, transparence et fidélité absolue à la vision d’Emmanuel Ebot Mbi.',
      programsTitle: 'Nos Programmes et Initiatives Clés',
      programsSubtitle: 'Une aide humanitaire ciblée et des opportunités éducatives pour les plus vulnérables.',
      newsTitle: 'Actualités Mission Cameroun — Janvier 2025',
      newsSubtitle: 'Compte-rendu direct de la remise des bourses, fournitures scolaires et du soutien aux orphelinats.',
      contactTitle: 'Contacter la Fondation',
      contactSubtitle: 'Échangez avec nos équipes aux États-Unis, au Cameroun et en Côte d’Ivoire.',
      donationTitle: 'Soutenir Notre Mission',
      donationSubtitle: '100% de votre don déductible finance directement les bourses et les secours d’urgence.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  isFR: boolean;
  isEN: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('eembifoundation_lang');
      if (saved === 'fr' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('eembifoundation_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'fr' : 'en';
    setLanguage(next);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translationsMap[language],
    isFR: language === 'fr',
    isEN: language === 'en',
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
