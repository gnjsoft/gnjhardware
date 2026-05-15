import { Product } from '../products';

export const DESKTOPS: Product[] = [
  {
    id: 'd1',
    name: 'Titan Obelisk Tower',
    brand: 'CoreTech',
    category: 'Desktop',
    price: 389000,
    rating: 5.0,
    reviewCount: 42,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800',
    description: 'Liquid-cooled monolith. Capable of handling real-time 8K rendering and massive AI model training.',
    features: ['Dual RTX 4080 Setup', 'Custom Loop Water Cooling', '64 Core CPU', '10Gb Networking'],
    specs: {
      cpu: 'AMD Threadripper 7980X',
      gpu: '2x NVIDIA RTX 4080 Super',
      ram: '128GB DDR5 ECC',
      storage: '4TB RAID 0 SSD Array'
    },
    status: 'In Stock'
  },
  {
    id: 'd2',
    name: 'Nano Core Mini',
    brand: 'CoreTech',
    category: 'Desktop',
    price: 85000,
    rating: 4.6,
    reviewCount: 78,
    image: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800',
    description: 'Portable workstation. Fits in your palm, performs like a mid-range tower PC.',
    features: ['Thunderbolt 4 Ports', 'Small Form Factor', 'VESA Mountable', 'Whisper Quiet'],
    specs: {
      cpu: 'Intel Core i7-13700T',
      ram: '32GB DDR4',
      storage: '1TB NVMe'
    },
    status: 'In Stock'
  },
  {
    id: 'd3',
    name: 'Omni All-in-One Pro',
    brand: 'CoreTech',
    category: 'Desktop',
    price: 198000,
    rating: 4.7,
    reviewCount: 54,
    image: 'https://images.unsplash.com/photo-1527443195645-d13a9600a299?auto=format&fit=crop&q=80&w=800',
    description: 'Clean workspace, high performance. Everything you need integrated into a stunning 5K display.',
    features: ['Integrated 5K Camera', 'Studio Quality Mics', 'Glass Finish', 'Wireless Charge Base'],
    specs: {
      cpu: 'Core i9-13900',
      ram: '32GB',
      display: '27" 5K Retinal'
    },
    status: 'In Stock'
  }
];
