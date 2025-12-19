export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  discount?: number;
  colors?: string[];
  category?: string;
  subCategory?: string;
}

export interface Category {
  id: number;
  name: string;
  icon: any; // Using any for Lucide icon component type flexibility
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}