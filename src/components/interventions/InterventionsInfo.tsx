'use client';

import { useState, useEffect, useRef } from 'react';
import { FaClock, FaUserCog, FaShieldAlt, FaPhoneAlt } from 'react-icons/fa';

export default function InterventionsInfo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640); // sm breakpoint
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Debounce function to limit scroll event firing
  const debounce = <T extends (...args: unknown[]) => void>(func: T, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Handle scroll position detection with debounce
  const handleScroll = debounce(() => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < services.length) {
        setActiveIndex(newIndex);
      }
    }
  }, 50);

  // Scroll to active slide when index changes (mobile only)
  useEffect(() => {
    // Only run this on client side and if mobile
    if (typeof window !== 'undefined' && isMobile && carouselRef.current) {
      // Use setTimeout to ensure DOM is fully rendered
      setTimeout(() => {
        const cardElements = carouselRef.current?.querySelectorAll('.service-card');
        if (cardElements && cardElements.length > activeIndex) {
          const cardElement = cardElements[activeIndex] as HTMLElement;
          if (cardElement) {
            const containerPadding = 16; // container padding
            const leftPosition = cardElement.offsetLeft - containerPadding;
            
            carouselRef.current?.scrollTo({
              left: leftPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
    }
  }, [activeIndex, isMobile]);

  const services = [
    {
      icon: <FaClock className="h-8 w-8 text-white" />,
      title: "Intervention rapide",
      description: "Nos techniciens interviennent pour les pannes non critiques, et en urgence pour les situations critiques."
    },
    {
      icon: <FaUserCog className="h-8 w-8 text-white" />,
      title: "Techniciens qualifiés",
      description: "Nos équipes sont formées aux dernières technologies et certifiées pour intervenir sur tous types d'appareils d'accessibilité."
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-white" />,
      title: "Sécurité garantie",
      description: "Toutes nos interventions respectent les normes de sécurité pour assurer la protection des utilisateurs."
    },
    {
      icon: <FaPhoneAlt className="h-8 w-8 text-white" />,
      title: "Assistance 24/7",
      description: "Notre service d'assistance téléphonique est disponible 24h/24 et 7j/7 pour répondre à vos urgences."
    }
  ];

  return (
    <section id="interventions-info" className="py-12 xs:py-16 sm:py-20 bg-[#fbfcfd]">
      <div className="container mx-auto px-3 xs:px-4 max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
            Nos services d&apos;intervention
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            DAMAD vous propose un service complet d&apos;intervention et de dépannage pour assurer la sécurité et le bon fonctionnement de vos appareils d&apos;accessibilité.
          </p>
        </div>
        
        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative mb-10">
            <div className="overflow-hidden px-4">
              <div 
                ref={carouselRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 gap-4 transition-all duration-300"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  scrollSnapType: 'x mandatory',
                  scrollBehavior: 'smooth'
                }}
                onScroll={handleScroll}
              >
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 snap-center service-card w-full transition-transform duration-300"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div className="pt-6">
                      <div className="flow-root bg-white rounded-xl px-6 pb-8 h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                        <div className="-mt-6">
                          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0046fe] text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                            {service.icon}
                          </div>
                          <h3 className="mt-6 text-lg font-bold text-[#2b3343] tracking-tight">{service.title}</h3>
                          <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                          <p className="text-base text-[#2b3343]">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Carousel Controls */}
            <div className="flex justify-center mt-6 gap-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === index ? 'bg-[#0046fe] w-5' : 'bg-gray-300'}`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid Layout */
          <div className="grid grid-cols-1 gap-6 xs:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-xl px-6 pb-8 h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0046fe] text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                      {service.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-[#2b3343] tracking-tight">{service.title}</h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                    <p className="text-base text-[#2b3343]">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-[#2b3343] border-b border-[#0046fe]/20 pb-3">Types d&apos;interventions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-4 text-[#0046fe] flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Dépannage d&apos;urgence
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#0046fe] mr-2 mt-1">•</span>
                  <span>Personnes bloquées dans l&apos;appareil d&apos;accessibilité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0046fe] mr-2 mt-1">•</span>
                  <span>Arrêt soudain de l&apos;appareil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0046fe] mr-2 mt-1">•</span>
                  <span>Bruits anormaux ou vibrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0046fe] mr-2 mt-1">•</span>
                  <span>Problèmes de portes ou d&apos;accès</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-4 text-[#0046fe] flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Maintenance préventive
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#0046fe] mr-2 mt-1">•</span>
                  <span>Vérification des systèmes de sécurité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0046fe] mr-2 mt-1">•</span>
                  <span>Contrôle des composants mécaniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0046fe] mr-2 mt-1">•</span>
                  <span>Nettoyage et lubrification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0046fe] mr-2 mt-1">•</span>
                  <span>Mise à jour des logiciels de contrôle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
