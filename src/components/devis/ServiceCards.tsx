'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaBuilding, FaIndustry, FaTools, FaTachometerAlt, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ServiceCards() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // md breakpoint
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
      icon: <FaTools className="w-10 h-10 text-[#0046fe]" />,
      title: 'Dépannage',
      description: 'Service d\'urgence pour résoudre rapidement les problèmes de votre ascenseur',
      features: ['Intervention rapide', 'Disponible 7/7', 'Techniciens qualifiés'],
      bgColor: 'from-gray-50 to-gray-100'
    },
    {
      icon: <FaBuilding className="w-10 h-10 text-[#0046fe]" />,
      title: 'Installation',
      description: 'Installation professionnelle d\'ascenseurs pour tous types de bâtiments',
      features: ['Planification détaillée', 'Conformité aux normes', 'Mise en service complète'],
      bgColor: 'from-gray-50 to-gray-100'
    },
    {
      icon: <FaIndustry className="w-10 h-10 text-[#0046fe]" />,
      title: 'Réparation',
      description: 'Services de réparation complets pour tous types de pannes et dysfonctionnements',
      features: ['Diagnostic précis', 'Pièces d\'origine', 'Garantie des réparations'],
      bgColor: 'from-gray-50 to-gray-100'
    },
    {
      icon: <FaTools className="w-10 h-10 text-[#0046fe]" />,
      title: 'Modernisation',
      description: 'Mettez à jour votre ascenseur existant avec les dernières technologies',
      features: ['Économie d\'énergie', 'Nouvelle cabine', 'Mise aux normes'],
      bgColor: 'from-gray-50 to-gray-100'
    },
    {
      icon: <FaTachometerAlt className="w-10 h-10 text-[#0046fe]" />,
      title: 'Maintenance',
      description: 'Contrats d\'entretien sur mesure pour une tranquillité d\'esprit',
      features: ['Réponse rapide', 'Pièces détachées', 'Rapports détaillés'],
      bgColor: 'from-gray-50 to-gray-100'
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 text-[#0046fe]" />,
      title: 'Contrôle de sécurité',
      description: 'Vérification complète de la conformité et de la sécurité',
      features: ['Rapport détaillé', 'Mise en conformité', 'Conseils experts'],
      bgColor: 'from-gray-50 to-gray-100'
    }
  ];

  return (
    <section className="py-16 bg-[#fbfcfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#2b3343] mb-4 relative inline-block"
          >
            <span className="relative z-10">Nos Services</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-[#2b3343] max-w-3xl mx-auto"
          >
            Découvrez nos services pour l&apos;entretien et l&apos;installation de vos ascenseurs
          </motion.p>
        </div>

        {isMobile ? (
          <div className="relative">
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
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`group bg-gradient-to-br ${service.bgColor} rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full`}
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-6">
                          <div className="p-4 bg-gradient-to-br from-[#0046fe] to-[#0046fe]/80 rounded-lg shadow-md">
                            {React.cloneElement(service.icon, { className: "w-10 h-10 text-white" })}
                          </div>
                          <h3 className="ml-4 text-xl font-semibold text-[#2b3343]">{service.title}</h3>
                        </div>
                        <p className="text-[#2b3343] mb-6">{service.description}</p>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="h-5 w-5 text-[#0046fe] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-[#2b3343]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
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
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group bg-gradient-to-br ${service.bgColor} rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-[#0046fe] to-[#0046fe]/80 rounded-lg shadow-md">
                      {React.cloneElement(service.icon, { className: "w-10 h-10 text-white" })}
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-[#2b3343]">{service.title}</h3>
                  </div>
                  <p className="text-[#2b3343] mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-[#0046fe] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#2b3343]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
