import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Marie D.',
    role: 'Propriétaire',
    content: 'Installation rapide et professionnelle. L\'équipe a su nous conseiller sur le meilleur modèle pour notre résidence. Nous sommes ravis du résultat !',
    rating: 5,
    date: '15 mars 2024'
  },
  {
    id: 2,
    name: 'Thomas L.',
    role: 'Gérant de copropriété',
    content: 'Service de maintenance réactif et efficace. Les techniciens sont compétents et toujours à l\'écoute. Je recommande vivement.',
    rating: 5,
    date: '2 février 2024'
  },
  {
    id: 3,
    name: 'Sophie M.',
    role: 'Architecte',
    content: 'Collaboration parfaite sur plusieurs projets. Professionnalisme et expertise au rendez-vous. Des solutions adaptées à chaque besoin.',
    rating: 5,
    date: '18 janvier 2024'
  },
  {
    id: 4,
    name: 'Pierre G.',
    role: 'Gérant d\'hôtel',
    content: 'Modernisation de nos ascenseurs effectuée dans les temps et sans dérangement pour nos clients. Très satisfait du service.',
    rating: 4,
    date: '5 décembre 2023'
  },
  {
    id: 5,
    name: 'Élodie R.',
    role: 'Particulier',
    content: 'Installation d\'un monte-escalier pour ma mère âgée. Service attentionné et installation soignée. Merci pour votre professionnalisme.',
    rating: 5,
    date: '20 novembre 2023'
  },
  {
    id: 6,
    name: 'Alexandre B.',
    role: 'Gérant de résidence senior',
    content: 'Contrat de maintenance clair et interventions rapides. Une équipe sérieuse et fiable sur le long terme.',
    rating: 5,
    date: '8 octobre 2023'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-5 w-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les avis de nos clients satisfaits par nos services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start">
                <FaQuoteLeft className="text-gray-300 w-8 h-8 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <p className="text-gray-700 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="mt-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <div className="mt-4">
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Vous aussi, faites partie de nos clients satisfaits
          </p>
          <a
            href="#devis-form"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2b3343] hover:bg-[#3d4759] shadow-sm"
          >
            Demander un devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
