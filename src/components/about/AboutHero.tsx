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
    <section className="relative bg-white text-[#2b3343] py-20 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2b3343]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2b3343]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`text-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-block px-4 py-2 mb-5 text-sm font-semibold text-white bg-[#2b3343] rounded-full shadow-md">
              Notre Histoire, Notre Passion
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              À propos de <span className="text-[#2b3343] relative">
                DAMAD
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#2b3343] rounded-full"></span>
              </span> Ascenseurs
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Votre partenaire de confiance pour assurer la sécurité, la performance et la longévité de vos ascenseurs.
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
          
          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto">
              <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
