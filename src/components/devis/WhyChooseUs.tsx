import { FaAward, FaUsers, FaCogs, FaHeadset, FaHandshake, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaAward className="w-8 h-8 text-[#2b3343]" />,
      title: 'Expertise',
      description: 'Plus de 15 ans d\'expérience dans l\'installation et la maintenance d\'ascenseurs.'
    },
    {
      icon: <FaUsers className="w-8 h-8 text-[#2b3343]" />,
      title: 'Équipe Qualifiée',
      description: 'Des techniciens certifiés et formés aux dernières technologies.'
    },
    {
      icon: <FaCogs className="w-8 h-8 text-[#2b3343]" />,
      title: 'Technologie de Pointe',
      description: 'Des solutions innovantes et des équipements de dernière génération.'
    },
    {
      icon: <FaHeadset className="w-8 h-8 text-[#2b3343]" />,
      title: 'Support 24/7',
      description: 'Un service client disponible à tout moment pour répondre à vos besoins.'
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-[#2b3343]" />,
      title: 'Approche Personnalisée',
      description: 'Des solutions sur mesure adaptées à vos besoins spécifiques.'
    },
    {
      icon: <FaClock className="w-8 h-8 text-[#2b3343]" />,
      title: 'Respect des Délais',
      description: 'Une organisation rigoureuse pour respecter nos engagements de délais.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Découvrez ce qui fait de nous le partenaire idéal pour votre projet d&apos;ascenseur.
          </p>
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
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#2b3343] to-[#3d4759] rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-gray-200">
                Notre équipe est à votre disposition pour discuter de votre projet et vous proposer la solution la plus adaptée à vos besoins.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#devis-form"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#2b3343] bg-white hover:bg-gray-100"
                >
                  Demander un devis
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="tel:+33123456789"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-transparent border-2 border-white hover:bg-white/10"
                >
                  <span className="mr-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
