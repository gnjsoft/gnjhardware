import React from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, ArrowRight, Trash2, Minus, Plus, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white pt-40 pb-20 px-6">
        <div className="max-w-[1600px] mx-auto text-center space-y-10">
           <div className="w-32 h-32 bg-white/5 border border-white/5 rounded-full flex items-center justify-center text-slate-700 mx-auto">
              <ShoppingBag size={48} />
           </div>
           <div className="space-y-4">
              <h1 className="text-6xl font-black uppercase tracking-tighter">Your Matrix is Empty</h1>
              <p className="text-xl text-slate-500 font-medium max-w-sm mx-auto">It seems you haven't identified any hardware nodes for acquisition yet.</p>
           </div>
           <Link 
             to="/" 
             className="inline-block px-12 py-5 bg-accent text-black font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl"
           >
             Initialize Acquisition
           </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <div className="space-y-4">
              <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">Pending Acquisition</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">Your <span className="text-slate-800">Batch.</span></h1>
           </div>
           <span className="text-slate-500 font-black uppercase tracking-widest text-[11px]">{cart.length} ACTIVE ITEMS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-8">
             {cart.map((item) => (
               <motion.div 
                 key={item.id}
                 layout
                 className="group bg-white/5 border border-white/5 rounded-[40px] p-8 flex flex-col md:flex-row gap-10 items-center hover:border-accent/20 transition-all duration-500"
               >
                  <div className="w-40 h-40 bg-black rounded-3xl p-6 flex flex-shrink-0 items-center justify-center">
                    <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  
                  <div className="flex-1 space-y-4 text-center md:text-left">
                     <div className="flex justify-between items-start gap-4">
                        <div className="space-y-1">
                           <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{item.category}</p>
                           <h3 className="text-2xl font-black text-white uppercase tracking-tight">{item.name}</h3>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-500/10 transition-all"
                        >
                          <Trash2 size={20} />
                        </button>
                     </div>

                     <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-4 bg-black/40 border border-white/10 rounded-2xl px-4 py-2">
                           <button 
                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
                             className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-500 hover:text-accent transition-all"
                           >
                             <Minus size={14} />
                           </button>
                           <span className="w-8 text-center text-sm font-black">{item.quantity}</span>
                           <button 
                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
                             className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-500 hover:text-accent transition-all"
                           >
                             <Plus size={14} />
                           </button>
                        </div>
                        <span className="text-2xl font-black tracking-tighter">₹{(item.price * item.quantity).toLocaleString()}</span>
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>

          <div className="lg:col-span-4">
             <div className="sticky top-40 bg-white shadow-[0_40px_100px_rgba(222,255,154,0.1)] rounded-[48px] p-12 space-y-10 text-black">
                <div className="space-y-2">
                   <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 pb-4">Acquisition Summary</h3>
                   <div className="flex justify-between items-center py-6">
                      <span className="text-[13px] font-bold text-slate-500 uppercase tracking-widest">Total Batch Value</span>
                      <span className="text-4xl font-black tracking-tighter">₹{subtotal.toLocaleString()}</span>
                   </div>
                </div>

                <div className="space-y-4">
                   <div className="flex justify-between text-sm font-bold">
                      <span className="text-slate-400">Logistics Protocols</span>
                      <span className="text-accent-hover text-green-600">FREE DEPLOY</span>
                   </div>
                   <div className="flex justify-between text-sm font-bold">
                      <span className="text-slate-400">Security Clearance</span>
                      <span className="text-slate-900">VERIFIED</span>
                   </div>
                </div>

                <div className="pt-4">
                   <Link 
                     to="/checkout"
                     className="w-full bg-black text-white h-20 rounded-[28px] font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] shadow-2xl transition-all"
                   >
                     Initiate Extraction
                     <ArrowRight size={20} className="text-accent" />
                   </Link>
                </div>

                <div className="flex items-center gap-3 justify-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                   <Zap size={14} className="text-accent fill-accent" />
                   Secure Channel: End-to-End Encrypted
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
