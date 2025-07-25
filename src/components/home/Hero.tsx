import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaBuilding, FaUsers, FaTools, FaCheckCircle } from 'react-icons/fa';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
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

  useEffect(() => {
    // Function to handle video loaded event
    const handleVideoLoaded = () => {
      console.log('Video loaded successfully');
      setIsVideoLoaded(true);
    };
    
    // Function to handle video error
    const handleVideoError = (e: Event) => {
      console.error('Video failed to load:', e);
      // Keep the fallback background visible
    };
    
    const videoElement = videoRef.current;
    if (videoElement) {
      // Add event listeners
      videoElement.addEventListener('loadeddata', handleVideoLoaded);
      videoElement.addEventListener('error', handleVideoError);
      
      // Force load attempt
      if (videoElement.readyState >= 3) {
        // If video is already loaded
        handleVideoLoaded();
      }
    }
    
    // Cleanup function
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleVideoLoaded);
        videoElement.removeEventListener('error', handleVideoError);
      }
    };
  }, []);

  return (
    <section className="relative h-[650px] sm:h-[700px] md:h-[800px] overflow-hidden flex items-center justify-center">
      {/* Background Video or Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Fallback background color/gradient while waiting for video */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b3343] to-[#4a5568] w-full h-full"></div>
        
        {/* Video element with conditional blur based on device */}
        <div className={`w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover scale-105 ${isMobile ? 'filter blur-[1px]' : 'filter blur-[2px]'}`}
            poster="/images/elevator-placeholder.jpg"
          >
            <source src="https://damad-ascenseurs.com/video/background_drone.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dynamic overlay based on device size */}
        <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-b from-[#2b3343]/70 to-[#2b3343]/40' : 'bg-gradient-to-r from-[#2b3343]/60 to-[#2b3343]/30'}`}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Headline with improved typography and responsive sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">Installation &amp; Maintenance</span> <br className="hidden sm:block" />
            <span className="inline-block mt-1">d&apos;Ascenseurs</span>
          </h1>
          
          {/* Description with better readability - optimized for mobile */}
          <p className="text-base xs:text-lg sm:text-xl text-white/90 mb-6 xs:mb-8 sm:mb-10 max-w-3xl mx-auto drop-shadow-md leading-relaxed px-1 xs:px-2 sm:px-0">
            Damad vous accompagne dans vos projets, de la conception à la maintenance, avec des solutions sur mesure et un service d&apos;excellence.
          </p>
          
          {/* CTA buttons with enhanced styling and animations - optimized for mobile */}
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center mt-6 xs:mt-8">
            <Link 
              href="/contact" 
              className="group bg-white hover:bg-gray-100 text-[#2b3343] font-medium py-3 xs:py-3.5 px-5 xs:px-7 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center transform hover:-translate-y-0.5 text-sm xs:text-base"
            >
              Demander un devis 
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white/20 font-medium py-3 xs:py-3.5 px-5 xs:px-7 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm xs:text-base"
            >
              Nos services
            </Link>
          </div>
          
          {/* Stats section with enhanced styling and animations - optimized for mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mt-8 xs:mt-10 md:mt-12">
            {[
              { number: '25+', label: 'Ans d\'expérience', icon: <FaBuilding className="w-5 h-5 text-[#2b3343] mx-auto" /> },
              { number: '1000+', label: 'Clients satisfaits', icon: <FaUsers className="w-5 h-5 text-[#2b3343] mx-auto" /> },
              { number: 'Sous 48h', label: 'Réponse Dépannage', icon: <FaTools className="w-5 h-5 text-[#2b3343] mx-auto" /> },
              { number: '100%', label: 'Garantie pièces', icon: <FaCheckCircle className="w-5 h-5 text-[#2b3343] mx-auto" /> }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center p-2 xs:p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="hidden xs:block mb-0.5 xs:mb-1">{item.icon}</div>
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-0.5 xs:mb-1 sm:mb-2">{item.number}</div>
                <div className="text-2xs xs:text-xs sm:text-sm text-white/80">{item.label}</div>
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
