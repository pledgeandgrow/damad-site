"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import ServiceCard from '@/components/services/ServiceCard';

interface MobileServiceCarouselProps {
  services: {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
    color: string;
    features: string[];
    slug: string;
  }[];
}

export default function MobileServiceCarousel({ services }: MobileServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = services.length - 1;

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

  return (
    <div className="relative px-4 w-full" {...handlers}>
      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={service.id} className="min-w-full px-2">
              <Link href={`/services/${service.slug}`} className="block h-full">
                <ServiceCard service={service} index={index} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {services.map((_, index) => (
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
