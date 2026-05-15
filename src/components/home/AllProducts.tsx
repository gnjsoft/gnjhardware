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
  badgeType?: 'green' | 'blue' | 'purple';
}

const ALL_PRODUCTS_DATA: Product[] = [
  {
    id: 'd1',
    name: 'Lenovo ThinkCentre M91p Desktop | Intel i5 2th Gen | Windows 10 | Refurbished',
    brand: 'LENOVO',
    price: 8000,
    originalPrice: 54000,
    discount: '85% off',
    rating: 3,
    reviews: 3,
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=400',
    specs: ['Intel Core i5', '8GB', '256GB', 'Windows 10'],
    badge: 'Student-friendly',
    badgeType: 'green'
  },
  {
    id: 'd2',
    name: 'Lenovo ThinkCentre M73 Desktop | Intel i3 4th Gen | Windows 10 | Refurbished',
    brand: 'LENOVO',
    price: 9499,
    originalPrice: 50000,
    discount: '81% off',
    rating: 1,
    reviews: 1,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=400',
    specs: ['Intel Core i3', '8GB', '256GB', 'Windows 10'],
    badge: 'Everyday use',
    badgeType: 'blue'
  },
  {
    id: 'l6',
    name: 'Lenovo ThinkPad T480 | Intel i5 8th Gen | 14" HD Non - Touch Screen | Windows 11 Pro | Refurbished',
    brand: 'LENOVO',
    price: 21999,
    originalPrice: 84000,
    discount: '74% off',
    rating: 4,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400',
    specs: ['Intel Core i5', '8GB', '256GB', 'Windows 11 pro'],
    badge: 'Student-friendly',
    badgeType: 'green'
  },
  {
    id: 'l7',
    name: 'Dell Latitude 5480 | Intel i7 7th Gen | 14" HD | Windows 11 Pro | Refurbished',
    brand: 'DELL',
    price: 22500,
    originalPrice: 74000,
    discount: '70% off',
    rating: 4,
    reviews: 23,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400',
    specs: ['Intel Core i7', '8GB', '256GB', 'Windows 11 Pro'],
    badge: 'Pro workstation',
    badgeType: 'purple'
  },
  {
    id: 'l8',
    name: 'Dell Latitude 5410 | Intel i5 10th Gen | 14" FHD | Windows 11 Pro | Refurbished',
    brand: 'DELL',
    price: 26999,
    originalPrice: 84000,
    discount: '68% off',
    rating: 4,
    reviews: 23,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400',
    specs: ['Intel Core i5', '8GB', '256GB', 'Windows 11 pro'],
    badge: 'Student-friendly',
    badgeType: 'green'
  },
  {
    id: 'l9',
    name: 'Lenovo ThinkPad L14 | Intel i7 10th Gen | Windows 11 Pro | Refurbished',
    brand: 'LENOVO',
    price: 27999,
    originalPrice: 74000,
    discount: '62% off',
    rating: 1,
    reviews: 1,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400',
    specs: ['Intel Core i7', '8GB', '256GB', 'Windows 11 pro'],
    badge: 'Pro workstation',
    badgeType: 'purple'
  }
];

export const AllProducts: React.FC = () => {
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

  const getBadgeStyles = (type?: string) => {
    switch (type) {
      case 'blue':
        return 'bg-[#e3f2fd] border-[#bbdefb] text-[#1976d2]';
      case 'purple':
        return 'bg-[#f3e5f5] border-[#e1bee7] text-[#7b1fa2]';
      case 'green':
      default:
        return 'bg-[#e8f5e9] border-[#c8e6c9] text-[#2e7d32]';
    }
  };

  return (
    <section className="py-20 bg-white text-black overflow-hidden font-sans border-t border-slate-50">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-[#d97706]" />
              <span className="text-[10px] font-black text-[#d97706] uppercase tracking-[0.4em]">Explore the lineup</span>
            </div>
            <h2 className="text-6xl font-serif font-bold text-[#111111] tracking-tight">All Products</h2>
            <p className="text-slate-400 text-sm font-medium tracking-wide">Dell, HP, Lenovo, Apple and more — curated for every budget.</p>
          </div>
          <Link to="/category/all" className="flex items-center gap-2 px-8 py-3.5 border border-slate-200 rounded-full text-[10px] font-black text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all uppercase tracking-[0.2em] group shrink-0">
            View All <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid/Carousel */}
        <div className="relative group">
           <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-12 -mx-6 px-6 snap-x">
              {ALL_PRODUCTS_DATA.map((product) => (
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
                      <div className={`px-4 py-2 border rounded-xl text-[10px] font-black self-start inline-flex items-center gap-1.5 ${getBadgeStyles(product.badgeType)}`}>
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
