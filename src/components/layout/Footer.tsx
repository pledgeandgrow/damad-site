import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronRight, FaTools, FaBuilding, FaInfoCircle, FaEnvelopeOpenText, FaFileInvoiceDollar, FaWrench, FaCogs, FaExclamationTriangle, FaUsers, FaSyncAlt, FaHandshake } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface FooterLink {
  name: string;
  href: string;
  icon?: IconType;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
  buttons?: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: 'Aller plus loin',
    links: [
      { name: 'À Propos', href: '/a-propos', icon: FaInfoCircle },
      { name: 'Réalisations', href: '/realisations', icon: FaBuilding },
      { name: 'Recrutement', href: '/recrutement', icon: FaUsers },
      { name: 'FAQ', href: '/faq', icon: FaPhoneAlt },
      { name: 'Partenariat', href: '/partenariat', icon: FaHandshake },
      { name: 'Devis', href: '/contact?subject=demande-de-devis', icon: FaFileInvoiceDollar },
    ],
  },
  {
    title: 'Nos Services',
    links: [
      { name: 'Installation', href: '/services/installation', icon: FaTools },
      { name: 'Maintenance', href: '/services/maintenance', icon: FaCogs },
      { name: 'Dépannage', href: '/services/depannage', icon: FaExclamationTriangle },
      { name: 'Modernisation & Rénovation', href: '/services/modernisation', icon: FaSyncAlt },
      { name: 'Réparation', href: '/services/reparation', icon: FaWrench },
      { name: 'Interventions', href: '/interventions', icon: FaTools },
    ],
  },
  {
    title: 'Nous Contacter',
    links: [
      { 
        name: '3 BOULEVARD DE SEBASTOPOL - 75001 PARIS',
        href: 'https://share.google/O0KDt5Ij8TVjUXJak',
        icon: FaMapMarkerAlt 
      },
      { 
        name: '+33 1 48 35 12 34 (Support)',
        href: 'tel:+33148351234',
        icon: FaPhoneAlt
      },
      { 
        name: '+33 1 86 04 30 63 (Urgence)',
        href: 'tel:+33186043063',
        icon: FaPhoneAlt
      },
      { 
        name: 'contact@damad-ascenseurs.com',
        href: 'mailto:contact@damad-ascenseurs.com',
        icon: FaEnvelope
      },
    ],
    buttons: [
      {
        name: 'Nous joindre',
        href: '/contact',
        icon: FaEnvelopeOpenText
      }
    ]
  },
];

interface SocialLink {
  name: string;
  icon: IconType;
  href: string;
}

