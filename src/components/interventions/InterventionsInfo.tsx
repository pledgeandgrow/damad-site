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
      icon: <FaClock className="text-3xl text-[#2b3343]" />,
      title: "Intervention rapide",
      description: "Nos techniciens interviennent dans les 24 à 48 heures pour les pannes non critiques, et en urgence pour les situations critiques."
    },
    {
      icon: <FaUserCog className="text-3xl text-[#2b3343]" />,
      title: "Techniciens qualifiés",
      description: "Nos équipes sont formées aux dernières technologies et certifiées pour intervenir sur tous types d'ascenseurs."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#2b3343]" />,
      title: "Sécurité garantie",
      description: "Toutes nos interventions respectent les normes de sécurité les plus strictes pour assurer la protection des utilisateurs."
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-[#2b3343]" />,
      title: "Assistance 24/7",
      description: "Notre service d'assistance téléphonique est disponible 24h/24 et 7j/7 pour répondre à vos urgences."
    }
  ];

  return (
    <section id="interventions-info" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#2b3343]">
            Nos services d&apos;intervention
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            DAMAD vous propose un service complet d&apos;intervention et de dépannage pour assurer la sécurité et le bon fonctionnement de vos ascenseurs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="mb-4 p-3 bg-[#2b3343]/10 inline-block rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2b3343]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#2b3343]/5 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4 text-[#2b3343]">Types d&apos;interventions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2 text-[#2b3343]">Dépannage d&apos;urgence</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#2b3343] mr-2 mt-1">•</span>
                  <span>Personnes bloquées dans l&apos;ascenseur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2b3343] mr-2 mt-1">•</span>
                  <span>Arrêt soudain de l&apos;ascenseur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2b3343] mr-2 mt-1">•</span>
                  <span>Bruits anormaux ou vibrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2b3343] mr-2 mt-1">•</span>
                  <span>Problèmes de portes</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2 text-[#2b3343]">Maintenance préventive</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#2b3343] mr-2 mt-1">•</span>
                  <span>Vérification des systèmes de sécurité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2b3343] mr-2 mt-1">•</span>
                  <span>Contrôle des composants mécaniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2b3343] mr-2 mt-1">•</span>
                  <span>Nettoyage et lubrification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2b3343] mr-2 mt-1">•</span>
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
