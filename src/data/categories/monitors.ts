import { Product } from '../products';

export const MONITORS: Product[] = [
  {
    id: 'm1',
    name: 'Horizon Ultra-Wide S',
    brand: 'CoreTech',
    category: 'Monitor',
    price: 112000,
    rating: 4.8,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
    description: '49-inch curved mastery. Replaces triple-monitor setups with a single, seamless OLED panel.',
    features: ['240Hz Refresh Rate', '1000 nits Peak Brightness', '0.03ms Response Time', 'KVM Switch Built-in'],
    specs: {
      display: '49" Dual QHD OLED',
      refresh: '240Hz',
    },
    status: 'In Stock'
  },
  {
    id: 'm2',
    name: 'Pixel Perfect 4K Pro',
    brand: 'CoreTech',
    category: 'Monitor',
    price: 74000,
    rating: 4.9,
    reviewCount: 230,
    image: 'https://images.unsplash.com/photo-1547119957-630f9c44b798?auto=format&fit=crop&q=80&w=800',
    description: 'Color-accurate display for creative professionals. Factory calibrated to Delta E < 1.',
    features: ['99% Adobe RGB', '10-bit Color', 'Hardware Calibration', 'Built-in Hood'],
    specs: {
      display: '32" 4K IPS Black',
      refresh: '60Hz',
    },
    status: 'In Stock'
  },
  {
    id: 'm3',
    name: 'Racer Elite 360',
    brand: 'CoreTech',
    category: 'Monitor',
    price: 58000,
    rating: 4.8,
    reviewCount: 412,
    image: 'https://images.unsplash.com/photo-1545931792-80687071987d?auto=format&fit=crop&q=80&w=800',
    description: 'Designed for competitive eSports. Zero lag, maximum clarity in motion.',
    features: ['360Hz Refresh Rate', 'Reflex Latency Analyzer', 'G-Sync Ultimate', 'Low Blue Light'],
    specs: {
      display: '24.5" FHD IPS',
      refresh: '360Hz',
    },
    status: 'In Stock'
  }
];
