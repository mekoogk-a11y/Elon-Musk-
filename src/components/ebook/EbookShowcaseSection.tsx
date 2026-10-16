/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { EBOOK_DATA } from '../../data/ebookContent';
import { EbookReaderModal } from './EbookReaderModal';
import { 
  BookOpen, Download, Phone, CheckCircle2, 
  Sparkles, ShieldCheck, ArrowRight, Layers, FileText
} from 'lucide-react';

import { downloadDirectPdf, downloadStandaloneBookDocument } from '../../utils/ebookDownloader';

export const EbookShowcaseSection: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const whatsappMessage = encodeURIComponent(
    isAr 
      ? `مرحباً أستاذ كمال جعفر زكريا، أود طلب وشراء النسخة الكاملة من كتاب "مجموعة أعمال إيلون ماسك".`
      : `Hello Mr. Kamal Gafar Zakaria, I would like to purchase the complete edition of "The Complete Works of Elon Musk".`
  );

  const handleDownloadPdf = () => {
    try {
      downloadDirectPdf(isAr);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (e) {
      console.warn('Fallback to print dialog', e);
      window.print();
    }
  };

  return (
    <section id="ebook" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#20242A] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#E82127]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-3 mb-12 text-center sm:text-left rtl:sm:text-right">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-400 bg-[#0B0D0F] border border-amber-500/30 px-3 py-1 rounded">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isAr ? 'الإصدار الوثائقي الفاخر المعتمد' : 'EXCLUSIVE DOCUMENTARY MONOGRAPH'}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display">
          {isAr ? EBOOK_DATA.titleAr : EBOOK_DATA.titleEn}
        </h2>
        <p className="text-sm text-[#A7ADB4] max-w-2xl leading-relaxed">
          {isAr ? EBOOK_DATA.subtitleAr : EBOOK_DATA.subtitleEn}
        </p>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#0B0D0F] border border-[#20242A] rounded-2xl p-6 sm:p-10 relative shadow-2xl">
        
        {/* Left: 3D Luxury Hardcover Mockup (Cols 1-5) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <motion.div 
            whileHover={{ rotateY: -8, rotateX: 4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ perspective: 1000 }}
            className="relative cursor-pointer group"
            onClick={() => setIsReaderOpen(true)}
          >
            {/* Ambient drop shadow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-red-500/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
            
            {/* Realistic Hardcover Frame */}
            <div className="relative rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-w-xs sm:max-w-sm">
              <img 
                src={EBOOK_DATA.coverImage} 
                alt={EBOOK_DATA.titleEn}
                className="w-full h-auto object-cover" 
              />
              
              {/* Glossy Spine effect overlay */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-white/20 via-transparent to-black/30 pointer-events-none" />
            </div>

            {/* Tap to Read Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[11px] font-mono text-white flex items-center gap-1.5 whitespace-nowrap shadow-lg">
              <BookOpen className="w-3.5 h-3.5 text-[#E82127]" />
              <span>{isAr ? 'انقر لفتح وقراءة الكتاب' : 'Click to Open Reader'}</span>
            </div>
          </motion.div>

          <div className="text-[11px] font-mono text-[#A7ADB4] text-center mt-4">
            {isAr ? `تأليف: ${EBOOK_DATA.authorAr}` : `By: ${EBOOK_DATA.authorEn}`} · {EBOOK_DATA.editionAr}
          </div>
        </div>

        {/* Right: Book Details, Value, Chapters, & Actions (Cols 6-12) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#E82127] text-white text-[11px] font-mono font-bold uppercase">
              {isAr ? EBOOK_DATA.priceTag : 'Luxury Collector Edition'}
            </span>
            <span className="px-2.5 py-1 rounded bg-[#141820] border border-[#20242A] text-cyan-400 text-[11px] font-mono">
              {isAr ? '384 صفحة موثقة' : '384 Documented Pages'}
            </span>
            <span className="px-2.5 py-1 rounded bg-[#141820] border border-[#20242A] text-[#A7ADB4] text-[11px] font-mono">
              {isAr ? '12 فصلاً هندسياً شاملاً' : '12 Master Chapters'}
            </span>
            <span className="px-2.5 py-1 rounded bg-[#141820] border border-[#20242A] text-amber-400 text-[11px] font-mono">
              PDF & Digital Reader
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              {isAr ? 'الموسوعة الشاملة لمسيرة وهندسة إيلون ماسك' : 'The Definitive Compendium of the Musk Empire'}
            </h3>
            <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed">
              {isAr 
                ? 'كتاب فريد من نوعه يوثق بالتحليل الفيزيائي والرياضي كل تجربة هندسية واستثمارية خاضها ماسك، من بدايات البرمجة وZip2 وباي بال، إلى معززات سبيس إكس العملاقة، ومصانع تيسلا الخارقة، وشبكة ستارلينك الكوكبية، والواجهات الدماغية لنيورالينك، وعقول xAI الاصطناعية.'
                : 'An authoritative technical monograph analyzing every engineering venture, physical breakthrough, manufacturing paradigm, and philosophical principle underpinning the global technological conglomerate of Elon Musk.'}
            </p>
          </div>

          {/* Quick Chapters Showcase Grid */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isAr ? 'أبرز فصول ومباحث الكتاب:' : 'KEY CHAPTERS & MONOGRAPHS:'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#A7ADB4]">
              {EBOOK_DATA.chapters.slice(0, 6).map(ch => (
                <div key={ch.id} className="p-2.5 rounded bg-[#050505] border border-[#20242A] flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-[#141820] text-[#E82127] flex items-center justify-center shrink-0 font-bold text-[10px]">
                    {ch.number}
                  </span>
                  <span className="truncate text-white">
                    {isAr ? ch.titleAr : ch.titleEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Author & Verification Card */}
          <div className="p-4 rounded-xl bg-[#050505] border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <div className="font-bold text-white font-display">
                {isAr ? `تأليف: ${EBOOK_DATA.authorAr}` : `Author: ${EBOOK_DATA.authorEn}`}
              </div>
              <div className="text-[11px] text-[#A7ADB4] font-mono">
                {isAr ? 'باحث ومؤرخ متخصص في هندسة التكنولوجيا المتقدمة' : 'Advanced Technology Systems Researcher'}
              </div>
            </div>
            <a
              href={`https://wa.me/249919980435?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-mono text-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp: {EBOOK_DATA.contactWhatsApp}</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            
            {/* Open Reader */}
            <button
              onClick={() => setIsReaderOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <BookOpen className="w-4 h-4 text-black" />
              <span>{isAr ? 'فتح وقراءة الكتاب الآن' : 'Open Digital Reader'}</span>
            </button>

            {/* Direct PDF Download */}
            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-2 px-5 py-3 rounded bg-[#050505] border border-[#20242A] text-white font-medium text-xs tracking-wider uppercase hover:border-[#E82127] hover:text-[#E82127] transition-colors"
            >
              <Download className="w-4 h-4 text-[#E82127]" />
              <span>{isAr ? 'تحميل مباشر PDF' : 'Download Direct PDF'}</span>
            </button>

            {/* Standalone Offline Document Download */}
            <button
              onClick={() => downloadStandaloneBookDocument()}
              className="flex items-center gap-1.5 px-4 py-3 rounded bg-[#141820] border border-[#20242A] text-[#A7ADB4] hover:text-white text-xs font-mono transition-colors"
              title={isAr ? 'تحميل كملف كتاب مستقل للمطالعة بدون إنترنت' : 'Download standalone offline book'}
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isAr ? 'نسخة كاملة (HTML)' : 'Offline Book'}</span>
            </button>

            {/* Buy via WhatsApp */}
            <a
              href={`https://wa.me/249919980435?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>{isAr ? 'طلب الشراء عبر واتساب' : 'Purchase via WhatsApp'}</span>
            </a>

          </div>

          {/* Download Success Toast Notice */}
          {downloadSuccess && (
            <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {isAr 
                  ? 'تم بدء تحميل ملف الكتاب بصيغة PDF بنجاح! إذا رغبت بنسخة مطبوعة فائقة الوضوح، يمكنك أيضاً الضغط على زر الطباعة داخل القارئ.' 
                  : 'PDF download started successfully! You can also use the print dialog inside the reader for custom high-res vector output.'}
              </span>
            </div>
          )}

        </div>

      </div>

      {/* Reader Modal */}
      <EbookReaderModal 
        isOpen={isReaderOpen} 
        onClose={() => setIsReaderOpen(false)} 
      />

    </section>
  );
};
