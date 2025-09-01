'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaFileAlt, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Removed unused activeDropdown state
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Set CSS variable for navbar height
    const setNavbarHeight = () => {
      const isMobileView = window.innerWidth < 768;
      const navbarHeight = isMobileView ? '72px' : '96px';
      document.documentElement.style.setProperty('--navbar-height', navbarHeight);
    };

    // Initial setup
    setNavbarHeight();

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setNavbarHeight);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setNavbarHeight);
    };
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
    // Removed setActiveDropdown call as it's no longer needed
  }, [pathname]);

  useEffect(() => {
    // Handle clicks outside of mobile menu to close it
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Maintenance', href: '/services/maintenance' },
    { name: 'Dépannage', href: '/services/depannage' },
    { name: 'Installation', href: '/services/installation' },
    { name: 'Modernisation & Rénovation', href: '/services/modernisation' },
  ];
  
  const secondaryLinks = [
    { name: 'Notre histoire', href: '/a-propos' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Recrutement', href: '/recrutement' },
    { name: 'Partenariat', href: '/partenariat' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar - Only visible on desktop */}
      <div className="bg-[#2b3343] text-white text-sm hidden md:block">
        <div className="container mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <a href="tel:+33186043063" className="flex items-center hover:text-blue-300 transition-colors group">
              <div className="bg-blue-500/20 p-1.5 rounded-full mr-2.5 group-hover:bg-blue-500/30 transition-colors">
                <FaPhoneAlt className="text-blue-400" />
              </div>
              <span className="font-medium">01 86 04 30 63</span>
            </a>
            <a href="mailto:info@dmd-ascenseur.fr" className="flex items-center hover:text-blue-300 transition-colors group">
              <div className="bg-blue-500/20 p-1.5 rounded-full mr-2.5 group-hover:bg-blue-500/30 transition-colors">
                <FaEnvelope className="text-blue-400" />
              </div>
              <span className="font-medium">info@dmd-ascenseur.fr</span>
            </a>
          </div>
          <div className="flex items-center">
            <a 
              href="https://damad-client.vercel.app/dashboard" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-300 transition-colors border-b border-transparent hover:border-blue-300 py-1 font-medium flex items-center"
            >
              <FaUserCircle className="mr-1.5 text-blue-400" />
              Espace client
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-[#fbfcfd] shadow-lg transition-all duration-300 fixed w-full z-50 ${scrolled ? 'py-2' : 'py-4'}`} ref={mobileMenuRef}>
        
        {/* Secondary links above main nav */}
        <div className="container mx-auto px-6 hidden md:block">
          <div className="flex justify-end mb-2">
            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-600 hover:text-[#0046fe] transition-colors text-sm font-medium ml-8 py-1 border-b-2 ${pathname === link.href ? 'border-[#0046fe]' : 'border-transparent'}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
                href="https://damad-client.vercel.app/dashboard" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0046fe] transition-colors text-sm font-medium ml-8 py-1 flex items-center"
              >
                <FaUserCircle className="mr-1" />
              </a>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center md:items-stretch">
            <Link href="/" className="flex items-center group flex-shrink-0 relative md:transform md:-translate-y-1/2 md:top-1/2">
              <div className={`relative ${scrolled ? 'h-10 md:h-16' : 'h-12 md:h-20'} w-auto transition-all duration-300 flex items-center`}>
                <Image 
                  src="/logo-svg.svg" 
                  alt="DMD" 
                  width={scrolled ? 90 : 100}
                  height={scrolled ? 90 : 100}
                  className="object-contain h-full w-auto group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-700 hover:text-[#0046fe] font-medium transition-colors relative group px-3 py-2 rounded-md ${pathname === link.href ? 'bg-gray-50 text-[#0046fe]' : 'hover:bg-gray-50'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0046fe] transition-all group-hover:w-full ${pathname === link.href ? 'w-full' : ''}`}></span>
                </Link>
              ))}
              <Link 
                href="/devis" 
                className="bg-[#ff5c35] hover:bg-[#e64a25] text-white px-7 py-2.5 rounded-lg transition-all duration-300 font-medium hover:shadow-md flex items-center justify-center transform hover:-translate-y-0.5 mr-4 w-32"
              >
                <FaFileAlt className="mr-2" />
                <span>Devis</span>
              </Link>
              
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors flex-shrink-0 ml-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-[#2b3343]" />
              ) : (
                <FaBars className="w-6 h-6 text-[#2b3343]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden bg-[#fbfcfd] shadow-lg absolute w-full left-0 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'}`}
          style={{ maxHeight: isMenuOpen ? '90vh' : '0', overflow: 'auto' }}
        > 
          <div className="px-4 py-2 divide-y divide-gray-100 bg-[#fbfcfd]">
            {/* Primary navigation links */}
            <div className="py-2">
              <h3 className="text-xs uppercase text-gray-500 font-semibold px-4 py-2">Services</h3>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-colors font-medium ${pathname === link.href ? 'bg-blue-50 text-[#0046fe]' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Secondary navigation links */}
            <div className="py-2">
              <h3 className="text-xs uppercase text-gray-500 font-semibold px-4 py-2">À propos</h3>
              {secondaryLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-colors font-medium ${pathname === link.href ? 'bg-blue-50 text-[#0046fe]' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Call-to-action buttons */}
            <div className="py-4 space-y-3">
              <Link 
                href="/devis" 
                className="block w-full text-center bg-[#ff5c35] hover:bg-[#e64a25] text-white px-4 py-3 rounded-lg transition-colors font-medium shadow-sm flex items-center justify-center"
              >
                <FaFileAlt className="mr-2 flex-shrink-0" />
                <span className="truncate">Devis</span>
              </Link>
              <a 
                href="https://damad-client.vercel.app/dashboard" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#0046fe] hover:bg-[#0035c8] text-white px-4 py-3 rounded-lg transition-colors font-medium shadow-sm flex items-center justify-center"
              >
                <FaUserCircle className="mr-2 flex-shrink-0" />
                <span className="truncate">Espace Client</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
