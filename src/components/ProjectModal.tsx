import { FaTimes, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Project } from '@/types';
import { useEffect, useState } from 'react';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
          
          {/* Modal header */}
          <div className="px-8 pt-8 pb-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#2b3343] mb-2">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  {project.category && (
                    <span className="inline-flex items-center bg-[#2b3343] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  )}
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
                </div>
              </div>
              {project.client && (
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-sm text-[#6b7280] font-medium">Client</div>
                  <div className="text-[#2b3343] font-semibold">{project.client}</div>
                </div>
              )}
            </div>
          </div>
          
          {/* Project details */}
          <div className="p-8 bg-white">
            {project.fullDescription && (
              <div className="prose max-w-none text-[#2b3343] leading-relaxed">
                <p className="text-lg text-[#3d4759]">{project.fullDescription}</p>
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
