/**
 * Kutty Agency Website Types
 */

export type MaterialCategory = 'Sand' | 'Aggregates' | 'Bricks' | 'Cement' | 'Wall Putty';

export interface MaterialItem {
  id: string;
  name: string;
  category: MaterialCategory;
  description: string;
  availability: 'In Stock' | 'Fast Delivery' | 'Pre-Order' | 'Limited Stock';
  image: string; // Background visual identifier or icon pattern
}

export interface VehicleItem {
  id: string;
  name: string;
  capacity: '0.5 Unit' | '1.0 Unit' | '2.0 Unit' | '4.0 Unit' | '7.0 Unit';
  useCases: string[];
  description: string;
  deliveryAvailability: 'Available' | 'High Demand' | 'Immediate Delivery';
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  role: 'Contractor' | 'House Owner' | 'Builder' | 'Project Manager';
  rating: number; // 1-5 stars
  text: string;
  avatarUrl?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  materialRequired: string;
  message: string;
}
