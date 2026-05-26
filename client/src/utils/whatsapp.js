/**
 * Utility to construct pre-filled WhatsApp links.
 * This is a React utility that generates a clean URL based on user input.
 * It encapsulates our target phone number and template strings.
 */
const WA_PHONE = '919826157552';

export const getWhatsAppLink = (text) => {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${WA_PHONE}?text=${encodedText}`;
};

export const generateBookingMessage = ({ name, mobile, pickup, drop, date, carType }) => {
  return `Namaste, I am ${name} ${mobile ? `(Mobile: ${mobile})` : ''}. I want to book a cab.\n\nFrom: ${pickup}\nTo: ${drop}\nDate: ${date}\nCar: ${carType}\n\nPlease confirm availability.`;
};
