/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import WhyChooseUsView from './components/WhyChooseUsView';
import ServicesView from './components/ServicesView';
import ReviewView from './components/ReviewView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';
import DiagnosticWizard from './components/DiagnosticWizard';
import OfferPopup from './components/OfferPopup';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const PAGE_MAPPING: Record<string, string> = {
  'home': 'index.html',
  'about': 'about.html',
  'why-choose-us': 'why.html',
  'services': 'services.html',
  'review': 'reviews.html',
  'contact': 'contact.html',
};

const REVERSE_PAGE_MAPPING: Record<string, string> = {
  'index.html': 'home',
  'about.html': 'about',
  'why.html': 'why-choose-us',
  'services.html': 'services',
  'reviews.html': 'review',
  'contact.html': 'contact',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [diagnosticCategory, setDiagnosticCategory] = useState<string | undefined>(undefined);

  // Synchronize hash with current page state for real multi-page feel (.html files)
  useEffect(() => {
    const handleHashChange = () => {
      const cleanHash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
      const matchedPage = REVERSE_PAGE_MAPPING[cleanHash];
      if (cleanHash && matchedPage) {
        setCurrentPage(matchedPage);
      } else if (!cleanHash) {
        window.history.replaceState(null, '', '#/index.html');
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId: string) => {
    const hashFile = PAGE_MAPPING[pageId] || 'index.html';
    window.location.hash = `/${hashFile}`;
    setCurrentPage(pageId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Trigger diagnostic popup
  const handleOpenDiagnostic = (category?: string) => {
    setDiagnosticCategory(category);
    setIsDiagnosticOpen(true);
  };

  const handleCloseDiagnostic = () => {
    setIsDiagnosticOpen(false);
    setDiagnosticCategory(undefined);
  };

  const renderPageView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onOpenDiagnostic={() => handleOpenDiagnostic()} setCurrentPage={handlePageChange} />;
      case 'about':
        return <AboutView />;
      case 'why-choose-us':
        return <WhyChooseUsView />;
      case 'services':
        return <ServicesView onOpenDiagnostic={handleOpenDiagnostic} setCurrentPage={handlePageChange} />;
      case 'review':
        return <ReviewView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onOpenDiagnostic={() => handleOpenDiagnostic()} setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white antialiased" id="enterprise-hardware-app">
      {/* Sticky Top Header Navigation */}
      <Header
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        onOpenDiagnostic={() => handleOpenDiagnostic()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {renderPageView()}
      </main>

      {/* Consolidated Footer */}
      <Footer setCurrentPage={handlePageChange} />

      {/* Interactive Service Diagnostic & Estimate Calculator Modal */}
      <DiagnosticWizard
        isOpen={isDiagnosticOpen}
        onClose={handleCloseDiagnostic}
        defaultCategory={diagnosticCategory}
      />

      {/* Special Offer Promotional Center Popup (Delayed (3s), responsive) */}
      <OfferPopup />

      {/* Corporate Floating Support WhatsApp Communication Hotkey */}
      <FloatingWhatsApp />
    </div>
  );
}
