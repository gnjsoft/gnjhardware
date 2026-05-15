import React from 'react';
import { Shield, Zap, Tool as ToolIcon, Mail, Phone, MapPin, ChevronRight, Globe, LifeBuoy } from 'lucide-react';
import { motion } from 'motion/react';

export const GlobalSupport: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Hero */}
        <div className="relative rounded-[60px] overflow-hidden bg-white/5 border border-white/5 py-40 px-12 mb-20 text-center">
           <div className="absolute inset-0 bg-grid-white opacity-10" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />
           
           <div className="relative z-10 space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent shadow-2xl">
                 <LifeBuoy size={16} />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em]">Hardware Priority Lane</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                CORE <br /> <span className="text-accent italic">PROTOCOLS.</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
                Dedicated technical support for the elite workforce. Choose your communication vector.
              </p>
           </div>
        </div>

        {/* Contact Vectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           {[
             { icon: <Mail />, title: 'Direct Access', detail: 'support@techcore.hub', desc: 'Secure communication channel' },
             { icon: <Phone />, title: 'Voice Link', detail: '+1-800-TECH-CORE', desc: 'Priority signal routing' },
             { icon: <Globe />, title: 'Global Grid', detail: 'Registry Offices', desc: 'Physical node support' }
           ].map((v, i) => (
             <div key={i} className="group p-10 bg-white/5 border border-white/5 rounded-[40px] hover:border-accent transition-all duration-500 space-y-8">
                <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center text-black shadow-2xl group-hover:scale-110 transition-transform">
                   {v.icon}
                </div>
                <div className="space-y-2">
                   <h3 className="text-2xl font-black uppercase tracking-tighter">{v.title}</h3>
                   <p className="text-lg font-black text-white">{v.detail}</p>
                   <p className="text-sm font-medium text-slate-500">{v.desc}</p>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-widest group-hover:gap-4 transition-all">
                  Initialize Sync <ChevronRight size={14} />
                </button>
             </div>
           ))}
        </div>

        {/* FAQ Grid */}
        <div className="space-y-12">
           <div className="flex items-end justify-between border-b border-white/5 pb-8">
             <h2 className="text-4xl font-black uppercase tracking-tighter">Knowledge Registry</h2>
             <span className="text-accent font-black tracking-widest text-[10px] uppercase">v2.0 ACTIVE</span>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              {[
                { q: "What is the standard warranty protocol?", a: "Every TechCore node comes with a 3-year limited warranty covering internal component failures and architectural defects." },
                { q: "How do I request a custom hardware build?", a: "Custom nodes can be requested through the Priority Lane for enterprise clients. Single-unit custom requests are handled via the Build Matrix." },
                { q: "Are deployments available internationally?", a: "We operate in 140 regions worldwide through our secure logistics partner, GlobalNextGen." },
                { q: "How do I track my active acquisition?", a: "Active acquisition status can be monitored in real-time through the Registry Tracking system with your unique Node ID." }
              ].map((faq, i) => (
                <div key={i} className="space-y-4">
                   <h4 className="text-lg font-black text-white uppercase tracking-tight flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {faq.q}
                   </h4>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
