import { FaHome, FaBuilding, FaIndustry, FaShoppingCart } from 'react-icons/fa';
import { ProjectCategory } from '@/types/project';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export default function CategoryFilter({ 
  activeCategory, 
  onCategoryChange,
  className = '' 
}: CategoryFilterProps) {
  const categories: ProjectCategory[] = [
    { name: 'Tout', icon: null, value: 'all' },
    { name: 'Résidentiel', icon: <FaHome className="mr-2" />, value: 'Résidentiel' },
    { name: 'Commercial', icon: <FaShoppingCart className="mr-2" />, value: 'Commercial' },
    { name: 'Industriel', icon: <FaIndustry className="mr-2" />, value: 'Industriel' },
    { name: 'Particulier', icon: <FaBuilding className="mr-2" />, value: 'Particulier' },
  ];

  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`flex items-center px-5 py-2.5 rounded-full border transition-colors duration-300 shadow-sm ${
            activeCategory === category.value
              ? 'bg-[#2b3343] text-white border-[#2b3343]'
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
          }`}
        >
          {category.icon}
          {category.name}
        </button>
      ))}
    </div>
  );
}
