import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Materials from './components/Materials';
import Transportation from './components/Transportation';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { INITIAL_MATERIALS } from './data/materials';
import { VEHICLE_FLEET } from './data/vehicles';
import { USER_TESTIMONIALS } from './data/testimonials';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, Star, ShieldCheck, Mail, Phone, Calendar, Clock, Sparkles, BadgeCheck, Factory, Route } from 'lucide-react';
import { CONTACT_DETAILS } from './data/contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [inquiredProduct, setInquiredProduct] = useState<string>('');

  // Handle URL hash deep-link on mount and on hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'materials', 'transportation', 'about', 'testimonials', 'contact'];
      if (hash && validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    // Trigger on initial load
    handleHashChange();

    // Attach event listener
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Set selected material name for quick inquiry forms and bounce user to Contact tab
  const handleMaterialInquiry = (productName: string) => {
    setInquiredProduct(productName);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = 'contact';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 antialiased selection:bg-blue-600 selection:text-white">
      {/* Universal Corporate Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Pages Router wrapper */}
      <main className="grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero setCurrentPage={setCurrentPage} />

              {/* Direct Promo Category Teaser Section */}
              <section className="py-20 bg-slate-50/50 border-t border-slate-150 relative">
                <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-sky-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div>
                      <span className="text-sky-600 font-mono text-xs font-bold tracking-widest uppercase block mb-2">
                        Materials Catalog
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                        Popular Construction Aggregates
                      </h2>
                      <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-xl">
                        Clean, quality-inspected bricks, plastering sands, and gravel aggregates delivered directly with digital weight slips.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setCurrentPage('materials');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        window.location.hash = 'materials';
                      }}
                      className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 transition group"
                    >
                      <span>Explore all 13 products</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Top 3 items grid with micro-interactions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {INITIAL_MATERIALS.slice(0, 3).map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(14, 165, 233, 0.04)' }}
                        className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-xs hover:border-sky-200 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative h-48 bg-slate-100 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <span className="absolute top-3 left-3 bg-white/95 text-sky-700 border border-sky-100 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                              {item.category}
                            </span>
                          </div>
                          <div className="p-6">
                            <h4 className="font-display font-extrabold text-slate-800 text-lg leading-snug">{item.name}</h4>
                            <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                        <div className="p-6 pt-0 border-t border-slate-50 mt-2 flex gap-3">
                          <button
                            onClick={() => handleMaterialInquiry(item.name)}
                            className="grow text-center bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 text-xs font-bold py-2.5 rounded-lg transition-colors cursor-pointer"
                          >
                            Ask Price
                          </button>
                          <a
                            href={`https://wa.me/${CONTACT_DETAILS.phonePrimary.raw}?text=Hello%20Kutty%20Agency%2C%20I%20am%20interested%20in%20"${encodeURIComponent(item.name)}"%20for%20my%20site.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grow text-center bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1.5 shadow-sm shadow-emerald-600/10"
                          >
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Own Fleet teaser banner details */}
              <section className="py-20 bg-white relative">
                <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="text-sky-600 font-mono text-xs font-bold tracking-widest uppercase block mb-1">
                        Independent Logistics
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
                        Equipped with Our Own Heavy Tipper Cargo Systems
                      </h3>
                      <p className="text-slate-600 mt-5 text-sm leading-relaxed">
                        To maintain absolute trust, Kutty Agency manages our proprietary fleets. From small 0.5-unit tractors for crowded neighborhood residential alleys, to 7.0-unit dumpers for large commercial developments, we have standard solutions for every Erode budget.
                      </p>
                      
                      <div className="mt-8 space-y-4">
                        <div className="flex items-start space-x-3">
                          <span className="p-1.5 bg-sky-50 text-sky-600 rounded-lg font-bold font-mono text-xs mt-0.5">
                            ✓
                          </span>
                          <div>
                            <strong className="text-slate-950 text-sm">No Third Party Latency</strong>
                            <p className="text-slate-500 text-xs mt-0.5">We eliminate delays from sub-hired rental suppliers.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg font-bold font-mono text-xs mt-0.5">
                            ✓
                          </span>
                          <div>
                            <strong className="text-slate-950 text-sm">Verified Driver Integrity</strong>
                            <p className="text-slate-500 text-xs mt-0.5">Our operators verify weighbridge volume metrics at unloading.</p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setCurrentPage('transportation');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          window.location.hash = 'transportation';
                        }}
                        className="mt-8 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm inline-flex items-center space-x-2 transition-all shadow-md shadow-sky-600/10 cursor-pointer"
                      >
                        <span>View Fleet Capacities</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="relative">
                      {/* Interactive block visual representation */}
                      <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="rounded-3xl overflow-hidden shadow-2xl border border-sky-100 max-h-96"
                      >
                        <img
                          src="/vehicles/multiple_trucks.webp"
                          alt="Fleet commercial cargo tippers loaded with materials"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                      <div className="absolute -bottom-6 -left-6 bg-sky-600 text-white p-6 rounded-2xl hidden sm:block shadow-xl max-w-[240px] border border-sky-500">
                        <span className="block font-mono text-4xl font-extrabold text-white">100%</span>
                        <span className="text-[11px] font-bold uppercase tracking-widest block mt-1.5">Direct Link</span>
                        <span className="text-[10px] text-sky-100 block leading-snug mt-1">Delivery assurance directly on all contracts.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Kutty Construction? Section exactly like screenshot */}
              <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-16">
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                      Why Choose Kutty Construction?
                    </h3>
                  </div>

                  <motion.div 
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
                  >
                    {/* Quality Assured */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
                      }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#fcf9f5] border border-[#f5ece0] flex items-center justify-center text-[#9c7844] shadow-xs mb-5 group-hover:bg-[#f7ece2] transition-colors duration-200">
                        <BadgeCheck className="w-6 h-6 stroke-1.5" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-slate-950 mb-2 tracking-tight">
                        Quality Assured
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                        Every load of M-Sand and Jalley is laboratory tested for graduation and strength.
                      </p>
                    </motion.div>

                    {/* Direct Sourcing */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
                      }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#fcf9f5] border border-[#f5ece0] flex items-center justify-center text-[#9c7844] shadow-xs mb-5 group-hover:bg-[#f7ece2] transition-colors duration-200">
                        <Factory className="w-6 h-6 stroke-1.5" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-slate-950 mb-2 tracking-tight">
                        Direct Sourcing
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                        We control the supply chain from the quarry to your site, ensuring competitive pricing.
                      </p>
                    </motion.div>

                    {/* Strategic Network */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
                      }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#fcf9f5] border border-[#f5ece0] flex items-center justify-center text-[#9c7844] shadow-xs mb-5 group-hover:bg-[#f7ece2] transition-colors duration-200">
                        <Route className="w-6 h-6 stroke-1.5" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-slate-950 mb-2 tracking-tight">
                        Strategic Network
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                        Strategically located hubs to minimize delivery times and transport costs.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </section>

              {/* Testimonials teaser block */}
              <section className="py-20 bg-slate-50/50 border-t border-slate-150">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs text-sky-600 font-bold tracking-widest uppercase block mb-1">
                      Social Validation
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                      Trusted Local Brand Since 2012
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {USER_TESTIMONIALS.slice(0, 3).map((test, index) => (
                      <motion.div
                        key={test.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-2xl border border-sky-100 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-md"
                      >
                        <div className="space-y-3.5">
                          <div className="flex space-x-0.5">
                            {[...Array(test.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                            ))}
                          </div>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                            “{test.text}”
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-full bg-sky-50 text-sky-700 font-bold text-sm flex items-center justify-center font-display shrink-0 border border-sky-100">
                            {test.name.charAt(0)}
                          </div>
                          <div>
                            <h5 className="font-bold text-xs text-slate-900">{test.name}</h5>
                            <span className="text-[10px] text-slate-400 block font-mono">{test.location}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <button
                      onClick={() => {
                        setCurrentPage('testimonials');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        window.location.hash = 'testimonials';
                      }}
                      className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm inline-flex items-center space-x-2 cursor-pointer transition-all shadow-md shadow-sky-600/10"
                    >
                      <span>Read all client stories</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentPage === 'materials' && (
            <motion.div
              key="materials"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Materials onContactClick={handleMaterialInquiry} />
            </motion.div>
          )}

          {currentPage === 'transportation' && (
            <motion.div
              key="transportation"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Transportation />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <About />
            </motion.div>
          )}

          {currentPage === 'testimonials' && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Testimonials />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Contact prefilledMaterial={inquiredProduct} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Action WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Universal Footer Component */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
