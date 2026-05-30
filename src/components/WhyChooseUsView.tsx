import React from 'react';
import { Zap, ShieldCheck, FileText, MapPin, ThumbsUp, Users, Calendar, Award, Star } from 'lucide-react';

export default function WhyChooseUsView() {
  const benefits = [
    {
      title: 'Fast Response Time',
      description: 'System outages halt your workforce. We mobilize our engineers immediately, maintaining an average arrival time at your Mumbai dispatch floor in under 90 minutes.',
      icon: <Zap className="w-6 h-6 text-purple-600" />
    },
    {
      title: 'Certified Engineers',
      description: 'Our workbench team holds dual industry certifications in leading platforms (Dell, Lenovo, Hewlett-Packard, Cisco) and active CompTIA A+ and IEEE hardware credentials.',
      icon: <ShieldCheck className="w-6 h-6 text-pink-500" />
    },
    {
      title: 'Affordable Pricing',
      description: 'Get predictable IT cost structures. We structure clear flat-rate annual maintenance service tiers that align perfectly to your corporate budget limitations.',
      icon: <FileText className="w-6 h-6 text-violet-500" />
    },
    {
      title: 'On-site Support',
      description: 'Avoid moving heavy printer units or computer clusters around. Our diagnostic vehicles carry professional testing accessories and spare parts straight to your office floor.',
      icon: <MapPin className="w-6 h-6 text-purple-600" />
    },
    {
      title: 'Trusted by Businesses',
      description: 'Over 500 regional companies, dynamic coworking spaces, school computer rooms, healthcare groups, and logistics centers run smoothly daily under our support.',
      icon: <ThumbsUp className="w-6 h-6 text-pink-500" />
    }
  ];

  const stats = [
    { value: '500+', label: 'Clients Served', icon: <Users className="w-5 h-5 text-purple-600" /> },
    { value: '10+', label: 'Years Experience', icon: <Calendar className="w-5 h-5 text-pink-500" /> },
    { value: '24/7', label: 'Critical Support', icon: <Award className="w-5 h-5 text-violet-500" /> },
    { value: '4.9/5', label: 'Average Rating', icon: <Star className="w-5 h-5 text-amber-500 fill-amber-450" /> }
  ];

  return (
    <div className="pt-24 select-none text-left">
      {/* Intro Header */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block font-mono text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 bg-purple-50 px-3 py-1 rounded-full uppercase">
              Operational Advantages
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Why Corporate Teams Choose Our Hardware Support
            </h1>
            <p className="text-slate-600 text-sm md:text-md leading-relaxed">
              We focus purely on prompt physical servicing, certified troubleshooting protocols, and transparent spare parts margins. Experience proactive support with an operational partner that acts immediately to minimize system downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counters Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-br from-purple-600/5 to-pink-500/5 border border-purple-100/50 rounded-3xl" id="about-stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="mx-auto w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs">
                  {stat.icon}
                </div>
                <div className="font-display font-black text-3xl md:text-4xl text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs font-mono tracking-wider text-slate-500 uppercase font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icon-Based Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-purple-100 p-8 shadow-3xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-purple-100/10 flex items-center justify-center mb-6 shadow-sm">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-950 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100/50 mt-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">SLA COMPLIANT</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
