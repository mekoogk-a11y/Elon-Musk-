/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EBOOK_DATA, EbookChapter } from '../../data/ebookContent';
import { 
  X, BookOpen, Download, Phone, ChevronRight, ChevronLeft, 
  Menu, Sun, Moon, Type, ShieldCheck, Share2, Sparkles, Printer
} from 'lucide-react';

interface EbookReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ReaderTheme = 'dark' | 'sepia' | 'light';

export const EbookReaderModal: React.FC<EbookReaderModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  
  // Navigation state: 'intro' | number (1-12) | 'conclusion'
  const [currentSection, setCurrentSection] = useState<'intro' | number | 'conclusion'>('intro');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [readerTheme, setReaderTheme] = useState<ReaderTheme>('dark');

  if (!isOpen) return null;

  const handlePrintPdf = () => {
    window.print();
  };

  const getThemeClasses = () => {
    switch (readerTheme) {
      case 'sepia':
        return 'bg-[#FBF0D9] text-[#433422] border-[#E8D7B8]';
      case 'light':
        return 'bg-[#FFFFFF] text-[#111827] border-[#E5E7EB]';
      default:
        return 'bg-[#0B0D0F] text-[#FFFFFF] border-[#20242A]';
    }
  };

  const getContentThemeClasses = () => {
    switch (readerTheme) {
      case 'sepia':
        return 'text-[#433422]';
      case 'light':
        return 'text-[#1F2937]';
      default:
        return 'text-[#E5E7EB]';
    }
  };

  const getFontSizeClasses = () => {
    switch (fontSize) {
      case 'large':
        return 'text-base sm:text-lg leading-relaxed';
      case 'xlarge':
        return 'text-lg sm:text-xl leading-loose';
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  const currentChapter = typeof currentSection === 'number' 
    ? EBOOK_DATA.chapters.find(c => c.number === currentSection) 
    : null;

  const goToNext = () => {
    if (currentSection === 'intro') {
      setCurrentSection(1);
    } else if (typeof currentSection === 'number') {
      if (currentSection < EBOOK_DATA.chapters.length) {
        setCurrentSection(currentSection + 1);
      } else {
        setCurrentSection('conclusion');
      }
    }
  };

  const goToPrev = () => {
    if (currentSection === 'conclusion') {
      setCurrentSection(EBOOK_DATA.chapters.length);
    } else if (typeof currentSection === 'number') {
      if (currentSection > 1) {
        setCurrentSection(currentSection - 1);
      } else {
        setCurrentSection('intro');
      }
    }
  };

  const whatsappMessage = encodeURIComponent(
    isAr 
      ? `مرحباً أستاذ كمال جعفر زكريا، أود طلب وشراء النسخة الأصلية الكاملة من كتاب "مجموعة أعمال إيلون ماسك".`
      : `Hello Mr. Kamal Gafar Zakaria, I would like to inquire about purchasing the complete edition of "The Complete Works of Elon Musk".`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      <div className={`w-full max-w-5xl h-[94vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden relative ${getThemeClasses()} transition-colors duration-200`}>
        
        {/* Top Control Bar */}
        <header className="px-4 sm:px-6 py-3 border-b border-inherit flex items-center justify-between shrink-0 bg-black/10 backdrop-blur-sm">
          
          {/* Left: Table of contents trigger & Book title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Table of Contents"
            >
              <Menu className="w-4 h-4" />
              <span className="hidden sm:inline">{isAr ? 'فهرس الفصول' : 'Contents'}</span>
            </button>

            <div className="border-l border-inherit pl-3 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-3">
              <div className="font-bold text-xs sm:text-sm font-display truncate max-w-[200px] sm:max-w-md">
                {isAr ? EBOOK_DATA.titleAr : EBOOK_DATA.titleEn}
              </div>
              <div className="text-[10px] opacity-70 font-mono">
                {isAr ? `تأليف: ${EBOOK_DATA.authorAr}` : `By: ${EBOOK_DATA.authorEn}`}
              </div>
            </div>
          </div>

          {/* Right: Actions, Themes, Font Size & PDF Print */}
          <div className="flex items-center gap-2">
            
            {/* Font Size Selector */}
            <button
              onClick={() => {
                if (fontSize === 'normal') setFontSize('large');
                else if (fontSize === 'large') setFontSize('xlarge');
                else setFontSize('normal');
              }}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-xs font-mono flex items-center gap-1"
              title="Adjust Font Size"
            >
              <Type className="w-3.5 h-3.5" />
              <span className="hidden md:inline uppercase text-[10px]">{fontSize}</span>
            </button>

            {/* Reading Theme Toggle */}
            <button
              onClick={() => {
                if (readerTheme === 'dark') setReaderTheme('sepia');
                else if (readerTheme === 'sepia') setReaderTheme('light');
                else setReaderTheme('dark');
              }}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-xs font-mono flex items-center gap-1"
              title="Toggle Theme (Dark / Sepia / Light)"
            >
              {readerTheme === 'dark' ? <Moon className="w-3.5 h-3.5 text-cyan-400" /> : readerTheme === 'sepia' ? <Sparkles className="w-3.5 h-3.5 text-amber-600" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
            </button>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrintPdf}
              className="px-3 py-1.5 rounded bg-[#E82127] text-white hover:bg-[#d01b20] transition-colors text-xs font-medium flex items-center gap-1.5 shadow-sm"
              title="Download or Print full book as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isAr ? 'تحميل PDF' : 'Save PDF'}</span>
            </button>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors ml-1"
              title="Close Reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </header>

        {/* Reader Body (with optional TOC Drawer) */}
        <div className="flex-1 flex overflow-hidden relative">
          
          {/* Table of Contents Drawer */}
          <AnimatePresence>
            {isTocOpen && (
              <motion.aside
                initial={{ x: isAr ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: isAr ? 300 : -300, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-72 sm:w-80 border-r border-inherit rtl:border-r-0 rtl:border-l shrink-0 bg-black/20 backdrop-blur-md overflow-y-auto p-4 space-y-4 z-20"
              >
                <div className="flex items-center justify-between border-b border-inherit pb-2 text-xs font-mono font-bold uppercase">
                  <span>{isAr ? 'فهرس فصول الكتاب' : 'Table of Contents'}</span>
                  <button onClick={() => setIsTocOpen(false)} className="p-1 hover:opacity-75">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-1 text-xs">
                  {/* Introduction */}
                  <button
                    onClick={() => { setCurrentSection('intro'); setIsTocOpen(false); }}
                    className={`w-full text-left rtl:text-right p-2.5 rounded transition-colors flex items-center justify-between ${
                      currentSection === 'intro' ? 'bg-[#E82127] text-white font-bold' : 'hover:bg-white/10'
                    }`}
                  >
                    <span>{isAr ? 'المقدمة وتصدير المؤلف' : "Author's Preface"}</span>
                  </button>

                  {/* 12 Chapters */}
                  {EBOOK_DATA.chapters.map(ch => (
                    <button
                      key={ch.id}
                      onClick={() => { setCurrentSection(ch.number); setIsTocOpen(false); }}
                      className={`w-full text-left rtl:text-right p-2.5 rounded transition-colors flex items-center justify-between ${
                        currentSection === ch.number ? 'bg-[#E82127] text-white font-bold' : 'hover:bg-white/10'
                      }`}
                    >
                      <div className="truncate pr-2 rtl:pr-0 rtl:pl-2">
                        <span className="font-mono text-[11px] opacity-75 mr-1 rtl:mr-0 rtl:ml-1">
                          {ch.number}.
                        </span>
                        <span>{isAr ? ch.titleAr : ch.titleEn}</span>
                      </div>
                    </button>
                  ))}

                  {/* Conclusion */}
                  <button
                    onClick={() => { setCurrentSection('conclusion'); setIsTocOpen(false); }}
                    className={`w-full text-left rtl:text-right p-2.5 rounded transition-colors flex items-center justify-between ${
                      currentSection === 'conclusion' ? 'bg-[#E82127] text-white font-bold' : 'hover:bg-white/10'
                    }`}
                  >
                    <span>{isAr ? 'الخاتمة والرؤية المستقبلية' : 'Epilogue'}</span>
                  </button>
                </div>

                {/* Author Info Card */}
                <div className="pt-4 border-t border-inherit text-[11px] space-y-2 opacity-80 font-mono">
                  <div>{isAr ? `تأليف: ${EBOOK_DATA.authorAr}` : `By: ${EBOOK_DATA.authorEn}`}</div>
                  <div>واتساب: {EBOOK_DATA.contactWhatsApp}</div>
                  <div>{isAr ? EBOOK_DATA.editionAr : EBOOK_DATA.editionEn}</div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Main Book Page Content Area */}
          <main className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 max-w-4xl mx-auto space-y-8">
            
            {/* INTRO VIEW */}
            {currentSection === 'intro' && (
              <article className="space-y-6">
                
                {/* Book Cover Showcase Card */}
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl bg-black/20 border border-inherit shadow-lg mb-8">
                  <img 
                    src={EBOOK_DATA.coverImage} 
                    alt={EBOOK_DATA.titleEn}
                    className="w-48 sm:w-56 rounded-lg shadow-2xl border border-white/20 shrink-0" 
                  />
                  <div className="space-y-3 text-center sm:text-left rtl:sm:text-right">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#E82127] text-white font-bold">
                      {isAr ? EBOOK_DATA.priceTag : 'Luxury Collector Edition'}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight">
                      {isAr ? EBOOK_DATA.titleAr : EBOOK_DATA.titleEn}
                    </h1>
                    <p className="text-xs sm:text-sm opacity-80 font-medium">
                      {isAr ? EBOOK_DATA.subtitleAr : EBOOK_DATA.subtitleEn}
                    </p>
                    <div className="text-xs font-mono opacity-70 pt-1">
                      {isAr ? `تأليف: ${EBOOK_DATA.authorAr}` : `By: ${EBOOK_DATA.authorEn}`} · {EBOOK_DATA.contactWhatsApp}
                    </div>
                    
                    <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start rtl:sm:justify-end">
                      <a
                        href={`https://wa.me/249919980435?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{isAr ? 'طلب وشراء عبر واتساب' : 'Purchase via WhatsApp'}</span>
                      </a>
                      <button
                        onClick={handlePrintPdf}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#141820] hover:bg-[#20242A] text-white text-xs font-mono border border-inherit transition-colors"
                      >
                        <Download className="w-3.5 h-3.5 text-[#E82127]" />
                        <span>{isAr ? 'تحميل بصيغة PDF' : 'Download PDF'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-b border-inherit pb-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#E82127]">
                    {isAr ? 'تصدير ومقدمة الكتاب' : 'AUTHOR PREFACE'}
                  </div>
                  <h2 className="text-2xl font-bold font-display mt-1">
                    {isAr ? 'فلسفة الموسوعة الشاملة' : 'The Architecture of the Monograph'}
                  </h2>
                </div>

                <div className={`whitespace-pre-line text-justify ${getContentThemeClasses()} ${getFontSizeClasses()}`}>
                  {isAr ? EBOOK_DATA.introductionAr : EBOOK_DATA.introductionEn}
                </div>
              </article>
            )}

            {/* CHAPTER VIEW */}
            {currentChapter && (
              <article className="space-y-6">
                <div className="border-b border-inherit pb-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#E82127] uppercase">
                    <span>{isAr ? `الفصل ${currentChapter.number} من 12` : `Chapter ${currentChapter.number} of 12`}</span>
                    <span className="opacity-75">{EBOOK_DATA.titleEn}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display">
                    {isAr ? currentChapter.titleAr : currentChapter.titleEn}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono opacity-75">
                    {isAr ? currentChapter.subtitleAr : currentChapter.subtitleEn}
                  </p>
                </div>

                {/* Chapter Abstract */}
                <div className="p-4 rounded-lg bg-black/10 border border-inherit text-xs italic opacity-90 leading-relaxed">
                  <span className="font-bold not-italic mr-2 rtl:mr-0 rtl:ml-2 font-mono text-[#E82127]">
                    {isAr ? 'ملخص تنفيذي:' : 'Executive Summary:'}
                  </span>
                  {isAr ? currentChapter.summaryAr : currentChapter.summaryEn}
                </div>

                {/* Main Prose Content */}
                <div className={`whitespace-pre-line text-justify ${getContentThemeClasses()} ${getFontSizeClasses()}`}>
                  {isAr ? currentChapter.contentAr : currentChapter.contentEn}
                </div>

                {/* Key Insights Box */}
                <div className="p-5 rounded-xl bg-black/20 border border-inherit space-y-3 mt-8">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-[#E82127]">
                    <Sparkles className="w-4 h-4" />
                    <span>{isAr ? 'الخلاصات الهندسية والاستراتيجية للفصل:' : 'Key Engineering Insights:'}</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {(isAr ? currentChapter.keyInsightsAr : currentChapter.keyInsightsEn).map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E82127] shrink-0 mt-2" />
                        <span className="leading-relaxed opacity-90">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )}

            {/* CONCLUSION VIEW */}
            {currentSection === 'conclusion' && (
              <article className="space-y-6">
                <div className="border-b border-inherit pb-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#E82127]">
                    {isAr ? 'خاتمة المطاف' : 'EPILOGUE'}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display mt-1">
                    {isAr ? 'نحو حضارة كوكبية مستدامة' : 'Toward an Interplanetary Civilization'}
                  </h2>
                </div>

                <div className={`whitespace-pre-line text-justify ${getContentThemeClasses()} ${getFontSizeClasses()}`}>
                  {isAr ? EBOOK_DATA.conclusionAr : EBOOK_DATA.conclusionEn}
                </div>

                {/* Commercial Colophon and Author Contact Box */}
                <div className="p-6 rounded-xl bg-black/25 border-2 border-inherit text-center space-y-3 mt-10">
                  <div className="text-lg font-bold font-display uppercase tracking-wider">
                    {isAr ? EBOOK_DATA.titleAr : EBOOK_DATA.titleEn}
                  </div>
                  <div className="text-xs opacity-75 font-mono">
                    {isAr ? `تأليف وإعداد: ${EBOOK_DATA.authorAr}` : `Authored by: ${EBOOK_DATA.authorEn}`}
                  </div>
                  <div className="text-xs font-mono text-cyan-400">
                    WhatsApp: {EBOOK_DATA.contactWhatsApp}
                  </div>
                  <div className="pt-2 flex justify-center gap-3">
                    <a
                      href={`https://wa.me/249919980435?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{isAr ? 'شراء النسخة الكاملة عبر واتساب' : 'Order via WhatsApp'}</span>
                    </a>
                  </div>
                </div>
              </article>
            )}

          </main>
        </div>

        {/* Bottom Navigation Toolbar */}
        <footer className="px-6 py-3 border-t border-inherit flex items-center justify-between shrink-0 bg-black/10 backdrop-blur-sm text-xs font-mono">
          <button
            onClick={goToPrev}
            disabled={currentSection === 'intro'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{isAr ? 'السابق' : 'Previous'}</span>
          </button>

          <div className="text-[11px] opacity-75">
            {currentSection === 'intro' 
              ? (isAr ? 'المقدمة' : 'Preface')
              : currentSection === 'conclusion' 
              ? (isAr ? 'الخاتمة' : 'Epilogue')
              : (isAr ? `الفصل ${currentSection} / 12` : `Chapter ${currentSection} of 12`)}
          </div>

          <button
            onClick={goToNext}
            disabled={currentSection === 'conclusion'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <span>{isAr ? 'التالي' : 'Next'}</span>
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </footer>

      </div>
    </div>
  );
};
