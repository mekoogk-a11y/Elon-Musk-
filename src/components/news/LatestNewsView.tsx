/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ApiService } from '../../services/api';
import { NewsItem } from '../../types';
import { Sparkles, Calendar, Building2, ExternalLink, ShieldCheck } from 'lucide-react';

export const LatestNewsView: React.FC = () => {
  const { language, t } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filterCompany, setFilterCompany] = useState<string>('all');

  useEffect(() => {
    ApiService.getNews().then(setNews);
  }, []);

  const companiesList = ['all', ...Array.from(new Set(news.map(n => n.company)))];

  const filteredNews = filterCompany === 'all'
    ? news
    : news.filter(n => n.company === filterCompany);

  return (
    <section id="news" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#20242A]">
      
      {/* Header */}
      <div className="space-y-3 mb-10 text-center sm:text-left rtl:sm:text-right">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#E82127]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'التحديثات والإفصاحات الرسمية الحية' : 'VERIFIED 2026 INTELLIGENCE'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase font-display">
          {t('newsTitle')}
        </h2>
        <p className="text-sm text-[#A7ADB4] max-w-2xl">
          {t('newsSubtitle')}
        </p>

        {/* Company Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 pt-4">
          {companiesList.map(c => (
            <button
              key={c}
              onClick={() => setFilterCompany(c)}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                filterCompany === c
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#0B0D0F] border border-[#20242A] text-[#A7ADB4] hover:text-white'
              }`}
            >
              {c === 'all' ? (language === 'ar' ? 'جميع الأخبار (2026)' : 'All News (2026)') : c}
            </button>
          ))}
        </div>
      </div>

      {/* News Stream Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map(item => (
          <article
            key={item.id}
            className="p-6 rounded-lg bg-[#0B0D0F] border border-[#20242A] hover:border-white/30 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Card Meta with Typographic Separators (Zero-Pill Discipline) */}
              <div className="flex items-center gap-2 text-xs text-[#A7ADB4] font-mono">
                <span className="text-[#E82127] font-semibold">{item.company}</span>
                <span aria-hidden="true">·</span>
                <span>{item.date}</span>
                <span aria-hidden="true">·</span>
                <span className="text-cyan-400">{item.sourceType}</span>
              </div>

              <h3 className="text-base font-bold text-white font-display leading-snug">
                {language === 'ar' ? item.titleAr : item.titleEn}
              </h3>

              <p className="text-xs text-[#A7ADB4] leading-relaxed line-clamp-4">
                {language === 'ar' ? item.summaryAr : item.summaryEn}
              </p>
            </div>

            {/* Source Attribution */}
            <div className="pt-4 border-t border-[#20242A] flex items-center justify-between text-[11px] font-mono text-[#A7ADB4]">
              <div className="flex items-center gap-1 truncate max-w-[200px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E82127] shrink-0" />
                <span className="truncate">{item.source}</span>
              </div>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:underline shrink-0"
                >
                  <span>{language === 'ar' ? 'المصدر' : 'Verify'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

          </article>
        ))}
      </div>

    </section>
  );
};
