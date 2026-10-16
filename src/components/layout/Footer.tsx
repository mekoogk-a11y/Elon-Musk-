/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#0B0D0F] border-t border-[#20242A] text-[#A7ADB4] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-2xl font-bold tracking-widest text-white uppercase font-display">
              MUSKERA
            </div>
            <p className="text-xs text-[#A7ADB4] leading-relaxed max-w-md">
              {t('footerAboutText')}
            </p>
            <div className="p-3 rounded bg-[#050505] border border-[#20242A] text-xs text-[#A7ADB4] space-y-1">
              <div className="flex items-center gap-2 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-[#E82127]" />
                <span>{language === 'ar' ? 'إشعار الاستقلالية والأصالة' : 'Independence & Verification Notice'}</span>
              </div>
              <p className="text-[11px] text-[#A7ADB4] leading-normal">
                {t('disclaimerText')}
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white">
              {language === 'ar' ? 'فهرس الموسوعة' : 'ENCYCLOPEDIA INDEX'}
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#timeline" className="hover:text-white transition-colors">{t('navJourney')}</a></li>
              <li><a href="#companies" className="hover:text-white transition-colors">{t('navCompanies')}</a></li>
              <li><a href="#techmap" className="hover:text-white transition-colors">{t('navTechMap')}</a></li>
              <li><a href="#firstprinciples" className="hover:text-white transition-colors">{t('navPhilosophy')}</a></li>
              <li><a href="#failures" className="hover:text-white transition-colors">{t('navFailures')}</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">{t('navNews')}</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">{t('navResearch')}</a></li>
            </ul>
          </div>

          {/* Engineering & Credits */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white">
              {language === 'ar' ? 'المطور والتواصل' : 'CREDITS & CONTACT'}
            </div>
            <div className="space-y-2 text-xs">
              <p className="text-white font-medium">{t('footerDesignedBy')}</p>
              <a 
                href="https://wa.me/249919980435" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-[#A7ADB4] hover:text-[#25D366] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t('footerWhatsApp')}</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <div className="pt-2 text-[11px] text-[#A7ADB4] leading-relaxed">
                {language === 'ar' 
                  ? 'تم بناء هذا النظام التوثيقي بأعلى معايير المعمارية البرمجية المستقلة.' 
                  : 'Engineered as an independent high-fidelity systems encyclopedia.'}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#20242A] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A7ADB4]/70 gap-3">
          <div>
            © 2026 MUSKERA. {language === 'ar' ? 'جميع الحقوق البحثية والتوثيقية محفوظة.' : 'Independent Research Archive. All rights reserved.'}
          </div>
          <div className="flex items-center gap-4">
            <a href="#sources" className="hover:text-white transition-colors">{t('navSources')}</a>
            <span>·</span>
            <span>Privacy & Documentation</span>
            <span>·</span>
            <span>Terms of Research</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
