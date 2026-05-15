import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { motion } from 'motion/react';
import { Search as SearchIcon, ArrowRight, Zap, ChevronRight } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';

  const results = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.brand.toLowerCase().includes(lowerQuery) || 
      p.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 space-y-4">
           <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              <Link to="/" className="hover:text-accent">Internal</Link>
              <span className="text-slate-700">/</span>
              <span>Query Execution</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
             RESULTS FOR "<span className="text-accent italic">{query}</span>"
           </h1>
           <p className="text-sm font-black text-slate-500 uppercase tracking-widest leading-none">
             {results.length} NODES IDENTIFIED MATCHING PARAMETERS
           </p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white/5 border border-white/5 rounded-[40px] p-8 hover:border-accent/40 transition-all duration-500 shadow-2xl"
              >
                <div className="aspect-square bg-black rounded-3xl p-8 mb-8 relative flex items-center justify-center overflow-hidden">
                   <Link to={`/product/${p.id}`} className="w-full h-full flex items-center justify-center">
                     <img 
                       src={p.image} 
                       alt={p.name} 
                       className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-1000"
                     />
                   </Link>
                </div>
                <div className="space-y-4">
                   <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">{p.category}</p>
                      <Link to={`/product/${p.id}`}>
                        <h3 className="text-2xl font-black text-white group-hover:text-accent transition-colors tracking-tighter leading-tight">{p.name}</h3>
                      </Link>
                   </div>
                   <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-xl font-black tracking-tighter">₹{p.price.toLocaleString()}</span>
                      <Link 
                        to={`/product/${p.id}`}
                        className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                      >
                         <ChevronRight size={20} />
                      </Link>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-40 text-center space-y-10 bg-white/2 border border-white/5 rounded-[60px]">
             <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-slate-700 mx-auto shadow-inner">
                <SearchIcon size={40} />
             </div>
             <div className="space-y-2">
                <h2 className="text-3xl font-black uppercase tracking-tight">Query Failed: Zero Results</h2>
                <p className="text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">The internal search engine found no hardware nodes matching the requested parameters.</p>
             </div>
             <Link 
               to="/category/all"
               className="inline-block px-12 py-5 bg-accent text-black font-black text-xs uppercase tracking-widest rounded-2xl"
             >
               Return to General Registry
             </Link>
          </div>
        )}
      </div>
    </div>
  );
};
