"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestion } from 'react-icons/fa';

type FAQItem = {
  question: string;
  answer: string;
};

export default function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Comment puis-je demander une intervention d'urgence ?",
      answer: "Pour une intervention d'urgence, appelez notre numéro dédié au +33 1 23 45 67 89. Notre équipe technique est disponible 24h/24 et 7j/7 pour les situations urgentes. Vous pouvez également utiliser le formulaire de contact d'urgence sur notre site en sélectionnant l'option 'Intervention urgente'."
    },
    {
      question: "Quels sont les délais habituels pour une intervention technique ?",
      answer: "Nos délais d'intervention varient selon la nature du problème et votre contrat de maintenance. Pour les pannes bloquantes, nous intervenons généralement sous 2 à 4 heures. Pour les interventions non urgentes, le délai est de 24 à 48 heures ouvrées. Les clients avec un contrat premium bénéficient de délais d'intervention prioritaires."
    },
    {
      question: "Comment fonctionne la garantie sur les réparations ?",
      answer: "Toutes nos réparations sont garanties pendant une période de 12 mois pour les pièces et la main-d'œuvre. Cette garantie couvre les défauts de fabrication et les problèmes liés à l'installation. Elle ne s'applique pas en cas d'usage inapproprié, de vandalisme ou de catastrophe naturelle. Pour faire valoir votre garantie, contactez simplement notre service client avec votre numéro d'intervention."
    },
    {
      question: "Proposez-vous des contrats de maintenance préventive ?",
      answer: "Oui, nous proposons plusieurs formules de contrats de maintenance préventive adaptées à vos besoins. Nos contrats incluent des visites régulières d'entretien, le remplacement des pièces d'usure, et des tarifs préférentiels sur les interventions. Nous recommandons une maintenance préventive pour prolonger la durée de vie de votre ascenseur et réduire les risques de panne."
    },
    {
      question: "Comment mettre à jour mon ascenseur aux dernières normes de sécurité ?",
      answer: "Pour mettre à jour votre ascenseur aux dernières normes de sécurité, commencez par demander un audit de conformité. Notre équipe évaluera votre installation et vous proposera un plan de mise aux normes détaillé. Nous pouvons réaliser les travaux par phases pour minimiser les perturbations et adapter le planning à votre budget. Contactez-nous pour planifier votre audit de conformité."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[#2b3343] opacity-5 pattern-grid-lg"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaQuestion className="w-6 h-6 text-[#2b3343]" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[#2b3343] mb-4">Questions Fréquentes</h2>
          <p className="text-xl text-gray-600">
            Trouvez rapidement des réponses aux questions les plus courantes
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-[#2b3343]">{item.question}</span>
                <FaChevronDown 
                  className={`w-5 h-5 text-[#2b3343] transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-700 border-t border-gray-100">
                      <p className="pt-4">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-gray-600 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2b3343] hover:bg-[#3a4456] transition-all duration-300"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  );
}
