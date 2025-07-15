import { FaArrowRight } from 'react-icons/fa';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  className?: string;
  onClick?: () => void;
}

export default function ProjectCard({ project, className = '', onClick }: ProjectCardProps) {
  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full ${className}`}
      onClick={onClick}
    >
      <div className="p-6 pb-0">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-block bg-[#2b3343] text-white text-xs px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-gray-500 text-sm">{project.year}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-6">
          <div>
            <div className="font-medium">Client</div>
            <div className="truncate">{project.client}</div>
          </div>
          <div>
            <div className="font-medium">Année</div>
            <div>{project.year}</div>
          </div>
          <div>
            <div className="font-medium">Lieu</div>
            <div className="truncate">{project.location}</div>
          </div>
        </div>
        
        <div className="inline-flex items-center text-[#2b3343] font-medium hover:text-[#3d4759] group transition-colors cursor-pointer">
          Voir le projet
          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}
