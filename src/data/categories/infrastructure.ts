import { Product } from '../products';

export const INFRASTRUCTURE: Product[] = [
  {
    id: 'i1',
    name: 'Quantum Core Server S2',
    brand: 'CoreTech',
    category: 'Infrastructure',
    price: 1250000,
    rating: 5.0,
    reviewCount: 5,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
    description: 'Enterprise-grade rack server for high-availability cloud computing.',
    features: ['Hot-swap Bays', 'ECC Memory', 'Redundant Power', 'Remote Management'],
    specs: {
      cpu: '2x Intel Xeon Gold',
      ram: '512GB ECC',
      storage: '20TB RAW'
    },
    status: 'In Stock'
  }
];
