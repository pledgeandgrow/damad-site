import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaAward } from 'react-icons/fa';
import { FaElevator } from 'react-icons/fa6';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Debug video loading
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      console.log('Video element found, attempting to load video');
      
      const handleCanPlay = () => {
        console.log('Video can play now');
      };
      
      const handlePlaying = () => {
        console.log('Video is playing');
      };
      
      const handleVideoLoaded = () => {
        console.log('Video loaded successfully');
      };
      
      const handleVideoError = (e: Event) => {
        console.error('Video failed to load:', e);
        if (videoElement.error) {
          console.error('Error code:', videoElement.error.code);
          console.error('Error message:', videoElement.error.message);
        }
      };
      
      // Add comprehensive event listeners for debugging
      videoElement.addEventListener('loadeddata', handleVideoLoaded);
      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.addEventListener('playing', handlePlaying);
      videoElement.addEventListener('error', handleVideoError);
      
      return () => {
        if (videoElement) {
          videoElement.removeEventListener('loadeddata', handleVideoLoaded);
          videoElement.removeEventListener('canplay', handleCanPlay);
          videoElement.removeEventListener('playing', handlePlaying);
          videoElement.removeEventListener('error', handleVideoError);
        }
      };
    }
  }, []);

  return (
    <section className="relative h-[650px] sm:h-[700px] md:h-[800px] overflow-hidden flex items-center justify-center -mt-[72px] md:-mt-[96px] pt-[60px] md:pt-[80px]">
      {/* Background Video or Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Fallback background color/gradient while waiting for video */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b3343] to-[#4a5568] w-full h-full"></div>
        
        {/* Video element with conditional blur based on device */}
        <div className="w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            src="/videos/ascenceur.mp4"
            className={`absolute inset-0 w-full h-full object-cover ${isMobile ? 'blur-[2px]' : 'blur-[2px]'}`}
            poster="/images/elevator-placeholder.jpg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Overlay removed */}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-4 sm:pt-8 md:pt-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Logo and title */}
          <div className="mb-4 sm:mb-6 flex items-center justify-center ">
            <Image 
              src="/damad-transparent-white.png" 
              alt="DMD Logo" 
              width={112}
              height={112}
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
              priority
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white ml-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] text-shadow">DMD</h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] text-shadow">Maintenance & Réparations Ascenseurs</h2>
          </div>
          
          {/* CTA buttons removed */}
          
          {/* Stats section with enhanced styling and animations - optimized for mobile */}
          <div className="mt-70 grid grid-cols-2 gap-4 xs:gap-5 sm:gap-6 max-w-4xl mx-auto mt-8 xs:mt-10 md:mt-12">
            {[
              { number: '+20', label: "Années d'expertise", icon: <FaAward className="w-5 h-5 text-white mx-auto" /> },
              { number: '+1000', label: 'Appareils en gestion', icon: <FaElevator className="w-5 h-5 text-white mx-auto" /> }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center p-3 xs:p-4 sm:p-5 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="block mb-1 xs:mb-2">{item.icon}</div>
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-1 xs:mb-2">{item.number}</div>
                <div className="text-xs xs:text-sm sm:text-base text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade effect */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-gradient-to-t from-black/20 to-transparent h-12"></div>
      </div>
    </section>
  );
}
