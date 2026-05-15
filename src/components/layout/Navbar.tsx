import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, ChevronDown, Laptop, Monitor, MonitorSmartphone as Desktop, Cpu, Shield, Zap, User, Settings, LogOut, ShoppingBag, ArrowLeft, Apple, LayoutGrid } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { 
    title: 'Products', 
    path: '/category/all',
    submenu: [
      { name: 'All Laptops', description: 'Browse 500+ models', path: '/category/laptop', icon: Laptop },
      { name: 'MacBooks', description: 'Air and Pro models', path: '/category/laptop', icon: Apple },
      { name: 'Windows', description: 'Windows laptops', path: '/category/laptop', icon: LayoutGrid },
      { name: 'Desktop', description: 'Desktop PCs', path: '/category/desktop', icon: Monitor }
    ]
  },
  { 
    title: 'Brands', 
    path: '/brands',
    submenu: [
      { name: 'Apple', path: '/brands', icon: Apple },
      { name: 'Dell', path: '/brands', icon: Monitor },
      { name: 'HP', path: '/brands', icon: Laptop },
      { name: 'Lenovo', path: '/brands', icon: Cpu },
      { name: 'Asus', path: '/brands', icon: Zap },
      { name: 'Acer', path: '/brands', icon: LayoutGrid }
    ]
  },
  { 
    title: 'By Budget', 
    path: '/category/budget',
    submenu: [
      { name: 'Under ₹50,000', path: '/category/budget', icon: Monitor },
      { name: '₹50,000 - ₹1L', path: '/category/budget', icon: Laptop },
      { name: 'Enterprise Grade', path: '/category/budget', icon: Cpu }
    ]
  },
  { 
    title: 'Other Links', 
    path: '/support',
    isMega: true,
    columns: [
      {
        title: 'BY CITY',
        items: ['Delhi', 'Mumbai', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad', 'Ahmedabad', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore'].map(city => ({ name: city, path: `/search?q=${city}` }))
      },
      {
        title: 'BY BRANDS',
        items: ['HP', 'Macbooks', 'Dell', 'Lenovo'].map(brand => ({ name: brand, path: `/category/${brand.toLowerCase()}` }))
      },
      {
        title: 'BY USE',
        items: ['Engineers', 'Graphic Designers', 'Students', 'Data Analysts', 'Freelancers', 'Programmers', 'Schools', 'Digital Artists', 'Gaming', 'Small Businesses', 'Enterprises', 'Startups', 'Video Editing'].map(use => ({ name: use, path: `/search?q=${use}` }))
      },
      {
        title: 'BY PRICE',
        items: [
          { name: 'Under ₹20,000', path: `/search?q=under 20000` },
          { name: 'Under ₹30,000', path: `/search?q=under 30000` },
          { name: 'Under ₹40,000', path: `/search?q=under 40000` },
          { name: 'Under ₹50,000', path: `/search?q=under 50000` },
          { name: 'Under ₹10,000', path: `/search?q=under 10000` }
        ]
      },
      {
        title: 'OTHER LINKS',
        items: [
          { name: 'Best Sellers', path: '/search?q=best sellers' },
          { name: 'Latest Release Refurbished Laptops', path: '/category/laptop' },
          { name: 'Refurbished Laptops', path: '/category/laptop' },
          { name: 'Festive Deals', path: '/offers' }
        ]
      }
    ]
  },
];

