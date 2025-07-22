import { Project } from '@/types';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

interface ProjectsGridProps {
  projects: Project[];
  className?: string;
  columns?: number;
  onProjectClick?: (project: Project) => void;
}

export default function ProjectsGrid({ 
  projects, 
  className = '',
  columns = 3,
  onProjectClick
}: ProjectsGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  
  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (projects.length === 0) {
    return (
      <motion.div 
        className="text-center py-16 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-inner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <FaSearch className="text-gray-400 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Aucun projet trouvé</h3>
          <p className="text-gray-500 max-w-md">Aucun projet ne correspond à cette catégorie pour le moment. Essayez une autre catégorie.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={`grid ${gridCols} gap-8 ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-full"
        >
          <ProjectCard 
            project={project} 
            className="h-full cursor-pointer"
            onClick={() => onProjectClick?.(project)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
