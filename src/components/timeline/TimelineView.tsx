/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ApiService } from '../../services/api';
import { TimelineEvent } from '../../types';
import { Calendar, ChevronRight, X, Cpu, Sparkles, BookOpen, Layers } from 'lucide-react';

export const TimelineView: React.FC = () => {
  const { language, t } = useLanguage();
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    ApiService.getTimeline().then(setEvents);
  }, []);

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(e => e.companyId === activeFilter || (activeFilter === 'other' && !e.companyId));

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#20242A]">
      
      {/* Section Header */}
      <div className="space-y-3 mb-10 text-center sm:text-left rtl:sm:text-right">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#E82127]">
          <Calendar className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'السجل الزمني الموثق' : 'HISTORICAL TRAJECTORY'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase font-display">
          {t('timelineTitle')}
        </h2>
        <p className="text-sm text-[#A7ADB4] max-w-2xl">
          {t('timelineSubtitle')}
        </p>

        {/* Filter Controls (Allowed per Constitution as functional buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-4">
          {[
            { id: 'all', labelEn: 'All Milestones (1971–2026)', labelAr: 'جميع المحطات (1971–2026)' },
            { id: 'spacex', labelEn: 'SpaceX', labelAr: 'سبيس إكس' },
            { id: 'tesla', labelEn: 'Tesla', labelAr: 'تيسلا' },
            { id: 'xai', labelEn: 'xAI', labelAr: 'xAI' },
            { id: 'neuralink', labelEn: 'Neuralink', labelAr: 'نيورالينك' },
            { id: 'boring', labelEn: 'Boring Co.', labelAr: 'شركة الحفر' },
            { id: 'x-corp', labelEn: 'X (Twitter)', labelAr: 'إكس' },
            { id: 'zip2', labelEn: 'Zip2 / PayPal', labelAr: 'بدايات الإنترنت' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap ${
                activeFilter === f.id
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#0B0D0F] border border-[#20242A] text-[#A7ADB4] hover:text-white hover:border-[#A7ADB4]/30'
              }`}
            >
              {language === 'ar' ? f.labelAr : f.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Timeline Rail */}
      <div className="relative border-l border-[#20242A] rtl:border-l-0 rtl:border-r ml-4 rtl:ml-0 rtl:mr-4 space-y-8 pl-6 rtl:pl-0 rtl:pr-6">
        {filteredEvents.map((evt) => {
          const isSelected = selectedEvent?.id === evt.id;
          return (
            <div
              key={evt.id}
              onClick={() => setSelectedEvent(evt)}
              className={`group relative p-5 rounded bg-[#0B0D0F] border cursor-pointer transition-all duration-200 ${
                isSelected 
                  ? 'border-[#E82127] bg-[#141820]' 
                  : 'border-[#20242A] hover:border-[#A7ADB4]/50 hover:bg-[#101318]'
              }`}
            >
              {/* Year Marker on Rail */}
              <div 
                className={`absolute -left-[31px] rtl:-left-auto rtl:-right-[31px] top-6 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                  isSelected ? 'bg-[#E82127] border-white' : 'bg-[#050505] border-[#A7ADB4] group-hover:border-[#E82127]'
                }`} 
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold font-mono text-[#FFFFFF] tracking-tight tabular-nums">
                    {evt.year}
                  </span>
                  {evt.date && (
                    <span className="text-xs font-mono text-[#A7ADB4]">
                      · {evt.date}
                    </span>
                  )}
                </div>
                {evt.companyId && (
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E82127]">
                    {evt.companyId.toUpperCase()}
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white font-display mb-1.5 group-hover:text-white">
                {language === 'ar' ? evt.titleAr : evt.titleEn}
              </h3>

              <p className="text-xs sm:text-sm text-[#A7ADB4] line-clamp-2 leading-relaxed">
                {language === 'ar' ? evt.summaryAr : evt.summaryEn}
              </p>

              <div className="mt-3 pt-3 border-t border-[#20242A]/60 flex items-center justify-between text-xs text-[#A7ADB4]">
                <div className="flex items-center gap-1.5 text-[11px] font-mono">
                  <Cpu className="w-3 h-3 text-cyan-400" />
                  <span className="truncate max-w-[260px] sm:max-w-md">
                    {language === 'ar' ? evt.technologyAr : evt.technologyEn}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-white font-mono shrink-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                  <span>{language === 'ar' ? 'تفاصيل الحدث' : 'Inspect'}</span>
                  <ChevronRight className="w-3 h-3 rtl:rotate-180" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Milestone Modal Drawer */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0B0D0F] border border-[#20242A] rounded-lg max-w-2xl w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#20242A] pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#E82127] uppercase">
                  <span>{selectedEvent.year}</span>
                  {selectedEvent.date && <span>· {selectedEvent.date}</span>}
                  {selectedEvent.companyId && <span>· {selectedEvent.companyId}</span>}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                  {language === 'ar' ? selectedEvent.titleAr : selectedEvent.titleEn}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="p-1.5 rounded bg-[#141820] text-[#A7ADB4] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* What Happened (ماذا حدث؟) */}
            <div className="space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#E82127]" />
                <span>{language === 'ar' ? 'ماذا حدث في هذه المحطة؟' : 'WHAT HAPPENED?'}</span>
              </div>
              <p className="text-sm text-[#A7ADB4] leading-relaxed">
                {language === 'ar' ? selectedEvent.summaryAr : selectedEvent.summaryEn}
              </p>
            </div>

            {/* Technology Involved (التكنولوجيا) */}
            <div className="space-y-1.5 p-3 rounded bg-[#050505] border border-[#20242A]">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'التكنولوجيا والهندسة المرتبطة' : 'CORE TECHNOLOGY & ARCHITECTURE'}</span>
              </div>
              <p className="text-xs text-[#A7ADB4] leading-relaxed font-mono">
                {language === 'ar' ? selectedEvent.technologyAr : selectedEvent.technologyEn}
              </p>
            </div>

            {/* Historical Significance (أهمية الحدث) */}
            <div className="space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'أهمية الحدث في مسيرة ماسك' : 'HISTORICAL & STRATEGIC SIGNIFICANCE'}</span>
              </div>
              <p className="text-sm text-[#A7ADB4] leading-relaxed">
                {language === 'ar' ? selectedEvent.significanceAr : selectedEvent.significanceEn}
              </p>
            </div>

            {/* Documented Sources (المصادر) */}
            {selectedEvent.sources && selectedEvent.sources.length > 0 && (
              <div className="border-t border-[#20242A] pt-4 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A7ADB4] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'المصادر والوثائق المعتمدة' : 'DOCUMENTED VERIFIED SOURCES'}</span>
                </div>
                <div className="space-y-1.5">
                  {selectedEvent.sources.map(src => (
                    <div key={src.id} className="text-xs text-[#A7ADB4] flex items-start gap-2">
                      <span className="text-[#E82127] font-mono">[{src.type}]</span>
                      <div>
                        <div className="text-white font-medium">{src.title}</div>
                        <div className="text-[11px] text-[#A7ADB4]">{src.publisher} {src.year ? `(${src.year})` : ''}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Close action */}
            <div className="pt-2 text-right rtl:text-left">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 rounded bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors"
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
