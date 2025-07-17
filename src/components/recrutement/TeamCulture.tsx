"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function TeamCulture() {
  const values = [
    {
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos projets et services, avec un engagement constant pour la qualité."
    },
    {
      title: "Innovation",
      description: "Nous encourageons les idées nouvelles et l'adoption des dernières technologies pour améliorer nos solutions."
    },
    {
      title: "Collaboration",
      description: "Nous croyons en la force du travail d'équipe et de la communication ouverte entre tous les départements."
    },
    {
      title: "Responsabilité",
      description: "Nous assumons la responsabilité de nos actions et nous engageons à respecter nos promesses."
    }
  ];

  const testimonials = [
    {
      quote: "Travailler chez Damad Ascenseurs m'a permis de développer mes compétences techniques tout en évoluant dans une équipe soudée et dynamique.",
      name: "Thomas Durand",
      position: "Technicien de maintenance, 5 ans d'ancienneté",
      avatar: "/images/team/avatar1.jpg"
    },
    {
      quote: "Ce que j'apprécie le plus, c'est l'équilibre entre l'autonomie qu'on nous donne et le soutien de l'équipe quand on en a besoin.",
      name: "Sophie Martin",
      position: "Responsable commerciale, 3 ans d'ancienneté",
      avatar: "/images/team/avatar2.jpg"
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
            <span className="relative z-10">Notre Culture d&apos;Entreprise</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les valeurs qui nous animent et l&apos;environnement de travail que nous cultivons
          </p>
        </motion.div>

        {/* Team image section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-80 md:h-96 mb-16 rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b3343]/70 to-transparent z-10"></div>
          <Image
            src="/images/site/team.jpg"
            alt="L'équipe Damad Ascenseurs"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="z-0"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-lg px-6 md:px-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Une équipe passionnée</h3>
              <p className="text-white/90 text-lg">
                Chez Damad Ascenseurs, nous cultivons un environnement de travail où chacun peut s&apos;épanouir professionnellement et personnellement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#2b3343] mb-8 text-center"
          >
            Nos Valeurs
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#2b3343] text-white rounded-full font-bold text-lg">
                    {index + 1}
                  </div>
                  <h4 className="ml-3 text-xl font-semibold text-[#2b3343]">{value.title}</h4>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#2b3343] mb-8 text-center">Témoignages de nos collaborateurs</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <div className="mb-6">
                  <FaQuoteLeft className="text-[#2b3343]/20 w-8 h-8 mb-2" />
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-[#2b3343]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
