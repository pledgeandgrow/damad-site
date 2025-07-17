import { FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaBuilding, FaClock } from 'react-icons/fa';
import { Project } from '@/types';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const hasMultipleImages = project?.images && project.images.length > 1;

  useEffect(() => {
    if (project) {
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
      // Trigger the opening animation
      setIsVisible(true);
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [project]);

  const handleClose = () => {
    // Trigger the closing animation
    setIsClosing(true);
    // Wait for the animation to complete before calling onClose
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      onClose();
    }, 200);
  };

  // Don't render anything if there's no project or if the modal is not visible
  if (!project || !isVisible) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center p-4 pt-20">
        {/* Backdrop with animation */}
        <div 
          className={`fixed inset-0 bg-black/70 transition-opacity duration-200 ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleClose}
          aria-hidden="true"
        />
        
        {/* Modal with animation */}
        <div 
          className={`relative w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-200 transform ${
            isClosing ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 text-gray-700 hover:text-gray-900 transition-colors bg-white/80 hover:bg-white rounded-full p-2"
            aria-label="Close modal"
          >
            <FaTimes className="h-5 w-5" />
          </button>
          
          {/* Image Gallery */}
          <div className="relative w-full h-80 md:h-96 bg-gray-100 overflow-hidden">
            {project.images && project.images.length > 0 ? (
              <>
                <Image 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="object-cover transition-opacity duration-300"
                  fill
                  sizes="100vw"
                  priority
                />
                
                {/* Image Navigation Controls */}
                {hasMultipleImages && (
                  <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(prev => 
                          prev === 0 ? (project.images?.length || 1) - 1 : prev - 1
                        );
                      }}
                      className="bg-white/80 hover:bg-white text-[#2b3343] p-2 rounded-full shadow-md transition-all"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft className="h-4 w-4" />
                    </button>
                    
                    <div className="bg-white/80 px-3 py-1 rounded-full text-xs font-medium text-[#2b3343]">
                      {currentImageIndex + 1} / {project.images.length}
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(prev => 
                          prev === (project.images?.length || 1) - 1 ? 0 : prev + 1
                        );
                      }}
                      className="bg-white/80 hover:bg-white text-[#2b3343] p-2 rounded-full shadow-md transition-all"
                      aria-label="Next image"
                    >
                      <FaChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-100">
                <span className="text-gray-400">Aucune image disponible</span>
              </div>
            )}
            
            {/* Project title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {project.category && (
                  <span className="inline-flex items-center bg-[#2b3343] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    {project.category}
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-0 drop-shadow-md">
                {project.title}
              </h1>
            </div>
          </div>
          
          {/* Project info bar */}
          <div className="bg-white border-b border-gray-100 px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center text-[#3d4759]">
                  <FaCalendarAlt className="mr-2 text-[#2b3343]" />
                  <span className="font-medium">{project.year}</span>
                </div>
                {project.location && (
                  <div className="flex items-center text-[#3d4759]">
                    <FaMapMarkerAlt className="mr-2 text-[#2b3343]" />
                    <span className="font-medium">{project.location}</span>
                  </div>
                )}
                {project.client && (
                  <div className="flex items-center text-[#3d4759]">
                    <FaBuilding className="mr-2 text-[#2b3343]" />
                    <span className="font-medium">{project.client}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center text-[#3d4759]">
                    <FaClock className="mr-2 text-[#2b3343]" />
                    <span className="font-medium">{project.duration}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Project details */}
          <div className="p-8 bg-white">
            {project.fullDescription && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#2b3343] mb-4">Description du projet</h3>
                <div className="prose max-w-none text-[#2b3343] leading-relaxed">
                  <p className="text-lg text-[#3d4759]">{project.fullDescription}</p>
                </div>
              </div>
            )}
            
            {project.features && project.features.length > 0 && (
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#2b3343] mb-5 pb-2 border-b border-gray-100">Caractéristiques</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start bg-gray-50/70 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-[#2b3343] mr-3 mt-0.5">•</span>
                      <span className="text-[#3d4759]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.challenge && (
              <div className="mt-10 bg-blue-50/30 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-[#2b3343] mb-3 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">1</span>
                  Défi
                </h3>
                <p className="text-[#3d4759] pl-9">{project.challenge}</p>
              </div>
            )}
            
            {project.solution && (
              <div className="mt-6 bg-green-50/30 p-6 rounded-xl border border-green-100">
                <h3 className="text-xl font-bold text-[#2b3343] mb-3 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-sm">2</span>
                  Solution
                </h3>
                <p className="text-[#3d4759] pl-9">{project.solution}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
