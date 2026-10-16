/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Company, TimelineEvent, NewsItem, ResearchArticle, FailureCase, PhilosophyPrinciple, BusinessModel, TechMapNode } from '../types';
import { COMPANIES_DATA } from '../data/companies';
import { TIMELINE_DATA } from '../data/timeline';
import { LATEST_NEWS_2026 } from '../data/news';
import { RESEARCH_ARTICLES } from '../data/research';
import { FAILURES_DATA } from '../data/failures';
import { PHILOSOPHY_PRINCIPLES } from '../data/philosophy';
import { BUSINESS_MODELS_DATA } from '../data/businessModels';
import { TECH_MAP_NODES } from '../data/techMap';
import { MASTER_SOURCES } from '../data/sources';

const STORAGE_KEYS = {
  TIMELINE: 'muskera_timeline_v1',
  NEWS: 'muskera_news_v1',
  RESEARCH: 'muskera_research_v1',
  COMPANIES: 'muskera_companies_v1',
  AUTH: 'muskera_admin_auth'
};

function getStored<T>(key: string, fallback: T[]): T[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function setStored<T>(key: string, data: T[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn('Failed to persist to localStorage', err);
  }
}

export const ApiService = {
  // Companies
  async getCompanies(): Promise<Company[]> {
    return getStored<Company>(STORAGE_KEYS.COMPANIES, COMPANIES_DATA);
  },
  async getCompanyById(id: string): Promise<Company | undefined> {
    const list = await this.getCompanies();
    return list.find(c => c.id === id);
  },
  async saveCompany(company: Company): Promise<void> {
    const list = await this.getCompanies();
    const idx = list.findIndex(c => c.id === company.id);
    if (idx >= 0) {
      list[idx] = company;
    } else {
      list.push(company);
    }
    setStored(STORAGE_KEYS.COMPANIES, list);
  },

  // Timeline
  async getTimeline(): Promise<TimelineEvent[]> {
    const items = getStored<TimelineEvent>(STORAGE_KEYS.TIMELINE, TIMELINE_DATA);
    return items.sort((a, b) => a.year - b.year);
  },
  async addTimelineEvent(event: TimelineEvent): Promise<void> {
    const items = await this.getTimeline();
    items.push(event);
    setStored(STORAGE_KEYS.TIMELINE, items);
  },
  async updateTimelineEvent(event: TimelineEvent): Promise<void> {
    const items = await this.getTimeline();
    const idx = items.findIndex(e => e.id === event.id);
    if (idx >= 0) {
      items[idx] = event;
      setStored(STORAGE_KEYS.TIMELINE, items);
    }
  },
  async deleteTimelineEvent(id: string): Promise<void> {
    const items = await this.getTimeline();
    const filtered = items.filter(e => e.id !== id);
    setStored(STORAGE_KEYS.TIMELINE, filtered);
  },

  // News (2026)
  async getNews(): Promise<NewsItem[]> {
    return getStored<NewsItem>(STORAGE_KEYS.NEWS, LATEST_NEWS_2026);
  },
  async addNewsItem(item: NewsItem): Promise<void> {
    const list = await this.getNews();
    list.unshift(item);
    setStored(STORAGE_KEYS.NEWS, list);
  },
  async updateNewsItem(item: NewsItem): Promise<void> {
    const list = await this.getNews();
    const idx = list.findIndex(n => n.id === item.id);
    if (idx >= 0) {
      list[idx] = item;
      setStored(STORAGE_KEYS.NEWS, list);
    }
  },
  async deleteNewsItem(id: string): Promise<void> {
    const list = await this.getNews();
    const filtered = list.filter(n => n.id !== id);
    setStored(STORAGE_KEYS.NEWS, filtered);
  },

  // Research Library
  async getResearchArticles(): Promise<ResearchArticle[]> {
    return getStored<ResearchArticle>(STORAGE_KEYS.RESEARCH, RESEARCH_ARTICLES);
  },
  async addResearchArticle(article: ResearchArticle): Promise<void> {
    const list = await this.getResearchArticles();
    list.unshift(article);
    setStored(STORAGE_KEYS.RESEARCH, list);
  },
  async updateResearchArticle(article: ResearchArticle): Promise<void> {
    const list = await this.getResearchArticles();
    const idx = list.findIndex(a => a.id === article.id);
    if (idx >= 0) {
      list[idx] = article;
      setStored(STORAGE_KEYS.RESEARCH, list);
    }
  },
  async deleteResearchArticle(id: string): Promise<void> {
    const list = await this.getResearchArticles();
    const filtered = list.filter(a => a.id !== id);
    setStored(STORAGE_KEYS.RESEARCH, filtered);
  },

  // Other Entities
  async getFailures(): Promise<FailureCase[]> {
    return FAILURES_DATA;
  },
  async getPhilosophyPrinciples(): Promise<PhilosophyPrinciple[]> {
    return PHILOSOPHY_PRINCIPLES;
  },
  async getBusinessModels(): Promise<BusinessModel[]> {
    return BUSINESS_MODELS_DATA;
  },
  async getTechMap(): Promise<TechMapNode[]> {
    return TECH_MAP_NODES;
  },
  async getSources(): Promise<typeof MASTER_SOURCES> {
    return MASTER_SOURCES;
  },

  // Universal Search
  async search(query: string) {
    const clean = query.trim().toLowerCase();
    if (!clean) return { companies: [], timeline: [], news: [], research: [] };

    const [companies, timeline, news, research] = await Promise.all([
      this.getCompanies(),
      this.getTimeline(),
      this.getNews(),
      this.getResearchArticles()
    ]);

    const matchedCompanies = companies.filter(c =>
      c.name.toLowerCase().includes(clean) ||
      c.descriptionEn.toLowerCase().includes(clean) ||
      c.descriptionAr.includes(clean) ||
      c.coreTechnologies.some(t => t.toLowerCase().includes(clean))
    );

    const matchedTimeline = timeline.filter(t =>
      t.titleEn.toLowerCase().includes(clean) ||
      t.titleAr.includes(clean) ||
      t.summaryEn.toLowerCase().includes(clean) ||
      t.summaryAr.includes(clean) ||
      String(t.year).includes(clean)
    );

    const matchedNews = news.filter(n =>
      n.titleEn.toLowerCase().includes(clean) ||
      n.titleAr.includes(clean) ||
      n.company.toLowerCase().includes(clean) ||
      n.summaryEn.toLowerCase().includes(clean) ||
      n.summaryAr.includes(clean)
    );

    const matchedResearch = research.filter(r =>
      r.titleEn.toLowerCase().includes(clean) ||
      r.titleAr.includes(clean) ||
      r.tags.some(tag => tag.toLowerCase().includes(clean)) ||
      r.excerptEn.toLowerCase().includes(clean) ||
      r.excerptAr.includes(clean)
    );

    return {
      companies: matchedCompanies,
      timeline: matchedTimeline,
      news: matchedNews,
      research: matchedResearch
    };
  },

  // Reset to default seed
  async resetDatabase(): Promise<void> {
    localStorage.removeItem(STORAGE_KEYS.TIMELINE);
    localStorage.removeItem(STORAGE_KEYS.NEWS);
    localStorage.removeItem(STORAGE_KEYS.RESEARCH);
    localStorage.removeItem(STORAGE_KEYS.COMPANIES);
  },

  // Admin Auth simulation
  isAdminAuthenticated(): boolean {
    return sessionStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
  },
  setAdminAuthenticated(auth: boolean): void {
    if (auth) {
      sessionStorage.setItem(STORAGE_KEYS.AUTH, 'true');
    } else {
      sessionStorage.removeItem(STORAGE_KEYS.AUTH);
    }
  }
};
