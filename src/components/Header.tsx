import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  ChevronDown, 
  Cpu, 
  Network, 
  Server, 
  FileText, 
  Monitor, 
  Wrench, 
  Activity, 
  Settings, 
  Layers 
} from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenDiagnostic: (category?: string) => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenDiagnostic }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMaintenanceOpen, setIsMobileMaintenanceOpen] = useState(false);
  const [isMobileProfessionalOpen, setIsMobileProfessionalOpen] = useState(false);
  
  const [activeDropdown, setActiveDropdown] = useState<'maintenance' | 'professional' | null>(null);

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
    setIsMobileMaintenanceOpen(false);
    setIsMobileProfessionalOpen(false);
  };

  const handleDropdownItemClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    setCurrentPage('services');
    setIsMobileMenuOpen(false);
    setIsMobileMaintenanceOpen(false);
    setIsMobileProfessionalOpen(false);
    setActiveDropdown(null);
    // Tiny delay to allow state changes to settle, then open diagnostics pre-populated
    setTimeout(() => {
      onOpenDiagnostic(category);
    }, 200);
  };

  const maintenanceSubItems = [
    { label: 'Network Maintenance', category: 'network', icon: <Network className="w-4 h-4 text-purple-600" /> },
    { label: 'Server Maintenance', category: 'server', icon: <Server className="w-4 h-4 text-pink-500" /> },
    { label: 'Corrective & Preventive Maintenance (PM)', category: 'desktop', icon: <Activity className="w-4 h-4 text-violet-500" /> },
    { label: 'Hardware Maintenance', category: 'laptop', icon: <Wrench className="w-4 h-4 text-purple-600" /> },
    { label: 'AMC Services', category: 'laptop', icon: <FileText className="w-4 h-4 text-pink-500" /> }
  ];

  const professionalSubItems = [
    { label: 'IT, Network & Data Center Deployment', category: 'network', icon: <Layers className="w-4 h-4 text-purple-600" /> },
    { label: 'Hardware Installation', category: 'laptop', icon: <Cpu className="w-4 h-4 text-pink-500" /> },
    { label: 'Server Setup & Configuration', category: 'server', icon: <Settings className="w-4 h-4 text-violet-500" /> },
    { label: 'Network Setup & Troubleshooting', category: 'network', icon: <Network className="w-4 h-4 text-purple-600" /> },
    { label: 'On-site Technical Support', category: 'desktop', icon: <Monitor className="w-4 h-4 text-pink-500" /> }
  ];

  const menuItems = [
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
        className="fixed top-4 left-4 right-4 z-50 max-w-9xl mx-auto transition-all duration-300 pointer-events-none"
      >
        {/* Sleek White Rounded Container matching the reference picture style */}
        <div 
          className={`bg-white backdrop-blur-md rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-none rounded-br-none border border-slate-100/40 shadow-[0_10px_35px_rgba(0,0,0,0.06)] pointer-events-auto transition-all duration-300 ${
            isScrolled ? 'py-2 px-3 sm:px-4 shadow-xl border-purple-100/30' : 'py-3 px-5 lg:px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Left Brand block: Logo & Text integrated elegantly in one capsule */}
            <a
              href="#home"
              id="header-brand-logo"
              className="flex items-center gap-2 sm:gap-3 group cursor-pointer flex-shrink-0"
              onClick={(e) => handleNavLinkClick(e, 'home')}
            >
              <div className="bg-slate-50 p-1.5 rounded-full border border-slate-100/50 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                <img
                  src="https://gnjsoft.com/images/logo.png"
                  alt="GNJ Logo"
                  className="h-8 sm:h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <span className="font-display font-black text-sm sm:text-base tracking-tight text-slate-800 block leading-tight uppercase group-hover:text-purple-600 transition-colors">
                  GNJ Hardware
                </span>
                <span className="text-[9px] font-mono tracking-wider text-slate-500 block uppercase font-bold">
                  Services
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menus matching reference item arrangement */}
            <nav id="desktop-navbar" className="hidden xl:flex items-center gap-2 lg:gap-4">
              {/* Home */}
              <a
                href="#home"
                onClick={(e) => handleNavLinkClick(e, 'home')}
                className={`text-[13px] font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg ${
                  currentPage === 'home' 
                    ? 'text-purple-600 font-bold bg-purple-55/3' 
                    : 'text-slate-800 hover:text-purple-600 hover:bg-slate-50'
                }`}
              >
                Home
              </a>

              {/* About */}
              <a
                href="#about"
                onClick={(e) => handleNavLinkClick(e, 'about')}
                className={`text-[13px] font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg ${
                  currentPage === 'about' 
                    ? 'text-purple-600 font-bold' 
                    : 'text-slate-800 hover:text-purple-600 hover:bg-slate-50'
                }`}
              >
                About
              </a>

              {/* Why Choose Us */}
              <a
                href="#why-choose-us"
                onClick={(e) => handleNavLinkClick(e, 'why-choose-us')}
                className={`text-[13px] font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg ${
                  currentPage === 'why-choose-us' 
                    ? 'text-purple-600 font-bold' 
                    : 'text-slate-800 hover:text-purple-600 hover:bg-slate-50'
                }`}
              >
                Why Choose Us
              </a>

              {/* Services */}
              <a
                href="#services"
                onClick={(e) => handleNavLinkClick(e, 'services')}
                className={`text-[13px] font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg ${
                  currentPage === 'services' 
                    ? 'text-purple-600 font-bold' 
                    : 'text-slate-800 hover:text-purple-600 hover:bg-slate-50'
                }`}
              >
                Services
              </a>

              {/* Maintenance Dropdown Container */}
              <div 
                className="relative py-1.5"
                onMouseEnter={() => setActiveDropdown('maintenance')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  type="button"
                  className={`flex items-center gap-1 text-[13px] font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg cursor-pointer focus:outline-none ${
                    activeDropdown === 'maintenance' ? 'text-purple-600 bg-slate-50' : 'text-slate-800 hover:text-purple-600 hover:bg-slate-50'
                  }`}
                >
                  <span>Maintenance</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-500 ${activeDropdown === 'maintenance' ? 'rotate-180 text-purple-600' : ''}`} />
                </button>

                {/* Dropdown Menu block style matches reference completely with thin lines & purple hover states */}
                {activeDropdown === 'maintenance' && (
                  <div className="absolute top-full left-0 mt-2 w-76 sm:w-80 bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100 py-1.5 z-50 origin-top animate-fade-in text-left">
                    <div className="flex flex-col">
                      {maintenanceSubItems.map((sub, idx) => (
                        <a
                          key={idx}
                          href="#services"
                          onClick={(e) => handleDropdownItemClick(e, sub.category)}
                          className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-purple-50/70 hover:text-purple-700 transition-colors border-b border-slate-50 last:border-b-0 cursor-pointer"
                        >
                          <div className="p-1 rounded-lg bg-slate-50 text-purple-600">
                            {sub.icon}
                          </div>
                          <span className="text-[12.5px] font-semibold leading-tight">{sub.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Professional Services Dropdown Container */}
              <div 
                className="relative py-1.5"
                onMouseEnter={() => setActiveDropdown('professional')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  type="button"
                  className={`flex items-center gap-1 text-[13px] font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg cursor-pointer focus:outline-none ${
                    activeDropdown === 'professional' ? 'text-purple-600 bg-slate-50' : 'text-slate-800 hover:text-purple-600 hover:bg-slate-50'
                  }`}
                >
                  <span>Professional Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-500 ${activeDropdown === 'professional' ? 'rotate-180 text-purple-600' : ''}`} />
                </button>

                {/* Dropdown Menu block */}
                {activeDropdown === 'professional' && (
                  <div className="absolute top-full left-0 mt-2 w-76 sm:w-80 bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100 py-1.5 z-50 origin-top animate-fade-in text-left">
                    <div className="flex flex-col">
                      {professionalSubItems.map((sub, idx) => (
                        <a
                          key={idx}
                          href="#services"
                          onClick={(e) => handleDropdownItemClick(e, sub.category)}
                          className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-purple-50/70 hover:text-purple-700 transition-colors border-b border-slate-50 last:border-b-0 cursor-pointer"
                        >
                          <div className="p-1 rounded-lg bg-slate-50 text-purple-600">
                            {sub.icon}
                          </div>
                          <span className="text-[12.5px] font-semibold leading-tight">{sub.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Review */}
              <a
                href="#review"
                onClick={(e) => handleNavLinkClick(e, 'review')}
                className={`text-[13px] font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg ${
                  currentPage === 'review' 
                    ? 'text-purple-600 font-bold' 
                    : 'text-slate-800 hover:text-purple-600 hover:bg-slate-50'
                }`}
              >
                Review
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, 'contact')}
                className={`text-[13px] font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg ${
                  currentPage === 'contact' 
                    ? 'text-purple-600 font-bold' 
                    : 'text-slate-800 hover:text-purple-600 hover:bg-slate-50'
                }`}
              >
                Contact
              </a>
            </nav>

            {/* Right side desk contacts & Purple gradient call button matching structure of reference image */}
            <div className="hidden xl:flex items-center gap-4">
              <a
                href="tel:+919099126937"
                id="header-phone-accent"
                className="flex items-center gap-2 text-slate-700 hover:text-purple-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-right">
                  <span className="block text-[8px] text-slate-500 uppercase tracking-widest font-mono font-bold">Mumbai Desk</span>
                  <span className="block text-xs font-black text-slate-800">+91 90991 26937</span>
                </div>
              </a>
              <button
                type="button"
                id="header-cta-diagnostic"
                onClick={() => onOpenDiagnostic()}
                className="relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm px-7 py-3 rounded-tr-[1.25rem] rounded-bl-[1.25rem] rounded-tl-none rounded-br-none transition-all hover:scale-102 hover:shadow-[0_4px_15px_rgba(37,99,235,0.3)] duration-200 cursor-pointer overflow-hidden group"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Actions and Hamburger Toggle */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                type="button"
                id="header-cta-diagnostic-mobile"
                onClick={() => onOpenDiagnostic()}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs px-4 py-2.5 rounded-tr-[1.1rem] rounded-bl-[1.1rem] rounded-tl-none rounded-br-none cursor-pointer hover:opacity-95 active:scale-95 transition-all shadow-md shadow-blue-500/10"
              >
                Contact Us
              </button>
              <button
                type="button"
                id="header-mobile-toggle-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-600 hover:text-purple-600 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer/Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="xl:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-100 shadow-2xl p-5 z-35 pointer-events-auto animate-fade-in text-left max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-2">
              {/* Home */}
              <a
                href="#home"
                onClick={(e) => handleNavLinkClick(e, 'home')}
                className={`text-sm font-bold py-2 px-3 rounded-lg border-b border-slate-50 transition-colors ${
                  currentPage === 'home' ? 'text-purple-600 bg-purple-50/50' : 'text-slate-700 hover:text-purple-600'
                }`}
              >
                Home
              </a>

              {/* About */}
              <a
                href="#about"
                onClick={(e) => handleNavLinkClick(e, 'about')}
                className={`text-sm font-bold py-2 px-3 rounded-lg border-b border-slate-50 transition-colors ${
                  currentPage === 'about' ? 'text-purple-600 bg-purple-50/50' : 'text-slate-700 hover:text-purple-600'
                }`}
              >
                About
              </a>

              {/* Why Choose Us */}
              <a
                href="#why-choose-us"
                onClick={(e) => handleNavLinkClick(e, 'why-choose-us')}
                className={`text-sm font-bold py-2 px-3 rounded-lg border-b border-slate-50 transition-colors ${
                  currentPage === 'why-choose-us' ? 'text-purple-600 bg-purple-50/50' : 'text-slate-700 hover:text-purple-600'
                }`}
              >
                Why Choose Us
              </a>

              {/* Services */}
              <a
                href="#services"
                onClick={(e) => handleNavLinkClick(e, 'services')}
                className={`text-sm font-bold py-2 px-3 rounded-lg border-b border-slate-50 transition-colors ${
                  currentPage === 'services' ? 'text-purple-600 bg-purple-50/50' : 'text-slate-700 hover:text-purple-600'
                }`}
              >
                Services
              </a>

              {/* Mobile Maintenance Expandable On Click */}
              <div className="border-b border-slate-50">
                <button
                  type="button"
                  onClick={() => setIsMobileMaintenanceOpen(!isMobileMaintenanceOpen)}
                  className="w-full flex items-center justify-between text-sm font-bold py-2.5 px-3 text-slate-700 hover:text-purple-600 cursor-pointer focus:outline-none"
                >
                  <span className={isMobileMaintenanceOpen ? 'text-purple-600' : ''}>Maintenance</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${isMobileMaintenanceOpen ? 'rotate-180 text-purple-600' : 'text-slate-400'}`} />
                </button>
                
                {isMobileMaintenanceOpen && (
                  <div className="pl-4 pr-1 pb-2 space-y-1.5 animate-fade-in">
                    {maintenanceSubItems.map((sub, idx) => (
                      <a
                        key={idx}
                        href="#services"
                        onClick={(e) => handleDropdownItemClick(e, sub.category)}
                        className="flex items-center gap-2.5 py-2 px-3 text-xs font-semibold text-slate-655 hover:text-purple-600 bg-slate-50/50 hover:bg-purple-50 transition-all rounded-lg"
                      >
                        {sub.icon}
                        <span>{sub.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Professional Services Expandable On Click */}
              <div className="border-b border-slate-50">
                <button
                  type="button"
                  onClick={() => setIsMobileProfessionalOpen(!isMobileProfessionalOpen)}
                  className="w-full flex items-center justify-between text-sm font-bold py-2.5 px-3 text-slate-700 hover:text-purple-600 cursor-pointer focus:outline-none"
                >
                  <span className={isMobileProfessionalOpen ? 'text-purple-600' : ''}>Professional Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${isMobileProfessionalOpen ? 'rotate-180 text-purple-600' : 'text-slate-400'}`} />
                </button>
                
                {isMobileProfessionalOpen && (
                  <div className="pl-4 pr-1 pb-2 space-y-1.5 animate-fade-in">
                    {professionalSubItems.map((sub, idx) => (
                      <a
                        key={idx}
                        href="#services"
                        onClick={(e) => handleDropdownItemClick(e, sub.category)}
                        className="flex items-center gap-2.5 py-2 px-3 text-xs font-semibold text-slate-655 hover:text-purple-600 bg-slate-50/50 hover:bg-purple-50 transition-all rounded-lg"
                      >
                        {sub.icon}
                        <span>{sub.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Review */}
              <a
                href="#review"
                onClick={(e) => handleNavLinkClick(e, 'review')}
                className={`text-sm font-bold py-2 px-3 rounded-lg border-b border-slate-50 transition-colors ${
                  currentPage === 'review' ? 'text-purple-600 bg-purple-50/50' : 'text-slate-700 hover:text-purple-600'
                }`}
              >
                Review
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, 'contact')}
                className={`text-sm font-bold py-2 px-3 rounded-lg border-b border-slate-50 transition-colors ${
                  currentPage === 'contact' ? 'text-purple-600 bg-purple-50/50' : 'text-slate-700 hover:text-purple-600'
                }`}
              >
                Contact
              </a>

              {/* Quick Call Action under Mobile Nav */}
              <div className="pt-3">
                <a
                  href="tel:+919099126937"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-center text-xs font-extrabold text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-purple-600" />
                  Mumbai SLA Support Line: +91 90991 26937
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
