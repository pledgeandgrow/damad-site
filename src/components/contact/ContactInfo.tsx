"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-50 p-8 rounded-xl shadow-md h-full"
    >
            <h3 className="text-xl font-semibold text-[#2b3343] mb-6">Coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FaMapMarkerAlt className="w-5 h-5 text-[#2b3343]" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-[#2b3343]">Adresse</p>
                  <p className="text-base text-gray-600">3 BOULEVARD DE SEBASTOPOL</p>
                  <p className="text-base text-gray-600">75001 PARIS, France</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FaClock className="w-5 h-5 text-[#2b3343]" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-[#2b3343]">Heures d&apos;ouverture</p>
                  <p className="text-base text-gray-600">Lundi - Vendredi: 8h - 18h</p>
                  <p className="text-base text-gray-600">Samedi - Dimanche: Fermé</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-medium text-[#2b3343] mb-4">Service Dépannage</h4>
              <p className="text-gray-600 mb-2">
                Notre Service Dépannage répond sous 48h pour les situations critiques.
              </p>
              <p className="text-[#2b3343] font-bold">
                Numéro de dépannage: +33 1 23 45 67 00
              </p>
            </div>
    </motion.div>
  );
}
