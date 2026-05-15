export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'Laptop' | 'Desktop' | 'Monitor';
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

export interface CartItem extends Product {
  quantity: number;
}
