/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AlertTriangle } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#0B0D0F] border-b border-[#20242A] py-2 px-4 text-center text-xs text-[#A7ADB4] flex items-center justify-center gap-2">
      <AlertTriangle className="w-3.5 h-3.5 text-[#E82127] shrink-0" />
      <span>{t('disclaimerText')}</span>
    </div>
  );
};
