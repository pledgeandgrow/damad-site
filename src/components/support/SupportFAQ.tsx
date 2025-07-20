"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestion, FaSearch, FaTimes, FaFilter, FaTools, FaShieldAlt, FaPhone, FaFileContract } from 'react-icons/fa';

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
    question: "Proposez-vous des contrats de maintenance préventive ?",
    answer: "Oui, nous proposons plusieurs formules de contrats de maintenance préventive adaptées à vos besoins. Nos contrats incluent des visites régulières d'entretien, le remplacement des pièces d'usure, et des tarifs préférentiels sur les interventions. Nous recommandons une maintenance préventive pour prolonger la durée de vie de votre ascenseur et réduire les risques de panne.",
    category: 'contrats',
    tags: ['contrats', 'maintenance préventive', 'entretien', 'pièces d\'usure']
  },
  {
    id: 'faq-5',
    question: "Comment mettre à jour mon ascenseur aux dernières normes de sécurité ?",
    answer: "Pour mettre à jour votre ascenseur aux dernières normes de sécurité, commencez par demander un audit de conformité. Notre équipe évaluera votre installation et vous proposera un plan de mise aux normes détaillé. Nous pouvons réaliser les travaux par phases pour minimiser les perturbations et adapter le planning à votre budget. Contactez-nous pour planifier votre audit de conformité.",
    category: 'normes',
    tags: ['normes', 'sécurité', 'audit', 'conformité', 'mise aux normes']
  },
  {
    id: 'faq-6',
    question: "Que faire si mon ascenseur fait des bruits anormaux ?",
    answer: "Les bruits anormaux peuvent indiquer un problème mécanique. Arrêtez immédiatement l'utilisation de l'ascenseur et contactez notre service technique. Ne tentez jamais de réparer vous-même. Nos techniciens effectueront un diagnostic complet pour identifier la source du problème et procéder aux réparations nécessaires.",
    category: 'maintenance',
    tags: ['bruits', 'problème mécanique', 'diagnostic', 'réparations']
  },
  {
    id: 'faq-7',
    question: "Combien coûte une intervention d'urgence ?",
    answer: "Le coût d'une intervention d'urgence dépend de la nature du problème et de l'heure d'intervention. Nos tarifs d'urgence incluent le déplacement, le diagnostic et la première heure de main-d'œuvre. Un devis détaillé vous sera fourni avant toute intervention. Les clients sous contrat de maintenance bénéficient de tarifs préférentiels.",
    category: 'urgence',
    tags: ['coût', 'tarifs', 'urgence', 'devis', 'contrat maintenance']
  },
  {
    id: 'faq-8',
    question: "Quelle est la durée de vie moyenne d'un ascenseur ?",
    answer: "Un ascenseur bien entretenu a une durée de vie moyenne de 20 à 25 ans. Cette durée peut être prolongée avec une maintenance préventive régulière et des modernisations périodiques. Nous recommandons une évaluation complète tous les 15 ans pour déterminer les besoins de modernisation.",
    category: 'maintenance',
    tags: ['durée de vie', 'entretien', 'modernisation', 'évaluation']
  },
  {
    id: 'faq-9',
    question: "Quelles sont les normes de sécurité obligatoires pour les ascenseurs ?",
    answer: "Les ascenseurs doivent respecter la norme EN 81 et les règlements français. Cela inclut des dispositifs de sécurité comme le parachute, le limiteur de vitesse, les portes palières, l'éclairage de secours et l'alarme. Un contrôle technique obligatoire doit être effectué tous les 5 ans par un organisme agréé.",
    category: 'normes',
    tags: ['normes', 'EN 81', 'sécurité', 'contrôle technique', 'réglementation']
  },
  {
    id: 'faq-10',
    question: "Combien coûte l'installation d'un nouvel ascenseur ?",
    answer: "Le coût d'installation varie selon plusieurs facteurs : nombre d'étages, charge utile, finitions, et contraintes du bâtiment. Comptez entre 15 000€ et 30 000€ pour un ascenseur standard dans un immeuble de 3 étages. Nous proposons un devis gratuit et personnalisé après étude de votre projet.",
    category: 'contrats',
    tags: ['coût', 'installation', 'devis', 'prix', 'ascenseur neuf']
  },
  {
    id: 'faq-11',
    question: "Que faire en cas de panne d'ascenseur le week-end ?",
    answer: "Notre service d'urgence répond sous 48h, y compris les week-ends et jours fériés. Appelez notre numéro d'urgence au +33 1 86 04 30 63. Un technicien interviendra dans les plus brefs délais. Les tarifs week-end peuvent inclure un supplément selon votre contrat de maintenance.",
    category: 'urgence',
    tags: ['panne', 'week-end', 'urgence', 'response 48h', 'intervention']
  },
  {
    id: 'faq-12',
    question: "Comment améliorer l'efficacité énergétique de mon ascenseur ?",
    answer: "Plusieurs solutions existent : modernisation du moteur vers une technologie à variation de fréquence, installation d'éclairage LED, optimisation des temps d'arrêt, et récupération d'énergie. Ces améliorations peuvent réduire la consommation énergétique jusqu'à 50% et sont éligibles à certaines aides financières.",
    category: 'maintenance',
    tags: ['économie d\'énergie', 'modernisation', 'LED', 'efficacité', 'aides financières']
  },
  {
    id: 'faq-13',
    question: "Quels documents dois-je fournir pour une demande de devis ?",
    answer: "Pour établir un devis précis, nous avons besoin : des plans du bâtiment, de la hauteur à desservir, du nombre d'arrêts, de la charge utile souhaitée, et des contraintes techniques. Si possible, fournissez aussi des photos de l'emplacement prévu. Notre équipe peut également se déplacer pour une étude sur site.",
    category: 'contrats',
    tags: ['devis', 'documents', 'plans', 'étude', 'visite technique']
  },
  {
    id: 'faq-14',
    question: "Mon ascenseur vibre anormalement, est-ce dangereux ?",
    answer: "Les vibrations anormales peuvent indiquer un problème avec les guides, les câbles, ou le moteur. Par précaution, cessez d'utiliser l'ascenseur et contactez immédiatement notre service technique. Un diagnostic rapide permettra d'identifier la cause et d'évaluer le niveau de risque. Ne négligez jamais ce type de symptôme.",
    category: 'urgence',
    tags: ['vibrations', 'danger', 'diagnostic', 'guides', 'câbles']
  },
  {
    id: 'faq-15',
    question: "Puis-je moderniser mon ascenseur sans arrêter complètement le service ?",
    answer: "Selon l'ampleur des travaux, nous pouvons planifier une modernisation par phases pour minimiser les interruptions. Certaines opérations comme le changement de l'éclairage ou de la cabine peuvent être réalisées partiellement. Nous étudions chaque projet pour proposer la solution la moins contraignante possible.",
    category: 'maintenance',
    tags: ['modernisation', 'phases', 'interruption', 'planification', 'service continu']
  },
  {
    id: 'faq-16',
    question: "Quelles sont les obligations légales du propriétaire d'ascenseur ?",
    answer: "Le propriétaire doit assurer la maintenance régulière, effectuer les contrôles techniques obligatoires tous les 5 ans, tenir un carnet d'entretien à jour, et garantir la sécurité des usagers. Il doit aussi souscrire une assurance responsabilité civile et afficher les consignes de sécurité dans la cabine.",
    category: 'normes',
    tags: ['obligations légales', 'propriétaire', 'maintenance', 'assurance', 'carnet d\'entretien']
  },
  {
    id: 'faq-17',
    question: "Comment choisir entre réparation et remplacement de mon ascenseur ?",
    answer: "Cette décision dépend de l'âge de l'installation, du coût des réparations, de la fréquence des pannes, et de la conformité aux normes actuelles. Généralement, si les réparations dépassent 60% du coût d'un ascenseur neuf, le remplacement est plus économique. Nous vous accompagnons dans cette analyse.",
    category: 'contrats',
    tags: ['réparation', 'remplacement', 'coût', 'analyse', 'économique']
  },
  {
    id: 'faq-18',
    question: "Votre entreprise propose-t-elle des solutions pour l'accessibilité PMR ?",
    answer: "Absolument ! Nous installons des ascenseurs conformes aux normes d'accessibilité PMR : boutons en braille, annonces vocales, hauteur adaptée, largeur de porte suffisante, et main courante. Nous proposons aussi la modernisation d'ascenseurs existants pour les rendre accessibles aux personnes à mobilité réduite.",
    category: 'normes',
    tags: ['accessibilité', 'PMR', 'braille', 'annonces vocales', 'conformité']
  }
];

