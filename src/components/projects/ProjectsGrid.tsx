import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';

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

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucun projet trouvé pour cette catégorie.</p>
      </div>
    );
  }

  return (
    <div className={`grid ${gridCols} gap-6 ${className}`}>
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          className="h-full cursor-pointer"
          onClick={() => onProjectClick?.(project)}
        />
      ))}
    </div>
  );
}
