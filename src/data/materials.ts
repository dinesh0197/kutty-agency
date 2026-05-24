import { MaterialItem } from '../types';

/**
 * Sample JSON Product Dataset (JSON String representation for future API backend ingestion or file exports)
 */
export const SAMPLE_MATERIALS_JSON = JSON.stringify([
  // SAND CATEGORY
  {
    "id": "mat-river-sand",
    "name": "Grade-A River Sand (R-Sand)",
    "category": "Sand",
    "description": "Naturally obtained river sand filtered for high silica content, ideal for plastering and general masonry construction.",
    "availability": "Limited Stock",
    "image": "/materials/river_sand.webp"
  },
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
    "id": "mat-soil-red",
    "name": "Premium Red Soil (Gardening)",
    "category": "Sand",
    "description": "Premium iron-rich fine red ground soil, optimal for landscaping, rooftop/backyard gardens, and farm leveling around Erode.",
    "availability": "Pre-Order",
    "image": "/materials/organic_red_soil.webp"
  },
  {
    "id": "mat-soil-basement",
    "name": "High-Density Basement Filling Soil",
    "category": "Sand",
    "description": "High-density structural filling soil, perfect for packing and compacting inside newly cast concrete building basements.",
    "availability": "In Stock",
    "image": "/materials/basement_filling_soil.webp"
  },

  // AGGREGATES CATEGORY
  {
    "id": "mat-6mm-jelly",
    "name": "6mm Aggregates (Blue Metal)",
    "category": "Aggregates",
    "description": "Premium 6mm crushed construction aggregate, ideal for architectural tiles, hollow block production, and asphalt surface coats.",
    "availability": "In Stock",
    "image": "/materials/6mm_jelly.webp"
  },
  {
    "id": "mat-20mm-jelly",
    "name": "20mm Aggregates (Structural Casting)",
    "category": "Aggregates",
    "description": "High-durability 20mm aggregates, the standard size heavily recommended for all RCC roofs, beams, slabs, and columns.",
    "availability": "Fast Delivery",
    "image": "/materials/20mm_jelly.webp"
  },
  {
    "id": "mat-40mm-jelly",
    "name": "40mm Aggregates (Sub-base)",
    "category": "Aggregates",
    "description": "Robust 40mm aggregates, perfect for heavy railway ballast, road base layering, and solid foundation underlayment.",
    "availability": "In Stock",
    "image": "/materials/40mm_jelly.webp"
  },
  {
    "id": "mat-crusher-stones",
    "name": "Heavy Crusher Stones (RR Stone)",
    "category": "Aggregates",
    "description": "Large irregular crusher stones suitable for building secure retaining walls, strong stone foundations, and land barriers.",
    "availability": "In Stock",
    "image": "/materials/rubble_crusher_stone.webp"
  },

  // BRICKS CATEGORY
  {
    "id": "mat-red-clay-bricks",
    "name": "High-Strength Chamber Red Bricks",
    "category": "Bricks",
    "description": "Locally baked structural red clay bricks with premium compressive strength, optimal thermal insulation, and minimal water absorbency.",
    "availability": "Fast Delivery",
    "image": "/materials/redbrick.webp"
  },
  {
    "id": "mat-bricks-flyash",
    "name": "Flyash Bricks (Flash Bricks)",
    "category": "Bricks",
    "description": "Eco-friendly, lightweight flyash / flash bricks with uniform shape and excellent thermal insulation.",
    "availability": "In Stock",
    "image": "/materials/flyash brick.webp"
  },
  {
    "id": "mat-bricks-solid",
    "name": "Premium Solid Concrete Bricks",
    "category": "Bricks",
    "description": "High-grade solid concrete blocks offering superior strength, load bearing, and stability for foundational masonry.",
    "availability": "In Stock",
    "image": "/materials/solid bricks 4 & 6.webp"
  },
  {
    "id": "mat-bricks-hollow",
    "name": "Premium Hollow Concrete Bricks",
    "category": "Bricks",
    "description": "Lightweight and thermal-efficient hollow concrete blocks designed for faster and cost-effective wall construction.",
    "availability": "In Stock",
    "image": "/materials/Soild & Hollow bricks.webp"
  },

  // CEMENT CATEGORY
  {
    "id": "mat-cement-ramco",
    "name": "Ramco Cement",
    "category": "Cement",
    "description": "Premium blended cement offering superior strength and durability for all construction needs.",
    "availability": "In Stock",
    "image": "/materials/Ramco cement.webp"
  },
  {
    "id": "mat-cement-ultratech",
    "name": "Ultratech Cement",
    "category": "Cement",
    "description": "High-quality engineered cement that provides excellent workability and long-term structural integrity.",
    "availability": "In Stock",
    "image": "/materials/ultratech cement.webp"
  },
  {
    "id": "mat-cement-chettinad",
    "name": "Chettainad Cement",
    "category": "Cement",
    "description": "High-durability sulphate-resistant cement ideal for concrete, screeds, plastering, and general building masonry.",
    "availability": "In Stock",
    "image": "/materials/Jsw cement.webp"
  },
  {
    "id": "mat-cement-dalmia",
    "name": "Dalmia Cement",
    "category": "Cement",
    "description": "Trusted cement brand known for quick setting time and exceptional compressive strength.",
    "availability": "In Stock",
    "image": "/materials/dalmia cement.webp"
  },
  {
    "id": "mat-cement-priya",
    "name": "Priya Cement",
    "category": "Cement",
    "description": "Reliable cement solution for general-purpose construction, plastering, and masonry work.",
    "availability": "In Stock",
    "image": "/materials/priya cement.webp"
  },

  // WALL PUTTY CATEGORY
  {
    "id": "mat-putty-ramco",
    "name": "Ramco Putty",
    "category": "Wall Putty",
    "description": "Premium water-resistant white cement-based wall putty providing unmatched bonding, coverage, and extra-smooth finishes.",
    "availability": "In Stock",
    "image": "/materials/tile paste & wall patty paste.webp"
  },
  {
    "id": "mat-putty-birla",
    "name": "Birla Putty",
    "category": "Wall Putty",
    "description": "Birla White WallCare Putty prevents flaking, protects your expensive paint from dampness, and provides high gloss.",
    "availability": "In Stock",
    "image": "/materials/tile paste & wall patty paste.webp"
  },
  {
    "id": "mat-putty-asian",
    "name": "Asian Putty",
    "category": "Wall Putty",
    "description": "Premium acrylic wall putty by Asian Paints for interior/exterior concrete walls with excellent durability & superior whiteness.",
    "availability": "In Stock",
    "image": "/materials/tile paste & wall patty paste.webp"
  }
], null, 2);

export const INITIAL_MATERIALS: MaterialItem[] = JSON.parse(SAMPLE_MATERIALS_JSON);
