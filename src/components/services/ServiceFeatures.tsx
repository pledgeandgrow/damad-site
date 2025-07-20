'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaCogs, FaClock, FaLeaf, FaHeadset, FaEuroSign } from 'react-icons/fa';

const features = [
  {
    icon: <FaShieldAlt className="w-8 h-8 text-white" />,
    title: 'Sécurité Garantie',
    description: 'Tous nos services sont conformes aux normes de sécurité les plus strictes pour une tranquillité d\'esprit totale.'
  },
  {
    icon: <FaCogs className="w-8 h-8 text-white" />,
    title: 'Expertise Technique',
    description: 'Une équipe d\'experts certifiés à votre écoute pour des solutions techniques innovantes et fiables.'
  },
  {
    icon: <FaClock className="w-8 h-8 text-white" />,
    title: 'Response sous 48h',
    description: 'Un service d\'urgence avec réponse sous 48h pour répondre à tous vos besoins en dépannage.'
  },
  {
    icon: <FaLeaf className="w-8 h-8 text-white" />,
    title: 'Solutions Éco-responsables',
    description: 'Des technologies économes en énergie pour réduire votre empreinte environnementale et vos coûts.'
  },
  {
    icon: <FaHeadset className="w-8 h-8 text-white" />,
    title: 'Support Client Premium',
    description: 'Un accompagnement personnalisé et réactif à chaque étape de votre projet.'
  },
  {
    icon: <FaEuroSign className="w-8 h-8 text-white" />,
    title: 'Meilleur Rapport Qualité-Prix',
    description: 'Des solutions sur mesure adaptées à votre budget sans compromis sur la qualité.'
  }
];

export default function ServiceFeatures() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-[#2b3343] to-[#1a202c] text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Pourquoi Nous Choisir ?
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les engagements qui font de nous le partenaire de confiance pour tous vos projets d&apos;ascenseurs.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
              variants={item}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
