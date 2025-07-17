import { FaArrowRight, FaMapMarkerAlt, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import { Project } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  className?: string;
  onClick?: () => void;
}

export default function ProjectCard({ project, className = '', onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with overlay on hover */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        <div 
          className={`absolute inset-0 bg-[#2b3343]/20 z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        ></div>
        <Image 
          src={project.image} 
          alt={project.title} 
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-4 left-4 z-20 inline-block bg-[#2b3343] text-white text-xs px-3 py-1 rounded-full shadow-md">
          {project.category}
        </span>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="mt-auto"></div>
      </div>
      
      <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-2">
        <div className="inline-flex items-center text-[#2b3343] font-medium hover:text-[#3d4759] group transition-colors cursor-pointer">
          Voir le projet
          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}
