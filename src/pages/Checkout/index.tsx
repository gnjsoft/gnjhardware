import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Truck, CreditCard, ShieldCheck, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

type Step = 'shipping' | 'payment' | 'success';

export const Checkout: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>('shipping');
  const [formData, setFormData] = useState({ name: '', email: '', address: '', card: '' });

  const handleNext = () => {
    if (step === 'shipping') setStep('payment');
    else if (step === 'payment') {
      setStep('success');
      clearCart();
    }
  };

  if (cart.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen pt-40 px-6 text-center space-y-10">
        <h1 className="text-4xl font-black uppercase">No extraction in progress</h1>
        <Link to="/" className="inline-block px-12 py-5 bg-accent text-black font-black text-xs rounded-2xl">Return to Store</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between max-w-2xl mx-auto mb-20 relative">
           <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 z-0" />
           {['SHIPPING', 'PAYMENT', 'COMPLETE'].map((label, i) => {
              const active = (step === 'shipping' && i === 0) || (step === 'payment' && i <= 1) || (step === 'success');
              return (
                <div key={label} className="relative z-10 flex flex-col items-center gap-4">
                   <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${active ? 'bg-accent border-accent text-black scale-110 shadow-[0_0_20px_rgba(222,255,154,0.5)]' : 'bg-black border-white/20 text-white/40'}`}>
                      {i === 0 && <Truck size={18} />}
                      {i === 1 && <CreditCard size={18} />}
                      {i === 2 && <CheckCircle2 size={18} />}
                   </div>
                   <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${active ? 'text-accent' : 'text-slate-600'}`}>{label}</span>
                </div>
              );
           })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
             <AnimatePresence mode="wait">
                {step === 'shipping' && (
                  <motion.div 
                    key="shipping"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white/5 border border-white/10 rounded-[40px] p-12 space-y-12 shadow-2xl"
                  >
                     <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-4">
                        <MapPin className="text-accent" /> Logistics Target
                     </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {['FULL NAME', 'EMAIL', 'EXTRACTION ADDRESS', 'TARGET CITY'].map((label) => (
                          <div key={label} className="space-y-3">
                             <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</label>
                             <input 
                               type="text" 
                               className="w-full h-16 bg-black/40 border border-white/5 rounded-2xl px-6 font-bold focus:border-accent outline-none transition-all"
                               placeholder={`ENTER ${label}`}
                             />
                          </div>
                        ))}
                     </div>
                     <button 
                       onClick={handleNext}
                       className="w-full h-20 bg-accent text-black font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                     >
                        Confirm Target Coordinates
                        <ChevronRight size={18} />
                     </button>
                  </motion.div>
                )}

                {step === 'payment' && (
                  <motion.div 
                    key="payment"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white/5 border border-white/10 rounded-[40px] p-12 space-y-12 shadow-2xl"
                  >
                     <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-4">
                        <CreditCard className="text-accent" /> Financial Sync
                     </h2>
                     <div className="space-y-8">
                        <div className="p-6 bg-accent border border-accent rounded-3xl flex items-center justify-between">
                           <div className="flex items-center gap-4">
                              <CheckCircle2 size={24} className="text-black" />
                              <span className="text-black font-black text-lg uppercase">Secure Cloud Layer Payment</span>
                           </div>
                           <Lock size={24} className="text-black" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="md:col-span-2 space-y-3">
                              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">ENCRYPTED CARD NUMBER</label>
                              <input 
                                type="text" 
                                className="w-full h-16 bg-black/40 border border-white/5 rounded-2xl px-6 font-bold focus:border-accent outline-none transition-all font-mono"
                                placeholder="0000 0000 0000 0000"
                              />
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">EXPIRY</label>
                              <input type="text" className="w-full h-16 bg-black/40 border border-white/5 rounded-2xl px-6 font-bold" placeholder="MM / YY" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">CVV PROTECT</label>
                              <input type="password" className="w-full h-16 bg-black/40 border border-white/5 rounded-2xl px-6 font-bold" placeholder="***" />
                           </div>
                        </div>
                     </div>
                     <button 
                       onClick={handleNext}
                       className="w-full h-20 bg-accent text-black font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                     >
                        Execute Authentication
                        <ShieldCheck size={18} />
                     </button>
                  </motion.div>
                )}

                {step === 'success' && (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 border border-accent/20 rounded-[40px] p-20 text-center space-y-10"
                  >
                     <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center text-black mx-auto shadow-[0_0_50px_rgba(222,255,154,0.4)]">
                        <CheckCircle2 size={64} />
                     </div>
                     <div className="space-y-4">
                        <h2 className="text-6xl font-black uppercase tracking-tighter italic">EXTRACTION SUCCESSFUL.</h2>
                        <p className="text-xl text-slate-400 font-medium max-w-lg mx-auto leading-relaxed">
                          Your nodes are being prepared for high-speed deployment. A confirmation protocol has been dispatched to your terminal.
                        </p>
                     </div>
                     <div className="pt-10 flex justify-center gap-6">
                        <div className="p-6 bg-white/2 border border-white/5 rounded-3xl text-left">
                           <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">NODE ORDER ID</p>
                           <p className="font-mono text-lg font-bold text-accent">#TC-{Math.floor(Math.random()*1000000)}</p>
                        </div>
                        <div className="p-6 bg-white/2 border border-white/5 rounded-3xl text-left">
                           <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">DEPLOYMENT ETA</p>
                           <p className="font-mono text-lg font-bold text-accent">24:00:00 HRS</p>
                        </div>
                     </div>
                     <Link to="/" className="inline-block px-12 py-5 bg-accent text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl mt-10">Return to Nexus</Link>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>

          {step !== 'success' && (
             <div className="lg:col-span-4">
                <div className="sticky top-40 bg-white/5 border border-white/10 rounded-[40px] p-10 space-y-8">
                   <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] border-b border-white/5 pb-4">Extraction Package</h3>
                   <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                      {cart.map(item => (
                        <div key={item.id} className="flex gap-4">
                           <div className="w-16 h-16 bg-black rounded-2xl flex-shrink-0 flex items-center justify-center p-2">
                              <img src={item.image} alt="" className="max-h-full max-w-full object-contain" />
                           </div>
                           <div className="space-y-1">
                              <h4 className="text-xs font-bold uppercase tracking-tight">{item.name}</h4>
                              <p className="text-[10px] font-black text-slate-600">UNIT x{item.quantity}</p>
                              <p className="text-sm font-black text-accent">₹{(item.price * item.quantity).toLocaleString()}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                   <div className="pt-8 border-t border-white/5 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Base Value</span>
                         <span className="font-black text-white">₹{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-xl pt-4">
                         <span className="font-black uppercase tracking-tighter">Grand Total</span>
                         <span className="font-black text-accent">₹{subtotal.toLocaleString()}</span>
                      </div>
                   </div>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
