"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaBuilding, FaHome, FaIndustry } from 'react-icons/fa';

import { ReactElement } from 'react';

type ElevatorModel = {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  icon: ReactElement;
  maxLoad: string;
  maxSpeed: string;
  maxFloors: string;
};

export default function SupportModels() {
  const elevatorModels = useMemo<ElevatorModel[]>(() => [
    {
      id: 'res-compact',
      name: 'Compact Résidentiel',
      category: 'residential',
      description: 'Ascenseur compact idéal pour les maisons individuelles et petits espaces.',
      features: ['Installation rapide', 'Faible encombrement', 'Silencieux', 'Design personnalisable'],
      image: '/images/elevators/residential-compact.jpg',
      icon: <FaHome className="w-6 h-6" />,
      maxLoad: '320 kg',
      maxSpeed: '0.15 m/s',
      maxFloors: '2-3'
    },
    {
      id: 'res-premium',
      name: 'Premium Résidentiel',
      category: 'residential',
      description: 'Solution élégante et confortable pour les résidences haut de gamme.',
      features: ['Finitions luxueuses', 'Cabine spacieuse', 'Système d\'économie d\'énergie', 'Connectivité intelligente'],
      image: '/images/elevators/residential-premium.jpg',
      icon: <FaHome className="w-6 h-6" />,
      maxLoad: '450 kg',
      maxSpeed: '0.3 m/s',
      maxFloors: '2-5'
    },
    {
      id: 'com-standard',
      name: 'Standard Collectif',
      category: 'commercial',
      description: 'Ascenseur fiable pour immeubles résidentiels et petits bâtiments commerciaux.',
      features: ['Robuste', 'Maintenance facile', 'Conforme aux normes PMR', 'Options d\'accessibilité'],
      image: '/images/elevators/commercial-standard.jpg',
      icon: <FaBuilding className="w-6 h-6" />,
      maxLoad: '630 kg',
      maxSpeed: '1.0 m/s',
      maxFloors: '8-12'
    },
    {
      id: 'com-highrise',
      name: 'Highrise Collectif',
      category: 'commercial',
      description: 'Solution performante pour immeubles de grande hauteur et bâtiments commerciaux.',
      features: ['Haute vitesse', 'Grande capacité', 'Système de gestion de trafic', 'Économie d\'énergie avancée'],
      image: '/images/elevators/commercial-highrise.jpg',
      icon: <FaBuilding className="w-6 h-6" />,
      maxLoad: '1000 kg',
      maxSpeed: '2.5 m/s',
      maxFloors: '20-40'
    },
    {
      id: 'ind-cargo',
      name: 'Cargo Industriel',
      category: 'industrial',
      description: 'Monte-charge puissant pour environnements industriels et logistiques.',
      features: ['Très haute capacité', 'Construction robuste', 'Résistant aux conditions difficiles', 'Sécurité renforcée'],
      image: '/images/elevators/industrial-cargo.jpg',
      icon: <FaIndustry className="w-6 h-6" />,
      maxLoad: '5000 kg',
      maxSpeed: '0.5 m/s',
      maxFloors: '2-6'
    },
    {
      id: 'ind-special',
      name: 'Spécial Industriel',
      category: 'industrial',
      description: 'Solutions sur mesure pour besoins industriels spécifiques et environnements exigeants.',
      features: ['Conception personnalisée', 'Résistant aux produits chimiques', 'Options antidéflagrantes', 'Maintenance préventive'],
      image: '/images/elevators/industrial-special.jpg',
      icon: <FaIndustry className="w-6 h-6" />,
      maxLoad: '10000 kg',
      maxSpeed: '0.3 m/s',
      maxFloors: '2-4'
    }
  ], []);

  const categories = [
    { id: "all", name: "Tous les modèles" },
    { id: "residential", name: "Résidentiels", icon: <FaHome className="mr-2" /> },
    { id: "commercial", name: "Collectifs", icon: <FaBuilding className="mr-2" /> },
    { id: "industrial", name: "Industriels", icon: <FaIndustry className="mr-2" /> }
  ];

  const [activeCategory, setActiveCategory] = React.useState("all");
  const [filteredModels, setFilteredModels] = React.useState(elevatorModels);

  React.useEffect(() => {
    if (activeCategory === "all") {
      setFilteredModels(elevatorModels);
    } else {
      setFilteredModels(elevatorModels.filter(model => model.category === activeCategory));
    }
  }, [activeCategory, elevatorModels]);

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
          <h2 className="text-3xl font-bold text-[#2b3343] mb-4">Nos Modèles d&apos;Ascenseurs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète d&apos;ascenseurs adaptés à tous types de bâtiments et besoins
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeCategory === category.id
                  ? 'bg-[#2b3343] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.icon && <span className="mr-1">{category.icon}</span>}
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    {model.icon}
                  </div>
                </div>
                {/* In a real application, you would have actual images */}
                {/* <Image 
                  src={model.image} 
                  alt={model.name}
                  fill
                  className="object-cover"
                /> */}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-[#2b3343]">{model.name}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-[#2b3343] text-xs rounded-full font-medium">
                    {model.category === 'residential' && 'Résidentiel'}
                    {model.category === 'commercial' && 'Collectif'}
                    {model.category === 'industrial' && 'Industriel'}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{model.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-xs text-gray-500">Charge</p>
                    <p className="font-semibold text-[#2b3343]">{model.maxLoad}</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-xs text-gray-500">Vitesse</p>
                    <p className="font-semibold text-[#2b3343]">{model.maxSpeed}</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-xs text-gray-500">Étages</p>
                    <p className="font-semibold text-[#2b3343]">{model.maxFloors}</p>
                  </div>
                </div>
                
                <ul className="mb-6 space-y-2">
                  {model.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-[#2b3343] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/models/${model.id}`}
                  className="inline-flex items-center text-[#2b3343] font-medium hover:text-[#3a4456] transition-all duration-300"
                >
                  Voir les détails
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
