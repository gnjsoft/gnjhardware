import React from 'react';
import { Award, ShieldCheck, Target, Heart, Eye } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="pt-24 select-none">
      {/* Editorial Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-4xl space-y-4">
            <span className="inline-block font-mono text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 bg-purple-50 px-3 py-1 rounded-full uppercase">
              Corporate Overview
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-slate-900 tracking-tight leading-[1.1]">
              A Dedicated Physical IT Hardware Partner You Can Rely On
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-650 leading-relaxed font-light pt-2">
              Established in 2012 in the business heart of Mumbai, we engineered our enterprise specifically to address the physical computing needs of regional offices, creative studios, medical laboratories, and logistics hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Split & Timeline */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 tracking-tight">
                Our Genesis: Bridging the Desktop & Infrastructure Gap
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                As virtual landscapes soared, standard Managed Service Providers (MSPs) shifted 100% of their focus into cloud directories, digital email accounts, and monthly software licenses. This left on-premise computing hardware heavily neglected.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We stepped in to fill that technical gap. Our focus remains exclusively on the physical elements. Our Mumbai operations incorporate a leading physical diagnostic lab operating with anti-static ESD-secured workbenches. We perform premium motherboards repair, redundant RAID backups, optical printer rebuilds, and meticulous structured network cabling.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Every member on our technical team is dual-certified across leading technology partners. We handle high-volume bulk office laptops (ThinkPad, Latitude, HP EliteBook, Apple MacBook) and secure server cabinets with strict accuracy and minimal turnaround times.
              </p>

              {/* Grid indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                <div className="space-y-1">
                  <span className="block font-display font-black text-3xl text-purple-600">14+ Years</span>
                  <span className="block text-4xs font-bold text-slate-500 uppercase tracking-widest font-mono">Industry Tenure</span>
                </div>
                <div className="space-y-1">
                  <span className="block font-display font-black text-3xl text-pink-500">45k+ Units</span>
                  <span className="block text-4xs font-bold text-slate-500 uppercase tracking-widest font-mono">Hardware Healed</span>
                </div>
                <div className="space-y-1">
                  <span className="block font-display font-black text-3xl text-purple-600">120 Days</span>
                  <span className="block text-4xs font-bold text-slate-500 uppercase tracking-widest font-mono">Spares Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Graphics and Certifications */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 rounded-3xl border border-purple-100/50 p-6 md:p-8 space-y-6 text-left">
                <h3 className="font-display font-bold text-lg text-slate-900">Our Quality Standards</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Award className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-900 leading-tight">ISO 9001:2015 Processes</h4>
                      <p className="text-xs text-slate-500 mt-1">Rigorous sequential testing blueprints for every machine drop-off or pickup.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-900 leading-tight">Anti-Static Safe Lab Environment</h4>
                      <p className="text-xs text-slate-500 mt-1">Grounded bench surface fields to protect fragile motherboard microprocessor silicon.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200/60 pt-5 space-y-3">
                  <p className="text-2xs font-mono font-bold text-slate-400 uppercase tracking-widest leading-none">Partner Compliancy</p>
                  <div className="flex flex-wrap gap-2 text-3xs font-bold text-slate-700">
                    <span className="bg-white border border-slate-200 py-1 px-2.5 rounded-lg shadow-3xs">Cisco Partner</span>
                    <span className="bg-white border border-slate-200 py-1 px-2.5 rounded-lg shadow-3xs">Dell Authorized Spares</span>
                    <span className="bg-white border border-slate-200 py-1 px-2.5 rounded-lg shadow-3xs">HP Business Care Partner</span>
                    <span className="bg-white border border-slate-200 py-1 px-2.5 rounded-lg shadow-3xs">Lenovo Fleet Cert</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block font-mono text-2xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 bg-purple-50 px-3 py-1 rounded-full uppercase">
              Corporate Direction
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
              Our Compass & Dedication
            </h2>
            <p className="text-slate-655 text-sm md:text-base">
              Discover the principles that steer our service dispatches, parts procurement, and long-term client relations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Panel */}
            <div className="bg-white rounded-2xl border border-purple-50 p-8 shadow-sm flex flex-col justify-between text-left relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-150/10 to-transparent rounded-bl-full" />
              <div>
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-100/10">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-xl text-slate-905 mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  To eliminate unexpected office downtime by delivering premium, rapid-response physical IT hardware services. We aim to revive existing resources, extend workstation assets lifespan, and provide predictable budget protection through comprehensive Annual Maintenance Contracts.
                </p>
              </div>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-4 border-t border-slate-100 mt-2 font-mono">
                <li>• Maximize physical resource longevity</li>
                <li>• Eliminate corporate computing hazards</li>
                <li>• Secure transparency in spares pricing</li>
              </ul>
            </div>

            {/* Vision Panel */}
            <div className="bg-white rounded-2xl border border-pink-50 p-8 shadow-sm flex flex-col justify-between text-left relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-150/10 to-transparent rounded-bl-full" />
              <div>
                <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-xl flex items-center justify-center mb-6 border border-pink-100/10">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-xl text-slate-905 mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  To become India’s most robust, transparent, and eco-conscious physical IT hardware service enterprise. We strive to pioneer sustainable circuit salvage, circular recycling processes for defunct office devices, and establish premium preventative service benchmarks.
                </p>
              </div>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-4 border-t border-slate-100 mt-2 font-mono">
                <li>• Zero e-waste workspace targeting</li>
                <li>• 100% certified electrical recycling</li>
                <li>• Pan-India business service ecosystem</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
