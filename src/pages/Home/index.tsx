import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Zap, Shield, Cpu, Monitor, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { BestSellers } from '../../components/home/BestSellers';
import { AllProducts } from '../../components/home/AllProducts';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=1600',
    headline: 'STOP OVERPAYING',
    subheadline: 'Own a deployment node from just ₹5,999/month*',
    description: 'Certified premium hardware from top-tier brands. Quality checked. Performance backed. Ready to deploy.',
    accent: 'Up to 80% OFF',
    rating: '4.8',
    reviews: '1.2k+ Reviews',
    path: '/category/laptop'
  },
  {
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1600',
    headline: 'ELITE COMPUTE',
    subheadline: 'Maximum Power. Minimal Investment.',
    description: 'High-density render nodes and AI workstations at prices that defy logic. Secure your infrastructure today.',
    accent: 'Special Pricing',
    rating: '4.9',
    reviews: '850+ Nodes Active',
    path: '/category/workstation'
  },
  {
    image: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=1600',
    headline: 'SMARTER DECISION',
    subheadline: 'Same Performance. Smarter Price Point.',
    description: 'Why buy experimental when you can buy proven? Architecture-grade components for the modern engineer.',
    accent: 'Certified Refurbished',
    rating: '4.7',
    reviews: '2.5k+ Units Shipped',
    path: '/category/desktop'
  }
];

const BRANDS = ['DELL', 'HP', 'LENOVO', 'APPLE', 'ASUS', 'ACER', 'MICROSOFT', 'THINKPAD', 'MSI', 'SAMSUNG'];

export const Home: React.FC = () => {
  const featured = PRODUCTS.slice(0, 4);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="bg-black text-white">
      {/* Hero Slider Section */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#f3f1eb]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Split Background Effect */}
            <div className="absolute inset-0 flex flex-col lg:flex-row">
               <div className="w-full lg:w-[45%] h-full flex flex-col justify-center px-6 lg:px-20 z-20">
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="space-y-8"
                  >
                     <h1 className="text-6xl lg:text-[120px] font-black tracking-tighter leading-[0.8] text-black/90">
                       {HERO_SLIDES[currentSlide].headline}
                     </h1>
                     
                     <div className="space-y-4">
                        <p className="text-2xl lg:text-4xl font-bold text-black flex items-center gap-3">
                          {HERO_SLIDES[currentSlide].subheadline.split(' ').map((word, i) => (
                            <span key={i} className={word.startsWith('₹') ? 'text-[#10a345]' : ''}>{word}</span>
                          ))}
                        </p>
                        
                        <div className="flex items-center gap-12">
                           <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                 <span className="text-xl font-black text-black">{HERO_SLIDES[currentSlide].rating}</span>
                                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Rating</p>
                              </div>
                              <div className="flex gap-1">
                                 {[...Array(5)].map((_, i) => (
                                   <Zap key={i} size={12} className="fill-accent text-accent" />
                                 ))}
                              </div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{HERO_SLIDES[currentSlide].reviews}</p>
                           </div>
                           
                           <p className="text-sm font-medium text-slate-600 max-w-xs leading-relaxed">
                             {HERO_SLIDES[currentSlide].description}
                           </p>
                        </div>
                     </div>

                     <div className="flex flex-wrap gap-6 pt-4">
                        <Link 
                          to={HERO_SLIDES[currentSlide].path}
                          className="px-10 py-5 bg-[#10a345] text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-xl"
                        >
                          Explore Inventory
                          <ArrowRight size={20} />
                        </Link>
                        <button className="px-10 py-5 bg-white border-2 border-black/10 text-black font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-all">
                          Help Me Choose
                        </button>
                     </div>
                  </motion.div>
               </div>

               <div className="absolute lg:relative right-0 w-full lg:w-[60%] h-full flex items-center justify-center pt-20 lg:pt-0">
                  <div className="relative w-full h-full lg:h-[80%] flex items-center justify-center">
                     <motion.div
                       initial={{ scale: 0.8, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{ delay: 0.6, duration: 1 }}
                       className="relative z-10 w-[50%] h-full"
                     >
                        <img 
                          src={HERO_SLIDES[currentSlide].image} 
                          className="w-full h-full object-contain filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]"
                          alt="Product Highlight"
                        />
                     </motion.div>

                     {/* Offer Badge Overlay */}
                     <motion.div
                       initial={{ rotate: -20, scale: 0 }}
                       animate={{ rotate: 5, scale: 1 }}
                       transition={{ delay: 1, type: 'spring' }}
                       className="absolute top-1/4 right-[10%] lg:right-[15%] w-40 h-40 lg:w-48 lg:h-48 bg-[#10a345] rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl z-20"
                     >
                        <p className="text-[10px] lg:text-[12px] font-black text-white/80 uppercase tracking-widest mb-1">Limited</p>
                        <h4 className="text-xl lg:text-3xl font-black text-white leading-tight uppercase">
                          {HERO_SLIDES[currentSlide].accent.split(' ').map((word, i) => <span key={i}>{word}<br/></span>)}
                        </h4>
                     </motion.div>
                  </div>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Brand Ticker */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/50 backdrop-blur-md border-t border-black/5 z-30 flex items-center overflow-hidden">
           <div className="flex items-center gap-16 whitespace-nowrap animate-marquee px-10">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-16">
                  {BRANDS.map(brand => (
                    <div key={brand} className="flex items-center gap-4">
                      <span className="text-[11px] font-black text-black/30 tracking-[0.4em]">{brand}</span>
                      <div className="w-1 h-1 bg-black/10 rounded-full" />
                    </div>
                  ))}
                </div>
              ))}
           </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-32 right-10 flex gap-4 z-40">
           <button 
             onClick={prevSlide}
             className="w-14 h-14 bg-black/5 border border-black/5 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all text-black"
           >
             <ArrowLeft size={24} />
           </button>
           <button 
             onClick={nextSlide}
             className="w-14 h-14 bg-black/5 border border-black/5 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all text-black"
           >
             <ArrowRight size={24} />
           </button>
        </div>
      </section>


      <BestSellers />
      <AllProducts />
    </div>
  );
};
