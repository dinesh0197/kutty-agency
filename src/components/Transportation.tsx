import React from 'react';
import { Truck, ShieldCheck, UserCheck, Compass, CheckCircle2, Star, Calendar, Clock, Sparkles } from 'lucide-react';
import { VEHICLE_FLEET } from '../data/vehicles';
import { motion } from 'motion/react';
import { getWhatsAppUrl } from '../data/contact';

export default function Transportation() {
  const deliveryAssurances = [
    {
      title: 'Timely Delivery Assurance',
      desc: 'Our supreme core promise. If a concrete construction setup is scheduled at 8:00 AM, our fleet departs early to arrive exactly on cue.',
      icon: Clock,
      color: 'text-blue-500 bg-blue-50 border-blue-100',
    },
    {
      title: 'Professional Experienced Drivers',
      desc: 'Every driver has 5+ years of heavy commercial cargo experience over Tamil Nadu highways and narrow residential village paths.',
      icon: UserCheck,
      color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Safe Material Transportation',
      desc: 'We use premium cargo cover sheets to prevent dust pollution, dampness, or spill wear during transport, ensuring 100% raw weight.',
      icon: ShieldCheck,
      color: 'text-blue-500 bg-blue-50 border-blue-100',
    },
    {
      title: 'Local Area Depth Coverage',
      desc: 'Every corner of Gobichettipalayam, Perundurai, Bhavani, and smaller Erode villages is mapped on our radar for instant route selection.',
      icon: Compass,
      color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
    },
  ];

  return (
    <section id="transportation-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-600 font-mono text-xs font-bold tracking-widest uppercase block mb-2">
            Own Transport Network
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Our Dedicated Material Delivery Fleet
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Unlike other brokers who hire raw commercial rental trucks, we own 100% of our cargo tippers. This guarantees you precise loading weight, immediate schedules, and absolute accountability.
          </p>
        </div>

        {/* 100% Correct Time Delivery Assurance Highlighted Area */}
        <div className="bg-gradient-to-r from-sky-700 via-sky-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg mb-16">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-10">
            <Truck className="w-80 h-80" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 bg-sky-500/20 border border-sky-400/30 text-sky-100 py-1.5 px-3 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-sky-200 animate-pulse" />
              <span>Certified Delivery Pledge</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              “100% Correct Time Delivery Assurance”
            </h3>
            <p className="mt-4 text-sky-50 text-sm sm:text-base leading-relaxed">
              We understand that concrete mixers and laborers charge by the hour. Laying a foundation requires sand and jelly on-site exactly when the crews arrive. Shri Kutty Agencies pledges zero delay. If any dispatch fails to depart on schedule, we notify you transparently and absorb the priority freight charges ourselves!
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-sky-500/30 pt-6">
              <div>
                <span className="block text-2xl font-black text-white font-display">Zero</span>
                <span className="text-xs text-sky-100 mt-1 block font-medium">Outsourced rental latency</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-white font-display">GPS Tracked</span>
                <span className="text-xs text-sky-100 mt-1 block font-medium">Real-time driver location</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-white font-display">Direct Call</span>
                <span className="text-xs text-sky-100 mt-1 block font-medium">Direct radio contact with yard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Showcase Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                Fleets for Every Project Scale
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select from our diverse unit volumes matching narrow village streets to heavy industrial foundations.
              </p>
            </div>
          </div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {VEHICLE_FLEET.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.98 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20 } }
                }}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -15px rgba(14,165,233,0.1)' }}
                className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-xs flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Block with nice overlay */}
                  <div className="relative h-52 bg-slate-200 overflow-hidden">
                    <img
                      src="/vehicles/truck1.webp"
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Capacity Badge */}
                    <div className="absolute top-4 left-4 bg-sky-600 text-white font-display text-sm font-extrabold px-3.5 py-1.5 rounded-full shadow-md">
                      {vehicle.capacity}
                    </div>

                    {/* Duty Availability Badge */}
                    <div className={`absolute bottom-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm ${
                      vehicle.deliveryAvailability === 'Immediate Delivery' ? 'bg-emerald-500 text-white' :
                      vehicle.deliveryAvailability === 'Available' ? 'bg-sky-500 text-white' :
                      'bg-amber-500 text-slate-900'
                    }`}>
                      {vehicle.deliveryAvailability}
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="p-6">
                    <h4 className="font-display font-bold text-slate-900 text-base leading-tight">
                      {vehicle.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {vehicle.description}
                    </p>

                    {/* Use Case Pointers */}
                    <div className="mt-5 space-y-2">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Best Suited For:
                      </span>
                      {vehicle.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-start space-x-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="p-6 pt-0 mt-2 border-t border-slate-100/60">
                  <a
                    href={getWhatsAppUrl(`Hello Kutty Agency, I want to book the ${vehicle.capacity} ${vehicle.name} for delivery.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4 flex items-center justify-center space-x-2 bg-white hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all"
                  >
                    <span>Instant Booking & Price Inquiry</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Transportation Core Values Cards Grid */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
              Why Our Transportation Outperforms
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Engineered for absolute raw-weight delivery, safe driving compliance, and flexible site unloading.
            </p>
          </div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {deliveryAssurances.map((val, index) => {
              const IconComp = val.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                  }}
                  whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.05)' }}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center border font-bold ${val.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-slate-900 tracking-tight">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {val.desc}
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
