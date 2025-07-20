"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaWrench, FaCheckCircle, FaBuilding } from 'react-icons/fa';

export default function ServiceMaintenance() {
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
          <h2 className="text-3xl font-bold text-[#2b3343] mb-8 relative inline-block">
            <span className="relative z-10">Contrat de maintenance et entretien</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-md space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Depuis 2007, les techniciens de Damad vérifient le bon fonctionnement des solutions de mobilité verticale sur mesure, adaptées aux besoins des particuliers et des professionnels.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Nos contrats de maintenance sur mesure sont établis en fonction de plusieurs critères spécifiques:
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-[#2b3343] rounded-lg shadow-md mr-4 mt-1">
                  <FaWrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2b3343] mb-2">Complexité</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    L&apos;entretien ou la maintenance d&apos;ascenseurs exige une expertise technique qui varie selon le type d&apos;équipement
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#2b3343] rounded-lg shadow-md mr-4 mt-1">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2b3343] mb-2">Respect des normes et des réglementations</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-3">
                    Nos équipes respectent les normes les plus strictes. Votre technicien effectuera des interventions occasionnelles pour réparer et/ou remplacer des pièces défectueuses ou usagées :
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    boutons de commande, automatisme de la porte, fonctionnement du bouton d&apos;appel de secours, voyants lumineux, machinerie, éclairage, etc.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#2b3343] rounded-lg shadow-md mr-4 mt-1">
                  <FaBuilding className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2b3343] mb-2">Exigences particulières</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Exigences particulières du site et contraintes architecturales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
