import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  className?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  breadcrumb = [],
  className = ''
}: PageHeaderProps) {
  return (
    <div className={`bg-[#2b3343] text-white py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {breadcrumb && breadcrumb.length > 0 && (
          <div className="flex items-center flex-wrap text-sm mb-4">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={item.href}>
                {index > 0 && (
                  <FaChevronRight className="mx-2 text-white/50 w-2 h-2" />
                )}
                {index === breadcrumb.length - 1 ? (
                  <span className="text-white/70">{item.name}</span>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        
        {subtitle && (
          <p className="mt-4 text-lg text-white/80 max-w-3xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
