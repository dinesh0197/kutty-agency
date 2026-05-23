import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, Clock, MapPin, ArrowRight, Sparkles, HelpCircle, FileText } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { CONTACT_DETAILS } from '../data/contact';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  // Calculator estimating states
  const [selectedMaterial, setSelectedMaterial] = useState('Premium M-Sand (Concrete)');
  const [unitSize, setUnitSize] = useState(3.0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Measure scroll progress for interactive parallax effects
  const { scrollY } = useScroll();
  const yBg1 = useTransform(scrollY, [0, 800], [0, -120]);
  const yBg2 = useTransform(scrollY, [0, 800], [0, 90]);
  const yCard = useTransform(scrollY, [0, 800], [0, -45]);
  const yParticle1 = useTransform(scrollY, [0, 800], [0, -85]);
  const yParticle2 = useTransform(scrollY, [0, 800], [0, 50]);

  // Spring smoothing configurations for responsive physical fluidity
  const smoothYBg1 = useSpring(yBg1, { stiffness: 90, damping: 25 });
  const smoothYBg2 = useSpring(yBg2, { stiffness: 90, damping: 25 });
  const smoothYCard = useSpring(yCard, { stiffness: 90, damping: 25 });
  const smoothYParticle1 = useSpring(yParticle1, { stiffness: 80, damping: 22 });
  const smoothYParticle2 = useSpring(yParticle2, { stiffness: 80, damping: 22 });

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stats = [
    { label: 'Successful Deliveries', val: '500+', desc: 'Across Erode region' },
    { label: 'Happy Customers', val: '100+', desc: 'Contractors & builders' },
    { label: 'Fleet Capacities', val: '0.5 - 7 Unit', desc: 'Own customized tippers' },
    { label: 'Fast Setup Support', val: '24 Hours', desc: 'Direct order dispatch' },
  ];

  const trustBadges = [
    { icon: Clock, title: 'On-Time Delivery', text: 'Strictest compliance schedule', color: 'text-sky-600 bg-sky-50' },
    { icon: ShieldCheck, title: '100% Reliable Service', text: 'Correct quantity & high quality', color: 'text-emerald-600 bg-emerald-50' },
    { icon: Truck, title: 'Own Transportation Fleet', text: 'No external agent dependencies', color: 'text-sky-600 bg-sky-50' },
    { icon: MapPin, title: 'Serving Erode Region', text: 'Immediate local coverage', color: 'text-emerald-600 bg-emerald-50' },
  ];

  const materialsList = [
    'Premium M-Sand (Concrete)',
    'Super Plastering P-Sand',
    'Grade-A River Sand (R-Sand)',
    '20mm Jelly Stones (Cast)',
    'High-Strength Red Bricks',
    'Coarse Basement Filling Soil'
  ];

  const scrollHandler = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId;
  };

  const calculatedWeight = (unitSize * 1.5).toFixed(1);

  const getWhatsAppLink = () => {
    const text = `Hello Shri Kutty Agencies! I used your web estimator and would like a price quote for:\n- Material: ${selectedMaterial}\n- Load Volume: ${unitSize} Units (Approx. ${calculatedWeight} Tons)\n- Delivery Area: Erode. Please share active tariff rate.`;
    return `https://wa.me/${CONTACT_DETAILS.phonePrimary.raw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="hero-section" className="relative bg-white pt-10 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Premium Decorative Orb Mesh Backgrounds to implement Standard Skyblue, Green & White theme with Parallax */}
      <motion.div 
        style={{ y: smoothYBg1 }}
        className="absolute top-0 right-0 w-[450px] h-[450px] bg-sky-100 rounded-full blur-3xl opacity-35 -mr-40 pointer-events-none"
      />
      <motion.div 
        style={{ y: smoothYBg2 }}
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl opacity-40 -ml-40 pointer-events-none"
      />

      {/* Grid Pattern overlay for extreme structural elegance */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Engaging Copy + Badges */}
          <div className="lg:col-span-7">
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-100 text-sky-700 py-1.5 px-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-500 animate-spin" />
              <span>Direct Supplier • No Middleman Margins • Erode Region</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-900 text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-black tracking-tight leading-none"
            >
              Premium Construction <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-600">
                Materials & Logistics
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              Get washed M-Sand, smooth Plastering Sand, Blue Metal Jelly aggregates, chamber clay bricks and basement grading soil delivered to your site with our own custom dumper fleets.
            </motion.p>

            {/* Modern Action buttons with High Contrast colors */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollHandler('materials')}
                className="flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-sky-600/15 hover:shadow-sky-600/25 transition-all cursor-pointer group"
              >
                <span>Explore Materials Catalog</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollHandler('contact')}
                className="flex items-center justify-center space-x-3 bg-white hover:bg-slate-50 border-2 border-emerald-500 text-emerald-700 font-bold text-base px-8 py-4 rounded-xl shadow-sm transition-all cursor-pointer"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span>Get Immediate Quote</span>
              </button>
            </motion.div>

            {/* Premium Trust Badges Grid - White glass themed cards with beautiful hover elevations */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => {
                const IconComp = badge.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}
                    className="flex space-x-4 bg-white p-4 rounded-xl border border-slate-100 shadow-xs transition-shadow"
                  >
                    <div className={`p-3 h-fit rounded-xl shrink-0 ${badge.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 text-sm font-bold tracking-tight">{badge.title}</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-snug">{badge.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Material & Load Estimator (Elegant Touch UI Effect) */}
          <div className="lg:col-span-5 relative">
            {/* Small floating decorative visual particle representing Blue Metal Jelly stone */}
            <motion.div
              style={{ y: isDesktop ? smoothYParticle1 : 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -left-8 w-14 h-14 bg-linear-to-br from-sky-400/20 to-sky-600/15 rounded-2xl opacity-40 blur-[1px] hidden xl:block pointer-events-none border border-sky-300/20 shadow-inner"
            />
            {/* Small floating decorative particle representing fine Clay accent */}
            <motion.div
              style={{ y: isDesktop ? smoothYParticle2 : 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-12 -right-12 w-16 h-16 bg-linear-to-br from-emerald-400/20 to-emerald-600/15 rounded-full opacity-40 blur-[1px] hidden xl:block pointer-events-none border border-emerald-300/20"
            />

            <motion.div
              style={{ y: isDesktop ? smoothYCard : 0 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl border-2 border-sky-100 p-6 sm:p-8 shadow-xl relative"
            >
              {/* Card Ribbon */}
              <div className="absolute -top-3.5 right-6 bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>Calculates Live Volume</span>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-900">Delivery Estimator</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Pick product & size for direct Erode quote</p>
                </div>
              </div>

              {/* Step 1: Select Material */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    1. Select Raw Material
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {materialsList.map((mat) => {
                      const isSelected = selectedMaterial === mat;
                      return (
                        <button
                          key={mat}
                          type="button"
                          onClick={() => setSelectedMaterial(mat)}
                          className={`text-left px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                            isSelected
                              ? 'bg-sky-50 border-sky-500 text-sky-800 ring-2 ring-sky-100'
                              : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {mat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Slider for Unit Size */}
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      2. Volume load size
                    </label>
                    <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">
                      {unitSize.toFixed(1)} Unit Dumper
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="7.0"
                    step="0.5"
                    value={unitSize}
                    onChange={(e) => setUnitSize(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-ew-resize accent-sky-600 focus:outline-hidden"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1 px-1">
                    <span>0.5 Unit (Tractor)</span>
                    <span>3.0 Unit (Medium Tipper)</span>
                    <span>7.0 Unit (Super Dumper)</span>
                  </div>
                </div>

                {/* Output visual parameters */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mt-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="border-r border-slate-200">
                      <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">Estimated Mass</span>
                      <span className="text-xl font-display font-black text-slate-800">~{calculatedWeight} Tons</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">Vehicle Type</span>
                      <span className="text-xl font-display font-black text-slate-800">
                        {unitSize <= 1.0 ? 'Mini Tractor' : unitSize <= 3.5 ? 'Medium Tipper' : 'Heavy Dumper'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Alert advice info */}
                  <div className="mt-3 flex items-start space-x-2 text-[11px] text-slate-500 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 animate-ping"></div>
                    <span>No sub-broker commission. Price quoted directly from our nearest partner crushing spot in Erode region!</span>
                  </div>
                </div>

                {/* Instant Call Action */}
                <div className="pt-2 flex gap-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grow flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12.012 3c-4.96.002-9 4.045-9 9 0 1.58.413 3.118 1.2 4.475l-1.212 4.425 4.542-1.192c1.31.72 2.784 1.1 4.3 1.1h.007c4.96 0 9-4.045 9-9s-4.042-9-9.006-9zm4.707 12.875c-.24.675-1.18 1.23-1.63 1.29-.44.05-1.02.13-2.924-.65-2.422-1-3.959-3.475-4.08-3.64-.117-.156-1.006-1.34-1.006-2.56 0-1.22.637-1.82.863-2.064.225-.24.498-.31.666-.31.17 0 .34 0 .49.01.157.01.37-.06.58.45.216.52.74 1.8.804 1.93.064.13.107.28.02.45-.084.17-.127.28-.256.43-.128.15-.27.33-.385.45-.128.12-.26.26-.11.52.15.26.666 1.1 1.43 1.78.98.87 1.8 1.14 2.062 1.27.26.13.41.11.56-.06.15-.17.64-.75.815-1 .177-.26.354-.215.597-.13.243.09 1.54.73 1.8 1 .26.13.26.24.2.51l-.01.01z" />
                    </svg>
                    <span>Instant Price via WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Dynamic visual tag below card */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center w-full pointer-events-none">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest bg-white border border-slate-100 px-3 py-1 rounded-full shadow-xs">
                ⚡ Safe weight & measure guaranteed
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Elegant Standard stats row in pristine White with Sky Blue/Green accents */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="text-center md:text-left"
              >
                <div className={`text-4xl sm:text-5xl font-display font-extrabold ${i % 2 === 0 ? 'text-sky-600' : 'text-emerald-600'}`}>
                  {stat.val}
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
