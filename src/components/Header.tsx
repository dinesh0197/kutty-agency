import React, { useState } from 'react';
import { Menu, X, Phone, Building2, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'materials', label: 'Materials' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'about', label: 'About Us' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update hash for deep-linking
    window.location.hash = pageId;
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Upper info ribbon */}
      <div className="hidden sm:block bg-slate-900 text-slate-100 py-1.5 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Erode & surrounding districts, Tamil Nadu</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-sky-400 font-semibold uppercase tracking-wider text-[10px]">Serving since 2012</span>
          </div>
          <div className="flex items-center space-x-3">
            <span>Direct Order Helper:</span>
            <a href="tel:+919750847898" className="flex items-center space-x-1 text-white hover:text-sky-300 transition-colors">
              <Phone className="w-3" />
              <span>+91 97508 47898</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center space-x-3 cursor-pointer text-left focus:outline-hidden"
        >
          <div className="p-2 bg-sky-600 rounded-lg text-white shadow-md shadow-sky-100 flex items-center justify-center font-bold">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <span className="block font-display text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
              KUTTY <span className="text-sky-600">AGENCY</span>
            </span>
            <span className="block text-[10px] tracking-widest font-mono text-slate-500 uppercase font-bold mt-1">
              Materials & Transportation
            </span>
          </div>
        </button>

        {/* Desktop Navigation Link Menu */}
        <nav className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? 'text-sky-600 font-bold bg-sky-50' 
                    : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-sky-600 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://wa.me/919750847898?text=Hello%20Kutty%20Agency%2C%20I%20am%20looking%20for%20construction%20materials."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md transition-all duration-150"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.012 3c-4.96.002-9 4.045-9 9 0 1.58.413 3.118 1.2 4.475l-1.212 4.425 4.542-1.192c1.31.72 2.784 1.1 4.3 1.1h.007c4.96 0 9-4.045 9-9s-4.042-9-9.006-9zm4.707 12.875c-.24.675-1.18 1.23-1.63 1.29-.44.05-1.02.13-2.924-.65-2.422-1-3.959-3.475-4.08-3.64-.117-.156-1.006-1.34-1.006-2.56 0-1.22.637-1.82.863-2.064.225-.24.498-.31.666-.31.17 0 .34 0 .49.01.157.01.37-.06.58.45.216.52.74 1.8.804 1.93.064.13.107.28.02.45-.084.17-.127.28-.256.43-.128.15-.27.33-.385.45-.128.12-.26.26-.11.52.15.26.666 1.1 1.43 1.78.98.87 1.8 1.14 2.062 1.27.26.13.41.11.56-.06.15-.17.64-.75.815-1 .177-.26.354-.215.597-.13.243.09 1.54.73 1.8 1 .26.13.26.24.2.51l-.01.01z" />
            </svg>
            <span>Ask Erode Rate</span>
          </a>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Quick mobile phone link */}
          <a
            href="tel:+919750847898"
            className="p-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center"
            title="Call Us Now"
          >
            <Phone className="w-5 h-5 text-sky-600" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-700 hover:text-sky-600 bg-slate-100 hover:bg-slate-200 rounded-lg focus:outline-hidden cursor-pointer"
            id="mobile-menu-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-100 bg-white overflow-hidden shadow-inner"
            id="mobile-drawer"
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-bold transition-colors cursor-pointer ${
                      isActive 
                        ? 'bg-sky-600 text-white' 
                        : 'text-slate-700 hover:bg-slate-100 hover:text-sky-600'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium px-4">
                  <MapPin className="w-4 h-4 text-sky-500" />
                  <span>Kutty Agency Erode Main Office</span>
                </div>
                <div className="grid grid-cols-2 gap-3 px-2">
                  <a
                    href="tel:+919750847898"
                    className="w-full flex items-center justify-center space-x-2 bg-sky-600 text-white py-3 rounded-lg text-sm font-bold hover:bg-sky-700 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Staff</span>
                  </a>
                  <a
                    href="https://wa.me/919750847898?text=Hello%20Kutty%20Agency%2C%20I%20am%20looking%20for%20construction%20materials."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-emerald-600 text-white py-3 rounded-lg text-sm font-bold hover:bg-emerald-700 transition"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 3c-4.96.002-9 4.045-9 9 0 1.58.413 3.118 1.2 4.475l-1.212 4.425 4.542-1.192c1.31.72 2.784 1.1 4.3 1.1h.007c4.96 0 9-4.045 9-9s-4.042-9-9.006-9zm4.707 12.875c-.24.675-1.18 1.23-1.63 1.29-.44.05-1.02.13-2.924-.65-2.422-1-3.959-3.475-4.08-3.64-.117-.156-1.006-1.34-1.006-2.56 0-1.22.637-1.82.863-2.064.225-.24.498-.31.666-.31.17 0 .34 0 .49.01.157.01.37-.06.58.45.216.52.74 1.8.804 1.93.064.13.107.28.02.45-.084.17-.127.28-.256.43-.128.15-.27.33-.385.45-.128.12-.26.26-.11.52.15.26.666 1.1 1.43 1.78.98.87 1.8 1.14 2.062 1.27.26.13.41.11.56-.06.15-.17.64-.75.815-1 .177-.26.354-.215.597-.13.243.09 1.54.73 1.8 1 .26.13.26.24.2.51l-.01.01z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
