import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Lock, CheckCircle, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 font-sans border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Logo and Info Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                   <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                     <div className="w-2 h-2 bg-white rounded-full" />
                   </div>
                </div>
                <span className="text-2xl font-black tracking-tight text-white">edify</span>
              </Link>
              <p className="text-[13px] text-zinc-400 font-medium leading-relaxed max-w-[280px]">
                India's most trusted certified refurbished laptop marketplace.
                <br />
                50,000+ happy customers.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-zinc-800/40 border border-zinc-700/30 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Certifications Placeholder Icons */}
            <div className="flex items-center gap-6 py-2 opacity-80">
               <div className="flex flex-col items-center">
                 <div className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center">
                   <span className="text-[7px] font-black text-zinc-400">CPCB</span>
                 </div>
               </div>
               <div className="w-[1px] h-6 bg-zinc-800" />
               <div className="flex items-center gap-2">
                 <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center p-1 border border-white/5">
                    <span className="text-[8px] text-zinc-300 font-black uppercase">LiFE</span>
                 </div>
               </div>
               <div className="w-[1px] h-6 bg-zinc-800" />
               <div className="flex flex-col items-center">
                 <div className="w-12 h-6 bg-white/5 border border-zinc-700 rounded flex items-center justify-center">
                   <span className="text-[8px] font-black italic text-zinc-400">G20</span>
                 </div>
               </div>
            </div>

            {/* Address and Company Info */}
            <div className="space-y-5 pt-4">
              <p className="text-[11px] text-zinc-500 font-bold leading-relaxed uppercase tracking-widest max-w-sm">
                2nd Floor, SRS Arcade, 15/2, Hosa Rd, Kasavanahalli, Bengaluru,
                Karnataka - 560035, India
              </p>
              <div className="space-y-1">
                <p className="text-[11px] text-zinc-400 font-black uppercase tracking-[0.2em]">GSTIN: 29AAJCK8673K1ZN</p>
                <p className="text-[11px] font-black text-zinc-300 uppercase tracking-widest">Kuzagan Services Private Limited</p>
              </div>
            </div>
          </div>

          {/* SHOP Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white">Shop</h4>
            <div className="flex flex-col gap-4">
              {['Macbooks', 'Windows', 'Mini PCs', 'Accessories', 'Desktops'].map((link) => (
                <Link key={link} to="/category/all" className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors">{link}</Link>
              ))}
            </div>
          </div>

          {/* SUPPORT Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white">Support</h4>
            <div className="flex flex-col gap-6">
              <Link to="/support" className="text-[13px] font-bold text-zinc-400 hover:text-white transition-colors">Contact Us</Link>
              <a href="mailto:contact@edify.club" className="text-[13px] font-black text-white hover:opacity-80">contact@edify.club</a>
              
              <div className="space-y-1.5 pt-2">
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest leading-none">For Sales</p>
                <p className="text-[14px] font-black text-white">08645572005</p>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest leading-none">For Service / Warranty</p>
                <p className="text-[14px] font-black text-white">08645572006</p>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest leading-none">Logistics & Tracking</p>
                <p className="text-[14px] font-black text-white">08645572007</p>
              </div>
            </div>
          </div>

          {/* COMPANY Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white">Company</h4>
            <div className="flex flex-col gap-4">
              {[
                'Terms of service', 'Shipping Policy', 'Return Policy', 
                'Warranty Policy', 'Privacy Policy', 'FQC Criteria', 
                'Buyback Policy', 'About Us', 'Blogs'
              ].map((link) => (
                <Link key={link} to="#" className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors">{link}</Link>
              ))}
            </div>

            {/* Verification Badges */}
            <div className="flex flex-col gap-3 pt-6">
               <div className="px-5 py-3 bg-zinc-800/30 border border-zinc-700/30 rounded-xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-300 w-fit">
                  <Lock size={14} className="text-zinc-500" />
                  SSL Secure
               </div>
               <div className="px-5 py-3 bg-zinc-800/30 border border-zinc-700/30 rounded-xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-300 w-fit">
                  <CheckCircle size={14} className="text-[#10a345]" />
                  GST Compliant
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-10">
           <p className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.2em]">
             Copyright © 2026 Edify.club
           </p>
           
           <div className="flex flex-wrap justify-center lg:justify-end gap-x-10 gap-y-4">
              {[
                'Terms of service', 'Privacy Policy', 'Shipping Policy', 
                'Return Policy', 'Warranty Policy', 'Buyback Policy', 
                'FQC Criteria', 'Blogs', 'Contact Us', 'About Us'
              ].map((link) => (
                <Link key={link} to="#" className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">
                  {link}
                </Link>
              ))}
           </div>
        </div>
      </div>

      {/* Floating WhatsApp Button - matching the user screenshot */}
      <div className="fixed bottom-8 right-8 z-[100] group">
         <div className="absolute inset-0 bg-[#25D366] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
         <a 
           href="https://wa.me/9108645572005" 
           target="_blank" 
           rel="noreferrer"
           className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all outline-none"
         >
            <MessageCircle size={32} />
         </a>
      </div>
    </footer>
  );
};
