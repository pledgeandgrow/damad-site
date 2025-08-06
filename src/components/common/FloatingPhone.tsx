'use client';

import { FaPhone } from 'react-icons/fa';

export default function FloatingPhone() {
  const phoneNumber = '0826101202';
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      aria-label="Appeler la centrale d'appel"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#ff5c35] text-white shadow-lg hover:bg-[#e54d2a] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
    >
      <FaPhone className="text-lg" />
      <span className="ml-2 hidden md:inline">0 826 101 202</span>
    </button>
  );
}
