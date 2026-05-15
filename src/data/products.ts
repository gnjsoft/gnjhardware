import { DESKTOPS } from './categories/desktops';
import { LAPTOPS } from './categories/laptops';
import { WORKSTATIONS } from './categories/workstations';
import { MONITORS } from './categories/monitors';
import { INFRASTRUCTURE } from './categories/infrastructure';
import { PRINTING } from './categories/printing';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'Laptop' | 'Desktop' | 'Monitor' | 'Workstation' | 'Infrastructure' | 'Printing';
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  features: string[];
  specs: {
    cpu?: string;
    gpu?: string;
    ram?: string;
    storage?: string;
    display?: string;
    refresh?: string;
  };
  status: 'In Stock' | 'Out of Stock';
}

export const PRODUCTS: Product[] = [
  ...LAPTOPS,
  ...DESKTOPS,
  ...WORKSTATIONS,
  ...MONITORS,
  ...INFRASTRUCTURE,
  ...PRINTING
];
