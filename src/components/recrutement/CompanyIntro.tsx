"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake } from 'react-icons/fa';

export default function CompanyIntro() {
  return (
    <section className="py-8 bg-[#fbfcfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4 mt-2">
            Ce qui nous définit
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-[#0046fe] rounded-lg shadow-md mr-4 mt-1">
                  <FaBuilding className="w-6 h-6 text-white" />
                </div>
                <p className="text-[#2b3343] text-lg leading-relaxed">
                  Une entreprise dynamique et en croissance spécialisée dans la maintenance l&apos;installation, la désincarcération et dépannage d&apos;ascenseur, d&apos;EPMR, Monte-voiture, Monte-charge.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-[#0046fe] rounded-lg shadow-md mr-4 mt-1">
                  <FaHandshake className="w-6 h-6 text-white" />
                </div>
                <p className="text-[#2b3343] text-lg leading-relaxed">
                  Une entreprise reconnue pour notre qualité de service et notre relation client.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-8"
        >
          <div className="text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              La forte implication de notre équipe de techniciens en étroite collaboration avec les services SAV, et commerciale instaure la confiance de nos clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
