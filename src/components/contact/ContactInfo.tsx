"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

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
            
            {/* Service Dépannage section removed as requested */}
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-medium text-[#2b3343] mb-4">Centrale d&apos;appel</h4>
              <p className="text-gray-600 mb-2">
                Notre centrale d&apos;appel est disponible 24h/24, 7j/7 pour répondre à toutes vos urgences.
              </p>
              <p className="text-[#2b3343] font-bold flex items-center">
                <FaPhoneAlt className="mr-2 text-blue-600" />
                0 826 101 202
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-medium text-[#2b3343] mb-4">Suivez-nous</h4>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.linkedin.com/company/damad-ascenseurs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-[#0077b5] transition-colors duration-300"
                >
                  <div className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-300">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <span className="ml-3">LinkedIn</span>
                </a>
              </div>
            </div>
    </motion.div>
  );
}
