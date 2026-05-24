import React from 'react';
import { Laptop, Monitor, Network, Server, FileText, Printer, Check, ArrowRight } from 'lucide-react';
import { services } from '../data';

interface ServicesViewProps {
  onOpenDiagnostic: (defaultCategory?: string) => void;
  setCurrentPage: (page: string) => void;
}

function getServiceIcon(id: string) {
  switch (id) {
    case 'laptop-repair':
      return <Laptop className="w-6 h-6 text-purple-600" />;
    case 'desktop-repair':
      return <Monitor className="w-6 h-6 text-pink-500" />;
    case 'network-setup':
      return <Network className="w-6 h-6 text-violet-500" />;
    case 'server-maintenance':
      return <Server className="w-6 h-6 text-purple-600" />;
    case 'amc-services':
      return <FileText className="w-6 h-6 text-pink-500" />;
    case 'printer-repair':
      return <Printer className="w-6 h-6 text-violet-500" />;
    default:
      return <Laptop className="w-6 h-6 text-purple-600" />;
  }
}

function mapCategoryToDiagnosticKey(id: string): string {
  switch (id) {
    case 'laptop-repair': return 'laptop';
    case 'desktop-repair': return 'desktop';
    case 'network-setup': return 'network';
    case 'server-maintenance': return 'server';
    case 'printer-repair': return 'printer';
    default: return 'laptop';
  }
}

export default function ServicesView({ onOpenDiagnostic, setCurrentPage }: ServicesViewProps) {
  return (
    <div className="pt-24 select-none">
      {/* Intro Header */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-left space-y-4">
            <span className="inline-block font-mono text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 bg-purple-50 px-3 py-1 rounded-full uppercase">
              Robust Hardware Architecture
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Specialized Hardware Support Solutions
            </h1>
            <p className="text-slate-655 text-sm md:text-lg leading-relaxed font-light">
              We focus 100% on physical workplace computing infrastructure. Our certified technicians troubleshoot chips, rebuild server racks, run cabling, and sustain heavy network print rollers with absolute precision.
            </p>
          </div>
        </div>
      </section>

      {/* Grid List */}
      <section className="pb-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="flex flex-col bg-white rounded-2xl border border-purple-100/30 p-6 md:p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon & Est price header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl group-hover:from-purple-600 group-hover:to-pink-500 transition-colors duration-300 group-hover:text-white">
                    {getServiceIcon(service.id)}
                  </div>
                  <div className="text-right">
                    <span className="block text-4xs font-mono font-bold uppercase tracking-widest text-slate-400">Est. Base Rate</span>
                    <span className="block text-base font-extrabold text-slate-900 mt-0.5">{service.basePrice}</span>
                  </div>
                </div>

                {/* Info titles */}
                <div className="flex-grow">
                  <h3 className="font-display font-black text-lg md:text-xl text-slate-950 mb-3 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                        <div className="w-4 h-4 rounded-full bg-purple-50 text-purple-600 inline-flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions bottom bar */}
                <div className="pt-5 border-t border-slate-50 flex items-center justify-between text-xs mt-auto">
                  <span className="text-slate-500 font-medium font-mono text-3xs">
                    SLA: <strong className="text-slate-700 font-sans text-xs">{service.typicalTurnaround}</strong>
                  </span>

                  {service.id === 'amc-services' ? (
                    <button
                      type="button"
                      onClick={() => setCurrentPage('contact')}
                      className="inline-flex items-center gap-1 text-purple-650 hover:text-pink-600 font-bold tracking-tight cursor-pointer"
                    >
                      Inquire AMC <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onOpenDiagnostic(mapCategoryToDiagnosticKey(service.id))}
                      className="inline-flex items-center gap-1 text-purple-650 hover:text-pink-600 font-bold tracking-tight cursor-pointer"
                    >
                      Instant Quote <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
