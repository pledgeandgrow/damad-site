import { FaArrowRight } from 'react-icons/fa';
import { Project } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  className?: string;
  onClick?: () => void;
}

export default function ProjectCard({ project, className = '', onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      {/* Image container with overlay on hover */}
      <div className="relative h-72 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
        
        {/* Hover overlay */}
        <motion.div 
          className="absolute inset-0 bg-[#2b3343]/30 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        
        {/* "Voir le projet" overlay on hover */}
        <motion.div 
          className="absolute inset-0 z-20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center text-[#2b3343] font-semibold">
              Voir le projet
              <FaArrowRight className="ml-2" />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Project image */}
        <Image 
          src={project.image} 
          alt={project.title} 
          className="object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
        
        {/* Project title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
