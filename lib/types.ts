export interface Solution {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  longDescription: string;
  targetCustomer: string;
  color: string;
  categoryIds: string[];
  heroImage: string;
}

export interface Category {
  id: string;
  name: string;
  parentId: string | null;
  slug: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  categoryId: string;
  solutionIds: string[];
  shortDescription: string;
  description: string;
  features: string[];
  specs: ProductSpec[];
  image: string;
  images?: string[];
  catalogUrl: string;
  isFeatured: boolean;
  isNew?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  country: string;
  logo: string;
  description: string;
  website: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "공지" | "뉴스" | "이벤트";
  summary: string;
  content: string;
  image?: string;
}

export interface TrustStat {
  label: string;
  value: string;
  unit: string;
  description: string;
}

export interface HistoryItem {
  year: string;
  events: string[];
}

export interface SupportFeature {
  icon: string;
  title: string;
  description: string;
}
