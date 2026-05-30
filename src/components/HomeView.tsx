import React from 'react';
import { Cpu, ArrowRight, ShieldCheck, Mail, Laptop, Server, Network, Printer } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeViewProps {
  onOpenDiagnostic: () => void;
  setCurrentPage: (page: string) => void;
}

export default function HomeView({ onOpenDiagnostic, setCurrentPage }: HomeViewProps) {
  const quickServices = [
    {
      id: 'laptop-repair',
      title: 'Enterprise Laptop Repair',
      description: 'Precision micro-soldering, internal board repair, hinge recovery, defective LCD screens, and premium battery upgrades for corporate fleets.',
      icon: <Laptop className="w-8 h-8 text-purple-600" />
    },
    {
      id: 'server-maintenance',
      title: 'Server Hardware Infrastructure',
      description: 'Physical maintenance for rackmount server systems, hardware RAID reconstruction, Storage Area Network (SAN) support, and battery backup (UPS) systems.',
      icon: <Server className="w-8 h-8 text-pink-500" />
    },
    {
      id: 'network-setup',
      title: 'Network Setup & Troubleshooting',
      description: 'Structured Cat6/Cat6A cabling, neat server rack layout, Cisco/Ubiquiti hardware upgrades, and precise Wi-Fi signal optimization.',
      icon: <Network className="w-8 h-8 text-violet-500" />
    }
  ];

  return (
    <div className="select-none">
      {/* Immersive Futuristic Dark Wave Hero Section (Inspired by Reference Image Style) */}
      <section className="relative min-h-[92vh] flex flex-col justify-between items-center overflow-hidden bg-slate-950 text-white select-none">
        {/* Background 3D Wave Abstract Overlay matching the reference layout */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 z-0 scale-105 pointer-events-none"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1920')" 
          }}
        />
        
        {/* Deep mesh radial-gradients for that premium futuristic neon visual gloss atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/85 to-slate-950 z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36 sm:pt-44 lg:pt-48 pb-12 flex-grow flex flex-col justify-center text-center">
          <div className="space-y-8 animate-fade-in">
            {/* Header Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-pink-300 text-2xs font-mono font-bold tracking-widest uppercase shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Enterprise IT Service Partner
            </div>
            
            {/* Massive Display Title resembling the exact reference image */}
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] max-w-5xl mx-auto drop-shadow-xl">
              GNJ Hardware Services – Your IT, Network & Server Maintenance Partner In Mumbai
            </h1>

            {/* Explanatory subtitle */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-md">
              We provide expert IT maintenance and flexible SLA contracts to keep your business running at peak performance. Fast, secure, & responsive on-site hardware dispatch.
            </p>

            {/* Dynamic Buttons pair conforming to reference image style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              {/* Button 1: Get A Free IT Consultation */}
              <button
                type="button"
                id="hero-get-quote"
                onClick={onOpenDiagnostic}
                className="w-full sm:w-auto flex items-center justify-between gap-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-650 text-white font-bold text-sm sm:text-base py-3.5 px-3.5 pl-8 rounded-full shadow-2xl shadow-purple-500/25 active:scale-98 transition-all cursor-pointer group"
              >
                <span>Get A Free IT Consultation</span>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950/40 flex items-center justify-center text-white flex-shrink-0 group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                </span>
              </button>

              {/* Button 2: Explore Our Services */}
              <button
                type="button"
                id="hero-explore-services"
                onClick={() => setCurrentPage('services')}
                className="w-full sm:w-auto flex items-center justify-between gap-4 bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base py-3.5 px-3.5 pl-8 rounded-full border border-white/15 backdrop-blur-sm active:scale-98 transition-all cursor-pointer group"
              >
                <span>Explore Our Services</span>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center text-slate-950 flex-shrink-0 group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-950" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Down interaction container matching image bottom center */}
        <div className="relative z-10 pb-8 flex flex-col items-center gap-2 pointer-events-none select-none">
          {/* Animated mouse layout */}
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2 opacity-60">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
          </div>
          <span className="font-mono text-[9px] text-slate-400 tracking-[0.25em] uppercase font-semibold">
            scroll down
          </span>
        </div>
      </section>

      {/* Quick Services Preview Section */}
      <section className="py-20 bg-slate-50/60 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block font-mono text-2xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 bg-purple-50 px-3 py-1 rounded-full uppercase">
              Core Expertise
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
              Hardware Diagnostics & Restoration
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Explore our core specializations designed to maximize corporate hardware lifespan and ensure absolute business persistence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 border border-purple-100/10 group-hover:scale-105 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-900 mb-3 group-hover:text-purple-650 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <button
                  type="button"
                  onClick={() => setCurrentPage('services')}
                  className="inline-flex items-center gap-1.5 font-bold text-xs text-purple-600 group-hover:text-pink-600 transition-colors text-left"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setCurrentPage('services')}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 font-bold text-xs py-3.5 px-8 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            Ready to Safeguard Your Corporate Infrastructure?
          </h2>
          <p className="text-slate-650 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
            Stop waiting for hardware outages to freeze your team's workflow. Partner with our certified engineers and deploy preventative AMC plans tailored for your office size.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-95 text-white font-bold text-sm py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-purple-100 cursor-pointer"
            >
              Get Custom Quote
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-850 text-white font-bold text-sm py-3.5 px-8 rounded-xl transition-all cursor-pointer animate-pulse"
            >
              Request Fast Dispatch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
