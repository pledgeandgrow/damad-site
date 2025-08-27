"use client";

import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    number: 1,
    title: "Description du projet",
    description: "Nous prenons le temps d'écouter et comprendre vos besoins spécifiques pour votre projet de modernisation et rénovation."
  },
  {
    number: 2,
    title: "Visite technique",
    description: "Notre responsable de travaux se déplace sur site pour évaluer précisément les travaux nécessaires et les contraintes techniques."
  },
  {
    number: 3,
    title: "Estimation gratuite",
    description: "Nous vous proposons un devis détaillé et transparent, sans engagement, avec différentes options adaptées à vos besoins."
  },
  {
    number: 4,
    title: "Accord & signature",
    description: "Une fois le devis validé, nous planifions ensemble les travaux selon vos contraintes et établissons un calendrier précis."
  },
  {
    number: 5,
    title: "Suivi de chantier",
    description: "Nos équipes assurent un accompagnement et suivi rigoureux du chantier et vous tiennent informés à chaque étape des travaux."
  },
  {
    number: 6,
    title: "Livraison & garantie",
    description: "Nous effectuons la réception des travaux avec vous pour garantir votre entière satisfaction et vous accompagnons avec un service après-vente de qualité."
  }
];

const ProcessStepsSection = () => {
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
  const handleScroll = useRef(
    debounce(() => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const cardWidth = carouselRef.current.clientWidth;
        const newIndex = Math.round(scrollPosition / cardWidth);
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < steps.length) {
          setActiveIndex(newIndex);
        }
      }
    }, 50)
  ).current;

  // Scroll to active slide when index changes (mobile only)
  useEffect(() => {
    if (typeof window !== 'undefined' && isMobile && carouselRef.current) {
      setTimeout(() => {
        const cardElements = carouselRef.current?.querySelectorAll('.step-card');
        if (cardElements && cardElements.length > activeIndex) {
          const cardElement = cardElements[activeIndex] as HTMLElement;
          if (cardElement) {
            const containerPadding = 16;
            const leftPosition = cardElement.offsetLeft - containerPadding;
            
            if (carouselRef.current) {
              const originalOnScroll = carouselRef.current.onscroll;
              carouselRef.current.onscroll = null;
              
              carouselRef.current.scrollTo({
                left: leftPosition,
                behavior: 'smooth'
              });
              
              setTimeout(() => {
                if (carouselRef.current) {
                  carouselRef.current.onscroll = originalOnScroll;
                }
              }, 500);
            }
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
            Notre accompagnement
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#2b3343] max-auto mx-auto text-base sm:text-lg leading-relaxed">
            Un accompagnement sur mesure pour rénover et moderniser vos ascenseurs en toute sérénité.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {isMobile ? (
            /* Mobile Layout */
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  ref={carouselRef}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 gap-5 px-4"
                  style={{ 
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    WebkitOverflowScrolling: 'touch'
                  }}
                  onScroll={handleScroll}
                >
                  {steps.map((step, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 snap-center step-card w-full transition-transform duration-300"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                        {/* Step number banner */}
                        <div className="bg-[#0046fe] text-white py-2 px-4 flex items-center justify-between">
                          <span className="font-bold text-lg">Étape {step.number}</span>
                          <div className="w-8 h-8 bg-white text-[#0046fe] rounded-full flex items-center justify-center font-bold">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="p-5">
                          <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                            {step.title}
                          </h3>
                          <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                          <p className="text-[#2b3343] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mobile Carousel Controls */}
              <div className="flex justify-center mt-5 gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-[#0046fe] w-6 shadow-md' : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* No mobile navigation arrows as requested */}
            </div>
          ) : (
            /* Desktop Layout */
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {steps.map((step, index) => {
                  // First row: steps 1-3, Second row: steps 4-6
                  return (
                    <div 
                      key={index} 
                      className="relative"
                    >
                      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                        {/* Number badge - centered on desktop, top-right on mobile */}
                        <div className="absolute -top-4 sm:-top-5 -right-4 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                          {step.number}
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#2b3343] mb-3 mt-1">
                          {step.title}
                        </h3>
                        <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                        <p className="text-[#2b3343] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessStepsSection;
