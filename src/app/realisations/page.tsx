'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getAllImages, getProjectsByCategory } from '../../data/projects';
import MobileProjectCarousel from '@/components/projects/MobileProjectCarousel';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import RealisationsCTA from '@/components/projects/RealisationsCTA';
import ImageModal from '@/components/projects/ImageModal';

export default function RealisationsPage() {
  // We're not filtering by category anymore
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  
  const projects = getProjectsByCategory();
  const allImages = getAllImages();
  
  // Handle project click to open modal
  const handleProjectClick = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedImage(project.image);
      setIsModalOpen(true);
    }
  }
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2b3343] h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/site/realisation.jpg" 
            alt="Nos Réalisations" 
            className="object-cover object-[center_top]"
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
            <div className="w-24 h-1 bg-[#0046fe] mx-auto mt-2"></div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2b3343] mb-4">Explorez nos réalisations</h2>
            <p className="text-gray-600 mb-8">Découvrez nos projets d&apos;accessibilité et ascenseurs réalisés pour nos clients.</p>
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

          {/* No empty state needed since we always show all images */}
        </div>
      </section>

      {/* Project Modal removed */}

      {/* CTA Section */}
      <RealisationsCTA />

      {/* Full-screen Image Modal */}
      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage}
        allImages={allImages}
      />
    </div>
  );
}
