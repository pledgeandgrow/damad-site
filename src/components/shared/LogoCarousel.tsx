import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Logo {
  id: number;
  name: string;
  src: string;
  alt: string;
}

// Sample logos - replace with actual client logos
const clientLogos: Logo[] = [
  { id: 1, name: 'Client 1', src: '/images/clients/client1.png', alt: 'Client 1 Logo' },
  { id: 2, name: 'Client 2', src: '/images/clients/client2.png', alt: 'Client 2 Logo' },
  { id: 3, name: 'Client 3', src: '/images/clients/client3.png', alt: 'Client 3 Logo' },
  { id: 4, name: 'Client 4', src: '/images/clients/client4.png', alt: 'Client 4 Logo' },
  { id: 5, name: 'Client 5', src: '/images/clients/client5.png', alt: 'Client 5 Logo' },
  { id: 6, name: 'Client 6', src: '/images/clients/client6.png', alt: 'Client 6 Logo' },
];

interface LogoCarouselProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function LogoCarousel({ 
  title = "Ils nous font confiance", 
  subtitle = "Des entreprises et institutions qui nous accordent leur confiance pour leurs installations d'ascenseurs",
  className = "" 
}: LogoCarouselProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Duplicate logos for infinite scroll effect
  const allLogos = [...clientLogos, ...clientLogos];
  
  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleMouseEnter = () => {
    setIsPaused(true);
  };
  
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className={`py-12 bg-[#2b3343] text-white overflow-hidden ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h3 className="text-2xl md:text-3xl font-semibold text-white">{title}</h3>}
          {subtitle && <p className="text-white/80 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#2b3343] to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#2b3343] to-transparent"></div>
        
        {/* Logo container */}
        <div 
          ref={carouselRef}
          className={`flex items-center gap-10 py-6`}
          style={{
            width: 'fit-content',
            animation: isAnimating ? `scroll 30s linear infinite ${isPaused ? 'paused' : 'running'}` : 'none',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {allLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="flex items-center justify-center h-16 w-32 bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt}
                width={100}
                height={50}
                className="max-h-full max-w-full object-contain brightness-200 contrast-100 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
