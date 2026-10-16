/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { DisclaimerBanner } from './components/layout/DisclaimerBanner';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { DashboardRibbon } from './components/hero/DashboardRibbon';
import { TimelineView } from './components/timeline/TimelineView';
import { CompaniesOverview } from './components/companies/CompaniesOverview';
import { TechMapInteractive } from './components/techmap/TechMapInteractive';
import { FirstPrinciplesView } from './components/firstprinciples/FirstPrinciplesView';
import { FailuresView } from './components/failures/FailuresView';
import { BusinessModelsView } from './components/business/BusinessModelsView';
import { EbookShowcaseSection } from './components/ebook/EbookShowcaseSection';
import { EbookPrintEngine } from './components/ebook/EbookPrintEngine';
import { LatestNewsView } from './components/news/LatestNewsView';
import { ResearchLibraryView } from './components/research/ResearchLibraryView';
import { SourcesView } from './components/sources/SourcesView';
import { ScrollProgressIndicator } from './components/layout/ScrollProgressIndicator';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/search/CommandPalette';
import { AdminDashboard } from './components/admin/AdminDashboard';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-[#050505] text-[#FFFFFF] flex flex-col font-sans selection:bg-[#E82127]/25 selection:text-white">
          
          {/* Top Legal Disclaimer Notice Banner */}
          <DisclaimerBanner />

          {/* Navigation Bar */}
          <Navbar 
            onOpenSearch={() => setIsSearchOpen(true)} 
            onOpenAdmin={() => setIsAdminOpen(true)} 
          />

          {/* Main Content Area */}
          <main className="flex-1">
            <Hero />
            <DashboardRibbon />
            <TimelineView />
            <CompaniesOverview />
            <TechMapInteractive />
            <FirstPrinciplesView />
            <FailuresView />
            <BusinessModelsView />
            <EbookShowcaseSection />
            <LatestNewsView />
            <ResearchLibraryView />
            <SourcesView />
          </main>

          {/* Hidden/Printable Vector PDF Engine for Complete Book Download */}
          <EbookPrintEngine />

          {/* Sticky Progress/Section indicator on right side */}
          <ScrollProgressIndicator />

          {/* Footer with credits and disclaimer */}
          <Footer />

          {/* Global Command Palette (Ctrl+K) */}
          <CommandPalette 
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)} 
          />

          {/* Administrative Content Management Console */}
          <AdminDashboard 
            isOpen={isAdminOpen} 
            onClose={() => setIsAdminOpen(false)} 
          />

        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
