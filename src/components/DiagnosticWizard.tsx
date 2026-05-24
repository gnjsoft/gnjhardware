import React, { useState, useEffect } from 'react';
import { X, Calculator, ShieldCheck, Clock, TicketCheck, Send, AlertTriangle } from 'lucide-react';
import { diagnosticIssues } from '../data';

interface DiagnosticWizardProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string; // Optional preselected category key: laptop, desktop, printer, network, server
}

export default function DiagnosticWizard({ isOpen, onClose, defaultCategory }: DiagnosticWizardProps) {
  // Selected equipment category
  const [selectedCatId, setSelectedCatId] = useState('laptop');
  
  // Selected symptoms within the category
  const [selectedSymptomIds, setSelectedSymptomIds] = useState<string[]>([]);
  
  // Contact details & metadata
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | 'critical'>('medium');
  const [notes, setNotes] = useState('');
  
  // Form submission tracking
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    ticketNumber: string;
    fullName: string;
    email: string;
    phone: string;
    equipment: string;
    symptomsCount: number;
    urgency: string;
    approxCostMin: number;
    approxCostMax: number;
  } | null>(null);

  const [formError, setFormError] = useState('');

  // Synchronize category selection if default category starts
  useEffect(() => {
    if (defaultCategory) {
      setSelectedCatId(defaultCategory);
      setSelectedSymptomIds([]); // Reset symptoms on change
    }
  }, [defaultCategory, isOpen]);

  // Handle category tab switching
  const handleCategoryChange = (id: string) => {
    setSelectedCatId(id);
    setSelectedSymptomIds([]);
  };

  // Toggle symptom selections
  const handleToggleSymptom = (symptomId: string) => {
    if (selectedSymptomIds.includes(symptomId)) {
      setSelectedSymptomIds(selectedSymptomIds.filter(id => id !== symptomId));
    } else {
      setSelectedSymptomIds([...selectedSymptomIds, symptomId]);
    }
  };

  // Find currently active category config
  const activeCategoryObj = diagnosticIssues.find(item => item.id === selectedCatId) || diagnosticIssues[0];

  // Calculate live estimation
  const totalBase = activeCategoryObj.baseCost;
  const symptomSupplement = selectedSymptomIds.reduce((acc, currentSymptomId) => {
    const symObj = activeCategoryObj.symptoms.find(sym => sym.id === currentSymptomId);
    return acc + (symObj ? symObj.priceAdjustment : 0);
  }, 0);

  const calculatedBase = totalBase + symptomSupplement;
  // Cost ranges: Min is calculated baseline, Max includes a standard 18% buffer for deep testing
  const minEstimated = calculatedBase;
  const maxEstimated = Math.round(calculatedBase * 1.18);

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Validations
    if (!fullName.trim()) {
      setFormError('Please enter your full name or company contact.');
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      setFormError('Please enter a valid business email address.');
      return;
    }
    if (!phone.trim() || phone.length < 7) {
      setFormError('Please enter an active phone number so our team can call you.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API callback state
    setTimeout(() => {
      const generatedTicketId = `SVC-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedTicket({
        ticketNumber: generatedTicketId,
        fullName,
        email,
        phone,
        equipment: activeCategoryObj.name,
        symptomsCount: selectedSymptomIds.length,
        urgency: priority.toUpperCase(),
        approxCostMin: minEstimated,
        approxCostMax: maxEstimated
      });
      setIsSubmitting(false);
    }, 900);
  };

  const validateEmail = (emailStr: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  // Reset ticket to build a new diagnostic estimation
  const handleResetForm = () => {
    setSubmittedTicket(null);
    setSelectedSymptomIds([]);
    setFullName('');
    setEmail('');
    setPhone('');
    setPriority('medium');
    setNotes('');
    setFormError('');
  };

  if (!isOpen) return null;

  return (
    <div
      id="diagnostic-wizard-backdrop"
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        id="diagnostic-wizard-card"
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] md:max-h-[85vh] overflow-hidden"
      >
        {/* Sticky Close Button top corner */}
        <button
          type="button"
          onClick={onClose}
          id="wizard-close-top-btn"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors z-20"
          aria-label="Close Diagnostic Wizard"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header styling */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-6 text-white text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <Calculator className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-mono font-bold uppercase text-blue-300 tracking-wider">Interactive Service Estimator</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-white leading-none">
            Hardware Troubleshooter & Diagnostics
          </h2>
          <p className="text-xs md:text-sm text-slate-300 font-light mt-1 max-w-2xl">
            Select your faulty hardware and list symptoms. Our algorithm calculates real-time industry price ranges instantly.
          </p>
        </div>

        {/* Modal content body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {submittedTicket ? (
            <div id="wizard-success-state" className="text-center py-8 px-4 max-w-xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <TicketCheck className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                  Estimate Requested Successfully
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-950">
                  Ticket Generated: {submittedTicket.ticketNumber}
                </h3>
                <p className="text-sm text-slate-600">
                  Thank you, <strong className="text-slate-800">{submittedTicket.fullName}</strong>. We have securely logged your troubleshooting assessment into our real-time regional dispatch board. 
                </p>
              </div>

              {/* Receipt Summary block */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-left text-sm space-y-3 font-sans">
                <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-2 mb-2 font-mono uppercase text-xs tracking-wider">
                  Request Receipt
                </h4>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service Category:</span>
                  <span className="font-semibold text-slate-800">{submittedTicket.equipment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Diagnostic Symptoms:</span>
                  <span className="font-semibold text-slate-800">{submittedTicket.symptomsCount} selected</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service Urgency SLA:</span>
                  <span className="font-semibold text-amber-600">{submittedTicket.urgency} Priority</span>
                </div>
                <div className="flex justify-between border-t border-dashed border-slate-200 pt-2 text-base font-semibold">
                  <span className="text-slate-900">Est. Price Range:</span>
                  <span className="text-blue-600">${submittedTicket.approxCostMin} - ${submittedTicket.approxCostMax}*</span>
                </div>
                <div className="text-5xs text-slate-400 leading-tight pt-1">
                  *This estimate is indicative of baseline work & spares calibration. Onsite physical validation by an A+ technician is required for complete final authorization.
                </div>
              </div>

              {/* Success Info Banner */}
              <div className="flex items-start gap-2.5 p-3.5 bg-blue-50 border border-blue-100 rounded-lg text-left text-xs">
                <Clock className="w-4 h-4 text-blue-600 sflex-shrink-0 mt-0.5" />
                <p className="text-blue-900">
                  Our regional field engineer will telephone you at <strong className="text-blue-950">{submittedTicket.phone}</strong> or email <strong className="text-blue-950">{submittedTicket.email}</strong>, typically under <strong>90 minutes</strong> to lock in your schedule.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleResetForm}
                  id="wizard-reset-btn"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Create Another Estimate
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  id="wizard-success-close-btn"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" id="diagnostic-form">
              {/* Step 1: Equipment Selection */}
              <div className="space-y-3 text-left">
                <label className="block text-sm font-bold text-slate-900 font-display">
                  1. Select Hardware Equipment Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5" id="equipment-category-tabs">
                  {diagnosticIssues.map((diag) => {
                    const isSelected = selectedCatId === diag.id;
                    return (
                      <button
                        key={diag.id}
                        type="button"
                        id={`category-tab-${diag.id}`}
                        onClick={() => handleCategoryChange(diag.id)}
                        className={`py-3 px-2 text-center rounded-xl font-medium text-xs transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                        }`}
                      >
                        {diag.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Diagnostic Symptoms and Live Calculation Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Checkbox selector column */}
                <div className="lg:col-span-7 space-y-3.5 text-left">
                  <label className="block text-sm font-bold text-slate-905 font-display">
                    2. Select Known Symptoms or Services Required
                  </label>
                  
                  <div className="space-y-2.5" id="symptoms-choices-container">
                    {/* Default baseline explanation */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-slate-800">Diagnostic Call-out & Labor</span>
                        <p className="text-slate-500 mt-0.5">Physical testing bench diagnostics</p>
                      </div>
                      <span className="font-bold text-slate-900 bg-slate-150 py-1 px-2.5 rounded">
                        ${activeCategoryObj.baseCost} (Included)
                      </span>
                    </div>

                    {activeCategoryObj.symptoms.map((symptom) => {
                      const isChecked = selectedSymptomIds.includes(symptom.id);
                      return (
                        <div
                          key={symptom.id}
                          id={`symptom-row-${symptom.id}`}
                          onClick={() => handleToggleSymptom(symptom.id)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                            isChecked
                              ? 'bg-blue-50/40 border-blue-300 shadow-3xs'
                              : 'bg-white border-slate-200 hover:border-slate-350'
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              readOnly
                              id={`symptom-chk-${symptom.id}`}
                              className="mt-0.5 h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <div>
                              <span className="text-xs font-semibold text-slate-800 block">
                                {symptom.text}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-blue-600 block bg-blue-50 py-0.5 px-2 rounded">
                            +${symptom.priceAdjustment}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Live Estimator Cost block */}
                <div className="lg:col-span-5 bg-blue-50/75 border border-blue-100 rounded-xl p-5 md:p-6 space-y-4 text-left">
                  <div className="flex items-center gap-1.5 border-b border-blue-100 pb-2.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-mono font-bold uppercase text-blue-700 tracking-wider">Estimated Total</span>
                  </div>

                  <div className="text-center py-2">
                    <span className="block text-2xs font-mono text-slate-500 uppercase tracking-widest font-bold">Indicative Price Range</span>
                    <span className="block text-3xl font-extrabold font-display text-blue-600 mt-1" id="live-wizard-estimated-range">
                      ${minEstimated} - ${maxEstimated}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">Based on certified labor rates & standard parts buffer</p>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-blue-100 text-xs text-slate-700 space-y-1.5 leading-snug">
                    <div className="flex justify-between text-[11px]">
                      <span>Work-bench diagnostics:</span>
                      <span className="font-semibold text-slate-800">${totalBase}</span>
                    </div>
                    {symptomSupplement > 0 && (
                      <div className="flex justify-between text-[11px]">
                        <span>Symptom spares & calibration:</span>
                        <span className="font-semibold text-emerald-600">+${symptomSupplement}</span>
                      </div>
                    )}
                    <div className="border-t border-dashed border-slate-200 pt-1.5 flex justify-between font-bold text-slate-900 font-mono">
                      <span>Total Base Sum:</span>
                      <span>${calculatedBase}</span>
                    </div>
                  </div>

                  {selectedSymptomIds.length > 1 && (
                    <div className="p-2.5 bg-emerald-50 text-emerald-700 text-xs rounded border border-emerald-100 text-center font-medium">
                      🎉 Multi-Symptom bundle discount applies during physically scheduled onsite audit!
                    </div>
                  )}
                </div>

              </div>

              {/* Step 3: Contact & Scheduling */}
              <div className="border-t border-slate-100 pt-6 space-y-4 text-left">
                <label className="block text-sm font-bold text-slate-950 font-display">
                  3. Contact & Business SLA Scheduling
                </label>

                {formError && (
                  <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-100 text-rose-700 text-xs rounded-lg animate-pulse" id="wizard-form-error">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="wizard-fullname" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Business Contact Name *
                    </label>
                    <input
                      type="text"
                      id="wizard-fullname"
                      required
                      placeholder="e.g., Sarah Peterson"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-lg p-2.5 text-xs focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="wizard-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      id="wizard-email"
                      required
                      placeholder="e.g., sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-lg p-2.5 text-xs focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="wizard-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Active Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="wizard-phone"
                      required
                      placeholder="e.g., 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-lg p-2.5 text-xs focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 !mt-5">
                  {/* Urgency SLA selector */}
                  <div className="md:col-span-1 space-y-1.5">
                    <label htmlFor="wizard-priority" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Required Urgency SLA *
                    </label>
                    <select
                      id="wizard-priority"
                      value={priority}
                      onChange={(e) => setPriority(e.target.value as any)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs focus:bg-white focus:border-blue-500 outline-none font-medium text-slate-800"
                    >
                      <option value="low">Standard Maintenance (2-3 Days)</option>
                      <option value="medium">Next-Business-Day dispatch</option>
                      <option value="high">Urgent Response (Within 24 Hours)</option>
                      <option value="critical">Critical Emergency SLA (4-Hour Response)</option>
                    </select>
                  </div>

                  {/* Diagnostic Notes area */}
                  <div className="md:col-span-2 space-y-1.5">
                    <label htmlFor="wizard-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Hardware Specs, Model, or Custom Notes
                    </label>
                    <input
                      type="text"
                      id="wizard-notes"
                      placeholder="e.g., HP LaserJet Enterprise M608, keeps flashing error 49.38.07"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-lg p-2.5 text-xs focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Action Trigger Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-end gap-3">
                <button
                  type="button"
                  id="wizard-cancel-form-btn"
                  onClick={onClose}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-5 py-3 rounded-lg cursor-pointer max-sm:order-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="wizard-submit-form-btn"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-7 py-3 rounded-lg shadow-sm hover:shadow-md cursor-pointer inline-flex items-center justify-center gap-2 disabled:bg-blue-400 disabled:cursor-not-allowed max-sm:order-1"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Saving Service Ticket...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Submit Diagnostics & Generate Ticket
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
