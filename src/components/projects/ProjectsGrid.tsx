"use client";

import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import './ScrollbarHide.css';

interface ProjectsGridProps {
  projects: {id: number, image: string}[];
  className?: string;
  columns?: number;
  onProjectClick?: (imageId: number) => void;
}

export default function ProjectsGrid({ 
  projects, 
  className = '',
  columns = 3,
  onProjectClick
}: ProjectsGridProps) {
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Pagination for desktop view
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const paginatedProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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
  const handleScroll = useRef(
    debounce(() => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const cardWidth = carouselRef.current.clientWidth;
        const newIndex = Math.round(scrollPosition / cardWidth);
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
          setActiveIndex(newIndex);
        }
      }
    }, 50)
  ).current;

  // Navigate to specific slide functionality removed as it was unused

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  
  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (projects.length === 0) {
    return (
      <motion.div 
        className="text-center py-16 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-inner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <FaSearch className="text-gray-400 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Aucun projet trouvé</h3>
          <p className="text-gray-500 max-w-md">Aucun projet ne correspond à cette catégorie pour le moment. Essayez une autre catégorie.</p>
        </div>
      </motion.div>
    );
  }

  if (isMobile) {
    return (
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
            {projects.map((project) => (
              <div 
                key={project.id}
                className="flex-shrink-0 snap-center w-full" 
                style={{ scrollSnapAlign: 'center' }}
              >
                <ProjectCard 
                  image={project.image} 
                  className="h-full cursor-pointer"
                  onClick={() => onProjectClick?.(project.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <motion.div 
        className={`grid ${gridCols} gap-8 ${className}`}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {paginatedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <ProjectCard 
              image={project.image} 
              className="h-full cursor-pointer"
              onClick={() => onProjectClick?.(project.id)}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Pagination arrows - only show if more than one page */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className={`p-3 rounded-full ${currentPage === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white shadow-md hover:shadow-lg text-[#2b3343]'} transition-all duration-300`}
            aria-label="Previous page"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="text-[#2b3343] font-medium">
            {currentPage + 1} / {totalPages}
          </div>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className={`p-3 rounded-full ${currentPage === totalPages - 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white shadow-md hover:shadow-lg text-[#2b3343]'} transition-all duration-300`}
            aria-label="Next page"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
