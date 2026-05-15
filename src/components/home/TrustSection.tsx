import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star, ShieldCheck, Leaf, RotateCcw, Laptop } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] font-black text-[#d97706] uppercase tracking-[0.4em]">Why Edify</span>
          <h2 className="text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight">
            Built on trust. Backed by proof.
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto font-medium">
            Every laptop goes through a rigorous 49-point inspection, comes with a 12-month
            warranty, and is priced to feel like a smart upgrade.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Column 1: Brand & Savings */}
          <div className="space-y-6 flex flex-col">
            <div className="bg-white rounded-[32px] p-8 flex-1 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                 <span className="text-[10px] font-black text-[#d97706] uppercase tracking-widest">Our Promise</span>
                 <h3 className="text-3xl font-black text-black leading-tight">Why Edify?</h3>
                 <p className="text-slate-400 text-xs font-medium leading-relaxed">
                   Every laptop is certified, warrantied, and priced to feel like a smart upgrade.
                 </p>
              </div>
              <div className="mt-8">
                 <span className="px-4 py-2 border border-slate-100 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">Better Value, Lower Risk</span>
              </div>
            </div>

            <div className="bg-[#111111] rounded-[32px] p-8 h-[220px] border border-white/5 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent blur-2xl" />
              <div className="z-10 space-y-4">
                 <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-lg text-[#d97706] text-[9px] font-black uppercase tracking-widest">Pocket Friendly</span>
                 <h3 className="text-5xl font-black text-white leading-none">60%</h3>
                 <p className="text-white text-xs font-black uppercase tracking-widest">Savings vs retail</p>
              </div>
              <p className="z-10 text-zinc-500 text-[10px] font-medium leading-relaxed">
                Flagship performance and business-grade machines at a much smarter price point.
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm space-y-4">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Rated on Google</span>
               <div className="space-y-1">
                  <div className="text-4xl font-black text-black leading-none">4.8</div>
                  <p className="text-[10px] text-slate-400 font-bold">From thousands of verified reviews</p>
               </div>
               <div className="flex gap-1">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={10} className="fill-orange-400 text-orange-400" />
                 ))}
               </div>
            </div>
          </div>

          {/* Column 2: Trust & Eco */}
          <div className="space-y-6 flex flex-col">
            <div className="bg-[#0c0c0c] rounded-[32px] p-8 flex-1 border border-white/5 shadow-xl flex flex-col justify-between relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="z-10 space-y-4">
                 <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Trusted By</span>
                 <h3 className="text-4xl font-black text-white leading-none">50K+</h3>
                 <p className="text-white text-xs font-bold">Happy customers</p>
              </div>
              <p className="z-10 text-zinc-500 text-[11px] font-medium leading-relaxed mt-8">
                Thousands of students, teams, and creators buy refurbished through Edify every month.
              </p>
            </div>

            <div className="bg-[#0c0c0c] rounded-[32px] p-8 h-[220px] border border-white/5 shadow-xl flex flex-col justify-between group">
              <div className="z-10 space-y-3">
                 <span className="text-[10px] font-black text-teal-500 uppercase tracking-widest">Eco Impact</span>
                 <div className="flex items-end gap-3">
                    <h3 className="text-5xl font-black text-white leading-none">75%</h3>
                    <Leaf size={24} className="text-teal-500 mb-1" />
                 </div>
                 <p className="text-white text-xs font-bold leading-none">Less e-waste</p>
              </div>
              <p className="z-10 text-zinc-500 text-[10px] font-medium leading-relaxed">
                Every refurbished laptop extends product life and keeps a useful device out of landfill.
              </p>
            </div>

            <div className="bg-[#0c0c0c] rounded-[32px] p-8 border border-white/5 shadow-xl space-y-4 group">
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Returns</span>
               <div className="space-y-1">
                  <h3 className="text-3xl font-black text-white">14-Day</h3>
                  <p className="text-[11px] text-zinc-400 font-bold">No-questions returns</p>
               </div>
               <p className="text-zinc-500 text-[10px] font-medium leading-relaxed">
                 Free pickup support makes post-purchase risk feel much lower.
               </p>
            </div>
          </div>

          {/* Column 3 & 4 (Right Side - Wide) */}
          <div className="lg:col-span-2 space-y-6 flex flex-col">
            <div className="bg-[#e8f5e9] rounded-[40px] p-10 flex-1 flex items-center gap-8 relative overflow-hidden group">
               <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle2 size={40} />
               </div>
               <div className="space-y-3">
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Quality Certified</span>
                  <h3 className="text-4xl font-black text-black tracking-tight leading-none">49-Point</h3>
                  <p className="text-black text-sm font-bold">Inspection on every device</p>
                  <p className="text-emerald-900/60 text-xs font-medium max-w-sm">
                    Battery, keyboard, ports, display, thermals, and performance are checked before shipping.
                  </p>
               </div>
               <div className="absolute top-10 right-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                  <ShieldCheck size={120} />
               </div>
            </div>

            <div className="bg-[#e3f2fd] rounded-[40px] p-10 flex-1 flex items-center gap-8 relative overflow-hidden group">
               <div className="w-20 h-20 bg-blue-500 rounded-[28px] border-4 border-white/30 flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle2 size={40} />
               </div>
               <div className="space-y-3">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Full Coverage</span>
                  <h3 className="text-4xl font-black text-black tracking-tight leading-none">12-Month</h3>
                  <p className="text-black text-sm font-bold">Warranty included</p>
                  <p className="text-blue-900/60 text-xs font-medium max-w-sm">
                    Hardware defect? Edify handles repairs or replacements with support built into the experience.
                  </p>
               </div>
            </div>

            <div className="bg-[#fff3e0] rounded-[40px] p-10 flex items-center justify-between border border-orange-100 relative overflow-hidden group">
               <div className="space-y-2">
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Huge Selection</span>
                  <div className="space-y-1">
                    <h3 className="text-5xl font-black text-black tracking-tighter">500+</h3>
                    <p className="text-black text-sm font-bold">Laptop models</p>
                  </div>
                  <p className="text-orange-900/60 text-[11px] font-medium max-w-xs mt-4">
                    Dell, HP, Lenovo, Apple, Asus, Acer, and more across student, business, and creator needs.
                  </p>
               </div>
               <div className="hidden sm:block opacity-50 group-hover:translate-x-2 transition-transform duration-700">
                  <div className="relative">
                     <Laptop size={140} className="text-orange-200" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-12 bg-white/40 rounded-sm blur-sm" />
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
