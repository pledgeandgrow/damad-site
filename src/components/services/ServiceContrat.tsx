"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaPhoneAlt } from 'react-icons/fa';

export default function ServiceContrat() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#2b3343] mb-8 relative inline-block">
            <span className="relative z-10">Contrat de services et dépannage 7/7</span>
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
          <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
            <div className="flex items-start">
              <div className="p-3 bg-[#2b3343] rounded-lg shadow-md mr-4 mt-1">
                <FaClock className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Engagée dans un souci constant de professionnalisme, nous répondons à vos besoins d&apos;interventions et de dépannage dans un délai d&apos;intervention compris entre 4h et 36h du lundi au vendredi, 9h à 17h.
              </p>
            </div>

            <div className="flex items-start">
              <div className="p-3 bg-[#2b3343] rounded-lg shadow-md mr-4 mt-1">
                <FaPhoneAlt className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  En soirée et le week - end un service d&apos;astreinte est en place fin d&apos;être joignables 7/7 et de pouvoir répondre à des situations d&apos;urgence, des appels d&apos;alerte, d&apos;assistance ou de dépannage immédiat.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Vous aurez à votre disposition un Technicien expérimenté maitrisant les domaines d&apos;expertise les plus avancés à moins 2h pour un diagnostic immédiat
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
