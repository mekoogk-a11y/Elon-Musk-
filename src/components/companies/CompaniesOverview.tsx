/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ApiService } from '../../services/api';
import { Company } from '../../types';
import { CompanyDetailModal } from './CompanyDetailModal';
import { 
  Building2, ArrowRight, Cpu, Layers, Rocket, 
  Orbit, Bot, Car, Brain, Drill, MessageSquareCode 
} from 'lucide-react';

export const CompaniesOverview: React.FC = () => {
  const { language, t } = useLanguage();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  useEffect(() => {
    ApiService.getCompanies().then(setCompanies);
  }, []);

  const categories = [
    { id: 'all', labelEn: 'All Organizations', labelAr: 'كافة الشركات' },
    { id: 'Aerospace', labelEn: 'Aerospace', labelAr: 'الفضاء والصواريخ' },
    { id: 'Automotive & AI', labelEn: 'Automotive & AI', labelAr: 'السيارات والذكاء' },
    { id: 'Artificial Intelligence', labelEn: 'Artificial Intelligence', labelAr: 'الذكاء الاصطناعي' },
    { id: 'Neurotechnology', labelEn: 'Neurotechnology', labelAr: 'التكنولوجيا العصبية' },
    { id: 'Infrastructure', labelEn: 'Infrastructure', labelAr: 'البنية التحتية' },
    { id: 'Software & Social', labelEn: 'Software & Social', labelAr: 'البرمجيات والإعلام' },
    { id: 'Fintech', labelEn: 'Fintech', labelAr: 'التقنية المالية' }
  ];

  const filtered = categoryFilter === 'all'
    ? companies
    : companies.filter(c => c.category === categoryFilter);

  const getCompanyIcon = (id: string) => {
    switch (id) {
      case 'spacex': return <Rocket className="w-5 h-5 text-[#E82127]" />;
      case 'tesla': return <Car className="w-5 h-5 text-white" />;
      case 'xai': return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'neuralink': return <Brain className="w-5 h-5 text-purple-400" />;
      case 'boring': return <Drill className="w-5 h-5 text-amber-400" />;
      case 'x-corp': return <MessageSquareCode className="w-5 h-5 text-white" />;
      default: return <Building2 className="w-5 h-5 text-[#A7ADB4]" />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="companies" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#20242A]">
      
      {/* Header */}
      <div className="space-y-3 mb-10 text-center sm:text-left rtl:sm:text-right">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#E82127]">
          <Building2 className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'الصروح الهندسية والتنظيمية' : 'VENTURES DIRECTORY'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase font-display">
          {t('companiesTitle')}
        </h2>
        <p className="text-sm text-[#A7ADB4] max-w-2xl">
          {t('companiesSubtitle')}
        </p>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-1.5 pt-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap ${
                categoryFilter === cat.id
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#0B0D0F] border border-[#20242A] text-[#A7ADB4] hover:text-white'
              }`}
            >
              {language === 'ar' ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Companies with Framer Motion reveal */}
      <motion.div 
        key={categoryFilter}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map(company => (
            <motion.div
              layout
              key={company.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => setSelectedCompany(company)}
              className="group relative bg-[#0B0D0F] border border-[#20242A] rounded-lg p-6 space-y-4 hover:border-white/40 hover:bg-[#101318] transition-colors duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header inside Card */}
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded bg-[#141820] border border-[#20242A] group-hover:border-[#E82127]/40 transition-colors">
                    {getCompanyIcon(company.id)}
                  </div>
                  <div className="text-right rtl:text-left">
                    <span className="text-[10px] font-mono text-[#E82127] bg-[#141820] border border-[#20242A] px-2 py-0.5 rounded">
                      {company.status.toUpperCase()}
                    </span>
                    <div className="text-[11px] font-mono text-[#A7ADB4] mt-1">
                      EST. {company.foundedYear}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white font-display group-hover:text-white transition-colors">
                    {company.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mt-1 line-clamp-1">
                    {language === 'ar' ? company.taglineAr : company.taglineEn}
                  </div>
                </div>

                <p className="text-xs text-[#A7ADB4] leading-relaxed line-clamp-3">
                  {language === 'ar' ? company.descriptionAr : company.descriptionEn}
                </p>
              </div>

              {/* Bottom info */}
              <div className="pt-4 border-t border-[#20242A] space-y-3">
                <div className="text-[11px] font-mono text-[#A7ADB4]">
                  <span className="text-white font-medium">{language === 'ar' ? 'المنصب:' : 'Role:'}</span>{' '}
                  {language === 'ar' ? company.roleAr : company.roleEn}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#A7ADB4] group-hover:text-white transition-colors">
                  <span>{language === 'ar' ? 'عرض التحليل الكامل' : 'Deep-Dive Monograph'}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Selected Company Modal */}
      {selectedCompany && (
        <CompanyDetailModal 
          company={selectedCompany} 
          onClose={() => setSelectedCompany(null)} 
        />
      )}

    </section>
  );
};
