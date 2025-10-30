'use client';

import { useEffect, useRef, useState } from 'react';
import { FaShieldAlt, FaBalanceScale, FaClipboardCheck } from 'react-icons/fa';

export default function AboutContext() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
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

  // Intersection observer for animation
  useEffect(() => {
    const currentRef = sectionRef.current;
    let observer: IntersectionObserver | null = null;

    if (currentRef) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (observer && currentRef) {
              observer.unobserve(currentRef);
            }
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(currentRef);
    }

    return () => {
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
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
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < 3) { // 3 cards
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
        const cardElements = carouselRef.current?.querySelectorAll('.value-card');
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
    <section 
      ref={sectionRef}
      className="py-20 bg-[#fbfcfc] sm:py-24 scroll-mt-16"
      id="mission"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div 
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >

          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4 mt-2">
            Développement et Innovation
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              En développant un encrage francilien fort, nous entretenons une relation de proximité avec nos clients, mais aussi avec les entrepreneurs et sociétés partenaires.
            </p>
            <p>
              Depuis 2024, DMD renforce sa structure et son équipe pour faire face aux nouveaux enjeux économiques, technologiques et sociétaux (vieillissement de la population, croissance verticale des villes, densification urbaine, sobriété énergétique...).
            </p>
          </div>
          
          {/* Values Cards - Mobile or Desktop */}
          {isMobile ? (
            <div className="mt-12 relative">
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
                  {/* Prudence Card */}
                  <div 
                    className="flex-shrink-0 snap-center value-card w-full transition-transform duration-300"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div className="group transform transition-all duration-300 hover:translate-y-[-5px]">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full relative">
                        <div className="p-6">
                          <div className="w-12 h-12 bg-[#0046fe]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <FaBalanceScale className="text-[#0046fe] text-2xl" />
                          </div>
                          <h3 className="text-xl font-bold text-[#2b3343] mb-3">Prudence</h3>
                          <p className="text-gray-600">
                            La prudence guide chacune de nos actions pour garantir la sécurité et la fiabilité de nos interventions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Discipline Card */}
                  <div 
                    className="flex-shrink-0 snap-center value-card w-full transition-transform duration-300"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div className="group transform transition-all duration-300 hover:translate-y-[-5px]">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full relative">
                        <div className="p-6">
                          <div className="w-12 h-12 bg-[#0046fe]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <FaClipboardCheck className="text-[#0046fe] text-2xl" />
                          </div>
                          <h3 className="text-xl font-bold text-[#2b3343] mb-3">Discipline</h3>
                          <p className="text-gray-600">
                            La discipline nous permet d{`'`}assurer des performances optimales grâce à une approche méthodique et rigoureuse.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sécurité Card */}
                  <div 
                    className="flex-shrink-0 snap-center value-card w-full transition-transform duration-300"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div className="group transform transition-all duration-300 hover:translate-y-[-5px]">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full relative">
                        <div className="p-6">
                          <div className="w-12 h-12 bg-[#0046fe]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <FaShieldAlt className="text-[#0046fe] text-2xl" />
                          </div>
                          <h3 className="text-xl font-bold text-[#2b3343] mb-3">Sécurité</h3>
                          <p className="text-gray-600">
                            La sécurité est au cœur de notre métier, nous respectons les normes les plus strictes pour protéger nos utilisateurs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Carousel Controls */}
              <div className="flex justify-center mt-6 gap-3">
                {[0, 1, 2].map((index) => (
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
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Prudence Card */}
              <div className="group transform transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full relative">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-[#0046fe]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <FaBalanceScale className="text-[#0046fe] text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">Prudence</h3>
                    <p className="text-gray-600">
                      La prudence guide chacune de nos actions pour garantir la sécurité et la fiabilité de nos interventions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Discipline Card */}
              <div className="group transform transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full relative">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-[#0046fe]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <FaClipboardCheck className="text-[#0046fe] text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">Discipline</h3>
                    <p className="text-gray-600">
                      La discipline nous permet d{`'`}assurer des performances optimales grâce à une approche méthodique et rigoureuse.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Sécurité Card */}
              <div className="group transform transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full relative">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-[#0046fe]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <FaShieldAlt className="text-[#0046fe] text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">Sécurité</h3>
                    <p className="text-gray-600">
                      La sécurité est au cœur de notre métier, nous respectons les normes les plus strictes pour protéger nos utilisateurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-12 text-lg text-gray-600 italic font-medium">
            <p>Passionné par ce métier et par l{`'`}accessibilité, DMD met son savoir et son expérience à votre service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
