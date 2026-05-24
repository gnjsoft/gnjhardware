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
    <div className="pt-24 select-none">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-white">
        {/* Soft decorative background glow circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left Texts Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-100 text-purple-700 text-xs font-mono font-bold tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-500" /> Professional IT Hardware Partner
              </div>
              
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-black">Hardware Services</span> for Your Business
              </h1>

              <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                Fast, secure and affordable IT hardware support. We specialize in laptop repair fleets, heavy-duty server arrays, structured cabling, and enterprise AMC agreements.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  type="button"
                  id="hero-get-quote"
                  onClick={onOpenDiagnostic}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-95 text-white font-bold text-base py-3.5 px-8 rounded-xl shadow-lg shadow-purple-100 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  Get Quote
                </button>
                <button
                  type="button"
                  id="hero-contact-now"
                  onClick={() => setCurrentPage('contact')}
                  className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 font-bold text-base py-3.5 px-8 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  Contact Now
                </button>
              </div>
            </div>

            {/* Right Static Highlight Dashboard */}
            <div className="lg:col-span-5 w-full">
              <div className="relative bg-slate-50 rounded-3xl border border-purple-50 p-6 md:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-purple-100 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900">Mumbai Operations</h3>
                    <p className="text-2xs font-mono text-purple-600 uppercase tracking-widest font-bold mt-1">Live Helpdesk Dispatch</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Active SLA
                  </span>
                </div>

                <div className="space-y-4 text-left">
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-xs">
                    <span className="block text-4xs font-mono font-bold text-slate-400 uppercase tracking-widest">Average Service Dispatch</span>
                    <h4 className="text-2xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mt-1">Under 4 Hours</h4>
                    <p className="text-xs text-slate-500 mt-1">Immediate local transit in Greater Mumbai network corridor.</p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-xs">
                    <span className="block text-4xs font-mono font-bold text-slate-400 uppercase tracking-widest">Worry-free AMC Standard</span>
                    <h4 className="text-2xl font-black font-display text-slate-900 mt-1">Zero Downtime Pledge</h4>
                    <p className="text-xs text-slate-500 mt-1">99.8% server & workstation reliability audit score.</p>
                  </div>
                </div>

                {/* Instant interactive action inside badge */}
                <div className="bg-gradient-to-br from-purple-600/10 to-pink-500/10 border border-purple-100 rounded-2xl p-5 text-center">
                  <h4 className="font-bold text-purple-900 text-sm leading-tight">Need a quick cost estimation?</h4>
                  <p className="text-xs text-slate-600 mt-1 mb-3">Check custom repairs with our Instant Troubleshooter.</p>
                  <button
                    type="button"
                    onClick={onOpenDiagnostic}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-95 text-white font-bold text-xs py-2 px-4 rounded-xl transition-all shadow-md shadow-purple-200 cursor-pointer"
                  >
                    Calculate Cost Estimate
                  </button>
                </div>
              </div>
            </div>

          </div>
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
