import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenDiagnostic: () => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenDiagnostic }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'services', label: 'Services' },
    { id: 'review', label: 'Review' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-purple-50 py-3'
            : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a
              href="#home"
              id="header-brand-logo"
              className="flex items-center gap-3 group cursor-pointer"
              onClick={(e) => handleNavLinkClick(e, 'home')}
            >
              <img
                src="https://gnjsoft.com/images/logo.png"
                alt="GNJ Logo"
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-350"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 block leading-none uppercase">
                  GNJ
                </span>
                <span className="text-3xs font-mono tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 block uppercase font-bold mt-1">
                  Hardware Services
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav id="desktop-navbar" className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    id={`nav-link-${item.id}`}
                    onClick={(e) => handleNavLinkClick(e, item.id)}
                    className={`text-sm font-semibold transition-all relative py-1.5 ${
                      isActive
                        ? 'text-purple-600'
                        : 'text-slate-600 hover:text-purple-600'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Call Action & Button */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+912255551900"
                id="header-phone-accent"
                className="flex items-center gap-2 text-slate-705 hover:text-purple-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="block text-3xs text-slate-500 uppercase tracking-widest font-mono font-bold">Mumbai Desk</span>
                  <span className="block text-sm font-extrabold text-slate-900">+91 22 5555 1900</span>
                </div>
              </a>
              <button
                type="button"
                id="header-cta-diagnostic"
                onClick={onOpenDiagnostic}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md shadow-purple-100 hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Hamburger Menu button */}
            <div className="flex md:hidden items-center gap-3">
              <button
                type="button"
                id="header-cta-diagnostic-mobile"
                onClick={onOpenDiagnostic}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-xs px-3.5 py-2 rounded-lg cursor-pointer max-sm:px-2.5"
              >
                Get Quote
              </button>
              <button
                type="button"
                id="header-mobile-toggle-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-purple-100 shadow-xl p-5 z-30 transition-all duration-300"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    id={`mobile-nav-${item.id}`}
                    onClick={(e) => handleNavLinkClick(e, item.id)}
                    className={`text-base font-bold py-2 border-b border-slate-50 text-left transition-colors ${
                      isActive
                        ? 'text-purple-600 pl-2 border-l-4 border-purple-500'
                        : 'text-slate-700 hover:text-purple-600'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+912255551900"
                  id="mobile-nav-phone"
                  className="flex items-center gap-2 justify-center py-2.5 px-4 text-center text-sm font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-purple-600" />
                  Call Support: +91 22 5555 1900
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
