/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Search, Globe, Moon, Sun, Menu, X, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenAdmin }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#timeline', label: t('navJourney') },
    { href: '#companies', label: t('navCompanies') },
    { href: '#techmap', label: t('navTechMap') },
    { href: '#firstprinciples', label: t('navPhilosophy') },
    { href: '#failures', label: t('navFailures') },
    { href: '#ebook', label: t('navEbook') },
    { href: '#news', label: t('navNews') },
    { href: '#research', label: t('navResearch') },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#050505]/90 backdrop-blur-md border-b border-[#20242A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text wordmark */}
        <div className="flex items-center gap-3">
          <a 
            href="#" 
            className="text-xl font-bold tracking-widest text-white hover:text-white/90 transition-colors uppercase font-display"
          >
            MUSKERA
          </a>
          <span className="hidden sm:inline-block text-[11px] font-mono tracking-wider text-[#A7ADB4] border-l border-[#20242A] pl-3 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-3">
            {language === 'ar' ? 'مجموعة أعمال ايلون ماسك' : 'THE COMPLETE WORKS OF ELON MUSK'}
          </span>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs tracking-wider uppercase font-medium text-[#A7ADB4]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-[#0B0D0F] border border-[#20242A] text-xs text-[#A7ADB4] hover:text-white hover:border-[#A7ADB4]/40 transition-colors"
            title="Search Archive (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-mono text-[11px]">⌘K</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#0B0D0F] border border-[#20242A] text-xs font-mono text-[#A7ADB4] hover:text-white transition-colors"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#E82127]" />
            <span className="uppercase font-semibold">{language === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded bg-[#0B0D0F] border border-[#20242A] text-[#A7ADB4] hover:text-white transition-colors"
            title="Toggle Visual Theme"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Admin CMS Modal */}
          <button
            onClick={onOpenAdmin}
            className="p-1.5 rounded bg-[#0B0D0F] border border-[#20242A] text-[#A7ADB4] hover:text-[#E82127] transition-colors"
            title="Admin CMS"
          >
            <Shield className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded bg-[#0B0D0F] border border-[#20242A] text-[#A7ADB4] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0D0F] border-b border-[#20242A] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#A7ADB4] hover:text-white border-b border-[#20242A]/40"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex justify-between items-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="text-xs text-[#E82127] flex items-center gap-1.5 py-1"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{t('navAdmin')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