const socialLinks: SocialLink[] = [];


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#2b3343] text-white pt-10 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 sm:mb-12">
          {/* Mobile layout - first row with company info */}
          <div className="block sm:hidden mb-8">
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="inline-flex items-center -ml-4">
                <div className="relative h-12 w-24">
                  <Image 
                    src="/damad-transparent-white.png" 
                    alt="DAMAD" 
                    fill
                    className="object-contain hover:opacity-90 transition-opacity"
                    sizes="96px"
                    priority
                  />
                </div>
                <span className="text-white font-bold text-xl -ml-6">DAMAD</span>
              </Link>
              
              <div className="flex space-x-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={social.name}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-4 mb-2 px-1 py-2 border-l-2 border-blue-400">
              <p className="text-white/90 text-sm leading-relaxed pl-3">
                Votre partenaire de confiance pour tous vos besoins en ascenseurs, de l&apos;installation à la maintenance.
              </p>
            </div>
          </div>
          
          {/* Mobile layout - second row with two columns */}
          <div className="grid grid-cols-2 sm:hidden gap-8">
            {/* First column - Liens rapides */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white">{footerLinks[0].title}</h4>
              <ul className="space-y-2">
                {footerLinks[0].links.map((link) => (
                  <li key={link.name} className="flex items-start">
                    <Link
                      href={link.href}
                      className="flex items-center text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.icon ? (
                        <link.icon className="w-3.5 h-3.5 mr-2 text-blue-400 flex-shrink-0" />
                      ) : (
                        <FaChevronRight className="w-3 h-3 mr-2 text-blue-400" />
                      )}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Second column - Nos Services */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white">{footerLinks[1].title}</h4>
              <ul className="space-y-2">
                {footerLinks[1].links.map((link) => (
                  <li key={link.name} className="flex items-start">
                    <Link
                      href={link.href}
                      className="flex items-center text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      <FaChevronRight className="w-2.5 h-2.5 mr-1.5 text-white/30" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Mobile layout - third row with contact */}
          <div className="block sm:hidden mt-8">
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white relative inline-block">
                {footerLinks[1].title}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-50 origin-left"></span>
              </h4>
              <ul className="space-y-3 bg-white/5 rounded-lg p-3 mt-2">
                {footerLinks[1].links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name} className="flex items-start hover:translate-x-1 transition-transform duration-200">
                      {Icon && <Icon className="w-4 h-4 mt-0.5 mr-2 text-blue-400 flex-shrink-0" />}
                      <a
                        href={link.href}
                        className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
              {footerLinks[1].buttons && (
                <div className="flex flex-row space-x-2 mt-4">
                  {footerLinks[1].buttons.map((button) => {
                    const Icon = button.icon;
                    return (
                      <a
                        key={button.name}
                        href={button.href}
                        className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white py-1.5 px-3 rounded-md transition-colors duration-200 text-sm"
                      >
                        {Icon && <Icon className="w-3.5 h-3.5 mr-1.5" />}
                        {button.name}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          
          {/* Desktop/Tablet layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-5 sm:space-y-6 pl-0">
            <Link href="/" className="inline-flex items-center -ml-12 sm:-ml-16">
              <div className="relative h-16 sm:h-20 w-32 sm:w-40">
                <Image 
                  src="/damad-transparent-white.png" 
                  alt="DAMAD" 
                  fill
                  className="object-contain hover:opacity-90 transition-opacity"
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 160px"
                  priority
                />
              </div>
              <span className="text-white font-bold text-xl sm:text-2xl -ml-1 sm:-ml-12">DAMAD</span>
            </Link>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins en ascenseurs, de l&apos;installation à la maintenance.
            </p>

            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2 sm:p-2.5 rounded-full transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links for desktop/tablet */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name} className="flex items-start">
                    {link.href.startsWith('http') || link.href.startsWith('tel:') || link.href.startsWith('mailto:') ? (
                      <>
                        {link.icon && <link.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 mr-2 text-blue-400 flex-shrink-0" />}
                        <a href={link.href} className="text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-200" target={link.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                          {link.name}
                        </a>
                      </>
                    ) : (
                      <Link href={link.href} className="flex items-center text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-200">
                        {link.icon ? (
                          <link.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-blue-400 flex-shrink-0" />
                        ) : (
                          <FaChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1.5 sm:mr-2 text-blue-400" />
                        )}
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              {section.buttons && (
                <div className="flex flex-row space-x-3 mt-4">
                  {section.buttons.map((button) => {
                    const Icon = button.icon;
                    return (
                      <a
                        key={button.name}
                        href={button.href}
                        className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white py-1.5 px-3 rounded-md transition-colors duration-200 text-sm"
                      >
                        {Icon && <Icon className="w-3.5 h-3.5 mr-1.5" />}
                        {button.name}
                      </a>
                    );
                  })}
                </div>
              )}
              {section.title === 'Nous Rejoindre' && (
                <a 
                  href="https://damad-client.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-xs sm:text-sm text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md transition-all duration-300"
                >
                  <span>Espace client</span>
                  <svg className="ml-1.5 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
          </div>


        </div>
        
        <div className="border-t border-white/10 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm">&copy; {currentYear} - DAMAD</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 sm:mt-0">
              <Link 
                href="/legal/mentions-legales" 
                className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap"
              >
                Mentions Légales
              </Link>
              <Link 
                href="/legal/politique-de-confidentialite" 
                className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap"
              >
                Politique de confidentialité
              </Link>
              <Link 
                href="/legal/politique-rgpd" 
                className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap"
              >
                RGPD
              </Link>
              <Link 
                href="/legal/politique-cookies" 
                className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap"
              >
                Cookies
              </Link>
              <Link 
                href="/legal/cgv" 
                className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap"
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
