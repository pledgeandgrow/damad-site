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
    <section className="relative bg-gradient-to-b from-gray-50 to-white text-[#2b3343] py-24 md:py-32 overflow-hidden">
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
              <div className="bg-[#2b3343]/10 p-5 rounded-full">
                <FaHandshake className="text-[#2b3343] text-4xl" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Devenir <span className="text-[#2b3343] relative">
                partenaire DAMAD
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#2b3343] rounded-full"></span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
