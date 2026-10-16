/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (key: string) => string;
}

const DICTIONARY: Record<string, { en: string; ar: string }> = {
  // Brand & Header
  siteTitle: { en: 'MUSKERA', ar: 'موسكيرا' },
  tagline: { en: 'The Complete Works of Elon Musk', ar: 'مجموعة أعمال ايلون ماسك' },
  disclaimerText: {
    en: 'This site is an independent research project for knowledge and documentation purposes and does not represent Elon Musk or any of his companies.',
    ar: 'هذا الموقع مشروع بحثي مستقل لأغراض المعرفة والتوثيق، ولا يمثل إيلون ماسك أو أيًا من شركاته.'
  },
  
  // Navigation
  navJourney: { en: 'Timeline', ar: 'الخط الزمني' },
  navCompanies: { en: 'Companies', ar: 'الشركات' },
  navTechMap: { en: 'Technology Map', ar: 'خريطة التكنولوجيا' },
  navPhilosophy: { en: 'First Principles', ar: 'المبادئ الأولى' },
  navFailures: { en: 'Failures & Iteration', ar: 'الإخفاق والتطوير' },
  navBusiness: { en: 'Business Models', ar: 'نماذج الأعمال' },
  navNews: { en: 'Latest 2026', ar: 'أحدث تطورات 2026' },
  navResearch: { en: 'Research Library', ar: 'مكتبة الأبحاث' },
  navEbook: { en: 'The E-Book', ar: 'الكتاب الإلكتروني' },
  navSources: { en: 'Sources', ar: 'المصادر' },
  navAdmin: { en: 'Admin CMS', ar: 'لوحة التحكم' },

  // Hero Section
  heroTitle: { en: 'ELON MUSK', ar: 'إيلون ماسك' },
  heroSubtitle: { en: 'THE COMPLETE WORKS OF ELON MUSK', ar: 'مجموعة أعمال ايلون ماسك' },
  heroDescription: {
    en: 'From early software experiments to electric vehicles, reusable rockets, satellite internet, artificial intelligence, robotics, brain-computer interfaces and ambitious infrastructure projects.',
    ar: 'من التجارب البرمجية الأولى إلى السيارات الكهربائية، والصواريخ القابلة لإعادة الاستخدام، والإنترنت الفضائي، والذكاء الاصطناعي، والروبوتات، والواجهات الدماغية، ومشاريع البنية التحتية الطموحة.'
  },
  btnExploreJourney: { en: 'EXPLORE THE JOURNEY', ar: 'استكشف المسيرة' },
  btnExploreCompanies: { en: 'EXPLORE THE COMPANIES', ar: 'استكشف الشركات' },
  btnLatestDevelopments: { en: 'LATEST DEVELOPMENTS', ar: 'أحدث التطورات' },
  btnTechMap: { en: 'THE TECHNOLOGY MAP', ar: 'خريطة التكنولوجيا' },

  // Dashboard Ribbon
  dashBorn: { en: 'Born: June 28, 1971 · Pretoria, South Africa', ar: 'الميلاد: 28 يونيو 1971 · بريتوريا، جنوب أفريقيا' },
  dashCareer: { en: 'CAREER: Technology · Aerospace · Automotive · AI · Energy · Robotics · Neurotechnology', ar: 'المجالات: التكنولوجيا · الفضاء · السيارات · الذكاء الاصطناعي · الطاقة · الروبوتات · التكنولوجيا العصبية' },
  dashCompanies: { en: 'MAJOR COMPANIES: Tesla · SpaceX · xAI · X · Neuralink · The Boring Company', ar: 'الشركات الكبرى: تيسلا · سبيس إكس · xAI · إكس · نيورالينك · شركة الحفر' },

  // Section Headers
  timelineTitle: { en: 'CHRONOLOGICAL TIMELINE (1971–2026)', ar: 'المسار الزمني الموثق (1971–2026)' },
  timelineSubtitle: { en: 'Every major engineering, leadership, and technological inflection point.', ar: 'كل نقطة تحول كبرى في الهندسة والقيادة وابتكار التكنولوجيا.' },
  
  techMapTitle: { en: 'MUSK TECHNOLOGY ECOSYSTEM MAP', ar: 'خريطة المنظومة التكنولوجية المتكاملة' },
  techMapSubtitle: { en: 'Interactive network analysis of cross-company technology synthesis and shared engineering infrastructure.', ar: 'تحليل شبكي تفاعلي لتكامل التقنيات المشتركة والبنية التحتية الهندسية بين الشركات.' },

  companiesTitle: { en: 'VENTURES & ENGINEERING CONGLOMERATES', ar: 'المشروعات والصروح الهندسية' },
  companiesSubtitle: { en: 'Detailed technical breakdowns of each organization, product architecture, and operational metrics.', ar: 'تحليل تقني شامل لكل مؤسسة، ومعمارية منتجاتها، ومؤشرات أدائها الحقيقية.' },

  firstPrinciplesTitle: { en: 'FIRST PRINCIPLES & WORKING PHILOSOPHY', ar: 'التفكير من المبادئ الأولى وفلسفة العمل' },
  firstPrinciplesSubtitle: { en: 'Deconstructing physics-based reasoning, rapid iteration, and vertical manufacturing primacy.', ar: 'تفكيك منهجية التفكير الفيزيائي، والسرعة الفائقة في التجربة، وأولوية التصنيع الرأسي.' },

  failuresTitle: { en: 'FAILURE → ITERATION → ENGINEERING', ar: 'الفشل ← التطوير المستمر ← الهندسة' },
  failuresSubtitle: { en: 'Objective documentation of catastrophic launch anomalies, production hells, and engineering recoveries.', ar: 'توثيق محايد لكوارث الإطلاق السابقة، وجحيم خطوط الإنتاج، والحلول الهندسية التي أنقذتها.' },

  businessTitle: { en: 'HOW THE BUSINESSES WORK', ar: 'كيف تعمل هذه الشركات ونماذج أعمالها' },
  businessSubtitle: { en: 'Economic engines, customer segments, technology moats, infrastructure capital, and verified risks.', ar: 'المحركات الاقتصادية، وشرائح العملاء، والخنادق التقنية، والبنية التحتية، والمخاطر الموثقة.' },

  newsTitle: { en: 'LATEST DEVELOPMENTS (2026)', ar: 'أحدث التطورات والأخبار الرسمية (2026)' },
  newsSubtitle: { en: 'Verified real-time intelligence aggregated directly from regulatory and official institutional sources.', ar: 'متابعة لحظية موثقة مستمدة مباشرة من الإفصاحات الرسمية والجهات الحكومية المعتمدة.' },

  researchTitle: { en: 'RESEARCH LIBRARY & MONOGRAPHS', ar: 'مكتبة الأبحاث والدراسات الموثقة' },
  researchSubtitle: { en: 'Peer-reviewed references, technical analysis papers, and deep-dive domain surveys.', ar: 'مراجع محكمة، وأوراق تحليل هندسية، ودراسات معمقة في مجالات الطاقة والفضاء والذكاء.' },

  sourcesTitle: { en: 'MASTER BIBLIOGRAPHY & REGULATORY SOURCES', ar: 'فهرس المصادر والمراجع والإفصاحات الرسمية' },
  sourcesSubtitle: { en: 'Primary SEC 10-K filings, NASA contract awards, FCC orders, and academic publications.', ar: 'إفصاحات هيئة الأوراق المالية الأمريكية، وعقود ناسا، وتراخيص الاتصالات، والأبحاث الأكاديمية.' },

  // Search
  searchPlaceholder: { en: 'Search rockets, cars, AI, milestones, concepts (Press / or Ctrl+K)...', ar: 'ابحث في الصواريخ، السيارات، الذكاء الاصطناعي، التواريخ، المفاهيم (Ctrl+K)...' },
  noResults: { en: 'No matching entries found in the archive.', ar: 'لم يتم العثور على نتائج مطابقة في الأرشيف.' },

  // Footer
  footerDesignedBy: { en: 'Designed by Kamal Gafar Zakaria', ar: 'تصميم: كمال جعفر زكريا' },
  footerWhatsApp: { en: 'WhatsApp: 00249919980435', ar: 'واتساب: 00249919980435' },
  footerAboutText: {
    en: 'An independent digital encyclopedia documenting the engineering, technology architectures, aerospace history, and systems philosophy of Elon Musk.',
    ar: 'موسوعة رقمية بحثية مستقلة توثق الهندسة، ومعماريات التكنولوجيا، وتاريخ الفضاء، وفلسفة الأنظمة لدى إيلون ماسك.'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  setLanguage: () => {},
  toggleLanguage: () => {},
  isRtl: true,
  t: (key: string) => key
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    const saved = localStorage.getItem('muskera_lang') as Language;
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('muskera_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const isRtl = language === 'ar';

  const t = (key: string): string => {
    const entry = DICTIONARY[key];
    if (!entry) return key;
    return entry[language] || entry.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
