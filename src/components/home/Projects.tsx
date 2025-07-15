'use client';

import { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaBuilding, FaHotel, FaHospital } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  category: string;
  year: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Résidence Les Ormes",
    location: "Lyon, France",
    description: "Installation de 3 ascenseurs nouvelle génération dans une résidence de standing avec 120 appartements.",
    image: "/images/project1.jpg",
    icon: <FaBuilding />,
    category: "Installation",
    year: "2024",
    slug: "residence-les-ormes"
  },
  {
    id: 2,
    title: "Hôtel Mercure",
    location: "Marseille, France",
    description: "Modernisation complète des 4 ascenseurs existants avec mise aux normes et amélioration de l'efficacité énergétique.",
    image: "/images/project2.jpg",
    icon: <FaHotel />,
    category: "Rénovation",
    year: "2023",
    slug: "hotel-mercure"
  },
  {
    id: 3,
    title: "Clinique Saint-Joseph",
    location: "Bordeaux, France",
    description: "Installation d'un monte-charge médical et maintenance préventive pour l'ensemble des ascenseurs de l'établissement.",
    image: "/images/project3.jpg",
    icon: <FaHospital />,
    category: "Installation & Maintenance",
    year: "2023",
    slug: "clinique-saint-joseph"
  }
];

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
    <section id="realisations" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-[#2b3343] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-gray-100 px-3 py-1 rounded-full">Réalisations</span>
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
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 overflow-hidden group hover:translate-y-[-5px]">
                    {/* Project Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2b3343]/80"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#2b3343]">
                        {project.category}
                      </div>
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 bg-[#2b3343]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                        {project.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg bg-[#2b3343]/10 text-[#2b3343] text-lg">
                          {project.icon}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-bold text-gray-900">{project.title}</h3>
                          <p className="text-sm text-gray-500">{project.location}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow">{project.description}</p>
                      
                      <Link 
                        href={`/realisations/${project.slug}`}
                        className="inline-flex items-center text-sm font-medium text-[#2b3343] hover:text-blue-600 mt-auto"
                      >
                        Voir le projet
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
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
        
        {/* View All Projects Button */}
        <div className="text-center">
          <Link 
            href="/realisations" 
            className="inline-flex items-center justify-center px-6 py-3 bg-[#2b3343] text-white font-medium rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Voir toutes nos réalisations
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
