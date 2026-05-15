import { Product } from '../products';

export const LAPTOPS: Product[] = [
  {
    id: 'l1',
    name: 'Zenith Pro X15',
    brand: 'CoreTech',
    category: 'Laptop',
    price: 245000,
    rating: 4.9,
    reviewCount: 128,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800',
    description: 'The ultimate professional workstation for architects and engineers. Features titanium-reinforced chassis.',
    features: ['RTX 4090 GPU', 'Intel i9-14900HX', '64GB DDR5 RAM', 'Titanium Cooling Block'],
    specs: {
      cpu: 'Intel Core i9-14900HX',
      gpu: 'NVIDIA RTX 4090 (175W)',
      ram: '64GB DDR5 5600MHz',
      storage: '2TB NVMe Gen5 SSD',
      display: '15.6" 4K OLED HDR'
    },
    status: 'In Stock'
  },
  {
    id: 'l2',
    name: 'Ghost Air S13',
    brand: 'CoreTech',
    category: 'Laptop',
    price: 135000,
    rating: 4.7,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1517336714467-d13a863b177d?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-thin, ultra-powerful. Designed for the nomadic executive who refuses to compromise on speed.',
    features: ['Magnesium Alloy Body', '18h Battery Life', 'Passive Cooling Tech', 'FaceID Biometrics'],
    specs: {
      cpu: 'Core M3 Pro Silicon',
      ram: '16GB LPDDR5x',
      storage: '512GB SSD',
      display: '13.3" Retina Display'
    },
    status: 'In Stock'
  },
  {
    id: 'l3',
    name: 'Apex Striker G17',
    brand: 'CoreTech',
    category: 'Laptop',
    price: 215000,
    rating: 4.8,
    reviewCount: 210,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    description: 'The definitive gaming laptop. Thermal dynamics optimized for sustained peak performance.',
    features: ['Mechanical Keyboard', 'Liquid Metal Thermal', 'Per-key RGB', '99.9Wh Battery'],
    specs: {
      cpu: 'Ryzen 9 7945HX3D',
      gpu: 'RTX 4080 Laptop',
      ram: '32GB DDR5',
      display: '17.3" QHD 360Hz'
    },
    status: 'In Stock'
  },
  {
    id: 'l4',
    name: 'Vanguard Rugged T14',
    brand: 'CoreTech',
    category: 'Laptop',
    price: 165000,
    rating: 4.5,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    description: 'MIL-SPEC certified for extreme conditions. Water-resistant keyboard and impact-proof shell.',
    features: ['Spill Proof', 'Drop Resistant', 'Outdoor-Viewable Screen', 'Hot-Swap Battery'],
    specs: {
      cpu: 'Core i5 vPro',
      ram: '16GB',
      storage: '512GB SSD'
    },
    status: 'Out of Stock'
  },
  {
    id: 'l5',
    name: 'Stealth Blade X',
    brand: 'CoreTech',
    category: 'Laptop',
    price: 185000,
    rating: 4.7,
    reviewCount: 144,
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800',
    description: 'The blackest laptop ever made. Vantablack finish with top-tier internal components.',
    features: ['Vantablack Coating', 'OLED Display', 'Mechanical Keypad', 'Vapor Chamber'],
    specs: {
      cpu: 'Core i7-14700K',
      gpu: 'RTX 4070 Super',
      ram: '32GB',
      display: '16" 2.5K OLED'
    },
    status: 'In Stock'
  }
];
