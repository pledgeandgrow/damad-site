'use client';

import { FaHandshake } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function PartenariatHero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Scroll function removed - not currently used
  // If needed in the future, implement a function to scroll to the details section

  return (
    <section className="relative bg-[#fbfcfc] text-[#2b3343] py-24 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2b3343]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2b3343]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#2b3343]/3 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#2b3343]/3 rounded-full"></div>
      
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`text-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex justify-center mb-6">
              <div className="p-5 bg-[#0046fe] rounded-lg shadow-md">
                <FaHandshake className="text-white text-4xl" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Devenir partenaire DAMAD
            </h1>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
