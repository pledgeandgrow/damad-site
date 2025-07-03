'use client';

import Link from 'next/link';
import { FaPhone, FaArrowRight } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-[#2b3343] to-[#3d4759] py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Prêt à commencer votre projet ?</h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Notre équipe d&apos;experts est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet d&apos;ascenseur.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/contact" 
              className="bg-white text-[#2b3343] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Nous contacter
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <a 
              href="tel:+33123456789" 
              className="border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center transform hover:-translate-y-1 hover:shadow-lg group"
            >
              <FaPhone className="mr-2 group-hover:animate-pulse" />
              01 23 45 67 89
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
