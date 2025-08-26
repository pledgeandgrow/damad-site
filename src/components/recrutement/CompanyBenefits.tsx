"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaGraduationCap, FaLightbulb, FaUsers, FaComments } from 'react-icons/fa';

export default function CompanyBenefits() {

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
            5 Bonnes raisons de nous rejoindre
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="space-y-6 text-left">
              <div className="flex items-start">
                <div className="p-3 bg-[#0046fe] rounded-lg shadow-md mr-4 flex-shrink-0">
                  <FaHandshake className="text-white text-xl" />
                </div>
                <p className="text-[#2b3343] text-lg leading-relaxed">
                  Exercer un métier passionnant à la fois technique et relationnel, sur le terrain ou en back office
                </p>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-[#0046fe] rounded-lg shadow-md mr-4 flex-shrink-0">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <p className="text-[#2b3343] text-lg leading-relaxed">
                  Grandir dans une entreprise apprenante qui partage son savoir, forme et transmets des compétences
                </p>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-[#0046fe] rounded-lg shadow-md mr-4 flex-shrink-0">
                  <FaLightbulb className="text-white text-xl" />
                </div>
                <p className="text-[#2b3343] text-lg leading-relaxed">
                  Participer à l’évolution de l’entreprise, en proposant des idées, en contribuant à l’amélioration des process
                </p>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-[#0046fe] rounded-lg shadow-md mr-4 flex-shrink-0">
                  <FaUsers className="text-white text-xl" />
                </div>
                <p className="text-[#2b3343] text-lg leading-relaxed">
                  Rejoindre une équipe soudée, à taille humaine, où chacun est reconnu et valorisé
                </p>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-[#0046fe] rounded-lg shadow-md mr-4 flex-shrink-0">
                  <FaComments className="text-white text-xl" />
                </div>
                <p className="text-[#2b3343] text-lg leading-relaxed">
                  Travailler dans une entreprise où la communication est transparente et où chaque collaborateur est écouté
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
