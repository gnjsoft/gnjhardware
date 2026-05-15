import React from 'react';
import { motion } from 'motion/react';
import { Star, Cpu, LayoutGrid, RotateCcw, ShieldCheck, ShoppingCart } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface RecommendedProductProps {
  product: Product;
}

export const RecommendedProduct: React.FC<RecommendedProductProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm flex flex-col gap-6 max-w-md mx-auto h-full"
    >
      {/* Image Section */}
      <div className="aspect-[4/5] bg-slate-50 rounded-[40px] relative overflow-hidden p-8 flex items-center justify-center group">
         <div className="absolute top-6 left-6 z-10">
            <div className="bg-black text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">
               {product.brand}
            </div>
         </div>
         <img 
           src={product.image} 
           alt={product.name}
           className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
         />
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'} 
                />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-400">({product.reviewCount} Reviews)</span>
          </div>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">{product.name}</h3>
        </div>

        {/* Specs Tags */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
             <Cpu size={16} className="text-slate-400" />
             <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">{product.specs.cpu?.split(' ').slice(0, 3).join(' ')}</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
             <LayoutGrid size={16} className="text-slate-400" />
             <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">{product.specs.ram}</span>
          </div>
        </div>

        <div className="h-[1px] bg-slate-100" />

        {/* Pricing */}
        <div className="space-y-4">
           <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-4">
                 <span className="text-4xl font-black text-black tracking-tighter">₹{product.price.toLocaleString()}</span>
                 <span className="text-lg text-slate-400 line-through font-bold">₹{(product.price * 1.4).toLocaleString()}</span>
              </div>
              <span className="text-xs font-black text-[#10a345] uppercase tracking-[0.2em]">Saving 40% Today</span>
           </div>

           <div className="flex items-center gap-2 text-[10px] font-black text-[#10a345] uppercase tracking-widest">
              <RotateCcw size={16} />
              Free Pickup & Returns
           </div>
        </div>

        {/* CTA */}
        <button 
          onClick={() => addToCart({ ...product, quantity: 1 })}
          className="w-full h-16 bg-black text-white rounded-[24px] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};
