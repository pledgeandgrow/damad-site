import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface CTAProps {
  scrollToForm: () => void;
}

export default function CTA({ scrollToForm }: CTAProps) {
  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6 text-[#2b3343]" />,
      title: 'Téléphone',
      description: '01 23 45 67 89',
      link: 'tel:+33123456789',
      linkText: 'Appeler maintenant'
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-[#2b3343]" />,
      title: 'Email',
      description: 'contact@damad-ascenseurs.fr',
      link: 'mailto:contact@damad-ascenseurs.fr',
      linkText: 'Nous écrire'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-[#2b3343]" />,
      title: 'Adresse',
      description: '3 BOULEVARD DE SEBASTOPOL\n75001 PARIS, France',
      link: 'https://maps.google.com',
      linkText: 'Voir sur la carte'
    },
    {
      icon: <FaClock className="w-6 h-6 text-[#2b3343]" />,
      title: 'Horaires',
      description: 'Lun-Ven: 8h-18h',
      link: '#',
      linkText: 'Prendre RDV'
    }
  ];

  return (
    <section className="relative bg-[#fbfcfd] text-[#2b3343] py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#fbfcfd] opacity-95"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Prêt à démarrer votre projet d&apos;ascenseur ?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Notre équipe d&apos;experts est à votre écoute pour vous accompagner dans la réalisation de votre projet. 
              Demandez votre devis personnalisé dès maintenant.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <button
                  onClick={scrollToForm}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#2b3343] bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                >
                  Demander un devis
                </button>
              </div>
              <div>
                <a
                  href="tel:+33123456789"
                  className="w-full flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10"
                >
                  <FaPhone className="mr-2" />
                  Nous appeler
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactez-nous</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 bg-gray-100 p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                        <p className="text-base text-gray-600">{item.description}</p>
                        <a 
                          href={item.link} 
                          className="text-sm font-medium text-[#2b3343] hover:text-[#3d4759] mt-1 inline-flex items-center"
                        >
                          {item.linkText}
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
