'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#2b3343] to-[#1a202c] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Nos Services d&apos;Ascenseurs
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Des solutions sur mesure pour tous vos besoins en ascenseurs, de l&apos;installation à la maintenance, en passant par la modernisation et le dépannage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-[#4a90e2] to-[#2b8bd9] hover:from-[#2b8bd9] hover:to-[#4a90e2] text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Demander un devis
              </a>
              <a 
                href="tel:+33123456789" 
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md border border-white/20 transition-all duration-300 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  01 23 45 67 89
                </span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/services/elevator-hero.jpg"
              alt="Ascenseur moderne"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b3343] to-transparent opacity-70"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-5"></div>
    </section>
  );
}
