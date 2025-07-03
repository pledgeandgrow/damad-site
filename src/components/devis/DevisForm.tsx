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
  FaSyncAlt 
} from 'react-icons/fa';

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
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Type de service</h3>
      <p className="text-gray-600">Sélectionnez le type de service dont vous avez besoin :</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => updateFormData('serviceType', 'installation')}
          className={`p-6 border-2 rounded-lg text-center transition-all duration-200 ${
            getInputValue('serviceType') === 'installation'
              ? 'border-blue-600 bg-blue-50 shadow-md'
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }`}
        >
          <div className="flex flex-col items-center">
            <FaArrowUp className="text-3xl text-blue-600 mb-2" />
            <span className="font-medium text-gray-900">Installation</span>
            <p className="text-sm text-gray-500 mt-1">Dépannage et maintenance d&apos;ascenseur</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => updateFormData('serviceType', 'maintenance')}
          className={`p-6 border-2 rounded-lg text-center transition-all duration-200 ${
            getInputValue('serviceType') === 'maintenance'
              ? 'border-blue-600 bg-blue-50 shadow-md'
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }`}
        >
          <div className="flex flex-col items-center">
            <FaTools className="text-3xl text-blue-600 mb-2" />
            <span className="font-medium text-gray-900">Maintenance</span>
            <p className="text-sm text-gray-500 mt-1">Entretien et réparation</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => updateFormData('serviceType', 'modernisation')}
          className={`p-6 border-2 rounded-lg text-center transition-all duration-200 ${
            getInputValue('serviceType') === 'modernisation'
              ? 'border-blue-600 bg-blue-50 shadow-md'
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }`}
        >
          <div className="flex flex-col items-center">
            <FaSyncAlt className="text-3xl text-blue-600 mb-2" />
            <span className="font-medium text-gray-900">Modernisation</span>
            <p className="text-sm text-gray-500 mt-1">Mise à jour d&apos;ascenseur existant</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => updateFormData('serviceType', 'depannage')}
          className={`p-6 border-2 rounded-lg text-center transition-all duration-200 ${
            getInputValue('serviceType') === 'depannage'
              ? 'border-blue-600 bg-blue-50 shadow-md'
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }`}
        >
          <div className="flex flex-col items-center">
            <FaExclamationTriangle className="text-3xl text-blue-600 mb-2" />
            <span className="font-medium text-gray-900">Dépannage</span>
            <p className="text-sm text-gray-500 mt-1">Urgence 24/7</p>
          </div>
        </button>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Type de bâtiment</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: 'residential', label: 'Résidentiel', icon: <FaHome className="text-xl text-blue-600" /> },
            { value: 'corporate', label: 'Bureaux', icon: <FaBuilding className="text-xl text-blue-600" /> },
            { value: 'industrial', label: 'Industriel', icon: <FaIndustry className="text-xl text-blue-600" /> },
            { value: 'commercial', label: 'Commercial', icon: <FaStore className="text-xl text-blue-600" /> },
          ].map((buildingType) => (
            <button
              key={buildingType.value}
              type="button"
              onClick={() => updateFormData('buildingType', buildingType.value)}
              className={`p-4 border-2 rounded-lg flex flex-col items-center transition-colors duration-200 ${
                getInputValue('buildingType') === buildingType.value
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
              }`}
            >
              <span className="mb-1">{buildingType.icon}</span>
              <span className="text-sm font-medium text-gray-900">{buildingType.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Render step 2: Project Details
  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Détails du projet</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="floors" className="block text-sm font-medium text-gray-700">
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="stops" className="block text-sm font-medium text-gray-700">
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
            Capacité (personnes)
          </label>
          <select
            id="capacity"
            name="capacity"
            value={getInputValue('capacity') as string}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            required
          >
            <option value="2">2 personnes</option>
            <option value="4">4 personnes</option>
            <option value="6">6 personnes</option>
            <option value="8">8 personnes</option>
            <option value="10">10 personnes</option>
            <option value="12">12 personnes</option>
            <option value="custom">Plus de 12</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="hasExistingElevator"
            name="hasExistingElevator"
            checked={getInputValue('hasExistingElevator') as boolean}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="hasExistingElevator" className="ml-2 block text-sm text-gray-700">
            Ascenseur existant à remplacer
          </label>
        </div>

        {formData.hasExistingElevator && (
          <div>
            <label htmlFor="existingElevatorAge" className="block text-sm font-medium text-gray-700">
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        )}
      </div>
    </div>
  );

  // Render step 3: Contact Information
  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Vos coordonnées</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={getInputValue('name') as string}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={getInputValue('email') as string}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={getInputValue('phone') as string}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Société (optionnel)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={getInputValue('company') as string}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Adresse *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={getInputValue('address') as string}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
            Code postal *
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={getInputValue('postalCode') as string}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Ville *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={getInputValue('city') as string}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message (optionnel)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={getInputValue('message') as string}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div className="flex items-start md:col-span-2">
          <div className="flex items-center h-5">
            <input
              id="privacyPolicy"
              name="privacyPolicy"
              type="checkbox"
              checked={getInputValue('privacyPolicy') as boolean}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="privacyPolicy" className="font-medium text-gray-700">
              J&apos;accepte la politique de confidentialité *
            </label>
            <p className="text-gray-500">
              En soumettant ce formulaire, j&apos;accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande de devis.
            </p>
          </div>
        </div>
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
    <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
      {step > 1 ? (
        <button
          type="button"
          onClick={prevStep}
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Précédent
        </button>
      ) : (
        <div />
      )}
      
      {step < 3 ? (
        <button
          type="button"
          onClick={nextStep}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Suivant
          <FaArrowRight className="ml-2 h-4 w-4" />
        </button>
      ) : (
        <button
          type="submit"
          disabled={!getInputValue('privacyPolicy')}
          className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ${
            getInputValue('privacyPolicy')
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-blue-400 cursor-not-allowed'
          }`}
        >
          Envoyer la demande
        </button>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {step === 1 && 'Quel type de service recherchez-vous ?'}
          {step === 2 && 'Détails de votre projet'}
          {step === 3 && 'Vos coordonnées'}
        </h2>
        <p className="text-gray-600">
          Étape {step} sur 3
        </p>
      </div>

      <div className="mb-8">
        {renderStepContent()}
      </div>

      {renderNavigation()}
    </form>
  );
}
