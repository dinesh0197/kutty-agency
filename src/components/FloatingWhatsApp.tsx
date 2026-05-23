import React, { useState, useEffect } from 'react';
import { MessageSquare, PhoneCall, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl } from '../data/contact';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = getWhatsAppUrl("Hello Kutty Agency, I need construction materials details.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      
      {/* Dynamic Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-900 border border-slate-800 text-white p-3 rounded-xl shadow-xl flex items-start space-x-3 max-w-xs relative text-left"
          >
            {/* Close tooltip button */}
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 right-1.5 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="p-1 px-1.5 bg-brand-600 rounded-md text-xs font-bold leading-none mt-0.5">
              LIVE
            </div>
            <div>
              <p className="text-xs font-bold text-slate-100">Kutty Dispatch Active</p>
              <p className="text-[11px] text-slate-450 mt-1 leading-snug">
                Need sand, bricks, or jelly rates for Erode projects? Let's chat now!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -6, 0] }}
        transition={{
          y: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-emerald-600/30 border border-emerald-500 hover:scale-105 active:scale-95 transition-transform relative focus:outline-hidden"
        title="Direct Chat WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.012 3c-4.96.002-9 4.045-9 9 0 1.58.413 3.118 1.2 4.475l-1.212 4.425 4.542-1.192c1.31.72 2.784 1.1 4.3 1.1h.007c4.96 0 9-4.045 9-9s-4.042-9-9.006-9zm4.707 12.875c-.24.675-1.18 1.23-1.63 1.29-.44.05-1.02.13-2.924-.65-2.422-1-3.959-3.475-4.08-3.64-.117-.156-1.006-1.34-1.006-2.56 0-1.22.637-1.82.863-2.064.225-.24.498-.31.666-.31.17 0 .34 0 .49.01.157.01.37-.06.58.45.216.52.74 1.8.804 1.93.064.13.107.28.02.45-.084.17-.127.28-.256.43-.128.15-.27.33-.385.45-.128.12-.26.26-.11.52.15.26.666 1.1 1.43 1.78.98.87 1.8 1.14 2.062 1.27.26.13.41.11.56-.06.15-.17.64-.75.815-1 .177-.26.354-.215.597-.13.243.09 1.54.73 1.8 1 .26.13.26.24.2.51l-.01.01z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
      </motion.a>
    </div>
  );
}
