'use client';

import { useEffect, useState } from 'react';
import { FaClock, FaUserCog, FaShieldAlt, FaPhoneAlt } from 'react-icons/fa';

export default function InterventionsInfo() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('interventions-info');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      icon: <FaClock className="text-3xl text-blue-500" />,
      title: "Intervention rapide",
      description: "Nos techniciens interviennent dans les 24 à 48 heures pour les pannes non critiques, et en urgence pour les situations critiques."
    },
    {
      icon: <FaUserCog className="text-3xl text-blue-500" />,
      title: "Techniciens qualifiés",
      description: "Nos équipes sont formées aux dernières technologies et certifiées pour intervenir sur tous types d'appareils d'accessibilité."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-500" />,
      title: "Sécurité garantie",
      description: "Toutes nos interventions respectent les normes de sécurité les plus strictes pour assurer la protection des utilisateurs."
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-blue-500" />,
      title: "Assistance 24/7",
      description: "Notre service d'assistance téléphonique est disponible 24h/24 et 7j/7 pour répondre à vos urgences."
    }
  ];

  return (
    <section id="interventions-info" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">Services professionnels</span>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#2b3343]">
              Nos services d&apos;intervention
            </h2>
          </div>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            DAMAD vous propose un service complet d&apos;intervention et de dépannage pour assurer la sécurité et le bon fonctionnement de vos appareils d&apos;accessibilité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transform transition-all duration-500 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="mb-5 p-4 bg-blue-50 inline-block rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2b3343]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100/30 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-[#2b3343] border-b border-blue-200 pb-3">Types d&apos;interventions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-4 text-blue-600 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Dépannage d&apos;urgence
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Personnes bloquées dans l&apos;appareil d&apos;accessibilité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Arrêt soudain de l&apos;appareil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Bruits anormaux ou vibrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Problèmes de portes ou d&apos;accès</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-4 text-blue-600 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Maintenance préventive
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Vérification des systèmes de sécurité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Contrôle des composants mécaniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Nettoyage et lubrification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Mise à jour des logiciels de contrôle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
