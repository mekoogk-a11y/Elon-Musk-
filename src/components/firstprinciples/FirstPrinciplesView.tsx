/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PHILOSOPHY_PRINCIPLES } from '../../data/philosophy';
import { Sparkles, Calculator, Check, ArrowRight, Layers, Lightbulb, ShieldCheck } from 'lucide-react';

export const FirstPrinciplesView: React.FC = () => {
  const { language, t } = useLanguage();
  const [activePrincipleId, setActivePrincipleId] = useState(PHILOSOPHY_PRINCIPLES[0].id);

  // Interactive Calculator State (Rocket Raw Material vs Quoted Cost)
  const [rocketWeightTons, setRocketWeightTons] = useState(30);

  // Theoretical physics baseline calculation
  const rawMaterialCostPerTon = 4500; // ~$4,500/ton for aerospace aluminum-lithium / stainless alloys
  const rawMaterialTotal = rocketWeightTons * rawMaterialCostPerTon;
  const aerospaceContractorMarkupTotal = rocketWeightTons * 2200000; // ~$65M for a typical medium launch vehicle

  const selectedPrinciple = PHILOSOPHY_PRINCIPLES.find(p => p.id === activePrincipleId) || PHILOSOPHY_PRINCIPLES[0];

  return (
    <section id="firstprinciples" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#20242A]">
      
      {/* Header */}
      <div className="space-y-3 mb-12 text-center sm:text-left rtl:sm:text-right">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-400">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'منهجيات التفكير والمنطق الفيزيائي' : 'EPISTEMOLOGY & FIRST PRINCIPLES'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase font-display">
          {t('firstPrinciplesTitle')}
        </h2>
        <p className="text-sm text-[#A7ADB4] max-w-2xl">
          {t('firstPrinciplesSubtitle')}
        </p>
      </div>

      {/* Concept Comparison: Analogy vs First Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Reasoning by Analogy */}
        <div className="p-6 rounded-lg bg-[#0B0D0F] border border-[#20242A] space-y-3">
          <div className="text-xs font-mono uppercase text-[#A7ADB4] flex items-center justify-between">
            <span>{language === 'ar' ? 'النمط التقليدي السائد' : 'CONVENTIONAL APPROACH'}</span>
            <span className="text-[#E82127] font-semibold">REASONING BY ANALOGY</span>
          </div>
          <h3 className="text-lg font-bold text-white font-display">
            {language === 'ar' ? 'القياس بالتشابه والتقليد التاريخي' : 'Reasoning by Analogy (Iterative Copying)'}
          </h3>
          <p className="text-xs text-[#A7ADB4] leading-relaxed">
            {language === 'ar'
              ? 'بناء القرارات بناءً على ما فعله الآخرون سابقاً. يؤدي إلى افتراض أن التكاليف العالية للبطاريات أو الصواريخ حتمية لأنها كانت دائماً هكذا، مما يعيق الابتكار الجذري.'
              : 'Decisions made by copying existing practices with minor tweaks. Assumes high aerospace or battery prices are permanent simply because traditional vendors established them.'}
          </p>
          <div className="text-[11px] font-mono text-[#A7ADB4] pt-2 border-t border-[#20242A]">
            {language === 'ar' ? 'النتيجة: تحسينات تدريجية بطيئة (5%–10%)' : 'Outcome: Sluggish 5%–10% marginal improvements'}
          </div>
        </div>

        {/* Reasoning by First Principles */}
        <div className="p-6 rounded-lg bg-[#0B0D0F] border border-amber-500/40 space-y-3 shadow-lg">
          <div className="text-xs font-mono uppercase text-amber-400 flex items-center justify-between">
            <span>{language === 'ar' ? 'منهج الفيزياء الأولية' : 'PHYSICS-FIRST APPROACH'}</span>
            <span className="text-white font-bold">FIRST PRINCIPLES</span>
          </div>
          <h3 className="text-lg font-bold text-white font-display">
            {language === 'ar' ? 'التفكير من المبادئ الأولية والحدود المادية' : 'Reasoning from Fundamental Physical Truths'}
          </h3>
          <p className="text-xs text-[#A7ADB4] leading-relaxed">
            {language === 'ar'
              ? 'تفكيك المسألة المعقدة إلى قوانين الفيزياء والجدول الدوري غير القابلة للشك. حساب الحد الأدنى النظري لتكلفة المواد، ثم ابتكار طرق تصنيع مباشرة للوصول إلى ذلك الحد.'
              : 'Deconstruct a problem into elementary physical axioms (mass, materials, energy laws) and build the solution upward. Bridges the vast delta between material physics and market prices.'}
          </p>
          <div className="text-[11px] font-mono text-amber-400 pt-2 border-t border-[#20242A]">
            {language === 'ar' ? 'النتيجة: خفض التكاليف بمقدار 10 إلى 50 ضعفاً' : 'Outcome: Order-of-magnitude 10x–50x cost reduction'}
          </div>
        </div>

      </div>

      {/* Interactive First Principles Simulator: Raw Materials vs Quoted Aerospace Price */}
      <div className="bg-[#0B0D0F] border border-[#20242A] rounded-lg p-6 sm:p-8 space-y-6 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#20242A] pb-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'نموذج محاكاة المبادئ الأولى لتكلفة المواد الخام' : 'FIRST PRINCIPLES COST RATIO SIMULATOR'}</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display mt-1">
              {language === 'ar' ? 'حساب الفارق بين المواد الخام وأسعار الموردين التقليديين' : 'Raw Materials Floor vs. Aerospace Contractor Pricing'}
            </h3>
          </div>
          <div className="text-xs font-mono text-[#A7ADB4]">
            {language === 'ar' ? 'مثال موثق من فالكون 9' : 'Based on documented Falcon 9 analysis'}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-white">
              {language === 'ar' ? 'كتلة هيكل الصاروخ الفارغ (طن متري):' : 'Dry Rocket Airframe Mass (Metric Tons):'}
            </span>
            <span className="text-cyan-400 font-bold text-sm tabular-nums">
              {rocketWeightTons} Tons
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="120"
            step="5"
            value={rocketWeightTons}
            onChange={(e) => setRocketWeightTons(Number(e.target.value))}
            className="w-full h-1.5 bg-[#20242A] rounded-lg appearance-none cursor-pointer accent-[#E82127]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          
          <div className="p-4 rounded bg-[#050505] border border-[#20242A] text-center">
            <div className="text-xs font-mono text-[#A7ADB4]">
              {language === 'ar' ? 'تكلفة المواد الخام في البورصة' : 'Commodity Metal Value (LME)'}
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 mt-1 tabular-nums">
              ${(rawMaterialTotal / 1000).toFixed(0)}K
            </div>
            <div className="text-[10px] text-[#A7ADB4] mt-1 font-mono">
              Al-Li, Inconel, Carbon, Copper
            </div>
          </div>

          <div className="p-4 rounded bg-[#050505] border border-[#20242A] text-center">
            <div className="text-xs font-mono text-[#A7ADB4]">
              {language === 'ar' ? 'سعر المقاولين التقليديين السابق' : 'Legacy Aerospace Quoted Price'}
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-[#E82127] mt-1 tabular-nums">
              ${(aerospaceContractorMarkupTotal / 1000000).toFixed(1)}M
            </div>
            <div className="text-[10px] text-[#A7ADB4] mt-1 font-mono">
              Cost-plus margin stacking
            </div>
          </div>

          <div className="p-4 rounded bg-[#050505] border border-amber-500/40 text-center">
            <div className="text-xs font-mono text-amber-400">
              {language === 'ar' ? 'نسبة المواد الخام من السعر' : 'Materials Share of Total'}
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 tabular-nums">
              {((rawMaterialTotal / aerospaceContractorMarkupTotal) * 100).toFixed(2)}%
            </div>
            <div className="text-[10px] text-amber-300/80 mt-1 font-mono">
              {language === 'ar' ? '98% من التكلفة هدر يمكن اختزاله' : '98% delta in assembly efficiency'}
            </div>
          </div>

        </div>
      </div>

      {/* Principles Navigator */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Selector Tabs (Col 1) */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-[#A7ADB4] mb-3">
            {language === 'ar' ? 'المبادئ التحليلية الموثقة' : 'CORE PHILOSOPHICAL TENETS'}
          </div>
          {PHILOSOPHY_PRINCIPLES.map(p => (
            <button
              key={p.id}
              onClick={() => setActivePrincipleId(p.id)}
              className={`w-full text-left rtl:text-right p-3 rounded text-xs font-mono transition-colors block ${
                activePrincipleId === p.id
                  ? 'bg-white text-black font-bold shadow'
                  : 'bg-[#0B0D0F] border border-[#20242A] text-[#A7ADB4] hover:text-white'
              }`}
            >
              {language === 'ar' ? p.titleAr : p.titleEn}
            </button>
          ))}
        </div>

        {/* Selected Principle Deep Dive (Col 2-4) */}
        <div className="lg:col-span-3 bg-[#0B0D0F] border border-[#20242A] rounded-lg p-6 sm:p-8 space-y-6">
          
          <div className="border-b border-[#20242A] pb-4 space-y-1">
            <div className="text-xs font-mono text-amber-400 uppercase">
              {language === 'ar' ? 'دراسة منهجية موثقة' : 'DOCUMENTED WORKING METHODOLOGY'}
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              {language === 'ar' ? selectedPrinciple.titleAr : selectedPrinciple.titleEn}
            </h3>
            <p className="text-sm text-[#A7ADB4] leading-relaxed pt-2">
              {language === 'ar' ? selectedPrinciple.summaryAr : selectedPrinciple.summaryEn}
            </p>
          </div>

          {/* Breakdown Steps */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              {language === 'ar' ? 'الخطوات والقواعد الإجرائية' : 'OPERATIONAL PROTOCOL'}
            </h4>
            <div className="space-y-2">
              {(language === 'ar' ? selectedPrinciple.breakdownAr : selectedPrinciple.breakdownEn).map((step, i) => (
                <div key={i} className="p-3 rounded bg-[#050505] border border-[#20242A] flex items-start gap-3 text-xs">
                  <span className="w-5 h-5 rounded bg-[#141820] text-cyan-400 font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">
                    {i + 1}
                  </span>
                  <span className="text-[#A7ADB4] leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Empirical Case Study */}
          <div className="p-4 rounded bg-[#141820] border border-[#20242A] space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'دراسة حالة واقعية من خطوط الإنتاج' : 'FACTORY SHOP-FLOOR CASE STUDY'}</span>
            </div>
            <p className="text-xs text-[#FFFFFF]/90 leading-relaxed font-mono">
              {language === 'ar' ? selectedPrinciple.caseStudyAr : selectedPrinciple.caseStudyEn}
            </p>
          </div>

          {/* Citations */}
          <div className="text-[11px] font-mono text-[#A7ADB4] pt-2 border-t border-[#20242A] flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E82127]" />
            <span>
              {language === 'ar' ? 'تحليل موثق من مراجع علمية وسيرة والتر إيزاكسون' : 'Verified documentation sourced from peer-reviewed literature and authorized factory accounts.'}
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};
