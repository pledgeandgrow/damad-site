import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;

}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Syndic d'immeuble",
    content: "Service professionnel et réactif. L'équipe a su nous conseiller pour la modernisation de nos ascenseurs avec un excellent rapport qualité-prix.",
    rating: 5,

  },
  {
    id: 2,
    name: "Marie Laurent",
    role: "Gérante de résidence senior",
    content: "Intervention rapide et équipe très compétente. Les résidents sont ravis du nouveau modèle installé, plus silencieux et plus fiable.",
    rating: 5,

  },
  {
    id: 3,
    name: "Pierre Martin",
    role: "Propriétaire d'hôtel",
    content: "Nous avons fait appel à Damad Ascenseurs pour l'installation de deux nouveaux ascenseurs dans notre hôtel. Travail soigné et respect des délais.",
    rating: 4,

  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar 
          key={star} 
          className={`w-4 h-4 sm:w-5 sm:h-5 ${star <= rating ? 'text-[#2b3343]' : 'text-gray-200'}`} 
        />
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Detect device type
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Get visible cards based on device type
  const getVisibleCards = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3; // desktop
  };
  
  // Get card width based on visible cards
  const getCardWidth = () => {
    const visibleCards = getVisibleCards();
    if (visibleCards === 1) return '100%';
    if (visibleCards === 2) return 'calc(50% - 8px)';
    return 'calc(33.333% - 10px)'; // 3 cards
  };
  
  // Navigation functions
  const nextSlide = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Scroll to active slide when index changes
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.scrollWidth * (activeIndex / testimonials.length);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);
  
  // Swipe handlers
  const { ref: swipeRef, ...swipeHandlers } = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true
  });
  
  return (
    <section id="temoignages" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-[#2b3343] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-gray-100 px-3 py-1 rounded-full">Témoignages</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Ce que disent nos clients</h2>
          <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Découvrez les expériences de nos clients satisfaits avec nos services d&apos;installation et de maintenance d&apos;ascenseurs.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
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
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  className="flex-shrink-0 snap-center"
                  style={{ width: getCardWidth() }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 overflow-hidden">
                    <div className="h-2" style={{ backgroundColor: '#2b3343' }}></div>
                    <div className="p-6 sm:p-8 flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2b3343] text-white">
                          <FaQuoteLeft className="text-lg sm:text-xl" />
                        </div>
                        <StarRating rating={testimonial.rating} />
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{testimonial.content}</p>
                      
                      <div className="border-t border-gray-100 pt-4 mt-auto">
                        <h4 className="font-bold text-[#2b3343]">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === index ? 'bg-[#2b3343] w-5' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center z-10 hidden sm:flex"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center z-10 hidden sm:flex"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
