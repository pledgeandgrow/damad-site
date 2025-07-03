import { FaHome, FaBuilding, FaIndustry, FaTools, FaTachometerAlt, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ServiceCards() {
  const services = [
    {
      icon: <FaHome className="w-10 h-10 text-[#2b3343]" />,
      title: 'Ascenseurs Résidentiels',
      description: 'Solutions élégantes et silencieuses pour les maisons individuelles et les résidences',
      features: ['Jusqu\'à 5 étages', 'Design personnalisable', 'Installation rapide']
    },
    {
      icon: <FaBuilding className="w-10 h-10 text-[#2b3343]" />,
      title: 'Ascenseurs Collectifs',
      description: 'Performants et fiables pour les immeubles d\'habitation et les bureaux',
      features: ['Jusqu\'à 20 étages', 'Grande capacité', 'Faible consommation']
    },
    {
      icon: <FaIndustry className="w-10 h-10 text-[#2b3343]" />,
      title: 'Ascenseurs Industriels',
      description: 'Robustes et sécurisés pour les environnements exigeants',
      features: ['Jusqu\'à 10 tonnes', 'Résistants aux intempéries', 'Entretien personnalisé']
    },
    {
      icon: <FaTools className="w-10 h-10 text-[#2b3343]" />,
      title: 'Modernisation',
      description: 'Mettez à jour votre ascenseur existant avec les dernières technologies',
      features: ['Économie d\'énergie', 'Nouvelle cabine', 'Mise aux normes']
    },
    {
      icon: <FaTachometerAlt className="w-10 h-10 text-[#2b3343]" />,
      title: 'Maintenance',
      description: 'Contrats d\'entretien sur mesure pour une tranquillité d\'esprit',
      features: ['Intervention 24/7', 'Pièces détachées', 'Rapports détaillés']
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 text-[#2b3343]" />,
      title: 'Contrôle Technique',
      description: 'Vérification complète de la conformité et de la sécurité',
      features: ['Rapport détaillé', 'Mise en conformité', 'Conseils experts']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Solutions d&apos;Ascenseurs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de solutions adaptées à tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <a 
                  href="#devis-form" 
                  className="inline-flex items-center text-sm font-medium text-[#2b3343] hover:text-[#3d4759]"
                >
                  Demander un devis
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
