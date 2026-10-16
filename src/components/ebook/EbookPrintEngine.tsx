/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EBOOK_DATA } from '../../data/ebookContent';
import { useLanguage } from '../../context/LanguageContext';

export const EbookPrintEngine: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <div id="muskera-printable-ebook" className="hidden print:block print:w-full print:bg-white print:text-black font-sans text-sm p-8 leading-relaxed">
      
      {/* Print-only CSS */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 20mm 15mm 20mm 15mm;
          }
          body {
            background: white !important;
            color: black !important;
          }
          .no-print, header, footer, aside, nav {
            display: none !important;
          }
          #muskera-printable-ebook {
            display: block !important;
          }
          .page-break {
            page-break-before: always;
            break-before: page;
          }
          .chapter-title {
            color: #0B0D0F !important;
            border-bottom: 2px solid #E82127;
            padding-bottom: 8px;
            margin-bottom: 16px;
          }
        }
      `}</style>

      {/* Book Cover Page */}
      <div className="min-h-[90vh] flex flex-col justify-between items-center text-center p-8 border-4 border-black mb-12">
        <div className="pt-8 space-y-4">
          <div className="text-xs uppercase tracking-widest font-mono text-neutral-600">
            {isAr ? 'الموسوعة التوثيقية الكبرى والهندسة الشاملة' : 'THE DEFINITIVE DOCUMENTARY & ENGINEERING COMPILATION'}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black pt-4">
            {isAr ? EBOOK_DATA.titleAr : EBOOK_DATA.titleEn}
          </h1>
          <h2 className="text-lg font-medium text-neutral-700 max-w-xl mx-auto pt-2">
            {isAr ? EBOOK_DATA.subtitleAr : EBOOK_DATA.subtitleEn}
          </h2>
        </div>

        {/* Cover Graphic / Image */}
        <div className="my-8 max-w-sm rounded border-2 border-neutral-300 shadow-md overflow-hidden">
          <img 
            src={EBOOK_DATA.coverImage} 
            alt="Cover" 
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="space-y-2 pb-6 border-t border-neutral-300 pt-6 w-full">
          <div className="text-base font-bold text-black">
            {isAr ? `تأليف: ${EBOOK_DATA.authorAr}` : `By: ${EBOOK_DATA.authorEn}`}
          </div>
          <div className="text-xs font-mono text-neutral-600">
            {isAr ? `واتساب المؤلف: ${EBOOK_DATA.contactWhatsApp}` : `Author WhatsApp: ${EBOOK_DATA.contactWhatsApp}`}
          </div>
          <div className="text-[11px] text-neutral-500">
            {isAr ? EBOOK_DATA.editionAr : EBOOK_DATA.editionEn} · {EBOOK_DATA.releaseYear}
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="page-break py-8 space-y-6">
        <h2 className="chapter-title text-2xl font-bold">
          {isAr ? 'فهرس المحتويات' : 'Table of Contents'}
        </h2>
        <div className="space-y-3">
          {EBOOK_DATA.chapters.map(ch => (
            <div key={ch.id} className="flex justify-between items-baseline border-b border-neutral-200 pb-1.5 text-xs">
              <span className="font-semibold">
                {isAr ? `الفصل ${ch.number}: ${ch.titleAr}` : `Chapter ${ch.number}: ${ch.titleEn}`}
              </span>
              <span className="font-mono text-neutral-500">
                {ch.number * 24}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Author Introduction */}
      <div className="page-break py-8 space-y-4">
        <h2 className="chapter-title text-2xl font-bold">
          {isAr ? 'مقدمة المؤلف' : "Author's Preface"}
        </h2>
        <div className="text-justify leading-relaxed whitespace-pre-line text-neutral-800">
          {isAr ? EBOOK_DATA.introductionAr : EBOOK_DATA.introductionEn}
        </div>
      </div>

      {/* Chapters Content */}
      {EBOOK_DATA.chapters.map(ch => (
        <div key={ch.id} className="page-break py-8 space-y-5">
          <div className="text-xs uppercase font-mono tracking-widest text-neutral-500">
            {isAr ? `الفصل رقم ${ch.number}` : `CHAPTER ${ch.number}`}
          </div>
          <h2 className="chapter-title text-2xl font-bold">
            {isAr ? ch.titleAr : ch.titleEn}
          </h2>
          <div className="italic text-neutral-600 text-xs pb-2">
            {isAr ? ch.subtitleAr : ch.subtitleEn}
          </div>

          <div className="text-justify leading-relaxed whitespace-pre-line text-neutral-800 text-sm">
            {isAr ? ch.contentAr : ch.contentEn}
          </div>

          {/* Key Insights Box */}
          <div className="p-4 bg-neutral-100 border border-neutral-300 rounded mt-6 space-y-2">
            <div className="font-bold text-xs uppercase tracking-wider text-black">
              {isAr ? 'الخلاصات الهندسية والاستراتيجية للفصل:' : 'Key Engineering & Strategic Insights:'}
            </div>
            <ul className="list-disc list-inside text-xs text-neutral-700 space-y-1">
              {(isAr ? ch.keyInsightsAr : ch.keyInsightsEn).map((insight, idx) => (
                <li key={idx}>{insight}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Conclusion */}
      <div className="page-break py-8 space-y-4">
        <h2 className="chapter-title text-2xl font-bold">
          {isAr ? 'الخاتمة والرؤية المستقبلية' : 'Epilogue: The Future Vision'}
        </h2>
        <div className="text-justify leading-relaxed whitespace-pre-line text-neutral-800">
          {isAr ? EBOOK_DATA.conclusionAr : EBOOK_DATA.conclusionEn}
        </div>
      </div>

      {/* Colophon & Contact */}
      <div className="page-break py-16 text-center space-y-4 border-t-2 border-black mt-12">
        <div className="text-sm font-bold text-black uppercase tracking-wider">
          {isAr ? 'مجموعة أعمال إيلون ماسك' : 'THE COMPLETE WORKS OF ELON MUSK'}
        </div>
        <div className="text-xs text-neutral-600">
          {isAr ? `تأليف: ${EBOOK_DATA.authorAr}` : `Author: ${EBOOK_DATA.authorEn}`}
        </div>
        <div className="text-xs font-mono text-neutral-600">
          WhatsApp: {EBOOK_DATA.contactWhatsApp}
        </div>
        <div className="text-[10px] text-neutral-400 pt-4">
          © 2026 {EBOOK_DATA.authorEn}. All Rights Reserved. Independent Monograph Edition.
        </div>
      </div>

    </div>
  );
};
