'use client';

import { FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const scrollToMission = () => {
    const missionElement = document.getElementById('mission');
    if (missionElement) {
      missionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              À propos de <span className="text-[#2b3343] relative">
                DAMAD
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#2b3343] rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Votre partenaire de confiance pour l&apos;installation, la maintenance et la modernisation de vos ascenseurs, portes automatiques, monte-charges et solutions d&apos;accessibilité.
            </p>
          </div>
          
          <div 
            className={`mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 transform transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a 
              href="#mission" 
              onClick={(e) => { e.preventDefault(); scrollToMission(); }}
              className="group px-8 py-4 bg-[#2b3343] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              Découvrir notre mission
              <FaChevronDown className="ml-2 group-hover:animate-bounce" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-[#2b3343] text-[#2b3343] font-medium rounded-lg hover:bg-[#2b3343] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Nous contacter
            </a>
          </div>
          
          {/* Decorative wave - removed to prevent hiding buttons */}
        </div>
      </div>
    </section>
  );
}
