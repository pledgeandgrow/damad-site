"use client";

import { useState, useEffect, useRef } from 'react';

const elevatorTypes = [
  {
    name: 'Appareil d\'accessibilité électrique',
    description: 'Idéal pour les bâtiments de moyenne et grande hauteur.',
    features: ['Faible consommation', 'Silencieux', 'Entretien réduit']
  },
  {
    name: 'Appareil d\'accessibilité hydraulique',
    description: 'Parfait pour les faibles hauteurs et charges lourdes.',
    features: ['Puissant', 'Fiabilité éprouvée', 'Coût d\'installation réduit']
  },
  {
    name: 'Appareil d\'accessibilité sans local technique',
    description: 'Solution compacte sans besoin de local dédié.',
    features: ['Gain de place', 'Installation simplifiée', 'Design moderne']
  },
  {
    name: 'Appareil d\'accessibilité PMR',
    description: 'Conforme aux normes d\'accessibilité.',
    features: ['Normes PMR', 'Largeur de porte adaptée', 'Boutons en braille']
  }
];

export default function SolutionsSection() {
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
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < elevatorTypes.length) {
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
        const cardElements = carouselRef.current?.querySelectorAll('.solution-card');
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
    <div className="py-8 xs:py-10 sm:py-12 bg-[#fbfcfc] border-t border-gray-100">
      <div className="container mx-auto px-3 xs:px-4 max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
            Nos solutions d&apos;accessibilité
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Choisissez la solution la plus adaptée à vos besoins.
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
                {elevatorTypes.map((type, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 snap-center solution-card w-full transition-transform duration-300"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                      <div className="h-2 bg-[#0046fe]"></div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-[#2b3343]">{type.name}</h3>
                        <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                        <p className="text-[#2b3343]">{type.description}</p>
                        <ul className="mt-4 space-y-3">
                          {type.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#0046fe] flex items-center justify-center mr-2">
                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span className="text-[#2b3343]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Carousel Controls */}
            <div className="flex justify-center mt-6 gap-3">
              {elevatorTypes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === index ? 'bg-[#0046fe] w-5' : 'bg-gray-300'}`}
                  aria-label={`Go to solution ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid Layout */
          <div className="grid grid-cols-1 gap-6 xs:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {elevatorTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                <div className="h-2 bg-[#0046fe]"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#2b3343]">{type.name}</h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                  <p className="text-[#2b3343]">{type.description}</p>
                  <ul className="mt-4 space-y-3">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#0046fe] flex items-center justify-center mr-2">
                          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-[#2b3343]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