export default function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showSearch, setShowSearch] = useState(false);

  const categories: FAQCategory[] = [
    { id: 'all', name: 'Toutes', icon: <FaFilter className="w-4 h-4" />, color: 'bg-gray-100 text-gray-700' },
    { id: 'urgence', name: 'Urgences', icon: <FaPhone className="w-4 h-4" />, color: 'bg-red-50 text-red-700 border border-red-200' },
    { id: 'maintenance', name: 'Maintenance', icon: <FaTools className="w-4 h-4" />, color: 'bg-blue-50 text-[#2b3343] border border-blue-200' },
    { id: 'garantie', name: 'Garantie', icon: <FaShieldAlt className="w-4 h-4" />, color: 'bg-green-50 text-green-700 border border-green-200' },
    { id: 'normes', name: 'Normes', icon: <FaFileContract className="w-4 h-4" />, color: 'bg-indigo-50 text-indigo-700 border border-indigo-200' },
    { id: 'contrats', name: 'Contrats', icon: <FaFileContract className="w-4 h-4" />, color: 'bg-amber-50 text-amber-700 border border-amber-200' }
  ];



  const filteredFAQs = useMemo(() => {
    let filtered = faqItems;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.question.toLowerCase().includes(searchLower) ||
        item.answer.toLowerCase().includes(searchLower) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    return filtered;
  }, [selectedCategory, searchTerm]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    setShowSearch(false);
  };
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setOpenIndex(null);
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
            <div className="p-3 bg-[#2b3343]/10 rounded-full">
              <FaQuestion className="w-6 h-6 text-[#2b3343]" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[#2b3343] mb-4">Questions Fréquentes</h2>
          <p className="text-xl text-gray-600 mb-8">
            Trouvez rapidement des réponses aux questions les plus courantes
          </p>
          
          {/* Search and Filter Controls */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Search Toggle Button */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="flex items-center justify-center px-4 py-2 bg-[#2b3343] text-white rounded-lg hover:bg-[#3d4759] transition-colors"
              >
                <FaSearch className="w-4 h-4 mr-2" />
                Rechercher
              </button>
              
              {/* Reset Filters Button */}
              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={resetFilters}
                  className="flex items-center justify-center px-4 py-2 bg-[#2b3343]/10 text-[#2b3343] rounded-lg hover:bg-[#2b3343]/20 transition-colors border border-[#2b3343]/20"
                >
                  <FaTimes className="w-4 h-4 mr-2" />
                  Réinitialiser
                </button>
              )}
            </div>
            
            {/* Search Bar */}
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-6"
                >
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Rechercher dans les questions et réponses..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 border border-[#2b3343]/30 rounded-lg focus:ring-2 focus:ring-[#2b3343] focus:border-[#2b3343] transition-colors"
                    />
                    {searchTerm && (
                      <button
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2b3343]/60 hover:text-[#2b3343] transition-colors"
                      >
                        <FaTimes className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-[#2b3343] text-white shadow-lg transform scale-105'
                      : `${category.color} hover:shadow-md hover:scale-105`
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Summary */}
        {(searchTerm || selectedCategory !== 'all') && (
          <div className="text-center mb-6">
            <p className="text-gray-600">
              {filteredFAQs.length} résultat{filteredFAQs.length !== 1 ? 's' : ''} trouvé{filteredFAQs.length !== 1 ? 's' : ''}
              {searchTerm && ` pour "${searchTerm}"`}
              {selectedCategory !== 'all' && ` dans la catégorie "${categories.find(c => c.id === selectedCategory)?.name}"`}
            </p>
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => {
              const categoryInfo = categories.find(c => c.id === item.category);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-start focus:outline-none hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {categoryInfo && (
                          <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${categoryInfo.color}`}>
                            {categoryInfo.icon}
                            <span>{categoryInfo.name}</span>
                          </span>
                        )}
                      </div>
                      <span className="text-lg font-medium text-[#2b3343] pr-4">{item.question}</span>
                    </div>
                    <FaChevronDown 
                      className={`w-5 h-5 text-[#2b3343] transition-transform duration-300 flex-shrink-0 mt-1 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`} 
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
                        <div className="px-6 pb-6 text-gray-700 border-t border-gray-100">
                          <p className="pt-4 leading-relaxed">{item.answer}</p>
                          
                          {/* Tags */}
                          {item.tags.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 bg-white rounded-lg shadow-md border border-[#2b3343]/10"
            >
              <FaQuestion className="w-12 h-12 text-[#2b3343]/40 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#2b3343] mb-2">Aucun résultat trouvé</h3>
              <p className="text-[#2b3343]/70 mb-4">
                Aucune question ne correspond à vos critères de recherche.
              </p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center px-4 py-2 bg-[#2b3343] text-white rounded-lg hover:bg-[#3d4759] transition-colors"
              >
                <FaTimes className="w-4 h-4 mr-2" />
                Réinitialiser les filtres
              </button>
            </motion.div>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-[#2b3343]/5 rounded-xl p-8 border border-[#2b3343]/10"
        >
          <p className="text-[#2b3343]/80 mb-6 text-lg">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-[#2b3343] hover:bg-[#3d4759] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  );
}
