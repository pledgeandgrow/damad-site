import { FaAward, FaUsers, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaAward className="w-10 h-10 text-[#2b3343]" />,
      title: 'Expertise',
      description: 'Plus de 15 ans d\'expérience dans l\'installation et la maintenance d\'ascenseurs.',
      color: 'bg-blue-50'
    },
    {
      icon: <FaUsers className="w-10 h-10 text-[#2b3343]" />,
      title: 'Équipe Qualifiée',
      description: 'Des techniciens certifiés et formés aux dernières technologies.',
      color: 'bg-gray-50'
    },
    {
      icon: <FaHandshake className="w-10 h-10 text-[#2b3343]" />,
      title: 'Approche Personnalisée',
      description: 'Des solutions sur mesure adaptées à vos besoins spécifiques.',
      color: 'bg-blue-50'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[#2b3343] opacity-5 pattern-grid-lg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#2b3343] sm:text-4xl relative inline-block"
          >
            <span className="relative z-10">Pourquoi nous choisir ?</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto"
          >
            Découvrez ce qui fait de nous le partenaire idéal pour votre projet d&apos;ascenseur.
          </motion.p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <div className={`flow-root ${feature.color} rounded-lg px-6 pb-8 h-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}>
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-lg border-2 border-[#2b3343]/10">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold text-[#2b3343] tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
