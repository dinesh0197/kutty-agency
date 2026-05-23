import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_DETAILS } from '../data/contact';
interface ContactProps {
  prefilledMaterial?: string;
}

export default function Contact({ prefilledMaterial = '' }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    materialRequired: prefilledMaterial || 'M Sand',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const materialsList = [
    'M Sand',
    'R Sand',
    'P Sand',
    'Crusher Sand',
    '20mm Jelly',
    '6mm Jelly',
    '40mm Jelly',
    'Crusher Stones',
    'Basement Filling Soil',
    'Red Soil',
    'Grading Soil',
    'Bricks',
    'Aggregates',
    'Custom Mixed Order'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number so we can contact you.');
      return;
    }
    // Set submit success state
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello Kutty Agency,\n\nI am submitting a material order/quote query:\n- *Name*: ${formData.name}\n- *Phone*: ${formData.phone}\n- *Material Required*: ${formData.materialRequired}\n- *Message*: ${formData.message || 'No additional note'}`;
    const encText = encodeURIComponent(text);
    window.open(`https://wa.me/${CONTACT_DETAILS.phonePrimary.raw}?text=${encText}`, '_blank');
  };

  return (
    <section id="contact-section" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-mono text-xs font-bold tracking-widest uppercase block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-900 tracking-tight">
            Contact Kutty Agency Dispatch Office
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Ready to order? Fill in our quick Erode rate query form or call our yard staff directly. We are open from 6:00 AM to 9:00 PM every day of the week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick contact info panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs space-y-6">
              <h3 className="font-display font-bold text-xl text-brand-900 tracking-tight">
                Corporate Identity Details
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Business Location</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      {CONTACT_DETAILS.location.fullAddress}
                    </p>
                    <span className="mt-1 inline-block text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded leading-none uppercase">
                      Serving Erode & Near Districts
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Call/WhatsApp Yards Direct</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      Instant support phone booking channel:
                    </p>
                    <div className="mt-2 space-y-1.5">
                      <a href={`tel:${CONTACT_DETAILS.phonePrimary.tel}`} className="block text-brand-600 font-display font-extrabold text-sm hover:underline">
                        📞 {CONTACT_DETAILS.phonePrimary.display} (Main Coordinator)
                      </a>
                      <a href={`tel:${CONTACT_DETAILS.phoneSecondary.tel}`} className="block text-slate-600 font-display text-xs hover:underline">
                        📞 {CONTACT_DETAILS.phoneSecondary.display} (Fleet Manager)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Email Address</h4>
                    <p className="text-slate-500 text-xs mt-1 font-semibold hover:underline cursor-pointer">
                      {CONTACT_DETAILS.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Operational Dispatch Hours</h4>
                    <p className="text-slate-500 text-xs mt-1">
                      6:00 AM - 9:00 PM (Monday to Sunday)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct call call-to-actions */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${CONTACT_DETAILS.phonePrimary.tel}`}
                  className="flex items-center justify-center space-x-1.5 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-2 rounded-xl text-xs transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Staff Now</span>
                </a>
                <a
                  href={`https://wa.me/${CONTACT_DETAILS.phonePrimary.raw}?text=Hello%20Kutty%20Agency%2C%20I%20need%20details%20about%20construction%20materials%20pricing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-2 rounded-xl text-xs transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>

            {/* Simulated Live Google Map embed segment */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Our Primary Geographic Coverage Center (Erode)
              </span>
              <div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="Kutty Agency Erode Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.24357778385!2d77.63690186178711!3d11.332070381907722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f4c8430e67b%3A0xe2da205be86c5f7e!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716480000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  id="google-maps-iframe"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Interactive rate query form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xs relative">
              
              {submitted ? (
                /* Success template block */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full mb-6">
                    <CheckCircle className="w-14 h-14" />
                  </div>
                  <h3 className="font-display font-extrabold text-brand-900 text-2xl sm:text-3xl">
                    Rate Query Received!
                  </h3>
                  <p className="text-slate-600 text-sm mt-4 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our logistics supervisor has received your priority query for <strong>{formData.materialRequired}</strong>. We will catalog Erode market rates and call you on your listed phone <strong className="text-slate-800">{formData.phone}</strong> shortly.
                  </p>

                  <div className="mt-8 space-y-3 max-w-sm mx-auto">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition shadow-md shadow-emerald-100"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12.012 3c-4.96.002-9 4.045-9 9 0 1.58.413 3.118 1.2 4.475l-1.212 4.425 4.542-1.192c1.31.72 2.784 1.1 4.3 1.1h.007c4.96 0 9-4.045 9-9s-4.042-9-9.006-9zm4.707 12.875c-.24.675-1.18 1.23-1.63 1.29-.44.05-1.02.13-2.924-.65-2.422-1-3.959-3.475-4.08-3.64-.117-.156-1.006-1.34-1.006-2.56 0-1.22.637-1.82.863-2.064.225-.24.498-.31.666-.31.17 0 .34 0 .49.01.157.01.37-.06.58.45.216.52.74 1.8.804 1.93.064.13.107.28.02.45-.084.17-.127.28-.256.43-.128.15-.27.33-.385.45-.128.12-.26.26-.11.52.15.26.666 1.1 1.43 1.78.98.87 1.8 1.14 2.062 1.27.26.13.41.11.56-.06.15-.17.64-.75.815-1 .177-.26.354-.215.597-.13.243.09 1.54.73 1.8 1 .26.13.26.24.2.51l-.01.01z" />
                      </svg>
                      <span>Instantly Forward on WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', materialRequired: 'M Sand', message: '' });
                      }}
                      className="w-full text-slate-500 hover:text-slate-800 text-xs font-semibold py-2.5"
                    >
                      Fill in another form
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form layout */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-slate-950">
                      Request Material Rate Quote
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Our coordinator will check quarry pricing indexes and notify you within 15 minutes.
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajkumar P."
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 p-3.5 rounded-xl text-sm outline-hidden font-medium transition"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 94432 12345 (10-digit number)"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 p-3.5 rounded-xl text-sm outline-hidden font-medium transition"
                    />
                  </div>

                  {/* Material dropdown field */}
                  <div className="space-y-1.5">
                    <label htmlFor="materialRequired" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Material Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="materialRequired"
                      name="materialRequired"
                      required
                      value={formData.materialRequired}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-700 p-3.5 rounded-xl text-sm outline-hidden font-semibold transition"
                    >
                      {materialsList.map((mat) => (
                        <option key={mat} value={mat}>
                          {mat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message / Special Instructions */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Additional Message (Quantity / Site Location)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Need 4.0 Unit standard tipper for 20mm Jelly stone at Bhavani. Concrete roof is tomorrow morning."
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 p-3.5 rounded-xl text-sm outline-hidden font-medium transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit buttons */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-sm transition shadow-lg shadow-blue-100 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Rate Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
