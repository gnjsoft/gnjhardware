import { Product } from '../products';

export const WORKSTATIONS: Product[] = [
  {
    id: 'w1',
    name: 'Render Node R8',
    brand: 'CoreTech',
    category: 'Workstation',
    price: 450000,
    rating: 5.0,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800',
    description: 'High-density render node. Rackmount ready with insane multiprocessing capabilities.',
    features: ['Dual Platinum CPUs', 'Liquid Cooling', 'Rackmount Chassis', 'Redundant PSU'],
    specs: {
      cpu: '2x Xeon Platinum 8480+',
      ram: '256GB DDR5',
      storage: '4TB Enterprise SSD'
    },
    status: 'In Stock'
  },
  {
    id: 'w2',
    name: 'AI Training Station X',
    brand: 'CoreTech',
    category: 'Workstation',
    price: 890000,
    rating: 4.9,
    reviewCount: 8,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    description: 'Specialized hardware for large language model training and deep learning research.',
    features: ['4x NVIDIA H100 NVLink', '512GB ECC RAM', 'Direct-to-Chip Liquid Cooling'],
    specs: {
      cpu: 'Dual AMD EPYC 9654',
      gpu: '4x NVIDIA H100 80GB',
      ram: '512GB DDR5 ECC',
      storage: '15.36TB NVMe Gen5'
    },
    status: 'In Stock'
  }
];
