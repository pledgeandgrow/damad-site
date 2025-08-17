import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaAward } from 'react-icons/fa';
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
    <section className="relative h-[650px] sm:h-[700px] md:h-[800px] overflow-hidden flex items-center justify-center -mt-[72px] md:-mt-[96px] pt-[72px] md:pt-[96px]">
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
            className={`absolute inset-0 w-full h-full object-cover ${isMobile }`}
            poster="/images/elevator-placeholder.jpg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dynamic overlay based on device size */}
        <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-b from-[#2b3343]/70 to-[#2b3343]/40' : 'bg-gradient-to-r from-[#2b3343]/60 to-[#2b3343]/30'}`}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-10 sm:pt-16 md:pt-20">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Headline with improved typography and responsive sizing */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-0 sm:mb-1 leading-tight tracking-tight drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">DMD</span> <br className="hidden sm:block" />
            <span className="inline-block mt-1"></span>
          </h1>
          
          {/* Description with better readability - optimized for mobile */}
          <p className="text-base xs:text-lg sm:text-xl text-white/90 mb-6 xs:mb-8 sm:mb-10 max-w-3xl mx-auto drop-shadow-md leading-relaxed px-1 xs:px-2 sm:px-0 sm:-mt-6">
            Damad vous accompagne dans vos projets, de l&#39;installation à la maintenance, avec des solutions d&#39;accessibilité et un service d&#39;excellence.
          </p>
          
          {/* CTA buttons with enhanced styling and animations - optimized for mobile */}
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center mt-6 xs:mt-8">
            <Link 
              href="/contact" 
              className="group bg-[#ff5c35] hover:bg-[#ff5c35]/90 text-white font-medium py-3 xs:py-3.5 px-5 xs:px-7 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center transform hover:-translate-y-0.5 text-sm xs:text-base"
            >
              Nous contacter 
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/a-propos" 
              className="border-2 border-[#0046fe] bg-[#0046fe] text-white hover:bg-[#0046fe]/90 font-medium py-3 xs:py-3.5 px-5 xs:px-7 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm xs:text-base"
            >
              Notre histoire 
            </Link>
          </div>
          
          {/* Stats section with enhanced styling and animations - optimized for mobile */}
          <div className="grid grid-cols-2 gap-4 xs:gap-5 sm:gap-6 max-w-4xl mx-auto mt-8 xs:mt-10 md:mt-12">
            {[
              { number: '20+', label: "Ans d'expérience", icon: <FaAward className="w-5 h-5 text-[#99a8b1] mx-auto" /> },
              { number: '1000+', label: 'Appareils en gestion', icon: <FaElevator className="w-5 h-5 text-[#99a8b1] mx-auto" /> }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center p-3 xs:p-4 sm:p-5 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="hidden xs:block mb-1 xs:mb-2">{item.icon}</div>
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
