"use client"

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function RealisationsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < 8) { // 8 images
          setActiveIndex(newIndex);
        }
      }
    }, 50)
  ).current;

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Gallery images data
  const galleryImages = [
    {
      src: "/images/depannage/depannage1.png",
      alt: "Technicien effectuant un diagnostic sur le tableau de commande d'un ascenseur en panne"
    },
    {
      src: "/images/depannage/depannage2.png",
      alt: "Réparation d'urgence du système de traction d'un ascenseur bloqué"
    },
    {
      src: "/images/depannage/depannage3.png",
      alt: "Intervention sur les portes palières d'un ascenseur ne fermant plus correctement"
    },
    {
      src: "/images/depannage/depannage4.png",
      alt: "Dépannage du système électrique et des capteurs de sécurité d'un ascenseur"
    },
    {
      src: "/images/depannage/depannage5.png",
      alt: "Technicien utilisant des outils spécialisés pour réparer un ascenseur en urgence"
    },
    {
      src: "/images/depannage/depannage6.png",
      alt: "Intervention rapide sur un ascenseur bloqué entre deux étages"
    },
    {
      src: "/images/depannage/depannage7.png",
      alt: "Réparation du système d'appel d'urgence et de communication d'un ascenseur"
    },
    {
      src: "/images/depannage/depannage8.png",
      alt: "Maintenance corrective sur le moteur et les câbles de traction d'un ascenseur"
    }
  ];

  return (
    <div className="py-24 bg-[#fbfcfd] border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mt-2 mb-4">
            Nos réalisations
          </h2>
          <div className="w-24 h-1 bg-[#0046fe] mx-auto mb-6"></div>
        </div>
        
        {isMobile ? (
          /* Mobile Layout with Sliding Effect */
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                ref={carouselRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 gap-4"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  scrollSnapType: 'x mandatory',
                  scrollBehavior: 'smooth',
                  WebkitOverflowScrolling: 'touch'
                }}
                onScroll={() => handleScroll()}
              >
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 snap-center w-full" 
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
                      <div className="relative w-full h-full">
                        <Image 
                          src={image.src}
                          alt={image.alt}
                          className="object-cover transition-transform duration-500 hover:scale-110"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicator dots */}
            <div className="flex justify-center mt-6 gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-[#0046fe] w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Layout with Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
