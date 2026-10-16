/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface SectionTarget {
  id: string;
  labelEn: string;
  labelAr: string;
}

const SECTIONS: SectionTarget[] = [
  { id: 'hero', labelEn: 'Overview', labelAr: 'المقدمة' },
  { id: 'timeline', labelEn: 'Timeline (1971–2026)', labelAr: 'الخط الزمني' },
  { id: 'companies', labelEn: 'Ventures & Tech', labelAr: 'الشركات والصروح' },
  { id: 'techmap', labelEn: 'Technology Map', labelAr: 'خريطة التكنولوجيا' },
  { id: 'firstprinciples', labelEn: 'First Principles', labelAr: 'المبادئ الأولى' },
  { id: 'failures', labelEn: 'Failures & Iteration', labelAr: 'الإخفاق والتطوير' },
  { id: 'business', labelEn: 'Business Models', labelAr: 'نماذج الأعمال' },
  { id: 'ebook', labelEn: 'The Master E-Book', labelAr: 'الكتاب الإلكتروني الفاخر' },
  { id: 'news', labelEn: '2026 Intelligence', labelAr: 'أخبار 2026' },
  { id: 'research', labelEn: 'Research Monographs', labelAr: 'مكتبة الأبحاث' },
  { id: 'sources', labelEn: 'Verified Sources', labelAr: 'المصادر والوثائق' },
];

export const ScrollProgressIndicator: React.FC = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Detect active section
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside 
      aria-label="Page scroll progress and section navigator"
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-2.5 select-none pointer-events-auto"
    >
      {/* HUD Header with Reading Progress Percentage */}
      <div className="bg-[#0B0D0F]/90 backdrop-blur-md border border-[#20242A] px-2 py-1 rounded text-[10px] font-mono tracking-wider text-[#A7ADB4] flex items-center gap-1.5 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E82127]" />
        <span className="tabular-nums font-semibold text-white">{Math.round(scrollProgress)}%</span>
      </div>

      {/* Rail & Nodes Container */}
      <div className="relative bg-[#0B0D0F]/80 backdrop-blur-md border border-[#20242A] py-3 px-2 rounded-full flex flex-col items-center gap-3 shadow-xl">
        
        {/* Ambient progress line */}
        <div className="absolute top-4 bottom-4 w-[1px] bg-[#20242A] left-1/2 -translate-x-1/2" />
        
        {/* Dynamic active height fill line */}
        <motion.div 
          className="absolute top-4 w-[1.5px] bg-[#E82127] left-1/2 -translate-x-1/2 origin-top rounded-full"
          style={{
            height: `${Math.min(100, Math.max(0, (scrollProgress / 100) * 85))}%`
          }}
        />

        {SECTIONS.map((sec, index) => {
          const isActive = activeSection === sec.id;
          const isHovered = hoveredSection === sec.id;

          return (
            <div
              key={sec.id}
              className="relative flex items-center justify-center group cursor-pointer"
              onMouseEnter={() => setHoveredSection(sec.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => scrollToSection(sec.id)}
            >
              {/* Flyout Label on Hover or Active state */}
              <AnimatePresence>
                {(isHovered || (isActive && hoveredSection === null && false)) && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 5, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-7 bg-[#0B0D0F] border border-[#20242A] text-white px-2.5 py-1 rounded text-xs font-mono tracking-wider whitespace-nowrap shadow-xl flex items-center gap-2 pointer-events-none"
                  >
                    <span className="text-[#E82127] font-bold text-[10px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{language === 'ar' ? sec.labelAr : sec.labelEn}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Node dot / indicator */}
              <div 
                className={`relative z-10 transition-all duration-200 rounded-full flex items-center justify-center ${
                  isActive 
                    ? 'w-3 h-3 bg-[#E82127] shadow-[0_0_10px_rgba(232,33,39,0.8)] ring-2 ring-[#E82127]/30' 
                    : 'w-2 h-2 bg-[#20242A] hover:bg-white hover:scale-125'
                }`}
              >
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
