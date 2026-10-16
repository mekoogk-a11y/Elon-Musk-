/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Company } from '../../types';
import { 
  X, Cpu, Rocket, ShieldAlert, CheckCircle2, 
  ExternalLink, Layers, Orbit, BatteryCharging, 
  Globe2, Bot, Car, Network
} from 'lucide-react';

interface CompanyDetailModalProps {
  company: Company;
  onClose: () => void;
}

export const CompanyDetailModal: React.FC<CompanyDetailModalProps> = ({ company, onClose }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'products' | 'sources'>('overview');

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#0B0D0F] border border-[#20242A] rounded-xl max-w-4xl w-full p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-lg bg-[#141820] text-[#A7ADB4] hover:text-white border border-[#20242A] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Header */}
        <div className="space-y-2 border-b border-[#20242A] pb-6 pr-12 rtl:pr-0 rtl:pl-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A7ADB4]">
            <span className="text-[#E82127] font-semibold">{company.category}</span>
            <span>·</span>
            <span>{language === 'ar' ? `تأسست: ${company.foundedYear}` : `Founded: ${company.foundedYear}`}</span>
            <span>·</span>
            <span className="text-white font-medium">
              {language === 'ar' ? company.roleAr : company.roleEn}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display">
            {company.name}
          </h2>

          <p className="text-sm font-mono text-cyan-400">
            {language === 'ar' ? company.taglineAr : company.taglineEn}
          </p>
        </div>

        {/* Metric Badges if present */}
        {company.metrics && company.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {company.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded bg-[#050505] border border-[#20242A] text-center">
                <div className="text-lg sm:text-xl font-bold font-mono text-white tabular-nums">
                  {m.value}
                </div>
                <div className="text-[11px] text-[#A7ADB4] font-mono mt-0.5">
                  {language === 'ar' ? m.labelAr : m.labelEn}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Selection */}
        <div className="flex border-b border-[#20242A] gap-2">
          {[
            { id: 'overview', labelEn: 'Overview & Mission', labelAr: 'نظرة عامة والهدف' },
            { id: 'tech', labelEn: 'Core Engineering', labelAr: 'التكنولوجيا والهندسة' },
            { id: 'products', labelEn: 'Key Systems & Architecture', labelAr: 'الأنظمة والمنتجات' },
            { id: 'sources', labelEn: 'Verified Documentation', labelAr: 'المصادر المعتمدة' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2.5 px-3 text-xs font-mono tracking-wider transition-colors border-b-2 -mb-[1px] ${
                activeTab === tab.id
                  ? 'border-[#E82127] text-white font-bold'
                  : 'border-transparent text-[#A7ADB4] hover:text-white'
              }`}
            >
              {language === 'ar' ? tab.labelAr : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white">
                {language === 'ar' ? 'التحليل الاستراتيجي والتاريخي' : 'STRATEGIC & HISTORICAL ANALYSIS'}
              </h4>
              <p className="text-sm text-[#A7ADB4] leading-relaxed">
                {language === 'ar' ? company.descriptionAr : company.descriptionEn}
              </p>
            </div>

            {/* Specialized Modules for Specific Companies */}

            {/* Neuralink Medical Disclaimer Requirement */}
            {company.id === 'neuralink' && (
              <div className="p-4 rounded bg-[#141820] border border-amber-500/40 text-amber-200 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-400">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{language === 'ar' ? 'تنبيه علمي وطبي صارم' : 'MANDATORY SCIENTIFIC WARNING'}</span>
                </div>
                <p className="leading-relaxed">
                  "هذه التقنية ما زالت مجالًا بحثيًا وطبيًا متطورًا، ولا ينبغي عرض الأهداف المستقبلية باعتبارها نتائج محققة."
                </p>
                <p className="text-[11px] text-amber-300/80 leading-relaxed">
                  The clinical trials (PRIME Study) focus strictly on investigational computer interface feasibility for individuals with quadriplegia under FDA supervision.
                </p>
              </div>
            )}

            {/* X.com -> PayPal Capital Cascade Diagram Requirement */}
            {company.id === 'xcom-paypal' && (
              <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {language === 'ar' ? 'مخطط تدفق رأس المال التاريخي' : 'VENTURE CAPITAL CASCADE FLOW'}
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-center gap-2 py-2">
                  <div className="p-2.5 rounded bg-[#141820] border border-[#20242A] w-full sm:w-auto">
                    <span className="text-white font-bold">X.com (1999)</span>
                    <div className="text-[10px] text-[#A7ADB4]">Online Banking</div>
                  </div>
                  <span className="text-[#E82127] font-bold">↓</span>
                  <div className="p-2.5 rounded bg-[#141820] border border-[#20242A] w-full sm:w-auto">
                    <span className="text-white font-bold">Confinity Merger (2000)</span>
                    <div className="text-[10px] text-[#A7ADB4]">Peter Thiel & Levchin</div>
                  </div>
                  <span className="text-[#E82127] font-bold">↓</span>
                  <div className="p-2.5 rounded bg-[#141820] border border-[#20242A] w-full sm:w-auto">
                    <span className="text-white font-bold">PayPal (2001)</span>
                    <div className="text-[10px] text-[#A7ADB4]">Frictionless Gateway</div>
                  </div>
                  <span className="text-[#E82127] font-bold">↓</span>
                  <div className="p-2.5 rounded bg-[#141820] border border-[#20242A] w-full sm:w-auto">
                    <span className="text-white font-bold">eBay Acquisition (2002)</span>
                    <div className="text-[10px] text-[#A7ADB4]">$1.5 Billion Sale</div>
                  </div>
                  <span className="text-[#E82127] font-bold">↓</span>
                  <div className="p-2.5 rounded bg-[#141820] border border-[#E82127]/60 w-full sm:w-auto text-[#E82127]">
                    <span className="font-bold">SpaceX & Tesla Capital</span>
                    <div className="text-[10px] text-[#A7ADB4]">$100M SpaceX · $70M Tesla</div>
                  </div>
                </div>
              </div>
            )}

            {/* Tesla AI Ecosystem Diagram Requirement */}
            {company.id === 'tesla' && (
              <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {language === 'ar' ? 'مخطط تحول تيسلا إلى صرح الذكاء الاصطناعي والتصنيع' : 'TESLA ECOSYSTEM CONVERGENCE MAP'}
                </div>
                <div className="p-3 bg-[#141820] rounded border border-[#20242A] text-xs font-mono text-[#A7ADB4] space-y-1">
                  <div className="text-white font-bold">TESLA INC.</div>
                  <div className="pl-4 rtl:pl-0 rtl:pr-4">├── Vehicles (Model S, 3, X, Y, Cybertruck, Semi)</div>
                  <div className="pl-4 rtl:pl-0 rtl:pr-4">├── Energy (Megapack, Powerwall, Solar Roof, Autobidder)</div>
                  <div className="pl-4 rtl:pl-0 rtl:pr-4">├── AI (Hardware 4, Dojo Silicon, Vision Models)</div>
                  <div className="pl-4 rtl:pl-0 rtl:pr-4">├── Autonomy (End-to-End Neural Networks, Cybercab)</div>
                  <div className="pl-4 rtl:pl-0 rtl:pr-4">├── Robotics (Optimus Humanoid General-Purpose Manipulator)</div>
                  <div className="pl-4 rtl:pl-0 rtl:pr-4">└── Manufacturing (Giga Press, Unboxed Assembly Process)</div>
                </div>
              </div>
            )}

            {/* xAI Architecture Diagram Requirement */}
            {company.id === 'xai' && (
              <div className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {language === 'ar' ? 'معمارية بنية xAI الحوسبية' : 'xAI INFRASTRUCTURE ARCHITECTURE'}
                </div>
                <div className="p-3 bg-[#141820] rounded border border-[#20242A] text-xs font-mono text-[#A7ADB4] space-y-1">
                  <div className="text-white font-bold">xAI (Scientific Discovery Engine)</div>
                  <div className="pl-4 rtl:pl-0 rtl:pr-4">├── Grok (Multimodal Frontier Reasoning & Coding)</div>
                  <div className="pl-4 rtl:pl-0 rtl:pr-4">├── AI Models (Mathematical & Scientific Verification)</div>
                  <div className="pl-4 rtl:pl-0 rtl:pr-4">├── Compute (Memphis Colossus 100K–200K GPUs)</div>
                  <div className="pl-4 rtl:pl-0 rtl:pr-4">├── Data Pipeline (Real-Time Grounding via X)</div>
                  <div className="pl-4 rtl:pl-0 rtl:pr-4">└── AI Infrastructure (Liquid Cooling & On-Site Turbine Power)</div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* Tab 2: Core Engineering & Tech */}
        {activeTab === 'tech' && (
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              {language === 'ar' ? 'الركائز التكنولوجية والهندسية المسجلة' : 'PROPRIETARY ENGINEERING CAPABILITIES'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {company.coreTechnologies.map((tech, i) => (
                <div key={i} className="p-3 rounded bg-[#050505] border border-[#20242A] flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs font-mono text-[#FFFFFF]/90 leading-relaxed">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Products */}
        {activeTab === 'products' && (
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              {language === 'ar' ? 'أنظمة الأجهزة والبرمجيات المطورة' : 'DEVELOPED SYSTEMS & PRODUCT SPECS'}
            </h4>
            <div className="space-y-3">
              {company.keyProducts.map((p, i) => (
                <div key={i} className="p-4 rounded bg-[#050505] border border-[#20242A] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white font-display">{p.name}</span>
                    <span className="text-[10px] font-mono text-[#E82127] bg-[#141820] border border-[#20242A] px-2 py-0.5 rounded">
                      {p.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#A7ADB4] leading-relaxed">
                    {language === 'ar' ? p.descriptionAr : p.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Sources */}
        {activeTab === 'sources' && (
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              {language === 'ar' ? 'المصادر والإفصاحات الرسمية المرتبطة' : 'OFFICIAL REGULATORY & PRIMARY CITATIONS'}
            </h4>
            <div className="space-y-2">
              {company.sources.map(src => (
                <div key={src.id} className="p-3 rounded bg-[#050505] border border-[#20242A] space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">{src.title}</span>
                    <span className="font-mono text-[10px] text-[#E82127]">[{src.type}]</span>
                  </div>
                  <div className="text-[11px] text-[#A7ADB4] font-mono">
                    {src.publisher} {src.year ? `· ${src.year}` : ''}
                  </div>
                  {src.note && (
                    <div className="text-[11px] text-[#A7ADB4]/70 pt-1">
                      {src.note}
                    </div>
                  )}
                  {src.url && (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:underline pt-1"
                    >
                      <span>{language === 'ar' ? 'رابط الوثيقة الرسمية' : 'Access Document'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="pt-4 border-t border-[#20242A] flex justify-between items-center text-xs">
          <span className="font-mono text-[#A7ADB4]">
            ID: {company.id.toUpperCase()}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors"
          >
            {language === 'ar' ? 'إغلاق النافذة' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
