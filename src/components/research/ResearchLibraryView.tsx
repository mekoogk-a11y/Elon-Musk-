/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ApiService } from '../../services/api';
import { ResearchArticle } from '../../types';
import { BookOpen, Search, Clock, Tag, ExternalLink, X, ChevronRight, Layers } from 'lucide-react';

export const ResearchLibraryView: React.FC = () => {
  const { language, t } = useLanguage();
  const [articles, setArticles] = useState<ResearchArticle[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<ResearchArticle | null>(null);

  useEffect(() => {
    ApiService.getResearchArticles().then(setArticles);
  }, []);

  const categories = [
    { id: 'all', labelEn: 'All Categories', labelAr: 'كافة التصنيفات' },
    { id: 'Space', labelEn: 'Space & Orbital', labelAr: 'الفضاء والصواريخ' },
    { id: 'AI', labelEn: 'Artificial Intelligence', labelAr: 'الذكاء الاصطناعي' },
    { id: 'Neurotechnology', labelEn: 'Neurotechnology', labelAr: 'التكنولوجيا العصبية' },
    { id: 'Manufacturing', labelEn: 'Manufacturing & Metallurgy', labelAr: 'التصنيع والسبائك' },
    { id: 'Innovation', labelEn: 'Innovation & Physics', labelAr: 'الابتكار والفيزياء' },
  ];

  const filteredArticles = articles.filter(art => {
    const matchesCategory = activeCategory === 'all' || art.category === activeCategory;
    const cleanSearch = searchQuery.toLowerCase().trim();
    const matchesSearch = !cleanSearch ||
      art.titleEn.toLowerCase().includes(cleanSearch) ||
      art.titleAr.includes(cleanSearch) ||
      art.tags.some(t => t.toLowerCase().includes(cleanSearch));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="research" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#20242A]">
      
      {/* Header */}
      <div className="space-y-3 mb-10 text-center sm:text-left rtl:sm:text-right">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'المكتبة الأكاديمية والبحثية' : 'ACADEMIC MONOGRAPHS & RESEARCH ARCHIVE'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase font-display">
          {t('researchTitle')}
        </h2>
        <p className="text-sm text-[#A7ADB4] max-w-2xl">
          {t('researchSubtitle')}
        </p>

        {/* Search input & filters */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Quick search inside library */}
          <div className="relative w-full sm:w-80">
            <Search className="w-3.5 h-3.5 text-[#A7ADB4] absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3" />
            <input
              type="text"
              placeholder={language === 'ar' ? 'بحث في الأبحاث والكلمات المفتاحية...' : 'Search monographs, keywords...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0B0D0F] border border-[#20242A] rounded px-3 py-2 pl-9 rtl:pl-3 rtl:pr-9 text-xs text-white placeholder-[#A7ADB4] focus:outline-none focus:border-cyan-400 font-mono"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-black font-semibold'
                    : 'bg-[#0B0D0F] border border-[#20242A] text-[#A7ADB4] hover:text-white'
                }`}
              >
                {language === 'ar' ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map(art => (
          <article
            key={art.id}
            onClick={() => setSelectedArticle(art)}
            className="p-6 rounded-lg bg-[#0B0D0F] border border-[#20242A] hover:border-cyan-500/40 hover:bg-[#101318] transition-all cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Meta with Typographic Separator */}
              <div className="flex items-center gap-2 text-xs text-[#A7ADB4] font-mono">
                <span className="text-cyan-400 font-semibold">{art.category}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#A7ADB4]" />
                  <span>{art.readTime}</span>
                </span>
              </div>

              <h3 className="text-base font-bold text-white font-display leading-snug hover:text-cyan-300 transition-colors">
                {language === 'ar' ? art.titleAr : art.titleEn}
              </h3>

              <p className="text-xs text-[#A7ADB4] leading-relaxed line-clamp-3">
                {language === 'ar' ? art.excerptAr : art.excerptEn}
              </p>
            </div>

            {/* Tags and Action */}
            <div className="pt-4 border-t border-[#20242A] space-y-3">
              <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-[#A7ADB4]">
                {art.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx}>#{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>{language === 'ar' ? 'قراءة الورقة كاملة' : 'Read Full Monograph'}</span>
                <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </div>
            </div>

          </article>
        ))}
      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-[#0B0D0F] border border-[#20242A] rounded-xl max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative">
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-lg bg-[#141820] text-[#A7ADB4] hover:text-white border border-[#20242A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 border-b border-[#20242A] pb-4 pr-12 rtl:pr-0 rtl:pl-12">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span>{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {language === 'ar' ? selectedArticle.titleAr : selectedArticle.titleEn}
              </h3>
            </div>

            {/* Paper Content */}
            <div className="text-xs sm:text-sm text-[#FFFFFF]/90 leading-relaxed space-y-4 whitespace-pre-line font-normal">
              {language === 'ar' ? selectedArticle.contentAr : selectedArticle.contentEn}
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-[#20242A] flex flex-wrap gap-2 text-xs font-mono text-[#A7ADB4]">
              {selectedArticle.tags.map((t, idx) => (
                <span key={idx} className="bg-[#050505] border border-[#20242A] px-2 py-1 rounded">
                  #{t}
                </span>
              ))}
            </div>

            {/* Sources */}
            {selectedArticle.sources && (
              <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-2 text-xs">
                <div className="font-mono text-cyan-400 uppercase tracking-wider">
                  {language === 'ar' ? 'المصادر والتوثيق الأكاديمي' : 'PRIMARY REFERENCES & CITATIONS'}
                </div>
                {selectedArticle.sources.map(src => (
                  <div key={src.id} className="text-[#A7ADB4] flex items-center justify-between">
                    <div>
                      <span className="text-white font-medium">{src.title}</span>
                      <span className="text-[11px] block">{src.publisher} {src.year ? `(${src.year})` : ''}</span>
                    </div>
                    {src.url && (
                      <a href={src.url} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="text-right rtl:text-left pt-2">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200"
              >
                {language === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
