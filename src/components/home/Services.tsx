import { FaTools, FaWrench, FaShieldAlt, FaArrowRight, FaChevronLeft, FaChevronRight, FaHammer, FaSyncAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

// Enhanced service cards with more detailed information and brand colors
const services = [
  {
    icon: <FaWrench className="w-6 h-6 text-white" />,
    title: "Maintenance",
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
    features: ["Response sous 48h", "Délai d'intervention court", "Techniciens qualifiés"],
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
    icon: <FaHammer className="w-6 h-6 text-white" />,
    title: "Réparation",
    description: "Réparation professionnelle de tous types de pannes et dysfonctionnements sur vos ascenseurs.",
    shortDesc: "Solutions efficaces pour tous problèmes techniques.",
    features: ["Diagnostic précis", "Réparations durables", "Pièces de qualité"],
    color: "#0046fe", // Primary brand color
    gradient: "from-[#0046fe] to-[#0046fe]/80",
    link: "/services/reparation"
  },
  {
    icon: <FaSyncAlt className="w-6 h-6 text-white" />,
    title: "Modernisation & Renovation",
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
  const carouselRef = useRef<HTMLDivElement>(null);

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

  // Handle carousel navigation
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  // Configure swipe handlers
  const { ref: swipeRef, ...swipeHandlers } = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true
  });

  // Calculate visible cards and card width based on device type
  const getVisibleCards = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3; // desktop
  };

  const getCardWidth = () => {
    const visibleCards = getVisibleCards();
    if (visibleCards === 1) return '100%';
    if (visibleCards === 2) return 'calc(50% - 8px)';
    return 'calc(33.333% - 10px)'; // 3 cards
  };

  // Scroll to active slide when index changes
  useEffect(() => {
    // Only run this on client side
    if (typeof window !== 'undefined' && carouselRef.current) {
      // Use setTimeout to ensure DOM is fully rendered
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
  }, [activeIndex]);

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
            Solutions sur Mesure
          </h2>
          <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Découvrez nos services conçus pour garantir la sécurité, la fiabilité et la longévité de votre installation : ascenseurs, EPMR, monte-charges, etc. 
          </p>
        </div>
        
        {/* Services Carousel for all device types */}
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
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 snap-center service-card`}
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
                    <ul className={`text-left mb-4 ${isMobile ? 'block' : 'hidden sm:block'}`}>
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs sm:text-sm text-gray-600 mb-1.5">
                          <span className={`inline-flex items-center justify-center w-4 h-4 rounded-full mr-2 bg-[#0046fe] text-white text-[10px] shadow-sm`}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Card footer - removed 'En savoir plus' text */}
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <span className="inline-flex items-center text-xs sm:text-sm font-medium text-[#0046fe] group-hover:text-[#0046fe]/80 transition-colors duration-300">
                        <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === index ? 'bg-[#0046fe] w-5' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
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
        </div>

        {/* CTA Button removed */}
      </div>
    </section>
  );
}
