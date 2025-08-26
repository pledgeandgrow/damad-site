'use client';

import { FaPhoneAlt } from 'react-icons/fa';

export default function FloatingPhone() {
  const phoneNumber = '0970722263';
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      aria-label="Appeler la centrale d'appel"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#ff5c35] text-white shadow-lg hover:bg-[#e54d2a] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
    >
      <FaPhoneAlt className="text-lg" />
    </button>
  );
}
