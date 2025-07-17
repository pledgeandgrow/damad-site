"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBuilding, FaHandshake } from 'react-icons/fa';

export default function RecruitmentHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#2b3343] to-[#3d4759] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/20 shadow-lg bg-white/10 backdrop-blur-sm">
              Rejoignez notre équipe
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Construisez votre carrière <br className="hidden sm:block" />
            <span className="text-blue-200">avec Damad</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Nous recherchons des talents passionnés pour rejoindre notre équipe d&apos;experts en ascenseurs. 
            Découvrez nos opportunités et développez vos compétences dans un environnement innovant et dynamique.
          </motion.p>

          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#postes-ouverts" 
              className="bg-white hover:bg-gray-100 text-[#2b3343] font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Voir les postes ouverts
            </a>
            <a 
              href="#candidature" 
              className="border-2 border-white text-white hover:bg-white/20 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              Postuler maintenant
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
        >
          {[
            {
              icon: <FaUsers className="w-6 h-6 text-blue-200" />,
              title: "Équipe dynamique",
              description: "Rejoignez une équipe de professionnels passionnés et expérimentés"
            },
            {
              icon: <FaBuilding className="w-6 h-6 text-blue-200" />,
              title: "Projets innovants",
              description: "Travaillez sur des projets d'envergure avec les dernières technologies"
            },
            {
              icon: <FaHandshake className="w-6 h-6 text-blue-200" />,
              title: "Évolution de carrière",
              description: "Des opportunités de formation et d'évolution professionnelle"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-[#2b3343] rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
