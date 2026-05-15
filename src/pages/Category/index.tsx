import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ChevronDown, Zap, Search, SlidersHorizontal, ArrowRight } from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [sortBy, setSortBy] = useState('featured');
  const [minRating, setMinRating] = useState(0);

  const formattedCategory = categoryId?.replace(/-/g, ' ');
  
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    
    if (categoryId === 'personal-computing') {
      result = PRODUCTS.filter(p => ['laptop', 'desktop', 'workstation'].includes(p.category.toLowerCase()));
    } else if (categoryId !== 'all') {
      result = PRODUCTS.filter(p => p.category.toLowerCase() === categoryId?.toLowerCase());
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    result = result.filter(p => p.rating >= minRating);

    switch (sortBy) {
      case 'price-low-high': return [...result].sort((a, b) => a.price - b.price);
      case 'price-high-low': return [...result].sort((a, b) => b.price - a.price);
      case 'top-rated': return [...result].sort((a, b) => b.rating - a.rating);
      default: return result;
    }
  }, [categoryId, sortBy, priceRange, minRating]);

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 space-y-6">
           <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-accent">
              <Link to="/" className="hover:text-white transition-colors">Internal</Link>
              <span className="text-slate-700">/</span>
              <span>Registry Hub</span>
           </div>
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                {categoryId === 'all' ? 'All Hardware' : formattedCategory}
              </h1>
              <span className="text-slate-500 font-black uppercase tracking-widest text-[11px]">
                {filteredProducts.length} ACTIVE NODES DETECTED
              </span>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-80 shrink-0 space-y-12">
             <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] space-y-10">
                <div className="space-y-6">
                   <h3 className="text-[11px] font-black uppercase tracking-widest text-accent flex items-center gap-2">
                     <SlidersHorizontal size={14} /> Global Filters
                   </h3>
                   <div className="h-[1px] bg-white/10 w-full" />
                </div>

                {/* Price */}
                <div className="space-y-6">
                   <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <span>Price Range</span>
                      <span className="text-white">₹{priceRange[1].toLocaleString()}</span>
                   </div>
                   <input 
                     type="range"
                     min="0"
                     max="500000"
                     step="10000"
                     value={priceRange[1]}
                     onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                     className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-accent"
                   />
                </div>

                {/* Rating */}
                <div className="space-y-4">
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Performance Rating</p>
                   {[5, 4, 3].map(rating => (
                     <button 
                       key={rating}
                       onClick={() => setMinRating(minRating === rating ? 0 : rating)}
                       className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all ${minRating === rating ? 'bg-accent border-accent text-black' : 'bg-white/2 border-white/5 text-slate-400'}`}
                     >
                        <div className="flex gap-1">
                           {[...Array(5)].map((_, i) => (
                             <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < rating ? (minRating === rating ? 'bg-black' : 'bg-accent') : 'bg-white/10'}`} />
                           ))}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest">{rating}+ STARS</span>
                     </button>
                   ))}
                </div>

                <button 
                  onClick={() => { setPriceRange([0, 500000]); setMinRating(0); }}
                  className="w-full py-4 text-[10px] font-black text-slate-400 border border-white/10 rounded-xl hover:border-accent hover:text-accent transition-all uppercase tracking-widest"
                >
                  Reset Parameters
                </button>
             </div>

             <div className="p-8 bg-accent rounded-[32px]">
                <h4 className="text-black font-black text-xl mb-4 leading-tight">PREMIUM HARDWARE SUPPORT AVAILABLE</h4>
                <p className="text-black/60 text-sm font-bold mb-6">Connect with our dedicated engineers for custom builds.</p>
                <button className="w-full bg-black text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest">Connect Now</button>
             </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
             <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                   <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">LIVE DATA FEED</span>
                </div>
                <div className="flex items-center gap-4">
                   <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">ORDER BY:</span>
                   <select 
                     value={sortBy}
                     onChange={(e) => setSortBy(e.target.value)}
                     className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-accent cursor-pointer"
                   >
                      <option value="featured" className="bg-black">Featured</option>
                      <option value="price-low-high" className="bg-black">Price: Low - High</option>
                      <option value="price-high-low" className="bg-black">Price: High - Low</option>
                      <option value="top-rated" className="bg-black">Top Rated</option>
                   </select>
                </div>
             </div>

             {filteredProducts.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {filteredProducts.map((p, i) => (
                   <motion.div 
                     key={p.id}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.05 }}
                     className="group bg-white/5 border border-white/5 rounded-[40px] p-8 flex flex-col hover:border-accent/40 transition-all duration-500 shadow-2xl"
                   >
                     <div className="aspect-square bg-black rounded-3xl p-8 mb-8 relative overflow-hidden flex items-center justify-center">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                           <span className="bg-accent text-black px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">{p.brand}</span>
                           {p.status === 'Out of Stock' && (
                             <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">Offline</span>
                           )}
                        </div>
                     </div>
                     
                     <div className="flex-1 space-y-4">
                        <div className="space-y-1">
                           <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{p.category}</p>
                           <h2 className="text-3xl font-black text-white group-hover:text-accent transition-colors tracking-tighter leading-tight">{p.name}</h2>
                        </div>
                        <p className="text-slate-500 text-sm font-medium line-clamp-2 leading-relaxed">{p.description}</p>
                        
                        <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between">
                           <div className="flex flex-col">
                              <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">Acquisition Cost</span>
                              <span className="text-2xl font-black tracking-tighter">₹{p.price.toLocaleString()}</span>
                           </div>
                           <Link 
                             to={`/product/${p.id}`}
                             className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-black hover:border-accent transition-all group/btn"
                           >
                              <ArrowRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
             ) : (
               <div className="py-40 flex flex-col items-center text-center space-y-8 bg-white/2 border-2 border-dashed border-white/5 rounded-[50px]">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-slate-700">
                     <Search size={40} />
                  </div>
                  <div className="space-y-2">
                     <h2 className="text-2xl font-black uppercase tracking-tight">No Hardware Detected</h2>
                     <p className="text-slate-500 font-medium max-w-sm mx-auto">Zero matches found in our current inventory registry. Adjust your filters to expand the search scope.</p>
                  </div>
                  <button 
                    onClick={() => { setPriceRange([0, 500000]); setMinRating(0); }}
                    className="px-10 py-4 bg-accent text-black font-black text-[11px] uppercase tracking-widest rounded-2xl"
                  >
                    Clear Filter Protocols
                  </button>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};
