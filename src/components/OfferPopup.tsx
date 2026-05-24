import React, { useState, useEffect, FormEvent } from 'react';
import { X, Gift, Sparkles, CheckCircle2, Phone, User, Mail } from 'lucide-react';

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    // Check if user has already claimed, dismissed or seen the offer in this session
    const hasSeenOffer = localStorage.getItem('gnj_offer_has_seen');
    if (!hasSeenOffer) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000); // 3-second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark as seen so they are not interrupted again
    localStorage.setItem('gnj_offer_has_seen', 'true');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      return;
    }

    // Process submission (simulated server persistence / business logic)
    setStep('success');
    localStorage.setItem('gnj_offer_has_seen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in" id="gnj-offer-popup">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all scale-100 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Bar */}
        <div className="h-2.5 bg-gradient-to-r from-purple-600 to-pink-500 w-full" />

        {/* Close Button Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all z-10 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-8 text-left">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-mono font-bold tracking-wider uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              <span>Limited Time Deal 🎉</span>
            </div>

            {/* Title / Headline */}
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 leading-tight">
              Special Offer For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Corporate AMC Services
              </span>
            </h3>

            {/* Sub-headline text */}
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Get an exclusive <strong className="text-purple-600">20% discount</strong> on our comprehensive, SLA-backed Hardware Annual Maintenance Contracts this quarter. Keep your IT downtime down to absolute zero with GNJ.
            </p>

            {/* Offer Discount Card Highlight */}
            <div className="mt-5 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100/50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0 animate-bounce">
                20%
              </div>
              <div>
                <span className="block font-mono text-4xs uppercase tracking-widest text-purple-500 font-bold">Special Promo Code</span>
                <strong className="text-slate-800 text-sm font-display tracking-tight">GNJAMC2026</strong>
                <span className="block text-2xs text-slate-500">Applicable for 10+ node setups</span>
              </div>
            </div>

            {/* Lead Intake Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Full Name Name */}
              <div>
                <label className="block text-3xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Authorized Contact person
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none rounded-xl/2 transition-all placeholder:text-slate-400 text-slate-800"
                  />
                </div>
              </div>

              {/* Grid Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone number */}
                <div>
                  <label className="block text-3xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none rounded-xl/2 transition-all placeholder:text-slate-400 text-slate-800"
                    />
                  </div>
                </div>

                {/* Email address */}
                <div>
                  <label className="block text-3xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Corporate Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none rounded-xl/2 transition-all placeholder:text-slate-400 text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons row */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="w-full flex-grow py-3 px-5 text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-xl shadow-lg shadow-purple-200 transition-all transform hover:-translate-y-0.5"
                >
                  Claim 20% AMC Discount
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto py-3 px-4 text-center text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
                >
                  No thanks, later
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-5">
            {/* Success View */}
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-slate-900">
                Offer Claimed Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong className="text-slate-800">{formData.name}</strong>. GNJ's enterprise hardware SLA specialists have cataloged your promotional spot.
              </p>
              <p className="text-xs text-slate-400">
                We will email details to <span className="underline">{formData.email}</span> within 2 hours.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleClose}
                className="w-full sm:w-48 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-all shadow-md"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
