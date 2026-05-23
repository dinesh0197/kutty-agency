import React from 'react';
import { Building2, Phone, Mail, MapPin, Clock, ArrowRight, Shield } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/contact';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const serviceAreas = [
    'Erode City', 'Perundurai', 'Gobichettipalayam',
    'Bhavani', 'Chithode', 'Kodumudi',
    'Modakurichi', 'Sathyamangalam', 'Anthiyur'
  ];

  const handleLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId;
  };

  return (
    <footer id="app-footer" className="bg-slate-900 text-slate-300">
      {/* Top CTA panel overlay */}
      <div className="border-b border-slate-800 bg-linear-to-r from-sky-950/20 to-emerald-950/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sky-400 font-mono text-xs font-bold tracking-widest uppercase block mb-2">
                Need customized bulk quantities?
              </span>
              <h3 className="text-white text-2xl font-display font-extrabold tracking-tight">
                Order directly or request a custom quotation!
              </h3>
              <p className="text-sm text-slate-400 mt-2 max-w-lg">
                Talk directly with our shipping team coordinator. We offer customizable vehicle sizes and flexible pricing depending on building location.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">
              <a
                href={`tel:${CONTACT_DETAILS.phonePrimary.tel}`}
                className="flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg text-sm font-bold shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CONTACT_DETAILS.phonePrimary.display}</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_DETAILS.phonePrimary.raw}?text=Hello%20Kutty%20Agency%2C%20I%20am%20looking%20for%20construction%20materials.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-sm font-bold shadow-md transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 3c-4.96.002-9 4.045-9 9 0 1.58.413 3.118 1.2 4.475l-1.212 4.425 4.542-1.192c1.31.72 2.784 1.1 4.3 1.1h.007c4.96 0 9-4.045 9-9s-4.042-9-9.006-9zm4.707 12.875c-.24.675-1.18 1.23-1.63 1.29-.44.05-1.02.13-2.924-.65-2.422-1-3.959-3.475-4.08-3.64-.117-.156-1.006-1.34-1.006-2.56 0-1.22.637-1.82.863-2.064.225-.24.498-.31.666-.31.17 0 .34 0 .49.01.157.01.37-.06.58.45.216.52.74 1.8.804 1.93.064.13.107.28.02.45-.084.17-.127.28-.256.43-.128.15-.27.33-.385.45-.128.12-.26.26-.11.52.15.26.666 1.1 1.43 1.78.98.87 1.8 1.14 2.062 1.27.26.13.41.11.56-.06.15-.17.64-.75.815-1 .177-.26.354-.215.597-.13.243.09 1.54.73 1.8 1 .26.13.26.24.2.51l-.01.01z" />
                </svg>
                <span>WhatsApp Live Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer context */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-white">
            <div className="p-1.5 bg-sky-600 rounded-lg">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="font-display text-xl font-black tracking-tight uppercase">
              KUTTY <span className="text-sky-500">AGENCY</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            The most trusted (reliable) construction materials supplier and transport agency in Erode region, delivering finest gravel, brick structural batches, and wash sands.
          </p>
          <div className="flex items-center space-x-2 text-xs text-sky-400 bg-sky-950/20 py-2 px-3 rounded-lg border border-sky-800/40 w-fit">
            <Shield className="w-3.5 h-3.5" />
            <span>100% On-Time Delivery Guaranteed</span>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-display text-sm font-bold uppercase tracking-wider mb-5">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { id: 'home', name: 'Home' },
              { id: 'materials', name: 'Premium Materials' },
              { id: 'transportation', name: 'Our Reliable Fleet' },
              { id: 'about', name: 'About US Profile' },
              { id: 'testimonials', name: 'Client Reviews' },
              { id: 'contact', name: 'Contact & Map' }
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors cursor-pointer group"
                >
                  <ArrowRight className="w-3 h-3 text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{link.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Erode Service Areas list */}
        <div>
          <h4 className="text-white font-display text-sm font-bold uppercase tracking-wider mb-5">
            Erode Service Coverage
          </h4>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-400">
            {serviceAreas.map((area) => (
              <div key={area} className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                <span>{area}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 mt-4 italic">
            *Orders are regularly dispatched from our central yards in Erode.
          </p>
        </div>

        {/* Hub and contact */}
        <div className="space-y-4">
          <h4 className="text-white font-display text-sm font-bold uppercase tracking-wider mb-1">
            Office Contacts
          </h4>
          <div className="space-y-3.5 text-sm text-slate-400">
            <div className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
              <span>
                {CONTACT_DETAILS.location.fullAddress}
              </span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-sky-500" />
              <span>{CONTACT_DETAILS.phonePrimary.display}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-sky-500" />
              <span>{CONTACT_DETAILS.email}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Clock className="w-4 h-4 text-sky-500" />
              <span>{CONTACT_DETAILS.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Under footer */}
      <div className="border-t border-slate-800 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} Kutty Agency Erode. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <span className="hover:text-slate-300">Materials Supplier</span>
            <span>•</span>
            <span className="hover:text-slate-300">Direct Fleet Transport</span>
            <span>•</span>
            <span className="hover:text-slate-300">Erode, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
