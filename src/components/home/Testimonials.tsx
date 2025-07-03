import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRef } from 'react';

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
    role: "Syndic d&apos;immeuble",
    content: "Service professionnel et réactif. L&apos;équipe a su nous conseiller pour la modernisation de nos ascenseurs avec un excellent rapport qualité-prix.",
    rating: 5
  },
  {
    id: 2,
    name: "Marie Laurent",
    role: "Gérante de résidence senior",
    content: "Intervention rapide et équipe très compétente. Les résidents sont ravis du nouveau modèle installé, plus silencieux et plus fiable.",
    rating: 5
  },
  {
    id: 3,
    name: "Pierre Martin",
    role: "Propriétaire d&apos;hôtel",
    content: "Nous avons fait appel à Damad Ascenseurs pour l&apos;installation de deux nouveaux ascenseurs dans notre hôtel. Travail soigné et respect des délais.",
    rating: 4
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar 
          key={star} 
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4a90e2] to-[#2b3343] mx-auto rounded-full"></div>
        </div>

        <motion.div 
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: 0 }}
            dragElastic={0.2}
            ref={carouselRef}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <FaQuoteLeft className="text-gray-300 text-4xl mb-4" />
                  <p className="text-gray-700 mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <StarRating rating={testimonial.rating} />
                      <h4 className="font-semibold text-gray-900 mt-2">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: testimonial.role }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-16 text-center">
          <button 
            className="inline-flex items-center justify-center px-8 py-4 bg-industrial-orange text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Parlez-nous de votre projet
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
