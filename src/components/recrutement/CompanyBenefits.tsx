"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CompanyBenefits() {

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
            <span className="relative z-10">Bonnes raisons de nous rejoindre :</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-md">
            <div className="space-y-6 text-left">
              <div className="flex items-start">
                <span className="text-2xl font-bold text-[#2b3343] mr-4 mt-1">#1</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Exercer un métier passionnant à la fois technique et relationnel, sur le terrain ou en back office
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-2xl font-bold text-[#2b3343] mr-4 mt-1">#2</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Grandir dans une entreprise apprenante qui partage son savoir, forme et transmets des compétences
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-2xl font-bold text-[#2b3343] mr-4 mt-1">#3</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Développer votre potentiel et votre expertise aux côtés d&apos;experts dans leur domaine
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-2xl font-bold text-[#2b3343] mr-4 mt-1">#4</span>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Une entreprise qui place l&apos;humain au cœur de ses préoccupations et qui valorise le talent de chacun.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-2xl font-bold text-[#2b3343] mr-4 mt-1">#5</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Disposer des avantages d&apos;un management de proximité
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
