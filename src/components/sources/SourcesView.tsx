/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MASTER_SOURCES } from '../../data/sources';
import { Layers, ShieldCheck, ExternalLink, Filter } from 'lucide-react';

export const SourcesView: React.FC = () => {
  const { language, t } = useLanguage();
  const [filterType, setFilterType] = useState<string>('all');

  const sourcesList = Object.values(MASTER_SOURCES);

  const types = ['all', 'SEC', 'NASA', 'Company', 'Academic', 'Journalism'];

  const filtered = filterType === 'all'
    ? sourcesList
    : sourcesList.filter(s => s.type === filterType);

  return (
    <section id="sources" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#20242A]">
      
      {/* Header */}
      <div className="space-y-3 mb-10 text-center sm:text-left rtl:sm:text-right">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'أرشيف الإفصاحات والمصادر الرسمية' : 'VERIFIED PRIMARY CITATIONS'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase font-display">
          {t('sourcesTitle')}
        </h2>
        <p className="text-sm text-[#A7ADB4] max-w-2xl">
          {t('sourcesSubtitle')}
        </p>

        {/* Priority Hierarchy Notification */}
        <div className="p-3.5 rounded bg-[#0B0D0F] border border-[#20242A] text-xs text-[#A7ADB4] max-w-3xl space-y-1">
          <div className="text-white font-medium">
            {language === 'ar' ? 'سلسلة أولوية التوثيق المتبعة في الموسوعة:' : 'Citation Hierarchy of Authority:'}
          </div>
          <div className="text-[11px] font-mono text-[#A7ADB4]">
            1. Official Company Filings · 2. SEC 10-K & Regulatory Filings · 3. NASA & Government Contracts · 4. FCC Authorizations · 5. Peer-Reviewed Academic Clinical Trials · 6. Tier-1 Verified Financial Journalism
          </div>
        </div>

        {/* Type Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          {types.map(tp => (
            <button
              key={tp}
              onClick={() => setFilterType(tp)}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                filterType === tp
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#0B0D0F] border border-[#20242A] text-[#A7ADB4] hover:text-white'
              }`}
            >
              {tp === 'all' ? (language === 'ar' ? 'كافة المراجع' : 'All Citations') : tp}
            </button>
          ))}
        </div>
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(src => (
          <div
            key={src.id}
            className="p-5 rounded-lg bg-[#0B0D0F] border border-[#20242A] space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-bold">[{src.type}]</span>
                <span className="text-[#A7ADB4]">{src.year || 'Official Record'}</span>
              </div>
              <h4 className="text-sm font-semibold text-white font-display">
                {src.title}
              </h4>
              <div className="text-xs text-[#A7ADB4] font-mono">
                {src.publisher}
              </div>
              {src.note && (
                <p className="text-xs text-[#A7ADB4]/80 leading-relaxed pt-1">
                  {src.note}
                </p>
              )}
            </div>

            {src.url && (
              <div className="pt-3 border-t border-[#20242A] text-right rtl:text-left">
                <a
                  href={src.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline"
                >
                  <span>{language === 'ar' ? 'فحص السجل الحكومي / الرسمي' : 'Inspect Official Filing'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};
