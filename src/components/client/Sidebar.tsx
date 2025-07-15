'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaInfoCircle, 
  FaCog, 
  FaTools, 
  FaFileInvoiceDollar, 
  FaFileAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { cn } from '@/lib/utils';

type SidebarProps = {
  clientName: string;
};

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export default function Sidebar({ clientName }: SidebarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [clientSlug, setClientSlug] = useState('');
  
  useEffect(() => {
    // Extract client slug from URL if available
    const match = pathname.match(/\/client\/([^\/]+)/);
    if (match && match[1]) {
      setClientSlug(match[1]);
    }
  }, [pathname]);

  const navItems: NavItem[] = [
    {
      name: 'Informations',
      href: `/client/${clientSlug}`,
      icon: <FaInfoCircle className="w-5 h-5" />,
    },
    {
      name: 'Appareils',
      href: `/client/${clientSlug}/appareils`,
      icon: <FaCog className="w-5 h-5" />,
    },
    {
      name: 'Interventions',
      href: `/client/${clientSlug}/interventions`,
      icon: <FaTools className="w-5 h-5" />,
    },
    {
      name: 'Finance',
      href: `/client/${clientSlug}/finance`,
      icon: <FaFileInvoiceDollar className="w-5 h-5" />,
    },
    {
      name: 'Documents',
      href: `/client/${clientSlug}/documents`,
      icon: <FaFileAlt className="w-5 h-5" />,
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-20 left-4 z-40">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md bg-steel-blue text-white focus:outline-none"
          aria-label="Toggle sidebar"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:bg-white lg:pt-16">
        <div className="flex flex-col flex-grow overflow-y-auto">
          <div className="px-4 py-6">
            <h2 className="text-lg font-semibold text-gray-900 truncate">{clientName}</h2>
            <p className="text-sm text-gray-500">Espace client</p>
          </div>
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center px-3 py-3 text-sm font-medium rounded-md",
                    isActive
                      ? "bg-steel-blue text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <div className={cn(
                    "mr-3",
                    isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                  )}>
                    {item.icon}
                  </div>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 flex">
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Close sidebar</span>
                <FaTimes className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="px-4 py-6">
                <h2 className="text-lg font-semibold text-gray-900 truncate">{clientName}</h2>
                <p className="text-sm text-gray-500">Espace client</p>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "group flex items-center px-3 py-3 text-sm font-medium rounded-md",
                        isActive
                          ? "bg-steel-blue text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className={cn(
                        "mr-3",
                        isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                      )}>
                        {item.icon}
                      </div>
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
