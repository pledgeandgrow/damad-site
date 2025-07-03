import { FaTimes, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import { Project } from '@/types/project';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/70 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
        
        {/* Modal */}
        <div className="relative w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 text-white hover:text-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <FaTimes className="h-6 w-6" />
          </button>
          
          {/* Modal content */}
          <div className="relative h-96 bg-gray-900">
            <div className="absolute inset-0">
              <Image
                src={project.images?.[0] || project.image}
                alt={project.title}
                fill
                className="object-cover opacity-70"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-20">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {project.year}
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    {project.location}
                  </div>
                  {project.category && (
                    <span className="inline-flex items-center bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                      {project.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Project details */}
          <div className="p-6">
            {project.fullDescription && (
              <div className="prose max-w-none">
                {project.fullDescription}
              </div>
            )}
            
            {project.features && project.features.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.challenge && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Défi</h3>
                <p className="text-gray-700">{project.challenge}</p>
              </div>
            )}
            
            {project.solution && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Solution</h3>
                <p className="text-gray-700">{project.solution}</p>
              </div>
            )}
            
            {/* Image gallery */}
            {project.images && project.images.length > 1 && (
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Galerie</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
