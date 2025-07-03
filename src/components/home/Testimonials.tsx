import { FaQuoteLeft, FaStar } from 'react-icons/fa';
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
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-200'}`} 
        />
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="temoignages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Témoignages</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="text-gray-300 text-2xl mr-3" />
                  <StarRating rating={testimonial.rating} />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
