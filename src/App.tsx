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
        const element = document.getElementById(matchedPage);
        if (element) {
          setTimeout(() => {
            const offset = 90;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      } else if (!cleanHash) {
        window.history.replaceState(null, '', '#/index.html');
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scrolling in real-time to active-highlight header items (Scroll Spy)
  useEffect(() => {
    const sections = ['home', 'about', 'why-choose-us', 'services', 'review', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180; // offset for nav container height
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentPage(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handlePageChange = (pageId: string) => {
    const hashFile = PAGE_MAPPING[pageId] || 'index.html';
    window.location.hash = `/${hashFile}`;
    setCurrentPage(pageId);
    
    const element = document.getElementById(pageId);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white antialiased" id="enterprise-hardware-app">
      {/* Sticky Top Header Navigation */}
      <Header
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        onOpenDiagnostic={() => handleOpenDiagnostic()}
      />

      {/* Main Content Sections rendered consecutive for landing page optimization */}
      <main className="flex-grow">
        <div id="home">
          <HomeView onOpenDiagnostic={() => handleOpenDiagnostic()} setCurrentPage={handlePageChange} />
        </div>
        <div id="about" className="scroll-mt-24 border-t border-slate-50">
          <AboutView />
        </div>
        <div id="why-choose-us" className="scroll-mt-24 border-t border-slate-50">
          <WhyChooseUsView />
        </div>
        <div id="services" className="scroll-mt-24 border-t border-slate-50">
          <ServicesView onOpenDiagnostic={handleOpenDiagnostic} setCurrentPage={handlePageChange} />
        </div>
        <div id="review" className="scroll-mt-24 border-t border-slate-50">
          <ReviewView />
        </div>
        <div id="contact" className="scroll-mt-24 border-t border-slate-50">
          <ContactView />
        </div>
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
