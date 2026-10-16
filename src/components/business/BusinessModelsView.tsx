/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BUSINESS_MODELS_DATA } from '../../data/businessModels';
import { BusinessModel } from '../../types';
import { Briefcase, DollarSign, Users, Cpu, Server, AlertTriangle, ShieldCheck } from 'lucide-react';

export const BusinessModelsView: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedModel, setSelectedModel] = useState<BusinessModel>(BUSINESS_MODELS_DATA[0]);

  return (
    <section id="business" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#20242A]">
      
      {/* Header */}
      <div className="space-y-3 mb-12 text-center sm:text-left rtl:sm:text-right">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'التحليل الاقتصادي والمالي للمنظومة' : 'UNIT ECONOMICS & BUSINESS ARCHITECTURE'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase font-display">
          {t('businessTitle')}
        </h2>
        <p className="text-sm text-[#A7ADB4] max-w-2xl">
          {t('businessSubtitle')}
        </p>

        {/* Company Selector Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-4">
          {BUSINESS_MODELS_DATA.map(bm => (
            <button
              key={bm.companyId}
              onClick={() => setSelectedModel(bm)}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                selectedModel.companyId === bm.companyId
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#0B0D0F] border border-[#20242A] text-[#A7ADB4] hover:text-white'
              }`}
            >
              {bm.companyName}
            </button>
          ))}
        </div>
      </div>

      {/* Model Spec Sheet */}
      <div className="bg-[#0B0D0F] border border-[#20242A] rounded-lg p-6 sm:p-8 space-y-6">
        
        <div className="border-b border-[#20242A] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              {language === 'ar' ? 'نموذج التشغيل والتدفق المالي' : 'OPERATIONAL MONETIZATION SPECIFICATION'}
            </div>
            <h3 className="text-2xl font-bold text-white font-display mt-0.5">
              {selectedModel.companyName}
            </h3>
          </div>
          <div className="text-xs font-mono text-[#A7ADB4] bg-[#141820] border border-[#20242A] px-3 py-1.5 rounded self-start sm:self-auto">
            {language === 'ar' ? 'بيانات مستخرجة من إفصاحات رسمية' : 'Verified from SEC / Regulatory Filings'}
          </div>
        </div>

        {/* Grid of Key Business Parameters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Product & Services */}
          <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-2">
            <div className="text-xs font-mono text-white flex items-center gap-2 uppercase">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'ar' ? 'المنتجات والخدمات الرئيسية' : 'CORE PRODUCTS & OFFERINGS'}</span>
            </div>
            <p className="text-xs text-[#A7ADB4] leading-relaxed">
              {language === 'ar' ? selectedModel.productAr : selectedModel.productEn}
            </p>
          </div>

          {/* Customers & Addressable Market */}
          <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-2">
            <div className="text-xs font-mono text-white flex items-center gap-2 uppercase">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'ar' ? 'العملاء والسوق المستهدف' : 'TARGET CUSTOMERS & SEGMENTS'}</span>
            </div>
            <p className="text-xs text-[#A7ADB4] leading-relaxed">
              {language === 'ar' ? selectedModel.customerAr : selectedModel.customerEn}
            </p>
          </div>

          {/* Revenue Model */}
          <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-2">
            <div className="text-xs font-mono text-white flex items-center gap-2 uppercase">
              <DollarSign className="w-3.5 h-3.5 text-[#E82127]" />
              <span>{language === 'ar' ? 'طريقة توليد الإيرادات والتدفق النقدي' : 'REVENUE MECHANICS & MONETIZATION'}</span>
            </div>
            <p className="text-xs text-[#A7ADB4] leading-relaxed">
              {language === 'ar' ? selectedModel.revenueAr : selectedModel.revenueEn}
            </p>
          </div>

          {/* Infrastructure */}
          <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-2">
            <div className="text-xs font-mono text-white flex items-center gap-2 uppercase">
              <Server className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'ar' ? 'البنية التحتية والمصانع' : 'INFRASTRUCTURE & CAPITAL ASSETS'}</span>
            </div>
            <p className="text-xs text-[#A7ADB4] leading-relaxed">
              {language === 'ar' ? selectedModel.infrastructureAr : selectedModel.infrastructureEn}
            </p>
          </div>

          {/* Risks & Headwinds */}
          <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-2">
            <div className="text-xs font-mono text-white flex items-center gap-2 uppercase">
              <AlertTriangle className="w-3.5 h-3.5 text-[#E82127]" />
              <span>{language === 'ar' ? 'المخاطر والتحديات التنظيمية الموثقة' : 'DOCUMENTED RISKS & SYSTEMIC HURDLES'}</span>
            </div>
            <p className="text-xs text-[#A7ADB4] leading-relaxed">
              {language === 'ar' ? selectedModel.risksAr : selectedModel.risksEn}
            </p>
          </div>

          {/* Competitive Landscape */}
          <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-2">
            <div className="text-xs font-mono text-white flex items-center gap-2 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'ar' ? 'المشهد التنافسي والبدائل في السوق' : 'COMPETITIVE LANDSCAPE & RIVALS'}</span>
            </div>
            <p className="text-xs text-[#A7ADB4] leading-relaxed">
              {language === 'ar' ? selectedModel.competitionAr : selectedModel.competitionEn}
            </p>
          </div>

        </div>

        <div className="text-[11px] font-mono text-[#A7ADB4] pt-2 border-t border-[#20242A]">
          {language === 'ar'
            ? 'تنويه: لا يتم عرض أي توقعات غير معلنة كحقائق رقمية، وأي معلومة غير معلنة تصنف رسمياً بأنها "Not publicly disclosed".'
            : 'Standard: Unverified projections are strictly excluded. Unconfirmed private financial figures are designated "Not publicly disclosed."'}
        </div>

      </div>

    </section>
  );
};
