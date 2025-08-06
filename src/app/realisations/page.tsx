'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      <div className="relative bg-[#2b3343] h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/projects/damad1.jpg" 
            alt="Nos Réalisations" 
            className="object-cover"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="animate-fade-in-up bg-black/40 backdrop-blur-sm inline-block px-8 py-6 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              NOS RÉALISATIONS
            </h1>
            <div className="w-24 h-1 bg-[#99a8b1] mx-auto"></div>
            <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos projets récents et laissez-vous inspirer par notre savoir-faire
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[2]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] text-white">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

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
