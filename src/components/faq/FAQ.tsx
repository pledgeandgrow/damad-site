'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestion, FaSearch, FaTimes, FaTools, FaShieldAlt, FaPhone, FaFileContract, FaBook } from 'react-icons/fa';

type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: 'urgence' | 'maintenance' | 'garantie' | 'normes' | 'contrats';
  tags: string[];
};

type FAQCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
};

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: "Comment puis-je demander une intervention d'urgence ?",
    answer: "Pour une intervention d'urgence, appelez notre numéro dédié au +33 1 23 45 67 89. Notre équipe technique répond sous 48h pour les situations urgentes. Vous pouvez également utiliser le formulaire de contact d'urgence sur notre site en sélectionnant l'option 'Intervention urgente'.",
    category: 'urgence',
    tags: ['urgence', 'intervention', 'response 48h', 'contact', 'téléphone']
  },
  {
    id: 'faq-2',
    question: "Quels sont les délais habituels pour une intervention technique ?",
    answer: "Nos délais d'intervention varient selon la nature du problème et votre contrat de maintenance. Pour les pannes bloquantes, nous intervenons généralement sous 2 à 4 heures. Pour les interventions non urgentes, le délai est de 24 à 48 heures ouvrées. Les clients avec un contrat premium bénéficient de délais d'intervention prioritaires.",
    category: 'maintenance',
    tags: ['délais', 'intervention', 'maintenance', 'contrat', 'premium']
  },
  {
    id: 'faq-3',
    question: "Comment fonctionne la garantie sur les réparations ?",
    answer: "Toutes nos réparations sont garanties pendant une période de 12 mois pour les pièces et la main-d'œuvre. Cette garantie couvre les défauts de fabrication et les problèmes liés à l'installation. Elle ne s'applique pas en cas d'usage inapproprié, de vandalisme ou de catastrophe naturelle. Pour faire valoir votre garantie, contactez simplement notre service client avec votre numéro d'intervention.",
    category: 'garantie',
    tags: ['garantie', 'réparations', '12 mois', 'pièces', 'main-d\'œuvre']
  },
  {
    id: 'faq-4',
    question: "Quelles sont les normes de sécurité que respectent vos installations ?",
    answer: "Toutes nos installations respectent les normes européennes EN 81-20 et EN 81-50 ainsi que la réglementation française en vigueur. Nos ascenseurs sont conformes aux exigences de sécurité les plus strictes et font l'objet d'un contrôle technique régulier par des organismes indépendants certifiés. Nous fournissons tous les certificats de conformité nécessaires après chaque installation ou modernisation importante.",
    category: 'normes',
    tags: ['normes', 'sécurité', 'EN 81-20', 'EN 81-50', 'conformité']
  },
  {
    id: 'faq-5',
    question: "Quels types de contrats de maintenance proposez-vous ?",
    answer: "Nous proposons trois types de contrats de maintenance : Standard (maintenance préventive et visites périodiques), Plus (inclut les petites réparations et pièces d'usure) et Premium (couverture complète 24/7 avec délais d'intervention garantis). Tous nos contrats sont personnalisables selon vos besoins spécifiques et le type d'équipement. Contactez notre service commercial pour obtenir un devis personnalisé.",
    category: 'contrats',
    tags: ['contrats', 'maintenance', 'standard', 'plus', 'premium']
  },
  {
    id: 'faq-6',
    question: "Comment se déroule une visite de maintenance préventive ?",
    answer: "Une visite de maintenance préventive comprend l'inspection des composants mécaniques et électriques, la vérification des systèmes de sécurité, le nettoyage des pièces essentielles, la lubrification des éléments mobiles et les ajustements nécessaires. Nos techniciens suivent une checklist complète et vous fournissent un rapport détaillé après chaque visite. La fréquence des visites dépend de votre contrat et de l'intensité d'utilisation de votre équipement.",
    category: 'maintenance',
    tags: ['maintenance préventive', 'inspection', 'rapport', 'checklist', 'visite technique']
  },
  {
    id: 'faq-7',
    question: "Que faire en cas de personne bloquée dans l'ascenseur ?",
    answer: "En cas de personne bloquée, contactez immédiatement notre Service Dépannage au +33 1 23 45 67 89 qui est disponible 24h/24 et 7j/7. Rassurez la personne bloquée via l'interphone de l'ascenseur si possible. Ne tentez jamais de libérer vous-même une personne bloquée, cela pourrait être dangereux. Nos techniciens sont formés pour ces situations et interviennent en priorité absolue pour ce type d'urgence.",
    category: 'urgence',
    tags: ['personne bloquée', 'urgence', 'intervention prioritaire', 'secours', 'ascenseur en panne']
  },
  {
    id: 'faq-8',
    question: "Comment est calculé le coût d'un contrat de maintenance ?",
    answer: "Le coût d'un contrat de maintenance dépend de plusieurs facteurs : le type et l'âge de l'équipement, le nombre d'étages desservis, la fréquence d'utilisation, le niveau de service choisi (Standard, Plus ou Premium) et les options supplémentaires sélectionnées. Nous établissons un devis personnalisé après une évaluation technique de votre installation. Nos contrats sont transparents, sans frais cachés, et peuvent être ajustés annuellement selon vos besoins.",
    category: 'contrats',
    tags: ['coût', 'contrat', 'maintenance', 'devis', 'tarification']
  }
];

const categories: FAQCategory[] = [
  { id: 'all', name: 'Toutes les questions', icon: <FaQuestion />, color: 'bg-gray-600' },
  { id: 'urgence', name: 'Urgences', icon: <FaPhone />, color: 'bg-red-600' },
  { id: 'maintenance', name: 'Maintenance', icon: <FaTools />, color: 'bg-blue-600' },
  { id: 'garantie', name: 'Garanties', icon: <FaShieldAlt />, color: 'bg-green-600' },
  { id: 'normes', name: 'Normes & Sécurité', icon: <FaBook />, color: 'bg-yellow-600' },
  { id: 'contrats', name: 'Contrats', icon: <FaFileContract />, color: 'bg-purple-600' },
];

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  // Filter FAQs based on category and search query
  const filteredFAQs = useMemo(() => {
    return faqItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="pt-28 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-600">
              Trouvez rapidement des réponses aux questions les plus courantes concernant nos services d&apos;appareils d&apos;accessibilité.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
              <div className="pl-4 text-gray-400">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Rechercher une question..."
                className="w-full py-4 px-3 text-gray-700 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="pr-4 text-gray-400 hover:text-gray-600"
                  aria-label="Effacer la recherche"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                    ? `${category.color} text-white` 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={openItemId === item.id}
                  >
                    <span className="font-medium text-gray-900">{item.question}</span>
                    <motion.div
                      animate={{ rotate: openItemId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaChevronDown className="text-gray-500" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openItemId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-5 pt-0 border-t border-gray-200">
                          <p className="text-gray-700">{item.answer}</p>
                          
                          {/* Tags */}
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                              <span 
                                key={index} 
                                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Aucune question ne correspond à votre recherche.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-2 text-blue-600 hover:underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
          
          {/* Contact CTA */}
          <div className="mt-12 bg-[#2b3343] text-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Vous ne trouvez pas de réponse ?</h3>
            <p className="mb-4">Notre équipe est disponible pour répondre à toutes vos questions.</p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-[#2b3343] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
