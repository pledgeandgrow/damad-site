import React from 'react';
import { FaBuilding, FaIndustry, FaTools, FaTachometerAlt, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ServiceCards() {
  const services = [
    {
      icon: <FaTools className="w-10 h-10 text-[#2b3343]" />,
      title: 'Dépannage',
      description: 'Service d\'urgence pour résoudre rapidement les problèmes de votre ascenseur',
      features: ['Intervention rapide', 'Disponible Réponse sous 48h', 'Techniciens qualifiés'],
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: <FaBuilding className="w-10 h-10 text-[#2b3343]" />,
      title: 'Installation',
      description: 'Installation professionnelle d\'ascenseurs pour tous types de bâtiments',
      features: ['Planification détaillée', 'Conformité aux normes', 'Mise en service complète'],
      bgColor: 'from-gray-50 to-gray-100'
    },
    {
      icon: <FaIndustry className="w-10 h-10 text-[#2b3343]" />,
      title: 'Réparation',
      description: 'Services de réparation complets pour tous types de pannes et dysfonctionnements',
      features: ['Diagnostic précis', 'Pièces d\'origine', 'Garantie des réparations'],
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: <FaTools className="w-10 h-10 text-[#2b3343]" />,
      title: 'Modernisation',
      description: 'Mettez à jour votre ascenseur existant avec les dernières technologies',
      features: ['Économie d\'énergie', 'Nouvelle cabine', 'Mise aux normes'],
      bgColor: 'from-gray-50 to-gray-100'
    },
    {
      icon: <FaTachometerAlt className="w-10 h-10 text-[#2b3343]" />,
      title: 'Maintenance',
      description: 'Contrats d\'entretien sur mesure pour une tranquillité d\'esprit',
      features: ['Réponse sous 48h', 'Pièces détachées', 'Rapports détaillés'],
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 text-[#2b3343]" />,
      title: 'Contrôle Technique',
      description: 'Vérification complète de la conformité et de la sécurité',
      features: ['Rapport détaillé', 'Mise en conformité', 'Conseils experts'],
      bgColor: 'from-gray-50 to-gray-100'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#2b3343] mb-4 relative inline-block"
          >
            <span className="relative z-10">Nos Services</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez nos services professionnels pour l&apos;entretien et l&apos;installation de vos ascenseurs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-gradient-to-br ${service.bgColor} rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#2b3343] to-[#3d4759] rounded-lg shadow-md">
                    {React.cloneElement(service.icon, { className: "w-10 h-10 text-white" })}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-[#2b3343]">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-[#2b3343] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
