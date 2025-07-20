"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadset, FaArrowRight } from 'react-icons/fa';

export default function SupportHero() {
  return (
    <section className="relative bg-gradient-to-b from-[#2b3343] to-[#1a202c] py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-grid-lg"></div>
      </div>
      
      {/* Animated blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Centre de Support
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Notre équipe d&apos;experts est là pour vous aider avec tous vos besoins d&apos;assistance technique et de service client.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#2b3343] bg-white hover:bg-blue-50 shadow-md transition-all duration-300"
                >
                  Nous contacter
                  <FaArrowRight className="ml-2" />
                </motion.a>
                <motion.a
                  href="#faq"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300"
                >
                  FAQ
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <FaHeadset className="w-8 h-8 text-[#2b3343]" />
                </div>
                <h2 className="text-2xl font-bold text-white">Support 24/7</h2>
              </div>
              <p className="text-blue-100 mb-6">
                Notre équipe de support répond sous 48h pour répondre à toutes vos questions et résoudre vos problèmes techniques.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white font-semibold">Téléphone</p>
                  <p className="text-blue-200">+33 1 23 45 67 89</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-blue-200">support@damad.fr</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
