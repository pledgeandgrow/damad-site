"use client";

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Dans quelle région vous intervenez ?",
    answer: "Nous intervenons à Paris et dans toute l'Île-de-France."
  },
  {
    question: "Pourrais-je annuler mon intervention ponctuelle ?",
    answer: "Oui, il vous est possible d'annuler votre intervention, jusqu'à 24 h jour ouvrable avant l'intervention en contactant notre service client à l'horaire d'ouverture sur service. Passé ce délai, l'annulation ne sera plus possible."
  },
  {
    question: "Que se passe-t-il si mon problème n'est pas résolu ?",
    answer: "En cas de non résolution du problème, selon le diagnostic une intervention sera reprogrammée."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-[#fbfcfc] border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
            Questions fréquentes
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-[#0046fe] shadow-lg bg-white' 
                  : 'border-gray-200 hover:border-[#0046fe]/50 bg-white'
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg text-[#2b3343]">{faq.question}</span>
                <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
