"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs } from 'react-icons/fa';

export default function ServiceIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-md mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Nous avons une longue expérience dans les domaines de l&apos;installation et la maintenance d&apos;ascenseurs, de porte automatique, de monte - charge des élévateurs PMR (Personne à Mobilité Réduite), des Plateformes élévatrices Monte voitures et Tables élévatrices.
            </p>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-md"
            >
              <div className="flex items-start">
                <div className="p-3 bg-[#2b3343] rounded-lg shadow-md mr-4 mt-1">
                  <FaCogs className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2b3343] mb-4">Installation & garantie</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Depuis plus de 20 ans, chaque projet d&apos;installation confié à Damad est effectué par l&apos;équipe Damad de A à Z. Nos techniciens installateurs qualifiés sont également intégrés à la société. Ils installeront votre ascenseur, monte - charge, élévateurs PMR (Personne à Mobilité Réduite) Plateforme élévatrice.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
