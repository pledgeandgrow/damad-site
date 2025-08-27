"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

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
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const jobs: Job[] = []; // Aucun poste ouvert actuellement



  const toggleJob = (id: string) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  return (
    <section id="postes-ouverts" className="py-8 bg-[#fbfcfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4 mt-2">
            Postes Ouverts
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
          <p className="text-[#2b3343] max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Découvrez nos opportunités d&apos;emploi actuelles et rejoignez notre équipe de professionnels
          </p>
        </motion.div>

        {/* Job listings */}
        <div className="space-y-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
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
                      <div className="p-3 bg-[#0046fe] rounded-lg shadow-md text-white">
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
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <div className="max-w-md mx-auto">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mb-4">
                  <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pas de postes ouverts</h3>
                <p className="text-gray-600">Il n&apos;y a actuellement aucun poste disponible. N&apos;hésitez pas à nous contacter pour toute candidature spontanée.</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
