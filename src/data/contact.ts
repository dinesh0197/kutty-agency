/**
 * Centralized Contact Details for Kutty Agency Erode
 */
export const CONTACT_DETAILS = {
  // Primary Coordinator (Main Call/WhatsApp)
  phonePrimary: {
    display: "+91 97508 47898",
    raw: "919750847898",
    tel: "+919750847898"
  },
  
  // Secondary Fleet Manager
  phoneSecondary: {
    display: "+91 97508 47899",
    raw: "919750847899",
    tel: "+919750847899"
  },

  // Email
  email: "orders@kuttyagencyerode.com",

  // Location & Address
  location: {
    city: "Erode",
    state: "Tamil Nadu",
    district: "Erode District",
    fullAddress: "Kutty Agency Office & Yard, Perundurai Central Highway Road, Erode - 638011, Tamil Nadu, India",
    displayShort: "Perundurai Road, Erode - 638011",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.24357778385!2d77.63690186178711!3d11.332070381907722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f4c8430e67b%3A0xe2da205be86c5f7e!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716480000000!5m2!1sen!2sin"
  },

  // Operational Hours
  hours: "6:00 AM - 9:00 PM (Monday to Sunday)"
};

/**
 * Standard Helper to generate WhatsApp links with clean pre-filled texts.
 */
export function getWhatsAppUrl(messageText: string): string {
  const encText = encodeURIComponent(messageText);
  return `https://wa.me/${CONTACT_DETAILS.phonePrimary.raw}?text=${encText}`;
}
