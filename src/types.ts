export type PageView = 'home' | 'founder' | 'leadership' | 'programs' | 'news' | 'donation' | 'contact';

export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  degrees?: string;
  bio: string[];
  expertise: string[];
  quote?: string;
}

export interface ProgramInitiative {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  location: string;
  impactMetrics: { label: string; value: string }[];
  keyHighlights: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  summary: string;
  content: {
    heading?: string;
    paragraphs: string[];
    callout?: string;
    bulletPoints?: string[];
  }[];
  keyStats: { value: string; label: string }[];
  galleryPhotos: {
    id: string;
    caption: string;
    location: string;
    category: string;
    aspectRatio: string;
  }[];
}

export interface DonationRecord {
  id: string;
  amount: number;
  frequency: 'once' | 'monthly';
  fund: string;
  donorName: string;
  donorEmail: string;
  isAnonymous: boolean;
  tributeName?: string;
  comment?: string;
  date: string;
  paymentMethod: 'card' | 'paypal' | 'bank_transfer';
}
