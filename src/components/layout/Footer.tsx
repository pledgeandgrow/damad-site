import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronRight } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

interface FooterLink {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: 'Liens rapides',
    links: [
      { name: 'Accueil', href: '/' },
      { name: 'Nos Services', href: '/services' },
      { name: 'Réalisations', href: '/realisations' },
      { name: 'À Propos', href: '/a-propos' },
      { name: 'Contact', href: '/contact' },
      { name: 'Devis', href: '/contact?subject=demande-de-devis' },
    ],
  },
  {
    title: 'Nos Services',
    links: [
      { name: 'Installation', href: '/services#installation' },
      { name: 'Maintenance', href: '/services#maintenance' },
      { name: 'Réparation', href: '/services#reparation' },
      { name: 'Modernisation', href: '/services#modernisation' },
      { name: 'Contrôle Technique', href: '/services#controle' },
      { name: 'Dépannage', href: '/services#depannage' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { 
        name: '123 Avenue des Ascenseurs',
        href: 'https://maps.google.com/?q=123+Avenue+des+ascenseurs+Paris',
        icon: FaMapMarkerAlt 
      },
      { 
        name: '+33 1 23 45 67 89',
        href: 'tel:+33123456789',
        icon: FaPhoneAlt
      },
      { 
        name: 'contact@damad-ascenseur.com',
        href: 'mailto:contact@damad-ascenseur.com',
        icon: FaEnvelope
      },
    ],
  },
];

const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, href: '#' },
  { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#2b3343] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative h-20 w-40">
                <Image 
                  src="/damad-transparent.png" 
                  alt="DAMAD Ascenseurs" 
                  fill
                  className="object-contain hover:opacity-90 transition-opacity"
                  sizes="(max-width: 768px) 100vw, 160px"
                  priority
                />
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins en ascenseurs, de l&apos;installation à la maintenance.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name} className="flex items-start">
                    {link.icon ? (
                      <>
                        <link.icon className="w-4 h-4 mt-1 mr-2 text-blue-400 flex-shrink-0" />
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-white transition-colors duration-200"
                          target={link.href.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex items-center text-white/70 hover:text-white transition-colors duration-200"
                      >
                        <FaChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}


        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {currentYear} - Damad Ascenseurs</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              <Link 
                href="/legal/mentions-legales" 
                className="text-white/60 hover:text-white text-sm transition-colors duration-300 whitespace-nowrap"
              >
                Mentions Légales
              </Link>
              <Link 
                href="/legal/politique-de-confidentialite" 
                className="text-white/60 hover:text-white text-sm transition-colors duration-300 whitespace-nowrap"
              >
                Politique de confidentialité
              </Link>
              <Link 
                href="/legal/cgv" 
                className="text-white/60 hover:text-white text-sm transition-colors duration-300 whitespace-nowrap"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