export const Navbar: React.FC = () => {
  const { cartCount, setIsDrawerOpen } = useCart();
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
     const handleScroll = () => setIsScrolled(window.scrollY > 20);
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = () => {
    logout();
    setActiveMenu(null);
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      {/* Top Announcement Bar */}
      <div className="bg-[#0a0a0a] h-10 flex items-center overflow-hidden border-b border-white/5">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee flex-nowrap h-full">
           {[...Array(3)].map((_, i) => (
             <React.Fragment key={i}>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <ArrowLeft size={12} className="text-accent rotate-180" />
                    <span className="text-[10px] font-bold text-white tracking-wider uppercase">Hassle free Returns</span>
                  </div>
                  <div className="w-[1px] h-3 bg-white/20" />
                  <div className="flex items-center gap-2">
                    <Zap size={12} className="text-accent" />
                    <span className="text-[10px] font-bold text-white tracking-wider uppercase">COD Available in all Products</span>
                  </div>
                  <div className="w-[1px] h-3 bg-white/20" />
                  <div className="flex items-center gap-2">
                    <Shield size={12} className="text-accent" />
                    <span className="text-[10px] font-bold text-white tracking-wider uppercase">12-Month Warranty on Every Node</span>
                  </div>
                  <div className="w-[1px] h-3 bg-white/20" />
                </div>
             </React.Fragment>
           ))}
        </div>
      </div>

      {/* Main Navbar Row */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'}`}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-4 lg:gap-8">
        
        {/* Left Side: Logo & Main Links */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 lg:w-9 lg:h-9 bg-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
               <Zap size={18} className="text-white fill-white" />
            </div>
            <span className="text-xl lg:text-2xl font-black tracking-tight text-black">edify</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link: any) => (
              <div 
                key={link.title} 
                className="relative group h-full"
                onMouseEnter={() => (link.submenu || link.isMega) && setActiveMenu(link.title)}
                onMouseLeave={() => (link.submenu || link.isMega) && setActiveMenu(null)}
              >
                <div className="flex items-center gap-1.5 cursor-pointer h-20">
                  <Link 
                    to={link.path}
                    className={`flex items-center gap-1 text-[13px] lg:text-[14px] font-bold transition-colors ${link.title === 'Other Links' ? 'bg-slate-50 px-4 py-2 rounded-xl text-slate-800 hover:bg-slate-100' : 'text-slate-800 hover:text-black'}`}
                  >
                    {link.title}
                    {(link.submenu || link.isMega) && <ChevronDown size={14} className="text-slate-400" />}
                  </Link>
                </div>

                <AnimatePresence>
                  {activeMenu === link.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`absolute top-full left-0 mt-0 bg-white border border-slate-100 shadow-2xl z-50 ${link.isMega ? 'w-[100vw] -ml-[300px] lg:-ml-[400px] xl:-ml-[500px] p-8 rounded-b-[40px]' : 'w-72 mt-2 p-4 rounded-3xl'}`}
                    >
                      {link.isMega ? (
                        <div className="max-w-[1400px] mx-auto grid grid-cols-5 gap-12 overflow-y-auto max-h-[70vh] scrollbar-hide pr-4">
                           {link.columns.map((column: any) => (
                             <div key={column.title} className="space-y-6">
                               <h3 className="text-[11px] font-black text-[#7c3aed] uppercase tracking-widest leading-none pb-2 border-b border-slate-100">{column.title}</h3>
                               <div className="space-y-3">
                                 {column.items.map((item: any) => (
                                   <Link 
                                     key={item.name}
                                     to={item.path}
                                     className="block text-[13px] font-bold text-slate-600 hover:text-black transition-colors"
                                   >
                                     {item.name}
                                   </Link>
                                 ))}
                               </div>
                             </div>
                           ))}
                        </div>
                      ) : (
                        <div className="space-y-1">
                          {link.submenu?.map((sub: any) => (
                            <Link 
                              key={sub.name}
                              to={sub.path}
                              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group/item"
                            >
                              {sub.icon && (
                                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 group-hover/item:bg-white transition-colors">
                                  <sub.icon size={22} />
                                </div>
                              )}
                              <div>
                                <p className="text-sm font-bold text-slate-900 group-hover/item:text-black">{sub.name}</p>
                                {sub.description && (
                                  <p className="text-[11px] text-slate-400 font-medium">{sub.description}</p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link to="/help" className="text-[13px] font-extrabold text-[#7c3aed] hover:opacity-80 transition-opacity ml-2">
              Help me choose
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0 ml-auto">
          {/* Search pill */}
          <div className="max-w-[400px] w-full hidden lg:block">
             <form onSubmit={handleSearch} className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Search size={16} />
                </div>
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products"
                  className="w-full h-11 bg-slate-50 border border-slate-100 rounded-full pl-11 pr-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black/10 transition-all outline-none"
                />
             </form>
          </div>

          <div className="flex items-center gap-4 lg:gap-7 ml-4">
             <button 
               onClick={() => setIsDrawerOpen(true)}
               className="flex items-center gap-2 group text-slate-700 hover:text-black transition-colors"
             >
                <div className="relative">
                  <ShoppingBag size={20} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#10a345] text-white rounded-full text-[9px] font-black flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-sm font-bold">Cart</span>
             </button>

             {user ? (
               <button onClick={() => navigate('/profile')} className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg">
                  <User size={16} />
                  <span>Account</span>
               </button>
             ) : (
               <Link to="/login" className="flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-full text-sm font-black hover:scale-105 active:scale-95 transition-all shadow-lg">
                  <User size={16} />
                  <span>Login</span>
               </Link>
             )}

             <button className="xl:hidden p-2 text-slate-900">
               <Menu size={24} />
             </button>
          </div>
        </div>
      </div>
    </div>
    </nav>
  );
};
