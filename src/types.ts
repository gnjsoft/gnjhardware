export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  basePrice: string;
  typicalTurnaround: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface BusinessProblem {
  id: string;
  title: string;
  description: string;
  metric: string;
}

export interface EHSResultSolution {
  id: string;
  title: string;
  description: string;
  highlight: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  avatarUrl: string;
}

export interface DiagnosticIssue {
  id: string;
  name: string;
  baseCost: number;
  symptoms: {
    id: string;
    text: string;
    priceAdjustment: number;
  }[];
}

export interface ServiceRequest {
  fullName: string;
  email: string;
  phone: string;
  deviceType: string;
  serviceCategory: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  symptom: string;
  description: string;
  estimatedCostRange: string;
}
