/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import WhyChooseUsView from './components/WhyChooseUsView';
import ServicesView from './components/ServicesView';
import ReviewView from './components/ReviewView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';
import DiagnosticWizard from './components/DiagnosticWizard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [diagnosticCategory, setDiagnosticCategory] = useState<string | undefined>(undefined);

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
        return <HomeView onOpenDiagnostic={() => handleOpenDiagnostic()} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutView />;
      case 'why-choose-us':
        return <WhyChooseUsView />;
      case 'services':
        return <ServicesView onOpenDiagnostic={handleOpenDiagnostic} setCurrentPage={setCurrentPage} />;
      case 'review':
        return <ReviewView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onOpenDiagnostic={() => handleOpenDiagnostic()} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white antialiased" id="enterprise-hardware-app">
      {/* Sticky Top Header Navigation */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenDiagnostic={() => handleOpenDiagnostic()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {renderPageView()}
      </main>

      {/* Consolidated Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Interactive Service Diagnostic & Estimate Calculator Modal */}
      <DiagnosticWizard
        isOpen={isDiagnosticOpen}
        onClose={handleCloseDiagnostic}
        defaultCategory={diagnosticCategory}
      />
    </div>
  );
}
