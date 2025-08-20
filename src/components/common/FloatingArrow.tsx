'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function FloatingArrow() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Retourner en haut"
          className="fixed bottom-24 right-6 z-50 p-3 rounded-full bg-[#0046fe] text-white shadow-lg hover:bg-[#0035c8] transition-all duration-300 transform hover:scale-110"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </>
  );
}
