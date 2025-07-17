'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import CategoryFilter from '@/components/projects/CategoryFilter';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectModal from '../../components/projects/ProjectModal';
import { getProjectsByCategory } from '../../data/projects';
import { Project } from '@/types';
import useModal from '@/hooks/useModal';
import MobileProjectCarousel from '@/components/projects/MobileProjectCarousel';

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
      <section className="relative bg-gradient-to-r from-[#2b3343] to-[#3d4759] text-white py-24 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 mb-5 text-sm font-semibold text-white bg-white/10 rounded-full shadow-md backdrop-blur-sm">
            Nos projets réalisés
          </span>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Nos Réalisations
          </h1>
          
          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos projets récents et laissez-vous inspirer par notre savoir-faire en matière d&apos;ascenseurs, de portes automatiques et de solutions d&apos;accessibilité.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2b3343] mb-4">Explorez nos réalisations par catégorie</h2>
            <p className="text-gray-600 mb-8">Filtrez nos projets selon le type de bâtiment ou d&apos;installation pour trouver les références qui correspondent à vos besoins.</p>
            
            {/* Category Filter */}
            <CategoryFilter 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              className="mt-8"
            />
          </div>

          {/* Desktop Projects Grid - Hidden on Mobile */}
          <div className="hidden md:block">
            <ProjectsGrid 
              projects={projects} 
              className="mb-12"
              onProjectClick={handleProjectClick}
            />
          </div>
          
          {/* Mobile Projects Carousel - Hidden on Desktop */}
          <div className="md:hidden mb-12">
            <MobileProjectCarousel 
              projects={projects}
              onProjectClick={handleProjectClick}
            />
          </div>

          {/* Le bouton "Charger plus de projets" a été supprimé */}
          
          {projects.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-gray-500 text-lg">Aucun projet ne correspond à cette catégorie pour le moment.</p>
              <button 
                onClick={() => setActiveCategory('all')} 
                className="mt-4 text-[#2b3343] font-medium hover:underline"
              >
                Voir tous les projets
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
      <section className="bg-gradient-to-r from-[#2b3343] to-[#3d4759] text-white py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Un projet en tête ?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Notre équipe d&apos;experts est à votre écoute pour concrétiser votre projet d&apos;installation, de maintenance ou de modernisation d&apos;ascenseurs et d&apos;accessibilité.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#2b3343] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
              >
                Parler à un expert
                <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/devis"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
