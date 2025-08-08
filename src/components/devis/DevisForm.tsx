'use client';

import { 
  FaArrowRight, 
  FaArrowLeft, 
  FaHome, 
  FaBuilding, 
  FaIndustry, 
  FaStore, 
  FaArrowUp,
  FaTools,
  FaExclamationTriangle,
  FaSyncAlt,
  FaCheckCircle
} from 'react-icons/fa';
import { motion } from 'framer-motion';

type FormData = {
  // Step 1
  serviceType: string;
  buildingType: string;
  
  // Step 2
  floors: string;
  stops: string;
  capacity: string;
  hasExistingElevator: boolean;
  existingElevatorAge: string;
  
  // Step 3
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  postalCode: string;
  city: string;
  message: string;
  privacyPolicy: boolean;
};

type FormField = keyof FormData;

interface DevisFormProps {
  step: number;
  formData: FormData;
  updateFormData: (field: FormField, value: string | boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function DevisForm({
  step,
  formData,
  updateFormData,
  nextStep,
  prevStep,
  handleSubmit
}: DevisFormProps) {
  // Handle input changes with proper type handling
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.target;
    const target = e.target as HTMLInputElement;
    
    let value: string | boolean = target.value;
    
    if (type === 'checkbox') {
      value = target.checked;
    } else if (type === 'number') {
      // Ensure numeric values are properly handled
      value = target.value;
    }
    
    updateFormData(name as FormField, value);
  };
  
  // Helper function to get the correct value for form inputs
  const getInputValue = (field: FormField): string | number | boolean | undefined => {
    const value = formData[field];
    if (typeof value === 'boolean') {
      return value;
    }
    return value || '';
  };

  // Render step 1: Service Selection
  const renderStep1 = () => (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-[#2b3343] mb-2">Service</h3>
        <p className="text-[#2b3343]">Sélectionnez le type de service dont vous avez besoin :</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { 
            type: 'installation', 
            title: 'Installation', 
            description: 'Installation de nouveaux ascenseurs', 
            icon: <FaArrowUp className="text-3xl text-[#0046fe] mb-2" />,
            delay: 0.1
          },
          { 
            type: 'maintenance', 
            title: 'Maintenance', 
            description: 'Entretien préventif', 
            icon: <FaTools className="text-3xl text-[#0046fe] mb-2" />,
            delay: 0.2
          },
          { 
            type: 'reparation', 
            title: 'Réparation', 
            description: 'Remise en état et réparations', 
            icon: <FaTools className="text-3xl text-[#0046fe] mb-2" />,
            delay: 0.25
          },
          { 
            type: 'modernisation', 
            title: 'Renovation & Modernisation', 
            description: 'Mise à jour d\'ascenseur existant', 
            icon: <FaSyncAlt className="text-3xl text-[#0046fe] mb-2" />,
            delay: 0.3
          },
          { 
            type: 'depannage', 
            title: 'Dépannage', 
            description: 'Urgence Réponse sous 48h', 
            icon: <FaExclamationTriangle className="text-3xl text-[#0046fe] mb-2" />,
            delay: 0.4
          }
        ].map((service) => (
          <motion.button
            key={service.type}
            type="button"
            onClick={() => updateFormData('serviceType', service.type)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: service.delay }}
            className={`p-6 border-2 rounded-lg text-center transition-all duration-300 transform hover:-translate-y-1 ${
              getInputValue('serviceType') === service.type
                ? 'border-[#0046fe] bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-[#0046fe] hover:bg-gray-50 hover:shadow-md'
            }`}
          >
            <div className="flex flex-col items-center">
              <div className={`rounded-full p-3 mb-2 ${getInputValue('serviceType') === service.type ? 'bg-[#0046fe]/10' : 'bg-gray-100'}`}>
                {service.icon}
              </div>
              <span className="font-semibold text-[#2b3343] text-lg">{service.title}</span>
              <p className="text-sm text-[#2b3343] mt-2">{service.description}</p>
              {getInputValue('serviceType') === service.type && (
                <div className="mt-3 text-[#0046fe]">
                  <FaCheckCircle className="inline-block mr-1" /> Sélectionné
                </div>
              )}
            </div>
          </motion.button>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-8 border-t border-gray-200"
      >
        <h4 className="text-lg font-semibold text-[#2b3343] mb-4">Type de bâtiment</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: 'residential', label: 'Résidentiel', icon: <FaHome className="text-2xl text-[#0046fe]" /> },
            { value: 'corporate', label: 'Bureaux', icon: <FaBuilding className="text-2xl text-[#0046fe]" /> },
            { value: 'industrial', label: 'Industriel', icon: <FaIndustry className="text-2xl text-[#0046fe]" /> },
            { value: 'commercial', label: 'Commercial', icon: <FaStore className="text-2xl text-[#0046fe]" /> },
          ].map((buildingType, index) => (
            <motion.button
              key={buildingType.value}
              type="button"
              onClick={() => updateFormData('buildingType', buildingType.value)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
              className={`p-4 border-2 rounded-lg flex flex-col items-center transition-all duration-300 ${
                getInputValue('buildingType') === buildingType.value
                  ? 'border-[#0046fe] bg-blue-50 shadow-md'
                  : 'border-gray-300 hover:border-[#0046fe] hover:bg-gray-50 hover:shadow-sm'
              }`}
            >
              <div className={`rounded-full p-2 mb-2 ${getInputValue('buildingType') === buildingType.value ? 'bg-[#0046fe]/10' : 'bg-gray-100'}`}>
                {buildingType.icon}
              </div>
              <span className="text-sm font-medium text-[#2b3343]">{buildingType.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );

  // Render step 2: Project Details
  const renderStep2 = () => (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-[#2b3343] mb-2">Détails du projet</h3>
        <p className="text-[#2b3343]">Veuillez préciser les caractéristiques techniques de votre projet</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <label htmlFor="floors" className="block text-sm font-medium text-[#2b3343]">
            Nombre d&apos;étages desservis
          </label>
          <input
            type="number"
            id="floors"
            name="floors"
            min="2"
            max="50"
            value={getInputValue('floors') as string}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3343] focus:ring-[#2b3343] sm:text-sm transition-all duration-200"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <label htmlFor="stops" className="block text-sm font-medium text-[#2b3343]">
            Nombre d&apos;arrêts
          </label>
          <input
            type="number"
            id="stops"
            name="stops"
            min="2"
            max="50"
            value={getInputValue('stops') as string}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3343] focus:ring-[#2b3343] sm:text-sm transition-all duration-200"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <label htmlFor="capacity" className="block text-sm font-medium text-[#2b3343]">
            Capacité (personnes)
          </label>
          <select
            id="capacity"
            name="capacity"
            value={getInputValue('capacity') as string}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-[#2b3343] focus:outline-none focus:ring-[#2b3343] sm:text-sm transition-all duration-200"
            required
          >
            <option value="">Sélectionnez une capacité</option>
            <option value="2">2 personnes</option>
            <option value="4">4 personnes</option>
            <option value="6">6 personnes</option>
            <option value="8">8 personnes</option>
            <option value="10">10 personnes</option>
            <option value="12">12 personnes</option>
            <option value="custom">Plus de 12</option>
          </select>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <input
            type="checkbox"
            id="hasExistingElevator"
            name="hasExistingElevator"
            checked={getInputValue('hasExistingElevator') as boolean}
            onChange={handleChange}
            className="h-5 w-5 rounded border-gray-300 text-[#2b3343] focus:ring-[#2b3343] transition-all duration-200"
          />
          <label htmlFor="hasExistingElevator" className="ml-3 block text-sm font-medium text-[#2b3343]">
            Ascenseur existant à remplacer
          </label>
        </motion.div>

        {formData.hasExistingElevator && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-100"
          >
            <label htmlFor="existingElevatorAge" className="block text-sm font-medium text-[#2b3343]">
              Âge de l&apos;ascenseur actuel (années)
            </label>
            <input
              type="number"
              id="existingElevatorAge"
              name="existingElevatorAge"
              min="0"
              max="100"
              value={getInputValue('existingElevatorAge') as string}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3343] focus:ring-[#2b3343] sm:text-sm transition-all duration-200 bg-white"
            />
          </motion.div>
        )}
      </div>
    </div>
  );

  // Render step 3: Contact Information
  const renderStep3 = () => (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-[#2b3343] mb-2">Vos coordonnées</h3>
        <p className="text-[#2b3343]">Veuillez remplir vos informations de contact pour recevoir votre devis</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <label htmlFor="name" className="block text-sm font-medium text-[#2b3343]">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={getInputValue('name') as string}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3343] focus:ring-[#2b3343] sm:text-sm transition-all duration-200"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <label htmlFor="email" className="block text-sm font-medium text-[#2b3343]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={getInputValue('email') as string}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3343] focus:ring-[#2b3343] sm:text-sm transition-all duration-200"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <label htmlFor="phone" className="block text-sm font-medium text-[#2b3343]">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={getInputValue('phone') as string}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3343] focus:ring-[#2b3343] sm:text-sm transition-all duration-200"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <label htmlFor="company" className="block text-sm font-medium text-[#2b3343]">
            Société <span className="text-gray-400">(optionnel)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={getInputValue('company') as string}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3343] focus:ring-[#2b3343] sm:text-sm transition-all duration-200"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <label htmlFor="address" className="block text-sm font-medium text-[#2b3343]">
            Adresse <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={getInputValue('address') as string}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3343] focus:ring-[#2b3343] sm:text-sm transition-all duration-200"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.35 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <label htmlFor="postalCode" className="block text-sm font-medium text-[#2b3343]">
            Code postal <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={getInputValue('postalCode') as string}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3343] focus:ring-[#2b3343] sm:text-sm transition-all duration-200"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <label htmlFor="city" className="block text-sm font-medium text-[#2b3343]">
            Ville <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={getInputValue('city') as string}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3343] focus:ring-[#2b3343] sm:text-sm transition-all duration-200"
            required
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.45 }}
          className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <label htmlFor="message" className="block text-sm font-medium text-[#2b3343]">
            Message <span className="text-gray-400">(optionnel)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={getInputValue('message') as string}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3343] focus:ring-[#2b3343] sm:text-sm transition-all duration-200"
            placeholder="Précisez vos besoins spécifiques ou posez vos questions..."
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex items-start md:col-span-2 bg-blue-50 p-4 rounded-lg border border-blue-100"
        >
          <div className="flex items-center h-5 mt-1">
            <input
              id="privacyPolicy"
              name="privacyPolicy"
              type="checkbox"
              checked={getInputValue('privacyPolicy') as boolean}
              onChange={handleChange}
              className="h-5 w-5 rounded border-gray-300 text-[#0046fe] focus:ring-[#0046fe] transition-all duration-200"
              required
            />
          </div>
          <div className="ml-3">
            <label htmlFor="privacyPolicy" className="font-medium text-[#0046fe]">
              J&apos;accepte la politique de confidentialité <span className="text-red-500">*</span>
            </label>
            <p className="text-[#2b3343] text-sm mt-1">
              En soumettant ce formulaire, j&apos;accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande de devis.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );

  // Render current step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return null;
    }
  };

  // Render navigation buttons
  const renderNavigation = () => (
    <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4">
      {step > 1 ? (
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          type="button"
          onClick={prevStep}
          className="inline-flex items-center px-6 py-3 border border-[#0046fe] text-base font-medium rounded-md text-[#0046fe] bg-white hover:bg-[#0046fe]/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0046fe] transition-all duration-300 shadow-sm"
        >
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Précédent
        </motion.button>
      ) : (
        <div />
      )}
      
      {step < 3 ? (
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          type="button"
          onClick={nextStep}
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-[#0046fe] hover:bg-[#0046fe]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0046fe] transition-all duration-300 transform hover:-translate-y-1"
        >
          Suivant
          <FaArrowRight className="ml-2 h-4 w-4" />
        </motion.button>
      ) : (
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          type="submit"
          disabled={!getInputValue('privacyPolicy')}
          className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0046fe] transition-all duration-300 ${
            getInputValue('privacyPolicy')
              ? 'bg-[#0046fe] hover:bg-[#0046fe]/90 transform hover:-translate-y-1'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Envoyer la demande
        </motion.button>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-white rounded-lg shadow-md border border-gray-100">
      <div className="mb-10">
        <motion.div
          key={`step-header-${step}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-[#2b3343] mb-3">
            {step === 1 && 'Quel type de service recherchez-vous ?'}
            {step === 2 && 'Détails de votre projet'}
            {step === 3 && 'Vos coordonnées'}
          </h2>
          <div className="flex items-center">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#2b3343] transition-all duration-500 ease-in-out" 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
            <p className="text-[#2b3343] font-medium ml-4">
              Étape {step}/3
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mb-10">
        {renderStepContent()}
      </div>

      {renderNavigation()}
    </form>
  );
}
