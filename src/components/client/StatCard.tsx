'use client';

import Link from 'next/link';
import { IconType } from 'react-icons';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: IconType;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  badges?: {
    text: string;
    color: 'green' | 'yellow' | 'red' | 'blue' | 'gray';
  }[];
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  subtitle,
  linkText,
  linkHref,
  badges
}: StatCardProps) {
  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 text-green-800';
      case 'yellow':
        return 'bg-yellow-100 text-yellow-800';
      case 'red':
        return 'bg-red-100 text-red-800';
      case 'blue':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium text-gray-500">{title}</h2>
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <div className="flex items-center">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        {badges && badges.length > 0 && (
          <div className="ml-4 flex space-x-2">
            {badges.map((badge, index) => (
              <span 
                key={index} 
                className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getBadgeColor(badge.color)}`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        )}
      </div>
      {subtitle && (
        <div className="mt-1 text-sm text-gray-500">
          {subtitle}
        </div>
      )}
      {linkText && linkHref && (
        <div className="mt-4">
          <Link 
            href={linkHref}
            className="text-sm text-steel-blue hover:text-blue-700 font-medium"
          >
            {linkText}
          </Link>
        </div>
      )}
    </div>
  );
}
