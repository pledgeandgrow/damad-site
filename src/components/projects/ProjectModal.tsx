import { FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaBuilding, FaClock, FaCheck, FaTools } from 'react-icons/fa';
import { Project } from '@/types';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
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
  
  const handlePrevImage = () => {
    if (!project?.images || !project.images.length) return;
    setIsImageLoaded(false);
    setCurrentImageIndex((prev) => 
      prev === 0 ? (project.images?.length || 1) - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!project?.images || !project.images.length) return;
    setIsImageLoaded(false);
    setCurrentImageIndex((prev) => 
      prev === (project.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  // Don't render anything if there's no project or if the modal is not visible
  if (!project || !isVisible) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center p-4 pt-16 md:pt-20">
        {/* Backdrop with animation */}
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isClosing ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
          aria-hidden="true"
        />
        
        {/* Modal with animation */}
        <motion.div 
          className="relative w-full max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ 
            opacity: isClosing ? 0 : 1, 
            y: isClosing ? 50 : 0,
            scale: isClosing ? 0.95 : 1
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.19, 1.0, 0.22, 1.0] 
          }}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-[#2b3343] p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
            onClick={handleClose}
            aria-label="Fermer"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row">
            {/* Image section */}
            <div className="relative w-full md:w-1/2 bg-gray-100 h-[300px] md:h-[500px]">
              <AnimatePresence mode="wait">
                {project.images && project.images.length > 0 && (
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isImageLoaded ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image 
                      src={project.images[currentImageIndex]} 
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setIsImageLoaded(true)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Loading spinner */}
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-[#2b3343]/30 border-t-[#2b3343] rounded-full animate-spin"></div>
                </div>
              )}

              {/* Image navigation */}
              {hasMultipleImages && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {project.images?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsImageLoaded(false);
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
              
              {/* Image navigation arrows */}
              {hasMultipleImages && (
                <>
                  <motion.button
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2b3343] p-2 rounded-full shadow-md z-10"
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                    whileHover={{ scale: 1.1, x: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronLeft className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2b3343] p-2 rounded-full shadow-md z-10"
                    onClick={handleNextImage}
                    aria-label="Next image"
                    whileHover={{ scale: 1.1, x: 3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronRight className="w-4 h-4" />
                  </motion.button>
                </>
              )}
            </div>
            {/* Content section */}
            <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[300px] md:max-h-[500px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#2b3343] mb-4">{project.title}</h2>
                
                {/* Project metadata */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {project.category && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#2b3343]/10 text-[#2b3343]">
                      {project.category}
                    </span>
                  )}
                  
                  {project.year && (
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-2 text-[#2b3343]/70" />
                      <span>{project.year}</span>
                    </div>
                  )}
                  
                  {project.location && (
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2 text-[#2b3343]/70" />
                      <span>{project.location}</span>
                    </div>
                  )}
                  
                  {project.client && (
                    <div className="flex items-center text-gray-600">
                      <FaBuilding className="mr-2 text-[#2b3343]/70" />
                      <span>{project.client}</span>
                    </div>
                  )}
                  
                  {project.duration && (
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-2 text-[#2b3343]/70" />
                      <span>{project.duration}</span>
                    </div>
                  )}
                </div>
                
                {/* Project description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#2b3343] mb-2">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
                
                {/* Project features */}
                {project.features && project.features.length > 0 && (
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold text-[#2b3343] mb-2">Caractéristiques</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                          <FaCheck className="mt-1 mr-2 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                {/* Challenge and Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {project.challenge && (
                    <motion.div 
                      className="bg-[#2b3343]/5 p-4 rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h3 className="text-lg font-semibold text-[#2b3343] mb-2">Défi</h3>
                      <p className="text-gray-700">{project.challenge}</p>
                    </motion.div>
                  )}
                  
                  {project.solution && (
                    <motion.div 
                      className="bg-[#2b3343]/5 p-4 rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h3 className="text-lg font-semibold text-[#2b3343] mb-2">Solution</h3>
                      <p className="text-gray-700">{project.solution}</p>
                    </motion.div>
                  )}
                </div>
                
                {/* Call to action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-6"
                >
                  <button 
                    className="flex items-center gap-2 bg-[#2b3343] hover:bg-[#3d4759] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    onClick={handleClose}
                  >
                    <FaTools className="text-white/80" />
                    Discuter de votre projet
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
