"use client";

import { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

interface MobileProjectCarouselProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

export default function MobileProjectCarousel({ projects, onProjectClick }: MobileProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = projects.length - 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex(current => (current === maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(current => (current === 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true
  });

  // Auto-scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide]);

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucun projet trouvé pour cette catégorie.</p>
      </div>
    );
  }

  return (
    <div className="relative px-4 w-full" {...handlers}>
      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="min-w-full px-2">
              <ProjectCard 
                project={project} 
                className="h-full cursor-pointer"
                onClick={() => onProjectClick?.(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-[#2b3343]' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2b3343] p-2 rounded-full shadow-md z-10"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2b3343] p-2 rounded-full shadow-md z-10"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
