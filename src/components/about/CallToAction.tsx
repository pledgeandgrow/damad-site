'use client';

import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export default function CallToAction() {
  const contactInfo = [
    {
      icon: <FaPhone className="w-5 h-5 text-[#4a90e2]" />,
      title: "Téléphone",
      value: "01 23 45 67 89",
      link: "tel:+33123456789",
      linkText: "Appeler"
    },
    {
      icon: <FaEnvelope className="w-5 h-5 text-[#4a90e2]" />,
      title: "Email",
      value: "contact@damad-ascenseurs.fr",
      link: "mailto:contact@damad-ascenseurs.fr",
      linkText: "Envoyer un email"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5 text-[#4a90e2]" />,
      title: "Adresse",
      value: "123 Avenue des Ascenseurs, 75000 Paris",
      link: "https://maps.google.com",
      linkText: "Voir sur la carte"
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24 lg:py-32" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#2b3343] opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b3343] to-[#1a202c] opacity-95"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à démarrer votre projet d&apos;ascenseur ?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Notre équipe d&apos;experts est à votre écoute pour discuter de votre projet et vous proposer la solution la mieux adaptée à vos besoins.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#4a90e2]/30 transition-all duration-300 group">
                <div className="bg-[#2b3343] p-3 rounded-lg inline-block mb-4 group-hover:bg-[#4a90e2] transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-300 mb-1">{item.title}</h3>
                <p className="text-white font-medium mb-2">{item.value}</p>
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-sm text-[#4a90e2] hover:text-white transition-colors duration-300"
                >
                  {item.linkText}
                  <FaArrowRight className="ml-1 w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#4a90e2] hover:bg-[#3a7bc8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a90e2] transition-colors duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
