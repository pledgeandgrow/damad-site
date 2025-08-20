'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Use images from public/images/realisations for the home page showcase
const realisationImages = [
  { id: 1, src: '/images/realisations/realisation16.png', alt: 'Réalisation 16' },
  { id: 2, src: '/images/realisations/realisation12.png', alt: 'Réalisation 12' },
  { id: 3, src: '/images/realisations/realisation10.png', alt: 'Réalisation 10' },
  { id: 4, src: '/images/realisations/realisation24.png', alt: 'Réalisation 24' },
  { id: 5, src: '/images/realisations/realisation27.png', alt: 'Réalisation 27' },
  { id: 6, src: '/images/realisations/realisation29.png', alt: 'Réalisation 29' },
  { id: 7, src: '/images/realisations/realisation31.png', alt: 'Réalisation 31' },
  { id: 8, src: '/images/realisations/realisation34.png', alt: 'Réalisation 34' },
];

// Create projects array using the realisationImages
const projects = realisationImages.map((img) => ({
  id: img.id,
  title: `Réalisation ${img.id}`,
  image: img.src,
  alt: img.alt,
  slug: `realisation-${img.id}`
}));

const Projects: React.FC = () => {
  return (
    <section id="realisations" className="py-16 sm:py-20 bg-[#fbfcfd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">Nos Projets Récents</h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Découvrez nos dernières réalisations et projets d&apos;installation, de maintenance et de modernisation d&apos;ascenseurs.
          </p>
        </div>
        
        {/* Projects Grid - 4 per row on desktop, 2 per row on tablet, 1 per row on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group hover:translate-y-[-5px]">
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
