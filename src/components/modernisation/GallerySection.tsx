"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function GallerySection() {
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
      src: "/images/modernisation/modernisation1.jpg",
      alt: "Cabine d'ascenseur jaune"
    },
    {
      src: "/images/modernisation/modernisation2.jpg",
      alt: "Cabine d'ascenseur luxueuse"
    },
    {
      src: "/images/modernisation/modernisation3.jpg",
      alt: "Intérieur d'ascenseur moderne"
    },
    {
      src: "/images/modernisation/modernisation4.jpg",
      alt: "Cabine d'ascenseur moderne avec avec miroirs"
    },
    {
      src: "/images/modernisation/modernisation5.png",
      alt: "2 ascenseurs modernes avec moderne"
    },
    {
      src: "/images/modernisation/modernisation6.png",
      alt: "Cabine d'ascenseur moderne"
    },
    {
      src: "/images/modernisation/modernisation7.png",
      alt: "Cabine d'ascenseur panoramique avec parois en verre après rénovation"
    },
    {
      src: "/images/modernisation/modernisation8.png",
      alt: "Cabine d'ascenseur avec miroirs en ascension "
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-6">
            Nos réalisations de modernisation
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-8"></div>
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
                    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
                      <div className="relative w-full h-full">
                        <Image 
                          src={image.src}
                          alt={image.alt}
                          className="object-cover hover:scale-105 transition-transform duration-500" 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="text-center mt-10 text-[#2b3343]">Besoins d&apos;information sur la maintenance après la fin de chantier?</p>
        <div className="mt-2 flex justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-[#e64a24] transition-all duration-300 mr-4">
            Contactez-nous
          </Link>
          <Link href="/devis" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#ff5c35] hover:bg-[#e64a24] transition-all duration-300">
            Demandez un devis
          </Link>
        </div>
      </div>
    </div>
  );
}
