import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, ShieldCheck, HelpCircle, Code, Eye, RefreshCw, Layers } from 'lucide-react';
import { INITIAL_MATERIALS, SAMPLE_MATERIALS_JSON } from '../data/materials';
import { MaterialItem, MaterialCategory } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_DETAILS } from '../data/contact';

interface MaterialsProps {
  onContactClick: (productName: string) => void;
}

export default function Materials({ onContactClick }: MaterialsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'availability'>('name-asc');
  const [showApiDoc, setShowApiDoc] = useState(false);

  // Categories list
  const categories: string[] = ['All', 'Cement', 'Sand', 'Jelly Stones', 'Bricks', 'Soil Filling', 'Aggregates'];

  // Filter & Sort Logic
  const filteredAndSortedMaterials = useMemo(() => {
    let result = [...INITIAL_MATERIALS];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // Filter by search query text
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        item => 
          item.name.toLowerCase().includes(q) || 
          item.description.toLowerCase().includes(q) || 
          item.category.toLowerCase().includes(q)
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      } else if (sortBy === 'availability') {
        return a.availability.localeCompare(b.availability);
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  // Handle WhatsApp Link Generator
  const getWhatsAppLink = (productName: string) => {
    const text = encodeURIComponent(`Hello Kutty Agency, I need details about "${productName}" including current delivery price to Erode area.`);
    return `https://wa.me/${CONTACT_DETAILS.phonePrimary.raw}?text=${text}`;
  };

  return (
    <section id="materials-section" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page title and description wrapper */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sky-600 font-mono text-xs font-bold tracking-widest uppercase block mb-2">
            Highest Quality Selection
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Our Premium Construction Materials
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Supplying Erode and nearby agricultural and municipal districts with graded sands, strong chamber bricks, foundation soils, and aggregates of verified heavy volume weight.
          </p>

          {/* Quick toggle for developer / admin backend mock data info */}
          {/*
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setShowApiDoc(!showApiDoc)}
              className="inline-flex items-center space-x-2 text-xs bg-white hover:bg-sky-50 border border-slate-200 text-slate-600 hover:text-sky-600 px-3.5 py-1.5 rounded-full shadow-xs cursor-pointer transition-colors"
            >
              <Code className="w-3.5 h-3.5 text-sky-500" />
              <span>{showApiDoc ? 'Hide Developer API Schema' : 'Show Admin & API Structure'}</span>
            </button>
          </div>
          */}
        </div>

        {/* Admin/Developer Documentation Panel */}
        <AnimatePresence>
          {showApiDoc && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-slate-900 border border-slate-800 text-slate-300 p-6 rounded-2xl mb-12 shadow-md max-w-4xl mx-auto text-left"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="p-1 px-2.5 rounded bg-sky-950 text-sky-400 font-mono text-[10px] font-bold">API STAGE 1 READY</span>
                  <h3 className="text-white font-display text-sm font-bold">Kutty Agency - Headless CMS & Admin Dataset Specs</h3>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-500">
                  <span>Format: <code>application/json</code></span>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                This app is ready to link with any Node/Express or headless dashboard. Below is the type-safe static schema format used in the frontend. Admin panel forms will POST directly to <code>/api/materials</code> to update this database in real-time.
              </p>

              {/* API Endpoints Outline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
                <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800/40">
                  <div className="font-bold text-emerald-400 block mb-1">GET /api/materials</div>
                  <div className="text-[11px] text-slate-400">Fetch active product inventory with live Erode yard stock markers.</div>
                </div>
                <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800/40">
                  <div className="font-bold text-sky-400 block mb-1">POST /api/materials/add</div>
                  <div className="text-[11px] text-slate-400">Admin auth endpoint to append new custom quarry stone layers or soil grades.</div>
                </div>
              </div>

              {/* JSON code block container */}
              <div className="relative">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono font-bold mb-1.5 flex items-center justify-between">
                  <span>SAMPLE JSON DATASET EXPORT:</span>
                  <span className="text-[9px] text-blue-500 lowercase bg-blue-950/40 px-1.5 py-0.5 rounded">schema matched</span>
                </div>
                <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-[11px] font-mono text-blue-300 max-h-56">
                  {SAMPLE_MATERIALS_JSON}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Controls Bar: Search, Category, Sorting */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-xs mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            
            {/* Search Input bar */}
            <div className="lg:col-span-5 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sand, bricks, aggregates, jelly sizes..."
                className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white text-slate-800 placeholder-slate-400 pl-11 pr-4 py-3 rounded-xl text-sm outline-hidden font-medium transition-all"
              />
            </div>

            {/* Category Select Filters for Mobile */}
            <div className="flex lg:hidden items-center space-x-2 font-semibold text-xs text-slate-500">
              <Layers className="w-4 h-4 text-sky-500" />
              <span>Category Filter:</span>
            </div>
            
            {/* Sorting controls dropdown */}
            <div className="lg:col-span-3 flex items-center space-x-2">
              <ArrowUpDown className="w-4.5 h-4.5 text-slate-400 shrink-0" />
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white text-slate-700 py-3 px-3.5 rounded-xl text-sm outline-hidden font-semibold transition"
              >
                <option value="name-asc">Sort A to Z (Alphabetical)</option>
                <option value="name-desc">Sort Z to A (Alphabetical)</option>
                <option value="availability">Sort by Stock Status</option>
              </select>
            </div>

            {/* Quick Helper Banner */}
            <div className="lg:col-span-4 bg-sky-50 p-3 rounded-xl border border-sky-100 hidden sm:flex items-center space-x-2 text-xs text-sky-700">
              <ShieldCheck className="w-4.5 h-4.5 text-sky-600 shrink-0" />
              <span>No middleman charge. Select items to ping our Erode dispatch desks directly on WhatsApp!</span>
            </div>
          </div>

          {/* Desktop Categories Scroll List */}
          <div className="mt-5 border-t border-slate-100 pt-4 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-100'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-sky-900'
                  }`}
                >
                  {cat === 'All' ? '🗂️ View All' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Listing Grid */}
        <AnimatePresence mode="popLayout">
          {filteredAndSortedMaterials.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredAndSortedMaterials.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden hover:shadow-lg hover:border-sky-100 transition-all flex flex-col group justify-between"
                >
                  <div>
                    {/* Visual Placeholder Block with standard Unsplash image */}
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      
                      {/* Category Label Overlay */}
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-sky-700 border border-slate-100 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {item.category}
                      </span>

                      {/* Stock availability badge */}
                      <span className={`absolute bottom-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm ${
                        item.availability === 'In Stock' ? 'bg-emerald-500 text-white' :
                        item.availability === 'Fast Delivery' ? 'bg-sky-500 text-white' :
                        item.availability === 'Pre-Order' ? 'bg-amber-500 text-slate-900' :
                        'bg-red-500 text-white'
                      }`}>
                        {item.availability}
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="p-5">
                      <h3 className="font-display font-bold text-slate-900 text-base group-hover:text-sky-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-slate-500 text-xs mt-2 leading-relaxed min-h-[48px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Buttons and actions */}
                  <div className="p-5 pt-0 border-t border-slate-50 mt-4 space-y-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
                      <span>PRICE:</span>
                      <span className="text-sky-600 font-display font-extrabold normal-case text-sm">Ask for Price</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {/* Price call info action button */}
                      <button
                        onClick={() => onContactClick(item.name)}
                        className="w-full text-center bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 text-xs font-bold py-2.5 px-2 rounded-lg transition-colors cursor-pointer"
                      >
                        Contact
                      </button>

                      {/* WhatsApp direct details code */}
                      <a
                        href={getWhatsAppLink(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-2 rounded-lg transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M12.012 3c-4.96.002-9 4.045-9 9 0 1.58.413 3.118 1.2 4.475l-1.212 4.425 4.542-1.192c1.31.72 2.784 1.1 4.3 1.1h.007c4.96 0 9-4.045 9-9s-4.042-9-9.006-9zm4.707 12.875c-.24.675-1.18 1.23-1.63 1.29-.44.05-1.02.13-2.924-.65-2.422-1-3.959-3.475-4.08-3.64-.117-.156-1.006-1.34-1.006-2.56 0-1.22.637-1.82.863-2.064.225-.24.498-.31.666-.31.17 0 .34 0 .49.01.157.01.37-.06.58.45.216.52.74 1.8.804 1.93.064.13.107.28.02.45-.084.17-.127.28-.256.43-.128.15-.27.33-.385.45-.128.12-.26.26-.11.52.15.26.666 1.1 1.43 1.78.98.87 1.8 1.14 2.062 1.27.26.13.41.11.56-.06.15-.17.64-.75.815-1 .177-.26.354-.215.597-.13.243.09 1.54.73 1.8 1 .26.13.26.24.2.51l-.01.01z" />
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center max-w-lg mx-auto">
              <HelpCircle className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="font-display font-bold text-slate-800 text-lg mt-4">No materials found</h3>
              <p className="text-slate-500 text-xs mt-2">
                We couldn't find any materials matching "{searchQuery}". Try updating your spelling or pick a different category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-5 inline-flex items-center space-x-1.5 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </AnimatePresence>

        {/* Guarantee Banner */}
        <div className="mt-16 bg-blue-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-blue-950/20">
          <div className="absolute inset-x-0 bottom-0 opacity-10">
            {/* Visual background lines */}
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-24">
              <path d="M0,50 Q25,80 50,50 T100,50 L100,100 L0,100 Z" />
            </svg>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 bg-blue-800/60 border border-blue-700 text-blue-200 py-1.5 px-3 rounded-full text-[10px] font-mono font-bold uppercase mb-4">
                Serving Erode and surrounds
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                Not sure about quantity calculation rules?
              </h3>
              <p className="text-slate-200 text-sm mt-2 max-w-2xl leading-relaxed">
                Tell us your building base sqft (foundation volume, wall height, or concrete roof thickness), and our civil supervisors will estimate the exact units of M-Sand, Jelly, and Bricks required.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={`https://wa.me/${CONTACT_DETAILS.phonePrimary.raw}?text=Hello%20Kutty%20Agency%2C%20I%20need%20help%20calculating%20how%20much%20materials%20I%20need%20to%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 3c-4.96.002-9 4.045-9 9 0 1.58.413 3.118 1.2 4.475l-1.212 4.425 4.542-1.192c1.31.72 2.784 1.1 4.3 1.1h.007c4.96 0 9-4.045 9-9s-4.042-9-9.006-9zm4.707 12.875c-.24.675-1.18 1.23-1.63 1.29-.44.05-1.02.13-2.924-.65-2.422-1-3.959-3.475-4.08-3.64-.117-.156-1.006-1.34-1.006-2.56 0-1.22.637-1.82.863-2.064.225-.24.498-.31.666-.31.17 0 .34 0 .49.01.157.01.37-.06.58.45.216.52.74 1.8.804 1.93.064.13.107.28.02.45-.084.17-.127.28-.256.43-.128.15-.27.33-.385.45-.128.12-.26.26-.11.52.15.26.666 1.1 1.43 1.78.98.87 1.8 1.14 2.062 1.27.26.13.41.11.56-.06.15-.17.64-.75.815-1 .177-.26.354-.215.597-.13.243.09 1.54.73 1.8 1 .26.13.26.24.2.51l-.01.01z" />
                </svg>
                <span>Free Quantity Calculation Help</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
