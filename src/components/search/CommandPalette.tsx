/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ApiService } from '../../services/api';
import { Search, X, Building2, Calendar, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCompany?: (companyId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{
    companies: any[];
    timeline: any[];
    news: any[];
    research: any[];
  }>({ companies: [], timeline: [], news: [], research: [] });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults({ companies: [], timeline: [], news: [], research: [] });
      return;
    }
    const timer = setTimeout(() => {
      ApiService.search(query).then(setResults);
    }, 100);
    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  const totalResults =
    results.companies.length +
    results.timeline.length +
    results.news.length +
    results.research.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
      <div className="bg-[#0B0D0F] border border-[#20242A] rounded-xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#20242A]">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder={t('searchPlaceholder')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-[#A7ADB4] focus:outline-none font-mono"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-[#A7ADB4] hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-[#A7ADB4] bg-[#141820] border border-[#20242A] rounded">
            ESC
          </kbd>
        </div>

        {/* Quick Suggestion Pills if query is empty */}
        {!query.trim() && (
          <div className="p-6 space-y-3">
            <div className="text-xs font-mono text-[#A7ADB4] uppercase tracking-wider">
              {language === 'ar' ? 'كلمات بحث مقترحة وسريعة:' : 'SUGGESTED EXPLORATION TARGETS:'}
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Starship', 'Falcon 9', 'Cybercab', 'Optimus', 'Grok', 
                'Memphis Colossus', 'Starlink', 'Neuralink', 'Vegas Loop', 'Zip2', 'PayPal'
              ].map(tag => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-2.5 py-1 rounded bg-[#050505] border border-[#20242A] text-xs font-mono text-[#A7ADB4] hover:text-white hover:border-cyan-400 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results Display */}
        {query.trim() && (
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
            
            {totalResults === 0 ? (
              <div className="text-center py-8 text-xs text-[#A7ADB4] font-mono">
                {t('noResults')}
              </div>
            ) : (
              <>
                {/* Companies Section */}
                {results.companies.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'الشركات' : 'COMPANIES'}</span>
                    </div>
                    <div className="space-y-1">
                      {results.companies.map(c => (
                        <a
                          key={c.id}
                          href="#companies"
                          onClick={onClose}
                          className="p-2.5 rounded bg-[#050505] border border-[#20242A] hover:border-cyan-400 flex items-center justify-between text-xs transition-colors block"
                        >
                          <div>
                            <span className="font-bold text-white font-display">{c.name}</span>
                            <span className="text-[11px] text-[#A7ADB4] ml-2 rtl:ml-0 rtl:mr-2">
                              {language === 'ar' ? c.taglineAr : c.taglineEn}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-cyan-400 rtl:rotate-180" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timeline Events */}
                {results.timeline.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase text-[#E82127] tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'المحطات الزمنية' : 'TIMELINE MILESTONES'}</span>
                    </div>
                    <div className="space-y-1">
                      {results.timeline.map(t => (
                        <a
                          key={t.id}
                          href="#timeline"
                          onClick={onClose}
                          className="p-2.5 rounded bg-[#050505] border border-[#20242A] hover:border-[#E82127] flex items-center justify-between text-xs transition-colors block"
                        >
                          <div>
                            <span className="font-mono font-bold text-white tabular-nums">{t.year}</span>
                            <span className="text-white ml-2 rtl:ml-0 rtl:mr-2">
                              {language === 'ar' ? t.titleAr : t.titleEn}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#E82127] rtl:rotate-180" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* News Items */}
                {results.news.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'أخبار 2026' : '2026 INTELLIGENCE'}</span>
                    </div>
                    <div className="space-y-1">
                      {results.news.map(n => (
                        <a
                          key={n.id}
                          href="#news"
                          onClick={onClose}
                          className="p-2.5 rounded bg-[#050505] border border-[#20242A] hover:border-amber-400 flex items-center justify-between text-xs transition-colors block"
                        >
                          <div>
                            <span className="text-[#E82127] font-mono text-[10px] uppercase mr-2 rtl:mr-0 rtl:ml-2">[{n.company}]</span>
                            <span className="text-white font-medium">
                              {language === 'ar' ? n.titleAr : n.titleEn}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-amber-400 rtl:rotate-180" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Research Monographs */}
                {results.research.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase text-purple-400 tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'الأبحاث والتحليلات' : 'RESEARCH MONOGRAPHS'}</span>
                    </div>
                    <div className="space-y-1">
                      {results.research.map(r => (
                        <a
                          key={r.id}
                          href="#research"
                          onClick={onClose}
                          className="p-2.5 rounded bg-[#050505] border border-[#20242A] hover:border-purple-400 flex items-center justify-between text-xs transition-colors block"
                        >
                          <div>
                            <span className="text-purple-400 font-mono text-[10px] uppercase mr-2 rtl:mr-0 rtl:ml-2">[{r.category}]</span>
                            <span className="text-white font-medium">
                              {language === 'ar' ? r.titleAr : r.titleEn}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-purple-400 rtl:rotate-180" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
