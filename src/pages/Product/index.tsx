import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Share2, Shield, Zap, ChevronRight, Truck, RotateCcw, Lock, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="min-h-screen pt-40 text-center">404: Hardware Node Not Found</div>;

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="mb-12 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
           <Link to="/" className="hover:text-accent">Internal</Link>
           <ChevronRight size={10} />
           <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-accent">{product.category}</Link>
           <ChevronRight size={10} />
           <span className="text-white">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           
           {/* Section 1: Visuals */}
           <div className="lg:col-span-12 xl:col-span-7 flex flex-col md:flex-row gap-8">
              <div className="hidden md:flex flex-col gap-4 w-20">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="aspect-square bg-white/5 border border-white/5 rounded-2xl p-2 cursor-pointer hover:border-accent group transition-all">
                      <img src={product.image} alt="" className="w-full h-full object-contain opacity-40 group-hover:opacity-100" />
                   </div>
                 ))}
              </div>
              <div className="flex-1 aspect-square bg-white/5 border border-white/5 rounded-[50px] p-12 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-accent/5 blur-[100px]" />
                 <motion.img 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   src={product.image}
                   alt={product.name}
                   className="max-h-full max-w-full object-contain relative z-10 drop-shadow-[0_0_80px_rgba(222,255,154,0.2)]"
                 />
                 <button className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center hover:text-accent transition-all">
                    <Share2 size={20} />
                 </button>
              </div>
           </div>

           {/* Section 2: Core Info */}
           <div className="lg:col-span-7 xl:col-span-5 space-y-12">
              <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-[9px] font-black uppercase tracking-widest">
                    <Zap size={10} fill="currentColor" /> Premium Grade
                 </div>
                 <div className="space-y-2">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">{product.name}</h1>
                    <div className="flex items-center gap-6">
                       <span className="text-slate-500 font-black text-[11px] uppercase tracking-widest">BRAND: {product.brand}</span>
                       <div className="h-4 w-[1px] bg-white/10" />
                       <div className="flex items-center gap-2">
                          <Star size={14} className="text-accent fill-accent" />
                          <span className="text-[11px] font-black">{product.rating} / 5.0</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-8 pb-12 border-b border-white/5">
                 <div className="space-y-2">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">ACQUISITION COST</span>
                    <div className="flex items-baseline gap-4">
                       <span className="text-5xl font-black tracking-tighter text-white">₹{product.price.toLocaleString()}</span>
                       <span className="text-xl font-bold text-slate-600 line-through">₹{(product.price * 1.25).toLocaleString()}</span>
                       <span className="bg-red-600/10 text-red-600 border border-red-600/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">-25% OFFER</span>
                    </div>
                 </div>
                 <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-lg">
                   {product.description}
                 </p>
              </div>

              <div className="space-y-12">
                 <div className="space-y-8">
                    <div className="flex items-center justify-between">
                       <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Technical Specifications</h3>
                       <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                          <Lock size={12} className="text-accent" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Encrypted Data</span>
                       </div>
                    </div>
                    
                    <div className="border border-white/10 rounded-3xl overflow-hidden bg-white/2">
                       <table className="w-full text-left border-collapse">
                          <tbody>
                             {Object.entries(product.specs).map(([key, value], i) => (
                               <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                 <td className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest w-1/3 bg-white/2">{key}</td>
                                 <td className="py-5 px-8 text-sm font-bold text-white">{value}</td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>

                 {/* High-Trust Certification Badge */}
                 <div className="p-8 bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-[40px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                       <Shield size={80} className="text-accent" />
                    </div>
                    <div className="relative z-10 space-y-4">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-black">
                             <Shield size={20} />
                          </div>
                          <div>
                             <h4 className="text-sm font-black uppercase tracking-widest text-white">CoreTech Certified</h4>
                             <p className="text-[10px] font-black text-accent uppercase tracking-widest">Genuine Deployment Node</p>
                          </div>
                       </div>
                       <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-sm">
                         This hardware node has passed rigorous performance stress tests and is certified for enterprise-level operational deployment.
                       </p>
                    </div>
                 </div>

                 <div className="pt-8 border-t border-white/5 flex flex-wrap gap-8">
                    {[
                      { icon: <Truck size={18} />, label: 'Fast Deployment' },
                      { icon: <Shield size={18} />, label: 'Standard Warranty' },
                      { icon: <RotateCcw size={18} />, label: '7-Day Return' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="text-accent">{item.icon}</div>
                         <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">{item.label}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Section 3: Buy Box Sticky */}
           <div className="lg:col-span-5 xl:col-span-12 lg:mt-12 xl:mt-0 lg:order-last xl:order-none">
              <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 flex flex-col md:flex-row items-center justify-between gap-12">
                 <div className="flex flex-col gap-2">
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Order Summary</h4>
                    <p className="text-4xl font-black tracking-tighter">Total: ₹{(product.price * quantity).toLocaleString()}</p>
                 </div>

                 <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6 w-full md:w-auto flex-1 max-w-2xl">
                    <div className="flex items-center bg-black/40 border border-white/10 rounded-2xl overflow-hidden px-4 py-1 h-16">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mr-4">Quantity:</span>
                       <select 
                         value={quantity}
                         onChange={(e) => setQuantity(Number(e.target.value))}
                         className="bg-transparent border-none outline-none text-lg font-black text-white cursor-pointer"
                       >
                          {[1,2,3,4,5,10].map(n => <option key={n} value={n} className="bg-black">{n}</option>)}
                       </select>
                    </div>
                    
                    <button 
                      onClick={() => addToCart(product)}
                      className="flex-1 h-16 bg-accent text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:scale-105 transition-all shadow-[0_10px_40px_rgba(222,255,154,0.3)] flex items-center justify-center gap-3"
                    >
                       Add to Deployment Matrix
                       <ShoppingCart size={18} />
                    </button>
                    
                    <button className="h-16 px-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all outline-none">
                       <Heart size={20} />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
