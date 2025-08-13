'use client';

import { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Use images from public/images/realisations for the home page showcase
const realisationImages = [
  { id: 1, src: '/images/realisations/rea1.jpg', alt: 'Réalisation 1' },
  { id: 2, src: '/images/realisations/rea6.jpg', alt: 'Réalisation 2' },
  { id: 3, src: '/images/realisations/rea3.jpg', alt: 'Réalisation 3' },
  { id: 4, src: '/images/realisations/rea8.jpg', alt: 'Réalisation 4' },
  { id: 5, src: '/images/realisations/rea5.jpg', alt: 'Réalisation 5' },
];

// Create projects array using the realisationImages
const projects = realisationImages.map((img) => ({
  id: img.id,
  title: `Réalisation ${img.id}`,
  image: img.src,
  alt: img.alt,
  slug: `realisation-${img.id}`
}));

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Detect device type
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Get visible cards based on device type
  const getVisibleCards = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3; // desktop
  };
  
  // Get card width based on visible cards
  const getCardWidth = () => {
    const visibleCards = getVisibleCards();
    if (visibleCards === 1) return '100%';
    if (visibleCards === 2) return 'calc(50% - 8px)';
    return 'calc(33.333% - 10px)'; // 3 cards
  };
  
  // Navigation functions
  const nextSlide = () => {
    setActiveIndex(prev => (prev + 1) % projects.length);
  };
  
  const prevSlide = () => {
    setActiveIndex(prev => (prev - 1 + projects.length) % projects.length);
  };
  
  // Scroll to active slide when index changes
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.scrollWidth * (activeIndex / projects.length);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);
  
  // Swipe handlers
  const { ref: swipeRef, ...swipeHandlers } = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true
  });
  
  return (
    <section id="realisations" className="py-16 sm:py-20 bg-[#fbfcfd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">Nos Projets Récents</h2>
          <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Découvrez nos dernières réalisations et projets d&apos;installation, de maintenance et de modernisation d&apos;ascenseurs.
          </p>
        </div>
        
        {/* Projects Carousel */}
        <div className="relative mb-10">
          <div className="overflow-hidden px-4 md:px-8">
            <div 
              ref={(el) => {
                // Apply the carousel ref
                carouselRef.current = el;
                // Apply the swipe ref
                swipeRef(el);
              }}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 gap-4"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory'
              }}
              {...swipeHandlers}
            >
              {projects.map((project) => (
                <motion.div 
                  key={project.id}
                  className="flex-shrink-0 snap-center"
                  style={{ width: getCardWidth() }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group hover:translate-y-[-5px]">
                    {/* Project Image - Fullscreen with reduced height */}
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === index ? 'bg-[#2b3343] w-5' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center z-10 hidden sm:flex hover:bg-gray-50"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center z-10 hidden sm:flex hover:bg-gray-50"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
        

      </div>
    </section>
  );
};

export default Projects;
