import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-[#2b3343]" aria-hidden="true" />,
      title: 'Téléphone',
      description: '01 23 45 67 89',
      link: 'tel:+33123456789',
    },
    {
      icon: <Mail className="h-6 w-6 text-[#2b3343]" aria-hidden="true" />,
      title: 'Email',
      description: 'contact@damad-ascenseurs.fr',
      link: 'mailto:contact@damad-ascenseurs.fr',
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#2b3343]" aria-hidden="true" />,
      title: 'Adresse',
      description: '123 Avenue des Ascenseurs, 75000 Paris',
      link: 'https://maps.google.com/?q=123+Avenue+des+Ascenseurs+75000+Paris',
    },
    {
      icon: <Clock className="h-6 w-6 text-[#2b3343]" aria-hidden="true" />,
      title: 'Horaires',
      description: 'Lun-Ven: 8h-18h | Sam: 9h-12h',
    },
  ];

  return (
    <div className="mt-10
    ">
      <h3 className="text-lg font-semibold leading-8 text-gray-900">Nos coordonnées</h3>
      <dl className="mt-6 space-y-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">{item.title}</span>
              {item.icon}
            </dt>
            <dd className="text-sm leading-6 text-gray-700">
              {item.link ? (
                <a
                  href={item.link}
                  className="hover:text-[#2b3343] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.description}
                </a>
              ) : (
                <span>{item.description}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
      
      <div className="mt-10">
        <h3 className="text-lg font-semibold leading-8 text-gray-900">Urgence 24/7</h3>
        <div className="mt-2 flex items-center">
          <Phone className="h-5 w-5 text-[#2b3343] mr-2" />
          <a href="tel:+33612345678" className="text-[#2b3343] font-medium hover:underline">
            06 12 34 56 78
          </a>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Service d&apos;urgence disponible 24h/24 et 7j/7 pour les pannes d&apos;ascenseur.
        </p>
      </div>
      
      <div className="mt-10">
        <h3 className="text-lg font-semibold leading-8 text-gray-900">Réseaux sociaux</h3>
        <div className="mt-4 flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-[#2b3343]">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-[#2b3343]">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-[#2b3343]">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
