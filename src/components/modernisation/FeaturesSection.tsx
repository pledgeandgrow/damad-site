import { FaSyncAlt, FaChartLine, FaLeaf, FaUniversalAccess } from 'react-icons/fa';

const features = [
  {
    icon: <FaSyncAlt className="h-8 w-8 text-white" />,
    title: 'Remplacement de composants',
    description: 'Armoire de manœuvre, moteur, variateur de fréquence pour une performance optimale.'
  },
  {
    icon: <FaLeaf className="h-8 w-8 text-white" />,
    title: "Économies d&apos;énergie",
    description: "Installation de dispositifs écologiques comme l&apos;éclairage LED."
  },
  {
    icon: <FaUniversalAccess className="h-8 w-8 text-white" />,
    title: 'Accessibilité améliorée',
    description: "Remplacement des portes et mise aux normes d&apos;accessibilité."
  },
  {
    icon: <FaChartLine className="h-8 w-8 text-white" />,
    title: 'Confort acoustique',
    description: 'Réduction des vibrations et du bruit pour un meilleur confort.'
  }
];

const FeaturesSection = () => {
  return (
    <div id="features" className="py-20 bg-[#fbfcfc] scroll-mt-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
            Zoom sur la rénovation et la modernisation
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            La modernisation d&apos;un appareil d&apos;accessibilité consiste à remplacer ou à améliorer certains composants de l&apos;équipement pour améliorer ses performances, sa sécurité et son efficacité énergétique.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="pt-6">
              <div className="flow-root bg-white rounded-xl px-6 pb-8 h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0046fe] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-[#2b3343] tracking-tight">{feature.title}</h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                  <p className="text-base text-[#2b3343]">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional explanatory text */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-[#f0f5f9] rounded-xl p-8 border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-6">
              Cette démarche permet de prolonger la durée de vie de l&apos;installation tout en répondant aux normes actuelles.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              Nous sommes en mesure de vous proposer diverses solutions d&apos;accompagnement afin de mettre en réussite votre projet de rénovation et de modernisation !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
