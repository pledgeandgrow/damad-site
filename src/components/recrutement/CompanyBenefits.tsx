"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaHandHoldingHeart, FaCalendarAlt, FaLaptop, FaUserFriends, FaTrophy } from 'react-icons/fa';

export default function CompanyBenefits() {
  const benefits = [
    {
      icon: <FaGraduationCap className="w-6 h-6 text-white" />,
      title: "Formation continue",
      description: "Développez vos compétences grâce à nos programmes de formation réguliers et certifications professionnelles."
    },
    {
      icon: <FaHandHoldingHeart className="w-6 h-6 text-white" />,
      title: "Mutuelle santé",
      description: "Une couverture santé complète pour vous et votre famille avec une participation employeur avantageuse."
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6 text-white" />,
      title: "Équilibre travail-vie",
      description: "Horaires flexibles et possibilité de télétravail partiel pour certains postes administratifs."
    },
    {
      icon: <FaLaptop className="w-6 h-6 text-white" />,
      title: "Équipement moderne",
      description: "Accès aux dernières technologies et outils pour travailler efficacement sur le terrain ou au bureau."
    },
    {
      icon: <FaUserFriends className="w-6 h-6 text-white" />,
      title: "Environnement collaboratif",
      description: "Rejoignez une équipe soudée où l'entraide et le partage de connaissances sont valorisés."
    },
    {
      icon: <FaTrophy className="w-6 h-6 text-white" />,
      title: "Primes et incentives",
      description: "Reconnaissance de vos performances avec un système de primes et d'avantages attractifs."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#2b3343] mb-4 relative inline-block">
            <span className="relative z-10">Avantages & Bénéfices</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que Damad Ascenseurs offre à ses collaborateurs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#2b3343] to-[#3d4759] rounded-lg shadow-md">
                    {benefit.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-[#2b3343]">{benefit.title}</h3>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#2b3343] mb-4">Rejoignez-nous !</h3>
            <p className="text-gray-700 mb-6">
              Chez Damad, nous valorisons le talent, l&apos;engagement et l&apos;esprit d&apos;équipe. 
              Nous offrons un environnement de travail stimulant où chacun peut développer son potentiel.
            </p>
            <a 
              href="#candidature" 
              className="inline-flex items-center justify-center bg-[#2b3343] hover:bg-[#3d4759] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Postuler maintenant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
