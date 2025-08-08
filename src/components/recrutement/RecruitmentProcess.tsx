"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaPhoneAlt, FaUserTie, FaHandshake, FaUserCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function RecruitmentProcess() {
  const steps = [
    {
      icon: <FaFileAlt className="w-6 h-6 text-white" />,
      title: "Candidature",
      description: "Envoyez votre CV et lettre de motivation via notre formulaire en ligne ou par email.",
      number: "01"
    },
    {
      icon: <FaPhoneAlt className="w-6 h-6 text-white" />,
      title: "Entretien téléphonique",
      description: "Premier échange avec notre équipe RH pour discuter de votre parcours et de vos motivations.",
      number: "02"
    },
    {
      icon: <FaUserTie className="w-6 h-6 text-white" />,
      title: "Entretien technique",
      description: "Rencontre avec le responsable du département pour évaluer vos compétences techniques.",
      number: "03"
    },
    {
      icon: <FaHandshake className="w-6 h-6 text-white" />,
      title: "Entretien final",
      description: "Discussion approfondie sur le poste, vos attentes et les conditions de travail.",
      number: "04"
    },
    {
      icon: <FaUserCheck className="w-6 h-6 text-white" />,
      title: "Intégration",
      description: "Bienvenue dans l'équipe ! Vous bénéficierez d'un programme d'intégration complet.",
      number: "05"
    }
  ];

  return (
    <section className="py-16 bg-[#fbfcfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4 mt-2">
            Processus de Recrutement
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
          <p className="text-[#2b3343] max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Découvrez les étapes de notre processus de recrutement transparent et efficace
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-8 h-8 bg-[#0046fe] rounded-full shadow-lg transform -translate-x-1/2 z-10">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="p-3 bg-[#0046fe] rounded-lg shadow-md mr-4 md:order-last md:ml-4 md:mr-0">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-[#2b3343]">{step.title}</h3>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Notre processus de recrutement est conçu pour être transparent et vous permettre de découvrir notre entreprise autant que nous découvrons votre profil.
          </p>
        </motion.div>
        
        {/* Formation et Développement Professionnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#2b3343] relative inline-block">
              <span className="relative z-10">Formation et Développement Professionnel</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/recrutement/recrutement1.jpg" 
                  alt="Formation technique DAMAD" 
                  className="object-cover object-center"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b3343]/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Formation Technique</h4>
                    <p className="text-sm">Nos techniciens bénéficient d&apos;une formation complète sur nos équipements et technologies</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-80 w-full">
                <Image 
                  src="/images/recrutement/recrutement2.jpg" 
                  alt="Formation sécurité DAMAD" 
                  className="object-cover object-center"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b3343]/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Formation Sécurité</h4>
                    <p className="text-sm">La sécurité est notre priorité - formations régulières aux protocoles de sécurité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

        </motion.div>
      </div>
    </section>
  );
}
