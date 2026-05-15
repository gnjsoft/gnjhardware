import { Product } from '../products';

export const PRINTING: Product[] = [
  {
    id: 'p1',
    name: 'LaserJet Titan Pro',
    brand: 'CoreTech',
    category: 'Printing',
    price: 45000,
    rating: 4.8,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800',
    description: 'High-speed industrial printing solution with extreme precision.',
    features: ['60 PPM', 'Wireless Cloud Print', 'High Yield Toner', 'Duplex Scanning'],
    specs: {
      refresh: '60 PPM',
    },
    status: 'In Stock'
  }
];
