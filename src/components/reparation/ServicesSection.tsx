import { FaTools, FaCogs, FaShieldAlt, FaClipboardCheck } from 'react-icons/fa';

const commonIssues = [
  {
    icon: <FaTools className="h-6 w-6 text-white" />,
    title: 'Panne électrique',
    description: 'Problèmes de courant, dysfonctionnements des commandes, etc.'
  },
  {
    icon: <FaCogs className="h-6 w-6 text-white" />,
    title: 'Défaillance mécanique',
    description: 'Usure des pièces, problèmes de frein, etc.'
  },
  {
    icon: <FaShieldAlt className="h-6 w-6 text-white" />,
    title: 'Problème de sécurité',
    description: 'Défaillance des systèmes de sécurité, portes bloquées, etc.'
  },
  {
    icon: <FaClipboardCheck className="h-6 w-6 text-white" />,
    title: 'Dysfonctionnement des portes',
    description: 'Portes qui ne se ferment pas correctement, défaillance de détecteur d\'obstacle'
  }
];

export default function ServicesSection() {
  return (
    <div id="commonIssues" className="py-12 xs:py-16 sm:py-20 bg-[#fbfcfc] scroll-mt-16">
      <div className="container mx-auto px-3 xs:px-4 max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
            Réparation les plus courantes
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {commonIssues.map((issue, index) => (
            <div key={index} className="pt-6">
              <div className="flow-root bg-white rounded-xl px-4 sm:px-6 pb-8 h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0046fe] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {issue.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-[#2b3343] tracking-tight">{issue.title}</h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                  <p className="text-base text-[#2b3343]">{issue.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
