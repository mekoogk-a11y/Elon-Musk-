/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { User, Briefcase, Building2, MapPin } from 'lucide-react';

export const DashboardRibbon: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-[#0B0D0F] border-y border-[#20242A] py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x md:divide-[#20242A] rtl:md:divide-x-reverse">
        
        {/* Metric 1: Biographical Fact */}
        <div className="flex items-center gap-3 py-2 md:py-0">
          <div className="w-10 h-10 rounded bg-[#141820] border border-[#20242A] flex items-center justify-center shrink-0">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="text-xs">
            <div className="font-mono text-[10px] uppercase text-[#A7ADB4] tracking-wider flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#E82127]" />
              <span>{language === 'ar' ? 'السيرة والمنشأ' : 'BIOGRAPHY & ORIGIN'}</span>
            </div>
            <div className="text-sm font-semibold text-white font-display">
              {language === 'ar' ? 'إيلون ريف ماسك' : 'ELON REEVE MUSK'}
            </div>
            <div className="text-[11px] text-[#A7ADB4] font-mono">
              {language === 'ar' ? '28 يونيو 1971 · بريتوريا، جنوب أفريقيا' : 'Born: June 28, 1971 · South Africa'}
            </div>
          </div>
        </div>

        {/* Metric 2: Career Disciplines */}
        <div className="flex items-center gap-3 py-2 md:py-0 md:pl-6 rtl:md:pl-0 rtl:md:pr-6">
          <div className="w-10 h-10 rounded bg-[#141820] border border-[#20242A] flex items-center justify-center shrink-0">
            <Briefcase className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="text-xs">
            <div className="font-mono text-[10px] uppercase text-[#A7ADB4] tracking-wider">
              {language === 'ar' ? 'المجالات والقطاعات' : 'CAREER DISCIPLINES'}
            </div>
            <div className="text-xs font-medium text-white leading-relaxed mt-0.5">
              {language === 'ar' 
                ? 'فضاء • سيارات • ذكاء اصطناعي • طاقة • روبوتات • تكنولوجيا عصبية' 
                : 'Aerospace • Automotive • AI • Energy • Robotics • Neurotech'}
            </div>
            <div className="text-[10px] text-[#A7ADB4] font-mono mt-0.5">
              {language === 'ar' ? 'هندسة الأنظمة والتكامل الرأسي' : 'Systems Architecture & Vertical Scale'}
            </div>
          </div>
        </div>

        {/* Metric 3: Major Companies */}
        <div className="flex items-center gap-3 py-2 md:py-0 md:pl-6 rtl:md:pl-0 rtl:md:pr-6">
          <div className="w-10 h-10 rounded bg-[#141820] border border-[#20242A] flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 text-[#E82127]" />
          </div>
          <div className="text-xs">
            <div className="font-mono text-[10px] uppercase text-[#A7ADB4] tracking-wider">
              {language === 'ar' ? 'الشركات الرئيسية' : 'MAJOR VENTURES'}
            </div>
            <div className="text-xs font-semibold text-white leading-relaxed mt-0.5 font-display">
              Tesla • SpaceX • xAI • X • Neuralink • Boring Co.
            </div>
            <div className="text-[10px] text-[#A7ADB4] font-mono mt-0.5">
              {language === 'ar' ? 'أكثر من 150,000 مهندس وعامل عالمياً' : '150,000+ Global Workforce'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
