import { FaTools, FaCog, FaWrench, FaClipboardCheck, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    icon: <FaTools className="w-10 h-10 text-white mb-4" />,
    title: "Installation",
    description: "Installation complète d'ascenseurs neufs, adaptés à vos besoins et à votre espace.",
    link: "/services/installation"
  },
  {
    icon: <FaWrench className="w-10 h-10 text-white mb-4" />,
    title: "Maintenance",
    description: "Contrats de maintenance préventive et corrective pour garantir la longévité de votre équipement.",
    link: "/services/maintenance"
  },
  {
    icon: <FaCog className="w-10 h-10 text-white mb-4" />,
    title: "Modernisation",
    description: "Mise à niveau de vos ascenseurs existants pour améliorer leurs performances et leur sécurité.",
    link: "/services/modernisation"
  },
  {
    icon: <FaClipboardCheck className="w-10 h-10 text-white mb-4" />,
    title: "Contrôle Technique",
    description: "Vérification complète de la conformité et de la sécurité de votre installation.",
    link: "/services/controle-technique"
  },
  {
    icon: <FaShieldAlt className="w-10 h-10 text-white mb-4" />,
    title: "Dépannage 24/7",
    description: "Service d'urgence disponible 24 heures sur 24, 7 jours sur 7 pour tout dépannage.",
    link: "/services/depannage"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-[#2b3343] font-semibold text-sm uppercase tracking-wider mb-3">Nos Services</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions Professionnelles</h2>
          <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez notre gamme complète de services professionnels conçus pour répondre à tous vos besoins en matière d&apos;ascenseurs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Link 
              href={service.link || '#'} 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="h-2 bg-[#2b3343]"></div>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2b3343] rounded-full mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2b3343] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                {service.link && (
                  <div className="inline-flex items-center text-[#2b3343] font-medium text-sm group-hover:underline">
                    En savoir plus
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-[#2b3343] text-white font-medium rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Demander un devis personnalisé
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
