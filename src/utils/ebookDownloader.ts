/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { jsPDF } from 'jspdf';
import { EBOOK_DATA } from '../data/ebookContent';

/**
 * Generates and downloads a direct PDF file using jsPDF.
 */
export function downloadDirectPdf(isArabic: boolean = true): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Page 1: Cover Page
  doc.setFillColor(11, 13, 15); // Dark Obsidian
  doc.rect(0, 0, 210, 297, 'F');

  // Decorative border
  doc.setDrawColor(232, 33, 39); // Red
  doc.setLineWidth(1);
  doc.rect(15, 15, 180, 267);
  doc.setDrawColor(218, 165, 32); // Gold
  doc.setLineWidth(0.5);
  doc.rect(18, 18, 174, 261);

  // Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text('THE COMPLETE WORKS OF', 105, 50, { align: 'center' });
  doc.setFontSize(32);
  doc.setTextColor(218, 165, 32);
  doc.text('ELON MUSK', 105, 65, { align: 'center' });

  // Subtitle
  doc.setTextColor(200, 205, 210);
  doc.setFontSize(11);
  doc.text('Engineering Architecture, Industrial Empire, and the Philosophy of Tomorrow', 105, 80, { align: 'center' });

  // Arabic Title representation
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.text(EBOOK_DATA.titleAr, 105, 100, { align: 'center' });
  doc.setFontSize(10);
  doc.setTextColor(170, 175, 180);
  doc.text(EBOOK_DATA.subtitleAr, 105, 110, { align: 'center' });

  // Center Emblem
  doc.setDrawColor(232, 33, 39);
  doc.line(70, 130, 140, 130);
  doc.setFontSize(9);
  doc.setTextColor(6, 182, 212); // Cyan
  doc.text('SPACE  |  AI  |  ROBOTICS  |  ENERGY  |  NEUROTECH', 105, 136, { align: 'center' });
  doc.setDrawColor(232, 33, 39);
  doc.line(70, 142, 140, 142);

  // Author & Credits
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.text('By Kamal Gafar Zakaria', 105, 190, { align: 'center' });
  doc.setFontSize(12);
  doc.text(`Author: ${EBOOK_DATA.authorAr}`, 105, 200, { align: 'center' });

  doc.setFontSize(10);
  doc.setTextColor(218, 165, 32);
  doc.text(`WhatsApp: ${EBOOK_DATA.contactWhatsApp}`, 105, 212, { align: 'center' });

  doc.setFontSize(9);
  doc.setTextColor(150, 155, 160);
  doc.text(`${EBOOK_DATA.editionEn} - ${EBOOK_DATA.releaseYear}`, 105, 235, { align: 'center' });
  doc.text('384 Documented Pages | 12 Comprehensive Master Chapters', 105, 242, { align: 'center' });

  // Page 2: Table of Contents & Preface
  doc.addPage();
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, 210, 297, 'F');
  doc.setTextColor(20, 25, 30);

  doc.setFontSize(18);
  doc.text('TABLE OF CONTENTS', 20, 25);
  doc.setDrawColor(232, 33, 39);
  doc.setLineWidth(0.8);
  doc.line(20, 28, 90, 28);

  let y = 38;
  doc.setFontSize(10);
  EBOOK_DATA.chapters.forEach(ch => {
    doc.setTextColor(232, 33, 39);
    doc.text(`Chapter ${ch.number}:`, 20, y);
    doc.setTextColor(40, 45, 50);
    doc.text(ch.titleEn, 45, y);
    y += 8;
  });

  // Author Preface on Page 2
  y += 10;
  doc.setFontSize(14);
  doc.setTextColor(20, 25, 30);
  doc.text("AUTHOR'S PREFACE", 20, y);
  doc.line(20, y + 2, 70, y + 2);
  y += 10;

  doc.setFontSize(9);
  doc.setTextColor(70, 75, 80);
  const introLines = doc.splitTextToSize(EBOOK_DATA.introductionEn, 170);
  doc.text(introLines, 20, y);

  // Subsequent Pages: Each Chapter
  EBOOK_DATA.chapters.forEach(ch => {
    doc.addPage();
    
    // Header
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('MUSKERA | The Complete Works of Elon Musk - By Kamal Gafar Zakaria', 20, 15);
    doc.line(20, 17, 190, 17);

    // Chapter Title
    doc.setFontSize(10);
    doc.setTextColor(232, 33, 39);
    doc.text(`CHAPTER ${ch.number}`, 20, 26);

    doc.setFontSize(15);
    doc.setTextColor(15, 20, 25);
    doc.text(ch.titleEn, 20, 34);

    doc.setFontSize(9);
    doc.setTextColor(100, 105, 110);
    doc.text(ch.subtitleEn, 20, 41);
    doc.line(20, 44, 190, 44);

    // Executive Summary
    doc.setFillColor(245, 247, 250);
    doc.rect(20, 48, 170, 22, 'F');
    doc.setFontSize(8.5);
    doc.setTextColor(40, 45, 50);
    const summaryLines = doc.splitTextToSize(`Summary: ${ch.summaryEn}`, 162);
    doc.text(summaryLines, 24, 55);

    // Chapter Content
    doc.setFontSize(9);
    doc.setTextColor(50, 55, 60);
    const contentLines = doc.splitTextToSize(ch.contentEn, 170);
    doc.text(contentLines, 20, 78);

    // Key Insights Box
    const insightsY = 175;
    doc.setFillColor(250, 248, 240);
    doc.rect(20, insightsY, 170, 36, 'F');
    doc.setDrawColor(218, 165, 32);
    doc.setLineWidth(0.5);
    doc.rect(20, insightsY, 170, 36);

    doc.setFontSize(9);
    doc.setTextColor(180, 120, 0);
    doc.text('Key Engineering Insights:', 24, insightsY + 6);

    doc.setFontSize(8);
    doc.setTextColor(60, 65, 70);
    let insightLineY = insightsY + 12;
    ch.keyInsightsEn.forEach(insight => {
      const splitInsight = doc.splitTextToSize(`* ${insight}`, 160);
      doc.text(splitInsight, 24, insightLineY);
      insightLineY += 7;
    });

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Author: Kamal Gafar Zakaria (WhatsApp: ${EBOOK_DATA.contactWhatsApp})`, 20, 285);
    doc.text(`Page ${ch.number + 2}`, 180, 285);
  });

  // Epilogue Page
  doc.addPage();
  doc.setFontSize(16);
  doc.setTextColor(15, 20, 25);
  doc.text('EPILOGUE & CONCLUSION', 20, 25);
  doc.setDrawColor(232, 33, 39);
  doc.line(20, 28, 85, 28);

  doc.setFontSize(9.5);
  doc.setTextColor(50, 55, 60);
  const epilogueLines = doc.splitTextToSize(EBOOK_DATA.conclusionEn, 170);
  doc.text(epilogueLines, 20, 38);

  // Author signature box
  doc.setFillColor(245, 245, 245);
  doc.rect(20, 140, 170, 50, 'F');
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Kamal Gafar Zakaria', 105, 155, { align: 'center' });
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('Technology Author & Systems Researcher', 105, 163, { align: 'center' });
  doc.setTextColor(218, 165, 32);
  doc.text(`Direct Contact & WhatsApp: ${EBOOK_DATA.contactWhatsApp}`, 105, 172, { align: 'center' });

  // Save the PDF file
  const filename = isArabic
    ? 'مجموعة_أعمال_إيلون_ماسك_كمال_جعفر_زكريا.pdf'
    : 'The_Complete_Works_of_Elon_Musk_by_Kamal_Gafar_Zakaria.pdf';
  doc.save(filename);
}

/**
 * Downloads a complete, standalone, self-contained HTML book file
 * formatted with CSS for instant reading offline or browser-printing to PDF.
 */
export function downloadStandaloneBookDocument(): void {
  const htmlContent = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>${EBOOK_DATA.titleAr} - تأليف ${EBOOK_DATA.authorAr}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');
    body {
      font-family: 'Cairo', sans-serif;
      line-height: 1.8;
      background: #0B0D0F;
      color: #E5E7EB;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: #101318;
      border: 1px solid #20242A;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.8);
    }
    .cover {
      text-align: center;
      padding: 60px 20px;
      border-bottom: 2px solid #E82127;
      margin-bottom: 40px;
    }
    h1 {
      font-size: 36px;
      color: #FFFFFF;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 20px;
      color: #D4AF37;
      margin-bottom: 25px;
    }
    .author-badge {
      font-size: 16px;
      font-weight: bold;
      color: #FFFFFF;
      background: #141820;
      display: inline-block;
      padding: 8px 24px;
      border-radius: 30px;
      border: 1px solid #E82127;
      margin-bottom: 15px;
    }
    .whatsapp {
      font-size: 14px;
      color: #10B981;
      font-family: monospace;
    }
    .chapter {
      margin-bottom: 50px;
      padding-bottom: 40px;
      border-bottom: 1px solid #20242A;
    }
    .chapter-num {
      color: #E82127;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
    }
    .chapter-title {
      font-size: 24px;
      color: #FFFFFF;
      margin-top: 5px;
      margin-bottom: 15px;
    }
    .summary {
      background: #050505;
      padding: 15px;
      border-right: 4px solid #06B6D4;
      font-size: 14px;
      color: #9CA3AF;
      margin-bottom: 20px;
    }
    .content {
      font-size: 15px;
      text-align: justify;
      color: #D1D5DB;
      white-space: pre-line;
    }
    .insights {
      background: #0B0E14;
      border: 1px solid #D4AF37;
      padding: 20px;
      border-radius: 8px;
      margin-top: 25px;
    }
    .insights h4 {
      color: #D4AF37;
      margin-top: 0;
      font-size: 15px;
    }
    .insights ul {
      margin: 0;
      padding-right: 20px;
      font-size: 14px;
      color: #E5E7EB;
    }
    .print-btn {
      background: #E82127;
      color: white;
      border: none;
      padding: 12px 28px;
      font-size: 15px;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      margin-bottom: 30px;
    }
    @media print {
      body { background: white; color: black; }
      .container { background: white; border: none; box-shadow: none; color: black; }
      .print-btn { display: none; }
      .chapter { page-break-before: always; border: none; color: black; }
      .content { color: black; }
      h1, h2, .chapter-title { color: black; }
      .summary, .insights { background: #f5f5f5; color: black; }
    }
  </style>
</head>
<body>
  <div class="container">
    <button class="print-btn" onclick="window.print()">طباعة أو حفظ الكتاب كـ PDF</button>

    <div class="cover">
      <h1>${EBOOK_DATA.titleAr}</h1>
      <h2>${EBOOK_DATA.subtitleAr}</h2>
      <div class="author-badge">تأليف: ${EBOOK_DATA.authorAr}</div>
      <div class="whatsapp">واتساب المؤلف: ${EBOOK_DATA.contactWhatsApp}</div>
      <div style="font-size: 13px; color: #9CA3AF; margin-top: 15px;">${EBOOK_DATA.editionAr} · ${EBOOK_DATA.releaseYear}</div>
    </div>

    <div class="chapter">
      <div class="chapter-num">مقدمة وتصدير</div>
      <div class="chapter-title">فلسفة الموسوعة الشاملة</div>
      <div class="content">${EBOOK_DATA.introductionAr}</div>
    </div>

    ${EBOOK_DATA.chapters.map(ch => `
      <div class="chapter">
        <div class="chapter-num">الفصل رقم ${ch.number}</div>
        <div class="chapter-title">${ch.titleAr}</div>
        <div style="font-size: 14px; color: #9CA3AF; margin-bottom: 10px;">${ch.subtitleAr}</div>
        <div class="summary"><strong>الملخص:</strong> ${ch.summaryAr}</div>
        <div class="content">${ch.contentAr}</div>
        <div class="insights">
          <h4>الخلاصات الهندسية والاستراتيجية:</h4>
          <ul>
            ${ch.keyInsightsAr.map(ins => `<li>${ins}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('')}

    <div class="chapter">
      <div class="chapter-num">خاتمة الكتاب</div>
      <div class="chapter-title">نحو حضارة كوكبية مستدامة</div>
      <div class="content">${EBOOK_DATA.conclusionAr}</div>
      <div style="text-align: center; margin-top: 40px; font-size: 13px; color: #9CA3AF;">
        جميع الحقوق محفوظة للمؤلف ${EBOOK_DATA.authorAr} © 2026<br>
        واتساب: ${EBOOK_DATA.contactWhatsApp}
      </div>
    </div>
  </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'مجموعة_أعمال_إيلون_ماسك_كمال_جعفر_زكريا.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
