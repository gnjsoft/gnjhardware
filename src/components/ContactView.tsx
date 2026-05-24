import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Map } from 'lucide-react';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('laptop');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNo, setTicketNo] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please specify your contact name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please provide a valid corporate email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please provide your telephone callback number.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('Please write a brief description of your service requirement.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedTicketId = `MUM-SVC-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketNo(generatedTicketId);
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 850);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setCategory('laptop');
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return (
    <div className="pt-24 select-none text-left">
      {/* Intro Header */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="inline-block font-mono text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 bg-purple-50 px-3 py-1 rounded-full uppercase">
              Operational Lifeline
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Connect With Our Mumbai Helpdesk
            </h1>
            <p className="text-slate-655 text-sm md:text-md leading-relaxed font-light">
              Submit your diagnostics, inquire about Annual Maintenance (AMC) agreements, or request an immediate emergency field engineer dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* Main Split Section */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-split-wrapper">
            
            {/* Column 1: Details & Map Sim */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
              <div className="space-y-6">
                <h3 className="font-display font-black text-xl text-slate-950">
                  Mumbai Corporate Headquarters
                </h3>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href="tel:+912255551900"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-4xs font-mono font-bold uppercase text-slate-400 tracking-widest">Support Line</span>
                      <strong className="block text-sm text-slate-800 mt-0.5 group-hover:text-purple-600">+91 22 5555 1900</strong>
                      <span className="block text-3xs text-slate-500">Corporate direct, live dispatch team</span>
                    </div>
                  </a>

                  {/* Mail */}
                  <a
                    href="mailto:mumbai.dispatch@metrohardware.in"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-3xs font-mono font-bold uppercase text-slate-400 tracking-widest">Business Proposals</span>
                      <strong className="block text-sm text-slate-800 mt-0.5 group-hover:text-purple-600">mumbai.dispatch@metrohardware.in</strong>
                      <span className="block text-3xs text-slate-500">SLA audits & contract evaluations</span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-4xs font-mono font-bold uppercase text-slate-400 tracking-widest">Office Address</span>
                      <strong className="block text-sm text-slate-800 mt-0.5">Naman Centre, G Block, Bandra Kurla Complex (BKC)</strong>
                      <span className="block text-3xs text-slate-500">Mumbai, Maharashtra 400051, India</span>
                    </div>
                  </div>

                  {/* Times */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-4xs font-mono font-bold uppercase text-slate-400 tracking-widest">Service Dispatch Hours</span>
                      <strong className="block text-sm text-slate-800 mt-0.5">Mon - Sat: 8:00 AM - 7:00 PM</strong>
                      <span className="block text-3xs text-slate-500">24/7 priority emergency escalation for contracted businesses</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-50 border border-purple-100 rounded-3xl overflow-hidden flex-grow min-h-[250px] flex flex-col relative shadow-inner">
                <div className="bg-purple-50/70 border-b border-purple-100/50 px-4 py-2 flex items-center justify-between text-4s font-mono text-slate-600">
                  <span className="flex items-center gap-1">
                    <Map className="w-3.5 h-3.5 text-purple-600" /> Interactive Mumbai Grid
                  </span>
                  <span>Zoom: {zoomLevel}x</span>
                </div>

                <div className="flex-grow bg-[#cbd5e1] relative flex items-center justify-center select-none overflow-hidden" id="mumbai-map-viewport">
                  {/* Street grids simulation */}
                  <div className="absolute inset-0 grid grid-cols-6 gap-6 grid-rows-6 opacity-35 pointer-events-none">
                    {[...Array(36)].map((_, idx) => (
                      <div key={idx} className="border border-white" />
                    ))}
                  </div>

                  {/* Sonar Pulse ring */}
                  <span className="absolute w-[60px] h-[60px] bg-purple-500/15 rounded-full animate-ping pointer-events-none" />

                  {/* Custom map pin */}
                  <div
                    className="z-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-lg border-2 border-white text-center cursor-pointer hover:opacity-95 transition-all p-2 flex flex-col items-center justify-center"
                    style={{
                      transform: `scale(${0.95 + zoomLevel * 0.05})`
                    }}
                    title="Naman BKC Centre"
                  >
                    <MapPin className="w-4 h-4 mb-0.5 text-pink-300" />
                    <span className="font-mono text-5xs tracking-widest leading-none font-bold">METRO HQ</span>
                  </div>

                  {/* Bottom Map Status */}
                  <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white font-mono px-2 py-0.5 rounded text-5xs pointer-events-none max-w-[250px]">
                    {zoomLevel > 1 ? 'BKC Core Dispatch Corridor SLA Coverage' : 'Western Express & Navi Mumbai SLA Boundary'}
                  </div>

                  {/* Zoom Controls */}
                  <div className="absolute bottom-2 right-2 flex flex-col gap-1 z-20">
                    <button
                      type="button"
                      onClick={() => setZoomLevel(Math.min(2, zoomLevel + 0.25))}
                      className="w-7 h-7 bg-white hover:bg-slate-50 text-slate-800 font-extrabold flex items-center justify-center rounded-md border border-slate-200 shadow-xs text-xs cursor-pointer"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.25))}
                      className="w-7 h-7 bg-white hover:bg-slate-50 text-slate-800 font-extrabold flex items-center justify-center rounded-md border border-slate-200 shadow-xs text-xs cursor-pointer"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl border border-purple-50 p-6 md:p-8 shadow-sm">
              {isSubmitted ? (
                <div id="contact-success-state" className="py-16 text-center max-w-md mx-auto space-y-6">
                  <div className="w-14 h-14 bg-purple-100 text-purple-650 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8 text-purple-650" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-slate-950">Service Request Received</h3>
                    <span className="inline-block font-mono text-3xs font-extrabold bg-purple-50 px-3.5 py-1 rounded-full text-purple-700 tracking-wide">
                      Reference Code: {ticketNo}
                    </span>
                    <p className="text-slate-650 text-sm leading-relaxed max-w-sm mx-auto pt-2">
                      Your diagnostics assessment has been logged into our central Mumbai dispatch board. One of our lead technical coordinators will callback at your number within <strong>15 minutes</strong>.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-95 text-white font-bold text-xs py-3 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form-v2" className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-lg md:text-xl text-slate-950">
                      Submit Service Request
                    </h3>
                    <p className="text-3xs text-slate-500">
                      Fields marked with * are required to authorize SLA dispatch responses.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="bg-rose-50 border border-rose-100 text-rose-700 p-3.5 rounded-xl text-xs font-bold leading-normal flex items-center gap-2 animate-bounce">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-650" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-4xs font-extrabold text-slate-600 uppercase tracking-widest font-mono">
                        Corporate Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        placeholder="e.g., Joseph Sterling"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all shadow-3xs"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="block text-4xs font-extrabold text-slate-600 uppercase tracking-widest font-mono">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        placeholder="e.g., +91 98200 12345"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all shadow-3xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-4xs font-extrabold text-slate-600 uppercase tracking-widest font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        placeholder="e.g., sterling@sterlingcorp.in"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all shadow-3xs"
                      />
                    </div>

                    {/* Area of help */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-category" className="block text-4xs font-extrabold text-slate-600 uppercase tracking-widest font-mono">
                        Requested Service Area
                      </label>
                      <select
                        id="contact-category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-slate-700 bg-none cursor-pointer font-semibold shadow-3xs"
                      >
                        <option value="laptop">Enterprise Laptop Repair</option>
                        <option value="desktop">Workstation & Desktops</option>
                        <option value="printers">Printer Service & Rebuilds</option>
                        <option value="network">Cabling & Cisco Routing</option>
                        <option value="servers">System Backup & Server RAID</option>
                        <option value="contract">Annual Maintenance Contracts (AMC)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-4xs font-extrabold text-slate-600 uppercase tracking-widest font-mono">
                      How Can We Support Your Hardware? *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Input model dimensions, symptoms, RAID warnings, or volume estimations..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all shadow-3xs"
                    />
                  </div>

                  {/* Button Click */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-95 text-white font-bold text-xs py-3.5 rounded-xl shadow-md shadow-purple-100 hover:shadow-xl cursor-pointer transition-all flex items-center justify-center gap-2 disabled:bg-purple-400"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Verifying details...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" /> Request Service
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
