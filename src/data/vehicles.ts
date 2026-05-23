import { VehicleItem } from '../types';

export const VEHICLE_FLEET: VehicleItem[] = [
  {
    id: 'veh-mini-tractor',
    name: 'Compact Rural Delivery Dumper (Tractor / Ape)',
    capacity: '0.5 Unit',
    description: 'Perfect for accessing extremely tight residential construction spaces, narrow streets, and small village layouts.',
    useCases: [
      'Small home kitchen extension work',
      'Plastering top-ups and immediate urgent brick batches',
      'Narrow alleyway deliveries where heavy trucks cannot turn'
    ],
    deliveryAvailability: 'Immediate Delivery',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'veh-pickup',
    name: 'Tata Ace Super-Tipper / Bolero Pickup',
    capacity: '1.0 Unit',
    description: 'A versatile mid-light commercial tipper that strikes a perfect balance between capacity and agility in municipal sectors.',
    useCases: [
      'Medium residential concrete castings',
      'Small landscape soil distribution',
      'Delivering P-sand for minor room plastering modifications'
    ],
    deliveryAvailability: 'Available',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'veh-mid-tipper',
    name: 'Mid-Sized 6-Wheeler Tipper Cargo Truck',
    capacity: '2.0 Unit',
    description: 'The standard choice for Erode\'s residential contractors. High payload stability & efficient unloading.',
    useCases: [
      'Standard 2-bedroom house concrete slab casting',
      'Regular basement brick delivery cycles',
      'Moderate 20mm blue metal requirements'
    ],
    deliveryAvailability: 'Available',
    image: 'https://images.unsplash.com/photo-1516576880313-92b0ac3cc31c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'veh-heavy-tipper',
    name: 'Standard Tipper Truck (Commercial Grade)',
    capacity: '4.0 Unit',
    description: 'Heavy duty professional 6-wheeler tipper optimized for robust load management and long-distance deliveries around Erode district.',
    useCases: [
      'Multi-story commercial framing phases',
      'Bulk foundation soil basement packing',
      'Large complex roadway aggregate distribution'
    ],
    deliveryAvailability: 'High Demand',
    image: '/vehicles/truck1.webp'
  },
  {
    id: 'veh-ultra-truck',
    name: 'Heavy Duty 10-Wheeler Tipper / Multi-Axle Dumper',
    capacity: '7.0 Unit',
    description: 'Our maximum capacity behemoth, designed for rapid industrial materials haulage, massive site prep projects and government sub-bases.',
    useCases: [
      'Mega-scale warehouse floor prep filling',
      'Highways, bridges, and bypass roadbed aggregate transport',
      'Industrial structural layouts and major site grading supply'
    ],
    deliveryAvailability: 'Available',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
  }
];
