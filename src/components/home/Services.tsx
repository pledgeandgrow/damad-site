import { FaTools, FaWrench, FaShieldAlt, FaChevronLeft, FaChevronRight, FaSyncAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  shortDesc: string;
  features: string[];
  color: string;
  gradient: string;
  link: string;
}

// Enhanced service cards with more detailed information and brand colors
const services: ServiceFeature[] = [
  {
    icon: <FaWrench className="w-6 h-6 text-white" />,
    title: "Maintenance & Entretien",
    description: "Contrats de maintenance préventive et corrective pour garantir la longévité de votre équipement.",
    shortDesc: "Entretien régulier pour une performance optimale.",
    features: ["Visites programmées", "Pièces d'origine", "Rapport détaillé"],
    color: "#0046fe", // Primary brand color
    gradient: "from-[#0046fe] to-[#0046fe]/80",
    link: "/services/maintenance"
  },
  {
    icon: <FaShieldAlt className="w-6 h-6 text-white" />,
    title: "Dépannage",
    description: "Service Dépannage disponible 24 heures sur 24, 7 jours sur 7 pour tout dépannage.",
    shortDesc: "Intervention rapide en cas d'urgence.",
    features: ["Réponse Rapide", "Délai d'intervention court", "Techniciens qualifiés"],
    color: "#0046fe", // Primary brand color
    gradient: "from-[#0046fe] to-[#0046fe]/80",
    link: "/services/depannage"
  },
  {
    icon: <FaTools className="w-6 h-6 text-white" />,
    title: "Installation",
    description: "Installation complète d'ascenseurs neufs, adaptés à vos besoins et à votre espace.",
    shortDesc: "Solutions sur mesure pour tous types de bâtiments.",
    features: ["Étude personnalisée", "Installation rapide", "Conformité aux normes"],
    color: "#0046fe", // Primary brand color
    gradient: "from-[#0046fe] to-[#0046fe]/80",
    link: "/services/installation"
  },
  {
    icon: <FaSyncAlt className="w-6 h-6 text-white" />,
    title: "Modernisation & Rénovation",
    description: "Mise à niveau de vos installations pour améliorer la sécurité, l'efficacité énergétique et le confort.",
    shortDesc: "Donnez une seconde vie à vos ascenseurs.",
    features: ["Mise aux normes", "Économies d'énergie", "Amélioration du confort"],
    color: "#0046fe", // Primary brand color
    gradient: "from-[#0046fe] to-[#0046fe]/80",
    link: "/services/modernisation"
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Check device type
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640); // sm breakpoint
      setIsTablet(width >= 640 && width < 1024); // between sm and lg
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Handle carousel navigation for mobile/tablet only
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  // Touch handling removed - using native scroll behavior instead

  // Calculate card width for mobile/tablet
  const getCardWidth = () => {
    if (isMobile) return '100%';
    if (isTablet) return 'calc(50% - 8px)';
    return '100%'; // Not used for desktop
  };

  // Debounce function to limit scroll event firing
  const debounce = <T extends (...args: unknown[]) => void>(func: T, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Handle scroll position detection with debounce
  const handleScroll = debounce(() => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < services.length) {
        setActiveIndex(newIndex);
      }
    }
  }, 100);

  // Add scroll event listener
  useEffect(() => {
    const currentRef = carouselRef.current;
    if ((isMobile || isTablet) && currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      return () => currentRef.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, isMobile, isTablet]);

  // Scroll to active slide when index changes (mobile/tablet only)
  useEffect(() => {
    // Only run this on client side and only for mobile/tablet
    if ((isMobile || isTablet) && typeof window !== 'undefined' && carouselRef.current) {
      setTimeout(() => {
        const cardElements = carouselRef.current?.querySelectorAll('.service-card');
        if (cardElements && cardElements.length > activeIndex) {
          const cardElement = cardElements[activeIndex] as HTMLElement;
          if (cardElement) {
            const containerPadding = 16; // container padding
            const leftPosition = cardElement.offsetLeft - containerPadding;
            
            carouselRef.current?.scrollTo({
              left: leftPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
    }
  }, [activeIndex, isMobile, isTablet]);

  return (
    <div id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
            Solutions sur Mesure
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Découvrez nos services pour garantir la sécurité, la fiabilité et la longévité de vos appareils d{`'`}accessibilité : ascenseurs, EPMR, monte-charges, etc. 
          </p>
        </div>
        
        {/* Services display - grid for desktop, carousel for mobile/tablet */}
        <div className="relative mb-10">
          {/* Desktop view - static grid */}
          <div className={`${isMobile || isTablet ? 'hidden' : 'block'} px-4 md:px-8`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div 
                    className="block h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative hover:translate-y-[-5px] hover:border-blue-600 group cursor-pointer"
                    onClick={() => window.location.href = service.link || '#'}
                  >
                    <div className={`h-2 bg-[#0046fe]`}></div>
                    <div className="p-5 sm:p-6 text-center flex flex-col h-full">
                      <div 
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 mx-auto bg-[#0046fe] transform transition-transform group-hover:scale-110 shadow-md`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-[#2b3343] group-hover:text-[#0046fe] transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        {service.description}
                      </p>
                      
                      <ul className="text-left mb-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600 mb-2">
                            <span className={`inline-flex items-center justify-center w-4 h-4 rounded-full mr-2 bg-[#0046fe] text-white text-[10px] shadow-sm flex-shrink-0`}>✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link 
                        href={service.link || '#'}
                        className="mt-auto inline-block w-full py-2 px-4 bg-white border border-[#0046fe] text-[#0046fe] rounded-md font-medium hover:bg-[#0046fe] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                      >
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile/Tablet view - carousel */}
          <div className={`${isMobile || isTablet ? 'block' : 'hidden'} overflow-hidden px-2 md:px-6`}>
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 gap-6"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth'
              }}
              // Touch handling removed
            >
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 snap-center service-card px-2`}
                  style={{ width: getCardWidth() }}
                >
                  <Link 
                    href={service.link || '#'}
                    className="block h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative hover:translate-y-[-5px] hover:border-blue-600 group"
                  >
                    <div className={`h-2 bg-[#0046fe]`}></div>
                    <div className="p-4 sm:p-6 text-center">
                      <div 
                        className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-3 sm:mb-4 mx-auto bg-[#0046fe] transform transition-transform group-hover:scale-110 shadow-md`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#2b3343] group-hover:text-[#0046fe] transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      {/* Show short description on mobile, full on larger screens */}
                      <p className="text-gray-600 text-sm mb-3 sm:mb-4">
                        {isMobile ? service.shortDesc : service.description}
                      </p>
                      
                      {/* Show features on all screens */}
                      <ul className="text-left mb-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-xs sm:text-sm text-gray-600 mb-1.5">
                            <span className={`inline-flex items-center justify-center w-4 h-4 rounded-full mr-2 bg-[#0046fe] text-white text-[10px] shadow-sm`}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile-only Carousel Controls */}
          <div className={`${isMobile || isTablet ? 'flex' : 'hidden'} justify-center mt-6 gap-3`}>
            {/* Mobile navigation dots */}
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? 'bg-[#0046fe] w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Mobile-only Navigation Arrows */}
          {(isMobile || isTablet) && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center z-10 hidden sm:flex border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors duration-300 group"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="text-[#0046fe] group-hover:text-[#0046fe]/80 transition-colors duration-300" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center z-10 hidden sm:flex border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors duration-300 group"
                aria-label="Next slide"
              >
                <FaChevronRight className="text-[#0046fe] group-hover:text-[#0046fe]/80 transition-colors duration-300" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
