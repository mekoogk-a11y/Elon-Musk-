/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FAILURES_DATA } from '../../data/failures';
import { FailureCase } from '../../types';
import { AlertOctagon, Wrench, CheckCircle2, ChevronRight, Layers, ShieldCheck } from 'lucide-react';

export const FailuresView: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<FailureCase>(FAILURES_DATA[0]);

  return (
    <section id="failures" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#20242A]">
      
      {/* Header */}
      <div className="space-y-3 mb-12 text-center sm:text-left rtl:sm:text-right">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#E82127]">
          <AlertOctagon className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'التوثيق المحايد للإخفاقات والتعافي الهندسي' : 'NEUTRAL ANOMALY DOCUMENTATION'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase font-display">
          {t('failuresTitle')}
        </h2>
        <p className="text-sm text-[#A7ADB4] max-w-2xl">
          {t('failuresSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Cases List (Col 1) */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-[#A7ADB4] mb-3">
            {language === 'ar' ? 'قضايا الإخفاق والتعلم الموثقة' : 'DOCUMENTED SETBACK ARCHIVE'}
          </div>
          {FAILURES_DATA.map((item) => {
            const isSelected = selectedCase.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className={`p-3.5 rounded-lg border cursor-pointer transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#141820] border-[#E82127] text-white'
                    : 'bg-[#0B0D0F] border-[#20242A] text-[#A7ADB4] hover:border-[#A7ADB4]/40 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="text-[#E82127]">{item.company}</span>
                  <span className="text-[#A7ADB4]">{item.yearRange}</span>
                </div>
                <h4 className="text-xs font-semibold font-display line-clamp-1">
                  {language === 'ar' ? item.titleAr : item.titleEn}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Selected Case Inspection (Col 2 & 3) */}
        <div className="lg:col-span-2 bg-[#0B0D0F] border border-[#20242A] rounded-lg p-6 sm:p-8 space-y-6">
          
          <div className="border-b border-[#20242A] pb-4 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E82127]">
              <span>{selectedCase.company}</span>
              <span>·</span>
              <span>{selectedCase.yearRange}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              {language === 'ar' ? selectedCase.titleAr : selectedCase.titleEn}
            </h3>
          </div>

          {/* Anomaly / Crisis */}
          <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#E82127] flex items-center gap-2">
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'طبيعة الخلل والتهديد القائم' : 'THE CRISIS & TECHNICAL FAILURE'}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed">
              {language === 'ar' ? selectedCase.issueAr : selectedCase.issueEn}
            </p>
          </div>

          {/* Engineering Response */}
          <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'الاستجابة الهندسية والتعديلات' : 'ENGINEERING ITERATION & RE-ARCHITECTING'}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed">
              {language === 'ar' ? selectedCase.engineeringResponseAr : selectedCase.engineeringResponseEn}
            </p>
          </div>

          {/* Verified Outcome */}
          <div className="p-4 rounded bg-[#141820] border border-[#20242A] space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'النتيجة الواقعية طويلة الأمد' : 'EMPIRICAL RESULT & LONG-TERM OUTCOME'}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#FFFFFF]/90 leading-relaxed font-mono">
              {language === 'ar' ? selectedCase.outcomeAr : selectedCase.outcomeEn}
            </p>
          </div>

          {/* Sources Footnote */}
          <div className="pt-2 border-t border-[#20242A] flex items-center gap-2 text-[11px] font-mono text-[#A7ADB4]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E82127]" />
            <span>
              {language === 'ar' 
                ? 'توثيق تاريخي محايد مستند إلى سجلات الإطلاق الرسمية والتقارير المالية المودعة لدى SEC.' 
                : 'Neutral documentation verified against official launch vehicle telemetry and SEC disclosures.'}
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};
