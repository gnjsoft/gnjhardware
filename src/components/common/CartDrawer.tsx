import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, Minus, Plus, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, isDrawerOpen, setIsDrawerOpen } = useCart();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-black border-l border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] z-[201] flex flex-col text-white"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-black">
                   <ShoppingBag size={18} />
                </div>
                <h2 className="text-xl font-black uppercase tracking-tighter italic">Batch Extraction</h2>
              </div>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="w-10 h-10 rounded-xl hover:bg-white/5 flex items-center justify-center transition-colors text-slate-500 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-slate-700">
                    <ShoppingBag size={40} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-black uppercase tracking-tight">System Registry Empty</p>
                    <p className="text-sm text-slate-500 font-medium max-w-[200px]">No hardware nodes have been identified for processing.</p>
                  </div>
                  <button 
                    onClick={() => setIsDrawerOpen(false)}
                    className="px-10 py-4 bg-accent text-black text-[10px] font-black uppercase tracking-widest rounded-xl"
                  >
                    Rescan Inventory
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-24 bg-white/5 rounded-2xl border border-white/5 p-4 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between gap-2">
                        <h4 className="text-sm font-black text-white uppercase tracking-tight line-clamp-1">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-600 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.brand}</p>
                      
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center hover:text-accent transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-6 text-center text-xs font-black">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center hover:text-accent transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="font-black text-accent tracking-tighter">₹{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-white/2 border-t border-white/5 space-y-8 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Global Subtotal</span>
                  <span className="text-3xl font-black tracking-tighter text-white">₹{subtotal.toLocaleString()}</span>
                </div>
                
                <div className="grid grid-cols-1 gap-4 pt-2">
                  <Link 
                    to="/checkout"
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-full bg-accent text-black font-black py-5 rounded-2xl text-center text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(222,255,154,0.3)]"
                  >
                    Initialize Checkout
                    <ArrowRight size={16} />
                  </Link>
                  <Link 
                    to="/cart"
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-full bg-white/5 border border-white/10 text-white font-black py-5 rounded-2xl text-center text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
                  >
                    View Registry Detail
                  </Link>
                </div>
                
                <div className="flex items-center gap-2 justify-center text-[9px] font-black text-slate-600 uppercase tracking-widest">
                   <Zap size={10} className="text-accent fill-accent" /> Secure Hub Transaction Layer Active
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
