'use client';

import { IconType } from 'react-icons';

interface QuickActionButtonProps {
  icon: IconType;
  label: string;
  onClick?: () => void;
}

export default function QuickActionButton({
  icon: Icon,
  label,
  onClick
}: QuickActionButtonProps) {
  return (
    <button 
      className="bg-white hover:bg-gray-50 shadow rounded-lg p-4 text-left transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-steel-blue bg-opacity-10 text-steel-blue flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <span className="ml-3 font-medium">{label}</span>
      </div>
    </button>
  );
}
