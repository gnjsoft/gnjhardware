import React from 'react';
import { motion } from 'motion/react';
import { Star, ChevronRight, RotateCcw, Shield, CheckCircle, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  image: string;
  specs: string[];
  badge?: string;
}

const BEST_SELLERS: Product[] = [
  {
    id: 'l1',
    name: 'Lenovo ThinkPad L480 | Intel Core i5 8th Gen | 14" HD | Windows 11 Pro | Refurbished',
    brand: 'LENOVO',
    price: 19799,
    originalPrice: 49999,
    discount: '60% off',
    rating: 4,
    reviews: 16,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400',
    specs: ['Intel Core i5', '8GB', '256GB', 'Windows 11'],
    badge: 'Student-friendly'
  },
  {
    id: 'l2',
    name: 'Lenovo ThinkPad | Intel Core i5 8th Gen | 14" HD | Windows 11 Pro | Refurbished',
    brand: 'LENOVO',
    price: 19999,
    originalPrice: 74000,
    discount: '73% off',
    rating: 4,
    reviews: 20,
    image: 'https://images.unsplash.com/photo-1588872661376-7996c5619b02?auto=format&fit=crop&q=80&w=400',
    specs: ['Intel Core i5', '8GB', '256GB', 'Windows 11 pro'],
    badge: 'Student-friendly'
  },
  {
    id: 'l3',
    name: 'Dell Latitude 3400 | Intel i5 8th Gen | 14" HD | Windows 11 Pro | Refurbished',
    brand: 'DELL',
    price: 22999,
    originalPrice: 72000,
    discount: '68% off',
    rating: 4,
    reviews: 26,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400',
    specs: ['Intel Core i5', '8GB', '256GB', 'Windows 11 pro'],
    badge: 'Student-friendly'
  },
  {
    id: 'l4',
    name: 'HP EliteBook 840 G5 | Intel i5 8th Gen | 14" HD | Windows 11 Pro | Refurbished',
    brand: 'HP',
    price: 24499,
    originalPrice: 84000,
    discount: '71% off',
    rating: 3,
    reviews: 30,
    image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&q=80&w=400',
    specs: ['Intel Core i5', '8GB', '256GB', 'Windows 11 pro'],
    badge: 'Student-friendly'
  },
  {
    id: 'l5',
    name: 'Dell Latitude 3410 | Intel i5 10th Gen | 14" HD | Windows 11 Pro | Refurbished',
    brand: 'DELL',
    price: 26499,
    originalPrice: 74000,
    discount: '64% off',
    rating: 4,
    reviews: 28,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400',
    specs: ['Intel Core i5', '10th Gen', '8GB', '256GB'],
    badge: 'Student-friendly'
  }
];

export const BestSellers: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <section className="py-20 bg-white text-black overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top Badges */}
        <div className="flex flex-wrap gap-4 mb-16">
          {[
            { icon: <CheckCircle size={14} />, text: '12-MONTH WARRANTY INCLUDED' },
            { icon: <RotateCcw size={14} />, text: 'HASSLE-FREE RETURNS' },
            { icon: <CheckCircle size={14} />, text: 'COD ACROSS INDIA' }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-6 py-2.5 border border-slate-100 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest bg-white shadow-sm">
              <span className="text-[#10a345]">{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-[#d97706]" />
              <span className="text-[10px] font-black text-[#d97706] uppercase tracking-[0.4em]">Handpicked For You</span>
            </div>
            <h2 className="text-6xl font-serif font-bold text-[#111111] tracking-tight">Best Sellers</h2>
            <p className="text-slate-400 text-sm font-medium tracking-wide">Our most-loved picks — certified, warrantied, and ready to ship.</p>
          </div>
          <Link to="/category/all" className="flex items-center gap-2 px-8 py-3.5 border border-slate-200 rounded-full text-[10px] font-black text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all uppercase tracking-[0.2em] group shrink-0">
            View All <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid/Carousel */}
        <div className="relative group">
           <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-12 -mx-6 px-6 snap-x">
              {BEST_SELLERS.map((product) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -8 }}
                  className="min-w-[320px] w-[320px] bg-white rounded-[40px] border border-slate-100 overflow-hidden flex flex-col group/card shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all snap-start"
                >
                  {/* Image area */}
                  <div className="relative h-[240px] bg-[#f9f9f9] flex items-center justify-center p-10">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover/card:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Floating elements */}
                    <button className="absolute top-6 left-6 flex items-center gap-1.5 px-3.5 py-2 bg-[#000000] text-white text-[9px] font-black uppercase tracking-widest rounded-xl shadow-lg active:scale-95 transition-transform">
                      <RotateCcw size={12} />
                      Compare
                    </button>
                    
                    <div className="absolute top-6 right-6">
                       <div className="w-10 h-10 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm">
                          <Shield size={18} />
                       </div>
                    </div>

                    {/* Carousel dots mock */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                       <div className="w-4 h-1.5 bg-black rounded-full" />
                       <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                       <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-8 space-y-5 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{product.brand}</span>
                      <h3 className="text-sm font-bold text-slate-800 leading-relaxed line-clamp-2 h-10">{product.name}</h3>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                       <div className="flex items-center gap-0.5">
                         {[...Array(5)].map((_, i) => (
                           <Star 
                             key={i} 
                             size={12} 
                             className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'} 
                             strokeWidth={3}
                           />
                         ))}
                       </div>
                       <span className="text-[10px] text-slate-400 font-bold ml-2">({product.reviews})</span>
                    </div>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-2">
                       {product.specs.map(spec => (
                         <div key={spec} className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[9px] font-bold text-slate-500 flex items-center gap-2">
                           <div className="w-2.5 h-2.5 bg-white border border-slate-200 rounded-md shadow-sm" />
                           {spec}
                         </div>
                       ))}
                    </div>

                    {/* Badge */}
                    {product.badge && (
                      <div className="px-4 py-2 bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl text-[10px] font-black text-[#2e7d32] self-start inline-flex items-center gap-1.5">
                        <Check size={12} strokeWidth={4} />
                        {product.badge}
                      </div>
                    )}

                    {/* Price and Warranty */}
                    <div className="mt-auto pt-6 space-y-4">
                       <div className="flex flex-col gap-1">
                          <div className="flex items-baseline gap-3">
                             <span className="text-2xl font-black text-slate-900 leading-none">₹{product.price.toLocaleString()}</span>
                             <span className="text-xs text-slate-400 line-through font-bold">₹{product.originalPrice.toLocaleString()}</span>
                          </div>
                          <span className="text-[10px] font-black text-[#10a345] uppercase tracking-widest">{product.discount}</span>
                       </div>

                       <div className="flex items-center gap-2 text-[10px] font-black text-[#10a345] uppercase tracking-wider">
                          <Shield size={14} />
                          12-Month Warranty
                       </div>

                       <button 
                         onClick={() => handleAddToCart(product)}
                         className="w-full py-4.5 bg-black text-white rounded-[20px] text-[10px] font-black uppercase tracking-[0.25em] hover:bg-slate-900 active:scale-95 transition-all shadow-lg active:shadow-sm"
                       >
                         Add To Cart
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))}
           </div>
           
           {/* Navigation arrow */}
           <button className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-slate-100 shadow-xl rounded-full flex items-center justify-center text-black hover:bg-slate-50 transition-all z-10 translate-x-1/2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100">
             <ChevronRight size={24} strokeWidth={3} />
           </button>
        </div>
      </div>
    </section>
  );
};
