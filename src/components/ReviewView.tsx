import React from 'react';
import { Star, Quote, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function ReviewView() {
  const reviews = [
    {
      id: 'rev-1',
      name: 'Amit Singhal',
      role: 'Chief Technology Director',
      company: 'Alpha Wealth Systems',
      text: 'Our server array suffered a sudden RAID layout failure. GNJ senior engineers arrived at our Mumbai data room in under 90 minutes, physically swapped the hot-plug drive, and restored integrity with zero information loss. Reduced downtime is critical in high-frequency trading.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80'
    },
    {
      id: 'rev-2',
      name: 'Sarah Peterson',
      role: 'Operations Lead & Partner',
      company: 'Oakwood Law Associates',
      text: 'Prior to implementing their AMC support plan, physical workstation failures caused major issues in our back-office legal filing teams. Now, with monthly scheduled preventative tuning and ventilation cleansing, hardware emergencies are almost non-existent.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80'
    },
    {
      id: 'rev-3',
      name: 'Preeti Nair',
      role: 'Head of Operations Desk',
      company: 'Bombay Logistics Hub',
      text: 'Their structured cabling layout completely transformed our server rack room. Clean Cat6A runs, clear labeling, and neatly dressed patch panels solved all physical Wi-Fi signal issues. True professional class hardware specialists with fast service response.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80'
    },
    {
      id: 'rev-4',
      name: 'Rajesh Kulkarni',
      role: 'Infrastructure & HR Director',
      company: 'Apex Media Broadcasts',
      text: 'Flashed screen issues and damaged hinges inside our primary edit suite laptops were delaying our daily editorial releases. GNJ team picked up forty systems, did full physical LCD/hinge recovery, and dispatched them back in pristine order within 48 hours.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80'
    },
    {
      id: 'rev-5',
      name: 'Vikas Shah',
      role: 'IT Procurement Head',
      company: 'GNJ Health Labs',
      text: 'Their professional engineers diagnosed complex power IC degradation on 14 lab workstations. Instead of expensive motherboard replacements, they reflowed resistors safely at micro-benches on site. Exceptional expertise.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80'
    },
    {
      id: 'rev-6',
      name: 'Anjali Sharma',
      role: 'Director of Operations',
      company: 'Sovereign Fintech Group',
      text: 'GNJ Hardware Services reduced our physical workstation downtime down to virtually zero. Their fast service response and reliable monthly AMC visits saved us countess crucial workspace hours.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80'
    }
  ];

  return (
    <div className="pt-24 select-none text-left">
      {/* Editorial Header */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="inline-block font-mono text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 bg-purple-50 px-3 py-1 rounded-full uppercase">
              Corporate Affiliations
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              What Our Clients Say
            </h1>
            <p className="text-slate-655 text-sm md:text-md leading-relaxed font-light">
              Read how leading finance firms, shipping hubs, law centers, and hospitals maintain peak operational hardware uptime under our dually certificated support SLA.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
            {/* Absolute vector details */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full -mr-20 -mt-20 pointer-events-none" />
            <Quote className="absolute right-12 bottom-12 w-32 h-32 text-white/5 select-none pointer-events-none stroke-[1]" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 py-1 px-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 text-pink-300" /> Featured AMC Success Story
              </div>

              {/* Stars */}
              <div className="flex gap-1.5 object-left">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-pink-300 fill-pink-300" />
                ))}
              </div>

              <blockquote className="text-lg md:text-2xl font-display font-bold leading-relaxed">
                "Signing a flat-rate AMC agreement with GNJ was the single best operational decision we made this fiscal year. They upgraded 55 of our reception laptops to durable solid-state drives and completed clean system micro-soldering on our primary firewall arrays, extending workstation lifespans by years."
              </blockquote>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80"
                  alt="Siddharth Mehta"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/30 shadow-md"
                />
                <div>
                  <span className="block font-black text-base md:text-lg">Siddharth Mehta</span>
                  <span className="block text-xs text-purple-100 font-medium mt-0.5">Managing Director, Capital Logistics Ltd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Review Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50 border border-purple-100/20 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-all group relative overflow-hidden"
              >
                {/* Float quote indicator */}
                <Quote className="absolute right-6 top-6 w-10 h-10 text-slate-200 group-hover:text-purple-100 transition-colors stroke-[1.5]" />

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-slate-650 text-xs md:text-sm leading-relaxed italic relative z-10">
                    "{rev.text}"
                  </p>
                </div>

                {/* Author profile block */}
                <div className="flex items-center gap-3 pt-6 border-t border-slate-200/50 mt-6 md:mt-8">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-white shadow-xs"
                  />
                  <div>
                    <span className="block font-bold text-slate-900 text-sm leading-none">
                      {rev.name}
                    </span>
                    <span className="block text-3xs text-slate-550 mt-1 leading-none">
                      {rev.role}, <strong className="text-purple-650">{rev.company}</strong>
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Uptime Badge footer */}
          <div className="mt-16 text-center max-w-xl mx-auto p-4 bg-gradient-to-r from-purple-600/5 to-pink-500/5 border border-purple-100 rounded-xl flex items-center justify-center gap-2.5">
            <HeartHandshake className="w-5 h-5 text-purple-650 flex-shrink-0" />
            <p className="text-slate-700 text-xs font-bold leading-normal">
              Trusted for premium on-site physical support with <strong className="text-purple-650">99.8% customer satisfaction</strong> metrics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
