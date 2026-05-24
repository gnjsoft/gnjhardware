import React from 'react';
import { Cpu, ArrowUp, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavLinkClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    setCurrentPage(pageId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="site-footer" className="bg-slate-900 text-slate-400 font-sans pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-800 pb-16">
          
          {/* Col 1 Brand Statement */}
          <div className="lg:col-span-5 text-left space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, 'home')}
              className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity"
              id="footer-brand"
            >
              <div className="p-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg">
                <Cpu className="h-5.5 w-5.5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-white block leading-none">
                  METRO
                </span>
                <span className="text-3xs font-mono tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block uppercase font-semibold mt-0.5">
                  Hardware Services
                </span>
              </div>
            </a>
            
            <p className="text-xs md:text-sm leading-relaxed text-slate-400 pr-5 max-w-md">
              Specialized hardware diagnostics, physical computer repair, advanced networks infrastructure cabling, laser printer restorations, and zero-worry flat-rate business AMC SLA contracts.
            </p>

            {/* Salvage pledge note */}
            <div className="p-3.5 bg-slate-850 border border-slate-800 rounded-xl text-3xs text-slate-400 leading-normal max-w-sm">
              🌱 <strong className="text-slate-300">Spares Salvage Pledge</strong>: We actively recover, extract, and recycle legacy silicon and battery arrays according strictly to environmental WEEE guidelines.
            </div>
          </div>

          {/* Col 2 Quick navigation */}
          <div className="lg:col-span-3 text-left space-y-4 font-sans">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-slate-200">
              Company Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavLinkClick(e, 'home')}
                  className="hover:text-white transition-colors"
                  id="foot-link-home"
                >
                  Home Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavLinkClick(e, 'about')}
                  className="hover:text-white transition-colors"
                  id="foot-link-about"
                >
                  About Corporate
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleNavLinkClick(e, 'why-choose-us')}
                  className="hover:text-white transition-colors"
                  id="foot-link-why"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavLinkClick(e, 'services')}
                  className="hover:text-white transition-colors"
                  id="foot-link-services"
                >
                  Hardware Services
                </a>
              </li>
              <li>
                <a
                  href="#review"
                  onClick={(e) => handleNavLinkClick(e, 'review')}
                  className="hover:text-white transition-colors"
                  id="foot-link-review"
                >
                  Client Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavLinkClick(e, 'contact')}
                  className="hover:text-white transition-colors"
                  id="foot-link-contact"
                >
                  Contact Helpdesk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 Contacts details */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-slate-200">
              Metro India SLA Helpdesk
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+91 22 5555 1900 (Corridor support)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>mumbai.dispatch@metrohardware.in</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Naman Centre, G Block, Bandra Kurla Complex (BKC), Mumbai, 400051</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-3xs text-slate-500 font-mono tracking-wider uppercase block">Channels:</span>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn Profile"
                id="footer-social-linkedin"
                className="p-1.5 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook Page"
                id="footer-social-facebook"
                className="p-1.5 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="X Profile"
                id="footer-social-twitter"
                className="p-1.5 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright area with back to top button */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-2xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Metro Hardware Services, Inc. All rights reserved. 
            <span className="block sm:inline sm:ml-2 text-slate-600">All registered trademark assets belong to their respective corporate entities.</span>
          </div>

          <button
            type="button"
            onClick={handleScrollToTop}
            id="back-to-top-footer-btn"
            className="flex items-center gap-1.5 bg-slate-850 hover:bg-slate-800 hover:text-slate-200 text-slate-400 py-2 px-3.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3 animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
