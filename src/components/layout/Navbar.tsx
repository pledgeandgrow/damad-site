'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#2b3343] text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+33123456789" className="flex items-center hover:text-gray-300 transition-colors">
              <FaPhoneAlt className="mr-2" />
              +33 1 23 45 67 89
            </a>
            <a href="mailto:contact@damad-ascenseurs.fr" className="hidden md:flex items-center hover:text-gray-300 transition-colors">
              <FaEnvelope className="mr-2" />
              contact@damad-ascenseurs.fr
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Espace client</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-[#2b3343]">
              DAMAD<span className="text-[#3d4759]">ASCENSEURS</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#2b3343] font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2b3343] transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="bg-[#2b3343] hover:bg-[#3d4759] text-white px-6 py-2 rounded-lg transition-colors font-medium"
              >
                Devis gratuit
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-[#2b3343] hover:bg-[#3d4759] text-white px-6 py-3 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Devis gratuit
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
