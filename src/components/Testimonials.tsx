import React from 'react';
import { Quote, Star, ThumbsUp } from 'lucide-react';
import { USER_TESTIMONIALS } from '../data/testimonials';
import { motion } from 'motion/react';
import { CONTACT_DETAILS } from '../data/contact';

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head details */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-mono text-xs font-bold tracking-widest uppercase block mb-2">
            Verified Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-900 tracking-tight">
            Loved By Erode's Builders & Homeowners
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Read real feedback from independent contractors, regional civil structural builders, and local families who partnered with Shri Kutty Agencies for materials and tipper transport.
          </p>
        </div>

        {/* Testimonials Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USER_TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md hover:border-blue-100 transition-all relative group"
            >
              {/* Quotation mark overlay */}
              <div className="absolute top-6 right-6 text-slate-200 group-hover:text-blue-200 transition-colors">
                <Quote className="w-8 h-8 rotate-180" />
              </div>

              <div className="space-y-4">
                {/* Stars rating count */}
                <div className="flex items-center space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic min-h-[96px]">
                  “{test.text}”
                </p>
              </div>

              {/* Author profile block */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center space-x-3.5">
                {test.avatarUrl ? (
                  <img
                    src={test.avatarUrl}
                    alt={test.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 shrink-0"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">
                    {test.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-800 leading-tight">
                    {test.name}
                  </h4>
                  <div className="flex items-center space-x-2 mt-0.5">
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded uppercase">
                      {test.role}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium font-mono">
                      {test.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local builder partnership highlights */}
        <div className="mt-16 bg-blue-50/60 p-6 sm:p-8 rounded-2xl border border-blue-100/60 text-center max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-700">
            <div className="p-3 bg-blue-600 text-white rounded-full">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-bold text-brand-900">
                Are you a licensed engineer or construction contractor in Erode?
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Partner with us for monthly supply priority channels, custom credit terms, and direct-line logistics scheduling.
              </p>
            </div>
            <a
              href={`https://wa.me/${CONTACT_DETAILS.phonePrimary.raw}?text=Hello%Shri%20Kutty%20Agencies%2C%20I%20am%20a%20contractor%20in%20Erode%20and%20want%20to%20partner%20with%20you%20for%20monthly%20supply.`}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:ml-auto bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-5 rounded-lg text-xs font-bold transition-all shrink-0"
            >
              Partner Program Registration
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
