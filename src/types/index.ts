/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'ar' | 'en';

export interface SourceCitation {
  id: string;
  title: string;
  type: 'SEC' | 'NASA' | 'Company' | 'Academic' | 'Journalism' | 'Patent';
  publisher: string;
  year?: number | string;
  url?: string;
  note?: string;
}

export interface Company {
  id: string;
  name: string;
  taglineEn: string;
  taglineAr: string;
  foundedYear: number;
  roleEn: string;
  roleAr: string;
  status: 'active' | 'acquired' | 'merged';
  category: 'Aerospace' | 'Automotive & AI' | 'Artificial Intelligence' | 'Neurotechnology' | 'Infrastructure' | 'Software & Social' | 'Fintech';
  descriptionEn: string;
  descriptionAr: string;
  coreTechnologies: string[];
  keyProducts: {
    name: string;
    descriptionEn: string;
    descriptionAr: string;
    status: string;
  }[];
  metrics?: {
    labelEn: string;
    labelAr: string;
    value: string;
  }[];
  sources: SourceCitation[];
}

export interface TimelineEvent {
  id: string;
  year: number;
  date?: string;
  titleEn: string;
  titleAr: string;
  companyId?: string;
  summaryEn: string;
  summaryAr: string;
  technologyEn: string;
  technologyAr: string;
  significanceEn: string;
  significanceAr: string;
  sources: SourceCitation[];
}

export interface NewsItem {
  id: string;
  date: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  company: string;
  source: string;
  sourceType: 'NASA' | 'SEC' | 'Reuters' | 'Company Official' | 'FAA';
  url?: string;
}

export interface ResearchArticle {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'Biography' | 'Space' | 'AI' | 'Robotics' | 'Electric Vehicles' | 'Energy' | 'Neurotechnology' | 'Infrastructure' | 'Finance' | 'Manufacturing' | 'Innovation';
  readTime: string;
  excerptEn: string;
  excerptAr: string;
  contentEn: string;
  contentAr: string;
  tags: string[];
  sources: SourceCitation[];
}

export interface TechMapNode {
  id: string;
  nameEn: string;
  nameAr: string;
  parentCategory: 'SPACE' | 'AI' | 'TESLA' | 'NEURALINK' | 'BORING' | 'X';
  descriptionEn: string;
  descriptionAr: string;
  connectedTo: string[];
  x: number; // percentage in visualization
  y: number;
}

export interface BusinessModel {
  companyId: string;
  companyName: string;
  productEn: string;
  productAr: string;
  customerEn: string;
  customerAr: string;
  revenueEn: string;
  revenueAr: string;
  technologyEn: string;
  technologyAr: string;
  infrastructureEn: string;
  infrastructureAr: string;
  risksEn: string;
  risksAr: string;
  competitionEn: string;
  competitionAr: string;
}

export interface FailureCase {
  id: string;
  titleEn: string;
  titleAr: string;
  company: string;
  yearRange: string;
  issueEn: string;
  issueAr: string;
  engineeringResponseEn: string;
  engineeringResponseAr: string;
  outcomeEn: string;
  outcomeAr: string;
  sources: SourceCitation[];
}

export interface PhilosophyPrinciple {
  id: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  breakdownEn: string[];
  breakdownAr: string[];
  caseStudyEn: string;
  caseStudyAr: string;
  sources: SourceCitation[];
}
