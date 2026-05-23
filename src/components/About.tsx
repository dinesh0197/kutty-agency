import React from 'react';
import { Shield, Sparkles, Truck, Target, Award, Users, HeartHandshake, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const whyChooseUs = [
    {
      title: 'Premium Quality Materials',
      desc: 'Our sands are washed twice to remove silt content. Jelly stones originate from graded blue granite quarries around Erode.',
      icon: Award,
      badgeColor: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      title: '100% On-Time Delivery',
      desc: 'Through our dedicated drivers and direct radio dispatched routes, material lands at your base precisely when committed.',
      icon: Sparkles,
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      title: 'Our Clean Own Vehicles',
      desc: 'Absolute control over the supply chain. We maintain 0.5 to 7.0 Unit dumper sizes to save you transit surcharges.',
      icon: Truck,
      badgeColor: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      title: 'Affordable Honest Service',
      desc: 'Direct yard pricing. No wholesale brokers or middleman commission tricks. Flat-rate Erode transportation charges.',
      icon: Shield,
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      title: 'Trusted Local Supplier',
      desc: 'Deep roots in the community since 2012. We understand local clay soils, cement grading combinations and foundation requirements.',
      icon: Users,
      badgeColor: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      title: 'Uncompromised Customer Support',
      desc: 'Free quantity checks, immediate phone coordination, flexible delivery re-scheduling for rainy seasonal weeks.',
      icon: HeartHandshake,
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    }
  ];

  return (
    <section id="about-section" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
          >
            <span className="text-sky-600 font-mono text-xs font-bold tracking-widest uppercase block mb-2">
              Our Agency Roots
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              A Trusted Construction Materials Partner in Erode
            </h2>
            <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
              Established in 2012 with a single dumper tractor, <strong>Shri kutty agencies</strong> has grown to become Erode's leading independent construction materials supplier and transport agency. We deal directly with local quarry owners, clay kiln operators and civil organizations.
            </p>
            <p className="text-slate-600 mt-4 text-sm leading-relaxed">
              Serving Perundurai, Gobichettipalayam, Bhavani, and nearby zones, we deliver Crusher Sand, high-compressive masonry Red clay Bricks, structural gravel, and specific basement packing soils. Our primary operating values center around precise volumetric measurement and customer satisfaction.
            </p>

            {/* Quick list of values */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Washed & Clean Aggregates Only',
                'Honest Quantity Volumetric Audits',
                'Pre-Scheduled Night Time Dispatches',
                'Staff Support over Phone/WhatsApp'
              ].map((value, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center space-x-2 text-xs font-semibold text-slate-700"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
            className="relative"
          >
            {/* Visual stacking style */}
            <div className="absolute inset-0 bg-sky-600/10 rounded-3xl translate-x-3 translate-y-3"></div>
            <div className="relative bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              
              {/* Highlight card info */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-sky-600 text-white rounded-2xl">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base">Uncompromising Integrity</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    We NEVER dilute or mix low-grade sand or dirt. Customers are welcome to conduct random sieve tests on any shipment we unload in their compound.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-600 text-white rounded-2xl">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base">Supporting Local Contractors</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    By providing scheduled site support and flexible credit periods for verified recurring contractors, we empower Erode's building community.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-sky-50/50 transition-colors">
              <Target className="w-24 h-24 stroke-1" />
            </div>
            <div className="relative z-10">
              <span className="text-[11px] font-bold text-sky-500 font-mono tracking-wider uppercase block mb-1">
                Looking Ahead
              </span>
              <h3 className="text-xl font-display font-extrabold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed max-w-md">
                To modernize the local material logistics industry in Erode district, introducing automated booking schedules, transparent billing indices, and sustainable green brick products while maintaining our humble client-first ethics.
              </p>
            </div>
          </div>

          {/* Mission card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-sky-50/50 transition-colors">
              <Award className="w-24 h-24 stroke-1" />
            </div>
            <div className="relative z-10">
              <span className="text-[11px] font-bold text-sky-500 font-mono tracking-wider uppercase block mb-1">
                Our Guarantee
              </span>
              <h3 className="text-xl font-display font-extrabold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed max-w-md">
                To supply pure, structurally tested construction sand, bricks, aggregates, and filling material directly on time, protecting builders from supply spikes and middleman price-gouging across Erode region.
              </p>
            </div>
          </div>

        </div>

        {/* "Why Choose Us" Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs text-sky-500 font-semibold tracking-wider block uppercase mb-1">
              Key Advantages
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Why Customers Choose Shri kutty agencies
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Combining 10+ years of operational feedback to deliver an unparalleled local material supply experience.
            </p>
          </div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((card, i) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 25 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                  }}
                  whileHover={{ y: -6, boxShadow: '0 15px 30px -10px rgba(14,165,233,0.1)' }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center border ${card.badgeColor}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                      {card.title}
                    </h4>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
