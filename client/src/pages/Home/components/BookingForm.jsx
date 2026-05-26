import React, { useState } from 'react';
import { getWhatsAppLink, generateBookingMessage } from '../../../utils/whatsapp';
import Button from '../../../components/ui/Button';

/**
 * Premium Booking Form with stateful estimation logic.
 * 
 * LEARNING TIP (Form and State in React):
 * Instead of reading values from the DOM when a button is clicked (like vanilla JS document.getElementById),
 * in React we use "controlled inputs" linked to a local `formData` state object. Whenever an input changes, 
 * we update the state. This makes form validation and dynamic logic (like showing/hiding the return date) 
 * extremely clean and synchronous.
 */
export const BookingForm = () => {
  const [tripType, setTripType] = useState('oneway'); // 'oneway', 'roundtrip', 'local', 'airport'
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    date: '',
    time: '',
    returnDate: '',
    carType: '',
    name: '',
    mobile: '',
  });

  const carOptions = [
    { value: 'dzire', label: 'Dzire - ₹11/km' },
    { value: 'ertiga', label: 'Ertiga - ₹13/km' },
    { value: 'innova_crysta', label: 'Innova Crysta - ₹18/km' },
    { value: 'innova_hycross', label: 'Innova Hycross - ₹18/km' },
    { value: '14_seater', label: '14 Seater Tempo Traveler - ₹18/km' },
    { value: '17_seater', label: '17 Seater Tempo Traveler - Call' },
    { value: '20_seater', label: '20 Seater Tempo Traveler - Call' },
    { value: '26_seater', label: '26 Seater Tempo Traveler - Call' },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleBook = (e) => {
    e.preventDefault();
    const selectedCar = carOptions.find((car) => car.value === formData.carType);
    const carLabel = selectedCar ? selectedCar.label : formData.carType;

    const message = generateBookingMessage({
      name: formData.name,
      mobile: formData.mobile,
      pickup: formData.pickup,
      drop: formData.drop,
      date: formData.date,
      carType: `${carLabel} (${tripType.toUpperCase()})`,
    });

    const waURL = getWhatsAppLink(message);
    window.open(waURL, '_blank');
  };

  return (
    <div className="bg-[rgba(10,10,15,0.82)] border border-[rgba(255,184,0,0.22)] rounded-3xl p-8 backdrop-blur-lg shadow-royal glow-gold w-full max-w-[480px]">
      <h3 className="text-center text-white text-2xl font-semibold mb-6 border-b border-[rgba(158,158,175,0.12)] pb-3 font-heading">
        Book Your Ride
      </h3>

      {/* TRIP TABS */}
      <div className="flex bg-[rgba(10,10,15,0.5)] border border-[rgba(158,158,175,0.12)] rounded-xl overflow-hidden mb-6 p-1">
        {['oneway', 'roundtrip', 'local', 'airport'].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setTripType(type)}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg font-body capitalize transition-all duration-300 ${
              tripType === type
                ? 'bg-gold-gradient text-bg-primary font-bold'
                : 'text-text-muted hover:text-white'
            }`}
          >
            {type === 'oneway' ? 'One Way' : type === 'roundtrip' ? 'Round Trip' : type}
          </button>
        ))}
      </div>

      <form onSubmit={handleBook} className="space-y-4">
        {/* PICKUP & DROP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">📍</span>
            <input
              type="text"
              id="pickup"
              placeholder="Pickup Location"
              required
              value={formData.pickup}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white font-body text-sm outline-none transition-all duration-300 focus:border-accent-gold focus:bg-bg-tertiary focus:shadow-[0_0_15px_var(--color-accent-gold-glow)]"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">🏁</span>
            <input
              type="text"
              id="drop"
              placeholder="Drop Location"
              required
              value={formData.drop}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white font-body text-sm outline-none transition-all duration-300 focus:border-accent-gold focus:bg-bg-tertiary focus:shadow-[0_0_15px_var(--color-accent-gold-glow)]"
            />
          </div>
        </div>

        {/* DATE & TIME */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            id="date"
            required
            value={formData.date}
            onChange={handleInputChange}
            className="w-full px-3 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white font-body text-sm outline-none transition-all duration-300 focus:border-accent-gold focus:bg-bg-tertiary color-scheme-dark"
          />
          <input
            type="time"
            id="time"
            required
            value={formData.time}
            onChange={handleInputChange}
            className="w-full px-3 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white font-body text-sm outline-none transition-all duration-300 focus:border-accent-gold focus:bg-bg-tertiary color-scheme-dark"
          />
        </div>

        {/* RETURN DATE (ROUND TRIP ONLY) */}
        {tripType === 'roundtrip' && (
          <input
            type="date"
            id="returnDate"
            placeholder="Return Date"
            required
            value={formData.returnDate}
            onChange={handleInputChange}
            className="w-full px-3 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white font-body text-sm outline-none transition-all duration-300 focus:border-accent-gold focus:bg-bg-tertiary color-scheme-dark"
          />
        )}

        {/* CAR TYPE */}
        <select
          id="carType"
          required
          value={formData.carType}
          onChange={handleInputChange}
          className="w-full px-3 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white font-body text-sm outline-none transition-all duration-300 focus:border-accent-gold focus:bg-bg-tertiary"
        >
          <option value="" disabled>Select Car Type</option>
          {carOptions.map((car) => (
            <option key={car.value} value={car.value}>
              {car.label}
            </option>
          ))}
        </select>

        {/* NAME & MOBILE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white font-body text-sm outline-none transition-all duration-300 focus:border-accent-gold focus:bg-bg-tertiary"
          />
          <input
            type="tel"
            id="mobile"
            placeholder="Mobile Number"
            required
            value={formData.mobile}
            onChange={handleInputChange}
            className="w-full px-3 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white font-body text-sm outline-none transition-all duration-300 focus:border-accent-gold focus:bg-bg-tertiary"
          />
        </div>

        {/* FORM CTAS */}
        <div className="flex flex-col gap-3 pt-2">
          <Button variant="wa-full" type="submit" className="justify-center">
            🚖 Book via WhatsApp
          </Button>
          <Button variant="outline-gold" href="tel:+919522205111" className="justify-center">
            📞 Call to Confirm
          </Button>
        </div>

        <p className="text-center text-xs text-text-muted tracking-wider mt-4">
          ✅ Free Cancellation | ✅ No Hidden Charges
        </p>
      </form>
    </div>
  );
};
export default BookingForm;
