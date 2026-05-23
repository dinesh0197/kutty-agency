import { MaterialItem } from '../types';

/**
 * Sample JSON Product Dataset (JSON String representation for future API backend ingestion or file exports)
 */
export const SAMPLE_MATERIALS_JSON = JSON.stringify([
  {
    "id": "mat-m-sand",
    "name": "Premium M-Sand (Concrete)",
    "category": "Sand",
    "description": "Manufactured sand specially crushed and graded for high-strength concrete works and foundation castings.",
    "availability": "In Stock",
    "image": "/materials/m_sand.webp"
  },
  {
    "id": "mat-p-sand",
    "name": "Super Plastering P-Sand",
    "category": "Sand",
    "description": "Fine-grade manufactured plastering sand washed and micro-screened to provide clean, super-smooth brickwork plastering.",
    "availability": "In Stock",
    "image": "/materials/plastering_p_sand.webp"
  },
  {
    "id": "mat-r-sand",
    "name": "Grade-A River Sand (R-Sand)",
    "category": "Sand",
    "description": "Naturally obtained river sand filtered for high silica content, ideal for plastering and general masonry construction.",
    "availability": "Limited Stock",
    "image": "/materials/river_sand.webp"
  },
  {
    "id": "mat-crusher-sand",
    "name": "Screened Crusher Sand",
    "category": "Sand",
    "description": "Affordable crusher dust sand screened for structural floor leveling, sub-base filling, and heavy structural backfills.",
    "availability": "In Stock",
    "image": "https://images.unsplash.com/photo-1531834685032-c34bf0d8b2d1?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "mat-6mm-jelly",
    "name": "6mm Jelly Stones (Blue Metal)",
    "category": "Jelly Stones",
    "description": "Premium 6mm crushed construction aggregate, ideal for architectural tiles, hollow block production, and asphalt surface coats.",
    "availability": "In Stock",
    "image": "/materials/6mm_jelly.webp"
  },
  {
    "id": "mat-20mm-jelly",
    "name": "20mm Jelly Stones (Structural Casting)",
    "category": "Jelly Stones",
    "description": "High-durability 20mm aggregates, the standard size heavily recommended for all RCC roofs, beams, slabs, and columns.",
    "availability": "Fast Delivery",
    "image": "/materials/20mm_jelly.webp"
  },
  {
    "id": "mat-40mm-jelly",
    "name": "40mm Jelly Stones (Sub-base)",
    "category": "Jelly Stones",
    "description": "Robust 40mm aggregates, perfect for heavy railway ballast, road base layering, and solid foundation underlayment.",
    "availability": "In Stock",
    "image": "/materials/40mm_jelly.webp"
  },
  {
    "id": "mat-crusher-stones",
    "name": "Heavy Crusher Stones (Rubble)",
    "category": "Jelly Stones",
    "description": "Large irregular crusher stones suitable for building secure retaining walls, strong stone foundations, and land barriers.",
    "availability": "In Stock",
    "image": "/materials/rubble_crusher_stone.webp"
  },
  {
    "id": "mat-red-clay-bricks",
    "name": "High-Strength chamber Red Bricks",
    "category": "Bricks",
    "description": "Locally baked structural red clay bricks with premium compressive strength, optimal thermal insulation, and minimal water absorbency.",
    "availability": "Fast Delivery",
    "image": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "mat-soil-basement",
    "name": "Coarse Basement Filling Soil",
    "category": "Soil Filling",
    "description": "High-density structural filling soil, perfect for packing and compacting inside newly cast concrete building basements.",
    "availability": "In Stock",
    "image": "/materials/basement_filling_soil.webp"
  },
  {
    "id": "mat-soil-red",
    "name": "Organic Red Horticultural Soil",
    "category": "Soil Filling",
    "description": "Premium iron-rich fine red ground soil, optimal for landscaping, rooftop/backyard gardens, and farm leveling around Erode.",
    "availability": "Pre-Order",
    "image": "/materials/organic_red_soil.webp"
  },
  {
    "id": "mat-soil-grading",
    "name": "Dense Foundation Grading Soil",
    "category": "Soil Filling",
    "description": "Premium gravel-blend heavy grading soil for establishing level compounds and sturdy sub-base foundation profiles.",
    "availability": "In Stock",
    "image": "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "mat-mix-aggregates",
    "name": "Mixed Structural Blue Metal Aggregates",
    "category": "Aggregates",
    "description": "Premium blended grading aggregates for high-efficiency concrete batches, civil infrastructure work, and rural roads packing.",
    "availability": "Fast Delivery",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
  }
], null, 2);

export const INITIAL_MATERIALS: MaterialItem[] = JSON.parse(SAMPLE_MATERIALS_JSON);
