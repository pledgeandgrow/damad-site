"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactMap() {
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
          <h2 className="text-3xl font-bold text-[#2b3343] mb-4">Notre Emplacement</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rendez-nous visite ou contactez-nous pour discuter de vos besoins en ascenseurs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-gray-50 p-8 rounded-xl shadow-md"
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
                  <p className="text-base text-gray-600">Samedi: 9h - 12h</p>
                  <p className="text-base text-gray-600">Dimanche: Fermé</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-medium text-[#2b3343] mb-4">Service d&apos;urgence</h4>
              <p className="text-gray-600 mb-2">
                Notre service d&apos;urgence répond sous 48h pour les situations critiques.
              </p>
              <p className="text-[#2b3343] font-bold">
                Numéro d&apos;urgence: +33 1 23 45 67 00
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gray-100 rounded-xl overflow-hidden shadow-md h-[500px]"
          >
            {/* Google Maps integration */}
            <div className="w-full h-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9054434509383!2d2.3466872!3d48.8615476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1c90fa3c41%3A0x5c5e2b74c8df3407!2s3%20Bd%20de%20S%C3%A9bastopol%2C%2075001%20Paris%2C%20France!5e0!3m2!1sfr!2sfr!4v1626584998868!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#2b3343] rounded-xl p-8 shadow-xl text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Besoin d&apos;un devis personnalisé ?</h3>
              <p className="text-blue-100">
                Nos experts sont à votre disposition pour étudier votre projet et vous proposer la meilleure solution.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a 
                href="/devis" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#2b3343] bg-white hover:bg-blue-50 shadow-md transition-all duration-300"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
