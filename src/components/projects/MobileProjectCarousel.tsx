"use client";

import { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';
import { motion } from 'framer-motion';

interface MobileProjectCarouselProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

export default function MobileProjectCarousel({ projects, onProjectClick }: MobileProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const maxIndex = projects.length - 1;

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(current => (current === maxIndex ? 0 : current + 1));
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  }, [maxIndex, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(current => (current === 0 ? maxIndex : current - 1));
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  }, [maxIndex, isAnimating]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
    trackTouch: true
  });

  // Auto-scroll with pause on hover
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide, isPaused]);

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

  return (
    <motion.div 
      className="relative px-4 w-full" 
      {...handlers}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden rounded-xl shadow-lg">
        <motion.div 
          className="flex" 
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="min-w-full px-2"
              whileTap={{ scale: 0.98 }}
            >
              <ProjectCard 
                project={project} 
                className="h-full cursor-pointer"
                onClick={() => onProjectClick?.(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setCurrentIndex(index);
              setTimeout(() => setIsAnimating(false), 500);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#2b3343] shadow-md' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={index === currentIndex ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2b3343] p-3 rounded-full shadow-lg z-10"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FaChevronLeft className="w-4 h-4" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2b3343] p-3 rounded-full shadow-lg z-10"
        aria-label="Next slide"
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FaChevronRight className="w-4 h-4" />
      </motion.button>
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-[#2b3343]" 
          initial={{ width: '0%' }}
          animate={{ width: `${(currentIndex + 1) / projects.length * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
