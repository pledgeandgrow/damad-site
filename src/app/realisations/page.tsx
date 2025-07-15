'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import CategoryFilter from '@/components/projects/CategoryFilter';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectModal from '@/components/ProjectModal';
import { getProjectsByCategory } from '@/data/projects';
import { Project } from '@/types';
import useModal from '@/hooks/useModal';

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { open, close } = useModal();
  
  const projects = getProjectsByCategory(activeCategory);
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    open();
  };
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2b3343] to-[#3d4759] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Nos Réalisations
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Découvrez nos projets récents et laissez-vous inspirer par notre savoir-faire en matière d&apos;ascenseurs et d&apos;accessibilité pour tous.
        </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <CategoryFilter 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            className="mb-12"
          />

          {/* Projects Grid */}
          <ProjectsGrid 
            projects={projects} 
            className="mb-12"
            onProjectClick={handleProjectClick}
          />

          {projects.length >= 6 && (
            <div className="text-center">
              <button className="bg-[#2b3343] hover:bg-[#3d4759] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
                Charger plus de projets
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={close} 
        />
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#2b3343] to-[#3d4759] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Un projet d&apos;ascenseur en tête ?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Notre équipe d&apos;experts est à votre écoute pour concrétiser votre projet d&apos;installation ou de rénovation d&apos;ascenseur.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-white text-[#2b3343] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Parler à un expert
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
