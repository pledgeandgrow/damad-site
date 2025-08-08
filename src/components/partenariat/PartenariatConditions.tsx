'use client';

import { useEffect, useState } from 'react';
import { FaUserPlus, FaClipboardCheck, FaHandshake } from 'react-icons/fa';

export default function PartenariatConditions() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('partenariat-conditions');
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

  const steps = [
    {
      number: "1",
      icon: <FaUserPlus className="text-3xl text-white" />,
      title: "Inscrivez vous !",
      description: "Remplissez le formulaire en bas de page."
    },
    {
      number: "2",
      icon: <FaClipboardCheck className="text-3xl text-white" />,
      title: "Nous examinons votre candidature",
      description: "Nous vous contacterons pour établir une première prise de contact et faire connaissance !"
    },
    {
      number: "3",
      icon: <FaHandshake className="text-3xl text-white" />,
      title: "Vous êtes partenaire officiel !",
      description: "Ensemble, nous collaborons sur des projets et satisfaire de manière complète les besoins de nos clients !"
    }
  ];

  return (
    <section id="partenariat-conditions" className="py-20 bg-[#fbfcfd]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2b3343] mb-3 sm:mb-4">
            Comment devenir partenaire
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Rejoignez notre réseau de partenaires en suivant ces trois étapes simples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 bg-[#0046fe] text-white w-12 h-12 flex items-center justify-center text-xl font-bold rounded-bl-xl">
                {step.number}
              </div>
              <div className="mb-6 p-4 bg-[#0046fe] inline-block rounded-lg shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2b3343] pr-8">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
