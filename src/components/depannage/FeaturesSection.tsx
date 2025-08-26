"use client";

import { FaTools, FaClock, FaPhone, FaClipboardCheck } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const features = [
  {
    icon: <FaClock className="h-8 w-8 text-white" />,
    title: 'Intervention rapide',
    description: 'Réponse rapide pour des interventions d\'urgence.'
  },
  {
    icon: <FaTools className="h-8 w-8 text-white" />,
    title: 'Techniciens qualifiés',
    description: 'Des experts formés aux dernières technologies.'
  },
  {
    icon: <FaClipboardCheck className="h-8 w-8 text-white" />,
    title: 'Pièces détachées',
    description: 'Stock important de pièces détachées.'
  },
  {
    icon: <FaPhone className="h-8 w-8 text-white" />,
    title: 'Zone d\'intervention',
    description: 'Nous intervenons dans toute la région Île-de-France.'
  }
];

export default function FeaturesSection() {
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

  // Handle carousel navigation
  // Navigation functions are defined but currently not used in the UI
  // Keeping them for future implementation

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
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < features.length) {
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
        const cardElements = carouselRef.current?.querySelectorAll('.feature-card');
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

  return (
    <div id="features" className="py-12 xs:py-16 sm:py-20 bg-[#fbfcfc] sm:py-24 scroll-mt-16">
      <div className="container mx-auto px-3 xs:px-4 max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
            Notre service de dépannage
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#2b3343] mx-auto text-base sm:text-lg whitespace-nowrap overflow-hidden">Une équipe réactive et compétente pour tous vos problèmes d&apos;appareils d&apos;accessibilité.</p>
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
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 snap-center feature-card w-full transition-transform duration-300"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div className="pt-6">
                      <div className="flow-root bg-white rounded-xl px-6 pb-8 h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                        <div className="-mt-6">
                          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0046fe] text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                            {feature.icon}
                          </div>
                          <h3 className="mt-6 text-lg font-bold text-[#2b3343] tracking-tight">{feature.title}</h3>
                          <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                          <p className="text-base text-[#2b3343]">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Carousel Controls */}
            <div className="flex justify-center mt-6 gap-3">
              {features.map((_, index) => (
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
          /* Desktop Grid Layout */
          <div className="grid grid-cols-1 gap-6 xs:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-xl px-6 pb-8 h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0046fe] text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                      {feature.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-[#2b3343] tracking-tight">{feature.title}</h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                    <p className="text-base text-[#2b3343]">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
