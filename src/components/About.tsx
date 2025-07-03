'use client';

import Image from 'next/image';
import { FaCheckCircle, FaUsers, FaAward, FaBuilding } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image 
                src="/images/about.jpg" 
                alt="À propos de Damad Ascenseurs"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-steel-blue text-white p-6 rounded-lg shadow-lg w-48">
                <div className="text-4xl font-bold mb-1">25+</div>
                <div className="text-sm">Années d&#39;expérience</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-soft-black mb-6">À propos de nous</h2>
            <p className="text-concrete mb-6">
              Forts de plus de 25 ans d&apos;expérience, nous sommes spécialisés dans l&apos;installation, 
              la maintenance et la modernisation d&apos;ascenseurs. Notre engagement envers la qualité 
              et la satisfaction client fait de nous un partenaire de confiance pour tous vos projets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-soft-black">Expertise technique</h3>
                  <p className="text-concrete text-sm">Une équipe de professionnels qualifiés et expérimentés</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaUsers className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-soft-black">Service client</h3>
                  <p className="text-concrete text-sm">Une écoute attentive et un accompagnement personnalisé</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaAward className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-soft-black">Qualité certifiée</h3>
                  <p className="text-concrete text-sm">Des normes de qualité strictes et certifiées</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaBuilding className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-soft-black">Solutions sur mesure</h3>
                  <p className="text-concrete text-sm">Des solutions adaptées à chaque bâtiment</p>
                </div>
              </div>
            </div>
            
            <button className="bg-industrial-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
