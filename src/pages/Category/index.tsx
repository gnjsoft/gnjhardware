import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, Product } from '../../data/products';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Filter, 
  ChevronDown, 
  Search, 
  SlidersHorizontal, 
  X, 
  Star, 
  ShoppingCart, 
  RotateCcw, 
  Shield, 
  Check,
  ChevronRight,
  Monitor,
  Cpu,
  LayoutGrid,
  Menu
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

const SORT_OPTIONS = [
  { label: 'Popularity', value: 'popularity' },
  { label: 'Price: Low to High', value: 'price-low-high' },
  { label: 'Price: High to Low', value: 'price-high-low' },
  { label: 'Top Rated', value: 'top-rated' },
  { label: 'Newest First', value: 'newest' },
];

const BRANDS = ['DELL', 'HP', 'LENOVO', 'APPLE', 'ASUS', 'ACER', 'CORETECH'];
const PROCESSORS = ['Intel Core i3', 'Intel Core i5', 'Intel Core i7', 'Intel Core i9', 'Ryzen 5', 'Ryzen 7', 'Ryzen 9'];

export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { addToCart } = useCart();
  
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedProcessors, setSelectedProcessors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Derived Values
  const formattedCategory = categoryId?.replace(/-/g, ' ');
  
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    
    // Category Filter
    if (categoryId && categoryId !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === categoryId?.toLowerCase());
    }

    // Search Filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query) ||
        (p.specs && p.specs.cpu?.toLowerCase().includes(query))
      );
    }

    // Price Filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Brand Filter
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand.toUpperCase()));
    }

    // Processor Filter
    if (selectedProcessors.length > 0) {
      result = result.filter(p => {
        const cpu = (p.specs && p.specs.cpu?.toLowerCase()) || '';
        return selectedProcessors.some(proc => cpu.includes(proc.toLowerCase()));
      });
    }

    // Sorting
    switch (sortBy) {
      case 'price-low-high': return [...result].sort((a, b) => a.price - b.price);
      case 'price-high-low': return [...result].sort((a, b) => b.price - a.price);
      case 'top-rated': return [...result].sort((a, b) => b.rating - a.rating);
      default: return result;
    }
  }, [categoryId, searchQuery, priceRange, selectedBrands, selectedProcessors, sortBy]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleProcessor = (proc: string) => {
    setSelectedProcessors(prev => 
      prev.includes(proc) ? prev.filter(p => p !== proc) : [...prev, proc]
    );
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  const FilterSidebarContent = () => (
    <div className="space-y-8">
      {/* Categories Placeholder */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Categories</h3>
        <div className="flex flex-col gap-2">
          {['All Laptops', 'MacBooks', 'Gaming Laptops', 'Thin & Light'].map(cat => (
            <button key={cat} className="text-left text-sm font-bold text-slate-700 hover:text-black transition-colors py-1 flex items-center justify-between group">
              {cat}
              <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </button>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-slate-100" />

      {/* Price Range */}
      <div className="space-y-5">
        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
           <span>Price Range</span>
           <span className="text-black font-black">₹{priceRange[1].toLocaleString()}</span>
        </div>
        <input 
          type="range"
          min="0"
          max="300000"
          step="5000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
          className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-black"
        />
        <div className="flex justify-between text-[9px] font-bold text-slate-400">
           <span>₹0</span>
           <span>₹3,00,000+</span>
        </div>
      </div>

      <div className="h-[1px] bg-slate-100" />

      {/* Brand Filters */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Brand</h3>
        <div className="grid grid-cols-1 gap-2">
          {BRANDS.map(brand => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  className="peer hidden"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                <div className="w-5 h-5 border-2 border-slate-200 rounded-md peer-checked:bg-black peer-checked:border-black transition-all" />
                <Check size={12} className="absolute text-white scale-0 peer-checked:scale-100 transition-transform" />
              </div>
              <span className="text-sm font-bold text-slate-600 group-hover:text-black transition-colors">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-slate-100" />

      {/* Processor Filters */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Processor</h3>
        <div className="grid grid-cols-1 gap-2">
          {PROCESSORS.map(proc => (
            <label key={proc} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  className="peer hidden"
                  checked={selectedProcessors.includes(proc)}
                  onChange={() => toggleProcessor(proc)}
                />
                <div className="w-5 h-5 border-2 border-slate-200 rounded-md peer-checked:bg-black peer-checked:border-black transition-all" />
                <Check size={12} className="absolute text-white scale-0 peer-checked:scale-100 transition-transform" />
              </div>
              <span className="text-sm font-bold text-slate-600 group-hover:text-black transition-colors">{proc}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 text-black font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-3 mb-12 text-[10px] font-black uppercase tracking-widest text-slate-400">
           <Link to="/" className="hover:text-black transition-colors">Home</Link>
           <ChevronRight size={10} />
           <span className="text-black font-black">{formattedCategory || 'Products'}</span>
        </div>

        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
           <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-[2px] bg-black" />
                 <span className="text-[10px] font-black text-black uppercase tracking-[0.4em]">Inventory Registry</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter leading-none capitalize">
                 {formattedCategory || 'All Laptops'}
              </h1>
           </div>
           <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-[#10a345]" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                 {filteredProducts.length} Systems Online
              </span>
           </div>
        </div>

        {/* Global Toolbar */}
        <div className="mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between py-6 border-y border-slate-100">
           {/* Search */}
           <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-black transition-colors" size={18} />
              <input 
                type="text"
                placeholder="Search models, brands, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
              />
           </div>

           <div className="flex items-center gap-6 w-full lg:w-auto">
              {/* Mobile Filter Toggle */}
              <button 
                onClick={() => setIsMobileFiltersOpen(true)}
                className="lg:hidden flex-1 flex items-center justify-center gap-3 px-6 py-4 border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest"
              >
                <Filter size={14} /> Filters
              </button>

              {/* Sort Dropdown */}
              <div className="relative flex-1 lg:flex-none">
                 <div className="flex items-center gap-4 px-6 py-4 bg-white border border-slate-200 rounded-2xl min-w-[220px]">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest shrink-0">Sort By:</span>
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest cursor-pointer appearance-none pr-6"
                    >
                       {SORT_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                 </div>
              </div>

              {/* View Toggle Placeholder */}
              <div className="hidden lg:flex items-center gap-2">
                 <button className="p-4 bg-black text-white rounded-2xl shadow-lg"><LayoutGrid size={18} /></button>
                 <button className="p-4 bg-white border border-slate-200 text-slate-400 rounded-2xl hover:bg-slate-50 transition-colors"><Menu size={18} /></button>
              </div>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
             <FilterSidebarContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
             {filteredProducts.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                 {filteredProducts.map((p, i) => (
                   <motion.div 
                     key={p.id}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: (i % 6) * 0.05 }}
                     className="group flex flex-col"
                   >
                     <Link to={`/product/${p.id}`} className="block">
                        <div className="aspect-[4/3] bg-[#f9f9f9] rounded-[40px] p-10 flex items-center justify-center relative overflow-hidden mb-6 group/card shadow-sm hover:shadow-xl transition-all duration-700">
                           <img 
                             src={p.image} 
                             alt={p.name} 
                             className="max-h-full max-w-full object-contain mix-blend-multiply group-hover/card:scale-110 transition-transform duration-1000"
                           />
                           
                           {/* Floating Actions */}
                           <div className="absolute top-6 left-6 flex flex-col gap-2">
                              <span className="bg-black text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg">{p.brand}</span>
                              {p.price < 50000 && <span className="bg-[#10a345] text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg">Value Pick</span>}
                           </div>

                           <div className="absolute top-6 right-6 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-xl border border-slate-50">
                                 <Shield size={20} />
                              </div>
                           </div>
                           
                           {/* Quick Action Overlay */}
                           <div className="absolute inset-x-8 bottom-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                              <button 
                                onClick={(e) => handleAddToCart(e, p)}
                                className="w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
                              >
                                <ShoppingCart size={16} /> Quick Add
                              </button>
                           </div>
                        </div>
                     </Link>
                     
                     <div className="px-2 space-y-4 flex-1 flex flex-col">
                        <div className="space-y-4">
                           {/* Rating */}
                           <div className="flex items-center gap-2">
                              <div className="flex items-center gap-0.5">
                                 {[...Array(5)].map((_, i) => (
                                   <Star key={i} size={12} className={i < Math.floor(p.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'} />
                                 ))}
                              </div>
                              <span className="text-[10px] font-bold text-slate-400">({p.reviewCount} Reviews)</span>
                           </div>

                           <Link to={`/product/${p.id}`}>
                              <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-black transition-colors line-clamp-2 min-h-[3.5rem]">{p.name}</h3>
                           </Link>

                           {/* Specs Tags */}
                           <div className="flex flex-wrap gap-2">
                              {(p.specs && p.specs.cpu) && (
                                <div className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[9px] font-bold text-slate-500 flex items-center gap-2">
                                  <Cpu size={12} /> {p.specs.cpu.split(' ').slice(0, 3).join(' ')}
                                </div>
                              )}
                              {(p.specs && p.specs.ram) && (
                                <div className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[9px] font-bold text-slate-500 flex items-center gap-2">
                                  <LayoutGrid size={12} /> {p.specs.ram}
                                </div>
                              )}
                           </div>
                        </div>

                        <div className="pt-6 mt-auto border-t border-slate-100 space-y-4">
                           <div className="flex flex-col gap-1">
                              <div className="flex items-baseline gap-3">
                                 <span className="text-3xl font-black text-black tracking-tighter">₹{p.price.toLocaleString()}</span>
                                 <span className="text-sm text-slate-400 line-through font-bold">₹{(p.price * 1.4).toLocaleString()}</span>
                              </div>
                              <span className="text-[10px] font-black text-[#10a345] uppercase tracking-widest">Saving 40% Today</span>
                           </div>

                           <div className="flex items-center gap-2 text-[10px] font-black text-[#10a345] uppercase tracking-wider">
                              <RotateCcw size={14} />
                              Free Pickup & Returns
                           </div>
                        </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
             ) : (
               <div className="py-40 flex flex-col items-center text-center space-y-8 bg-slate-50/50 border-2 border-dashed border-slate-100 rounded-[50px]">
                  <div className="w-20 h-20 rounded-[32px] bg-white border border-slate-100 flex items-center justify-center text-slate-200 shadow-sm">
                     <Search size={40} />
                  </div>
                  <div className="space-y-3">
                     <h2 className="text-2xl font-black uppercase tracking-tight">System Search yields Zero matches</h2>
                     <p className="text-slate-500 font-medium max-w-sm mx-auto">None of our active inventory nodes match your current filter parameters. Try expanding your search scope.</p>
                  </div>
                  <button 
                    onClick={() => { setPriceRange([0, 300000]); setSelectedBrands([]); setSelectedProcessors([]); setSearchQuery(''); }}
                    className="px-10 py-5 bg-black text-white font-black text-[11px] uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Reset Filter Protocols
                  </button>
               </div>
             )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsMobileFiltersOpen(false)}
               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            />
            <motion.div 
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%' }}
               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
               className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-[120] p-10 flex flex-col shadow-2xl"
            >
               <div className="flex items-center justify-between mb-10">
                  <h2 className="text-2xl font-black uppercase tracking-tighter">Inventory Filter</h2>
                  <button onClick={() => setIsMobileFiltersOpen(false)} className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                    <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto scrollbar-hide">
                  <FilterSidebarContent />
               </div>

               <div className="pt-8 border-t border-slate-100">
                  <button 
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="w-full py-5 bg-black text-white font-black text-[11px] uppercase tracking-widest rounded-2xl shadow-xl shadow-black/10"
                  >
                    Apply Selection
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
