"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaTools, FaUserTie, FaWrench, FaHeadset, FaChartLine } from 'react-icons/fa';

type JobCategory = 'all' | 'technique' | 'commercial' | 'administratif';

type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  category: string;
  description: string;
  requirements: string[];
  icon: React.ReactNode;
};

export default function JobOpenings() {
  const [activeCategory, setActiveCategory] = useState<JobCategory>('all');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const jobs: Job[] = [
    {
      id: 'tech-1',
      title: 'Technicien de maintenance ascenseurs',
      location: 'Paris, France',
      type: 'CDI',
      category: 'technique',
      description: 'Nous recherchons un technicien de maintenance qualifié pour assurer l\'entretien préventif et correctif de notre parc d\'ascenseurs. Vous serez responsable des visites de maintenance programmées et des interventions d\'urgence.',
      requirements: [
        'Formation technique en électromécanique ou équivalent',
        'Expérience de 2 ans minimum dans la maintenance d\'ascenseurs',
        'Permis B obligatoire',
        'Connaissance des normes de sécurité en vigueur'
      ],
      icon: <FaTools className="w-6 h-6" />
    },
    {
      id: 'tech-2',
      title: 'Monteur d\'ascenseurs',
      location: 'Lyon, France',
      type: 'CDI',
      category: 'technique',
      description: 'Vous participerez à l\'installation de nouveaux ascenseurs sur différents chantiers. Vous serez chargé du montage mécanique et électrique des équipements selon les plans et les normes de sécurité.',
      requirements: [
        'CAP/BEP ou Bac Pro en électromécanique',
        'Expérience de 3 ans dans l\'installation d\'ascenseurs',
        'Lecture de plans techniques',
        'Travail en hauteur et en équipe'
      ],
      icon: <FaWrench className="w-6 h-6" />
    },
    {
      id: 'com-1',
      title: 'Commercial B2B',
      location: 'Paris, France',
      type: 'CDI',
      category: 'commercial',
      description: 'En tant que commercial B2B, vous développerez notre portefeuille clients professionnels et proposerez nos solutions d\'ascenseurs pour les immeubles de bureaux et résidentiels.',
      requirements: [
        'Formation commerciale ou technique avec expérience commerciale',
        'Minimum 3 ans d\'expérience dans la vente B2B',
        'Excellentes capacités de négociation et de communication',
        'Connaissance du secteur du bâtiment appréciée'
      ],
      icon: <FaUserTie className="w-6 h-6" />
    },
    {
      id: 'adm-1',
      title: 'Assistant(e) Service Client',
      location: 'Paris, France',
      type: 'CDI',
      category: 'administratif',
      description: 'Vous serez le premier point de contact pour nos clients et assurerez la coordination entre les clients et nos équipes techniques. Vous gérerez les demandes d\'intervention et le suivi des contrats de maintenance.',
      requirements: [
        'Formation en gestion administrative ou équivalent',
        'Expérience de 2 ans dans un poste similaire',
        'Maîtrise des outils bureautiques',
        'Excellent relationnel et sens du service client'
      ],
      icon: <FaHeadset className="w-6 h-6" />
    },
    {
      id: 'adm-2',
      title: 'Responsable Administratif',
      location: 'Paris, France',
      type: 'CDI',
      category: 'administratif',
      description: 'Vous superviserez l\'ensemble des fonctions administratives de l\'entreprise, incluant la gestion des contrats, la facturation et le suivi des indicateurs de performance.',
      requirements: [
        'Formation supérieure en gestion ou administration des entreprises',
        'Expérience de 5 ans minimum dans un poste similaire',
        'Maîtrise avancée des outils de gestion',
        'Capacités d\'analyse et de synthèse'
      ],
      icon: <FaChartLine className="w-6 h-6" />
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les postes' },
    { id: 'technique', name: 'Technique' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'administratif', name: 'Administratif' }
  ];

  const filteredJobs = activeCategory === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  const toggleJob = (id: string) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  return (
    <section id="postes-ouverts" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#2b3343] mb-4 relative inline-block">
            <span className="relative z-10">Postes Ouverts</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos opportunités d&apos;emploi actuelles et rejoignez notre équipe de professionnels
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as JobCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#2b3343] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Job listings */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-3 bg-gradient-to-br from-[#2b3343] to-[#3d4759] rounded-lg shadow-md text-white">
                        {job.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-[#2b3343]">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-sm text-gray-600">{job.location}</span>
                          <span className="text-sm text-gray-600">•</span>
                          <span className="text-sm font-medium text-blue-600">{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-300 ${expandedJob === job.id ? 'rotate-90' : ''}`}>
                      <FaArrowRight className="text-[#2b3343]" />
                    </div>
                  </div>
                </div>

                {/* Expanded job details */}
                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <div className="mb-4">
                      <h4 className="text-lg font-medium text-[#2b3343] mb-2">Description du poste</h4>
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-[#2b3343] mb-2">Compétences requises</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-[#2b3343] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <a 
                        href="#candidature" 
                        className="inline-flex items-center text-[#2b3343] font-medium hover:text-blue-700 transition-colors duration-300"
                      >
                        Postuler à cette offre
                        <FaArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">Aucun poste disponible dans cette catégorie actuellement.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
