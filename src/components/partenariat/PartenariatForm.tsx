'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function PartenariatForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    siret: '',
    address: '',
    city: '',
    services: '',
    contactName: '',
    contactFirstName: '',
    email: '',
    phone: '',
    // Project 1
    project1Title: '',
    project1Date: '',
    project1Location: '',
    project1Amount: '',
    // Project 2
    project2Title: '',
    project2Date: '',
    project2Location: '',
    project2Amount: '',
    // Project 3
    project3Title: '',
    project3Date: '',
    project3Location: '',
    project3Amount: '',
    // Documents
    insurance: null,
    fiscalCertificate: null,
    kbis: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const { name } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: e.target.files?.[0]
      }));
    }
  };

  const handleRadioChange = (project: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [project]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Basic validation
    if (!formData.companyName || !formData.email || !formData.phone) {
      setError('Veuillez remplir tous les champs obligatoires');
      setLoading(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
    
    // In a real implementation, you would send the data to your backend using FormData
    // const formDataToSend = new FormData();
    // Object.entries(formData).forEach(([key, value]) => {
    //   formDataToSend.append(key, value);
    // });
    // 
    // fetch('/api/partnership-application', {
    //   method: 'POST',
    //   body: formDataToSend
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setSubmitted(true);
    //   setLoading(false);
    // })
    // .catch(error => {
    //   setError('Une erreur est survenue. Veuillez réessayer.');
    //   setLoading(false);
    // });
  };

  return (
    <section className="py-20 bg-[#fbfcfd] text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2b3343] mb-3 sm:mb-4">
              Devenez partenaire de DAMAD dès aujourd&apos;hui
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complétez le formulaire ci-dessous pour soumettre votre candidature de partenariat.
            </p>
          </div>
          
          <div className="bg-white shadow-lg border border-gray-200 p-8 md:p-10 rounded-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && <div className="p-4 bg-red-50 text-red-700 rounded-lg mb-6">{error}</div>}
                
                {/* Informations de l'entreprise */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#2b3343]">Informations de l&apos;entreprise</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium mb-2 text-gray-700">
                        NOM DE L&apos;ENTREPRISE
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="siret" className="block text-sm font-medium mb-2 text-gray-700">
                        SIRET
                      </label>
                      <input
                        type="text"
                        id="siret"
                        name="siret"
                        value={formData.siret}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-2 text-gray-700">
                        ADRESSE
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-2 text-gray-700">
                        VILLE
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="services" className="block text-sm font-medium mb-2 text-gray-700">
                      SERVICES PROPOSÉS
                    </label>
                    <textarea
                      id="services"
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>
                </div>
                
                {/* Personne à contacter */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#2b3343]">Personne à contacter</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium mb-2 text-gray-700">
                        NOM
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contactFirstName" className="block text-sm font-medium mb-2 text-gray-700">
                        PRÉNOM
                      </label>
                      <input
                        type="text"
                        id="contactFirstName"
                        name="contactFirstName"
                        value={formData.contactFirstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                        TÉLÉPHONE
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Références chantiers ou prestations service */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#2b3343]">Références chantiers ou prestations service</h3>
                  <p className="text-sm text-gray-600 mb-6">Présentez des services ou des travaux réalisés au cours de 6 derniers mois.</p>
                  
                  {/* Projet 1 */}
                  <div className="mb-8 border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium mb-3 text-[#2b3343]">1/ Projet</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="project1Title" className="block text-sm font-medium mb-2 text-gray-700">
                          Intitulé
                        </label>
                        <input
                          type="text"
                          id="project1Title"
                          name="project1Title"
                          value={formData.project1Title}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="project1Date" className="block text-sm font-medium mb-2 text-gray-700">
                          Date de réalisation
                        </label>
                        <input
                          type="text"
                          id="project1Date"
                          name="project1Date"
                          value={formData.project1Date}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="project1Location" className="block text-sm font-medium mb-2 text-gray-700">
                        VILLE DE CHANTIER OU LIEU DE LA PRESTATION DE SERVICE
                      </label>
                      <input
                        type="text"
                        id="project1Location"
                        name="project1Location"
                        value={formData.project1Location}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    
                    <div>
                      <p className="block text-sm font-medium mb-2 text-gray-700">MONTANT</p>
                      <div className="flex items-center space-x-6">
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            name="project1Amount" 
                            value="Inférieur à 1000€" 
                            checked={formData.project1Amount === "Inférieur à 1000€"}
                            onChange={() => handleRadioChange('project1Amount', 'Inférieur à 1000€')}
                            className="h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2 text-sm text-gray-700">Inférieur à 1000€</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            name="project1Amount" 
                            value="compris en 1000€ et 5000€" 
                            checked={formData.project1Amount === "compris en 1000€ et 5000€"}
                            onChange={() => handleRadioChange('project1Amount', 'compris en 1000€ et 5000€')}
                            className="h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2 text-sm text-gray-700">compris en 1000€ et 5000€</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            name="project1Amount" 
                            value="Supérieur à 5000" 
                            checked={formData.project1Amount === "Supérieur à 5000"}
                            onChange={() => handleRadioChange('project1Amount', 'Supérieur à 5000')}
                            className="h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2 text-sm text-gray-700">Supérieur à 5000</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Projet 2 */}
                  <div className="mb-8 border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium mb-3 text-[#2b3343]">2/ Projet</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="project2Title" className="block text-sm font-medium mb-2 text-gray-700">
                          Intitulé
                        </label>
                        <input
                          type="text"
                          id="project2Title"
                          name="project2Title"
                          value={formData.project2Title}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="project2Date" className="block text-sm font-medium mb-2 text-gray-700">
                          Date de réalisation
                        </label>
                        <input
                          type="text"
                          id="project2Date"
                          name="project2Date"
                          value={formData.project2Date}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="project2Location" className="block text-sm font-medium mb-2 text-gray-700">
                        VILLE DE CHANTIER OU LIEU DE LA PRESTATION DE SERVICE
                      </label>
                      <input
                        type="text"
                        id="project2Location"
                        name="project2Location"
                        value={formData.project2Location}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    
                    <div>
                      <p className="block text-sm font-medium mb-2 text-gray-700">MONTANT</p>
                      <div className="flex items-center space-x-6">
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            name="project2Amount" 
                            value="Inférieur à 1000€" 
                            checked={formData.project2Amount === "Inférieur à 1000€"}
                            onChange={() => handleRadioChange('project2Amount', 'Inférieur à 1000€')}
                            className="h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2 text-sm text-gray-700">Inférieur à 1000€</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            name="project2Amount" 
                            value="compris en 1000€ et 5000€" 
                            checked={formData.project2Amount === "compris en 1000€ et 5000€"}
                            onChange={() => handleRadioChange('project2Amount', 'compris en 1000€ et 5000€')}
                            className="h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2 text-sm text-gray-700">compris en 1000€ et 5000€</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            name="project2Amount" 
                            value="Supérieur à 5000" 
                            checked={formData.project2Amount === "Supérieur à 5000"}
                            onChange={() => handleRadioChange('project2Amount', 'Supérieur à 5000')}
                            className="h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2 text-sm text-gray-700">Supérieur à 5000</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Projet 3 */}
                  <div className="mb-4 border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium mb-3 text-[#2b3343]">3/ Projet</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="project3Title" className="block text-sm font-medium mb-2 text-gray-700">
                          Intitulé
                        </label>
                        <input
                          type="text"
                          id="project3Title"
                          name="project3Title"
                          value={formData.project3Title}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="project3Date" className="block text-sm font-medium mb-2 text-gray-700">
                          Date de réalisation
                        </label>
                        <input
                          type="text"
                          id="project3Date"
                          name="project3Date"
                          value={formData.project3Date}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="project3Location" className="block text-sm font-medium mb-2 text-gray-700">
                        VILLE DE CHANTIER OU LIEU DE LA PRESTATION DE SERVICE
                      </label>
                      <input
                        type="text"
                        id="project3Location"
                        name="project3Location"
                        value={formData.project3Location}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    
                    <div>
                      <p className="block text-sm font-medium mb-2 text-gray-700">MONTANT</p>
                      <div className="flex items-center space-x-6">
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            name="project3Amount" 
                            value="Inférieur à 1000€" 
                            checked={formData.project3Amount === "Inférieur à 1000€"}
                            onChange={() => handleRadioChange('project3Amount', 'Inférieur à 1000€')}
                            className="h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2 text-sm text-gray-700">Inférieur à 1000€</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            name="project3Amount" 
                            value="compris en 1000€ et 5000€" 
                            checked={formData.project3Amount === "compris en 1000€ et 5000€"}
                            onChange={() => handleRadioChange('project3Amount', 'compris en 1000€ et 5000€')}
                            className="h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2 text-sm text-gray-700">compris en 1000€ et 5000€</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            name="project3Amount" 
                            value="Supérieur à 5000" 
                            checked={formData.project3Amount === "Supérieur à 5000"}
                            onChange={() => handleRadioChange('project3Amount', 'Supérieur à 5000')}
                            className="h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2 text-sm text-gray-700">Supérieur à 5000</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Documents */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#2b3343]">Documents</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="insurance" className="block text-sm font-medium mb-2 text-gray-700">
                        Assurance décennale et professionnelle*
                      </label>
                      <input
                        type="file"
                        id="insurance"
                        name="insurance"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="fiscalCertificate" className="block text-sm font-medium mb-2 text-gray-700">
                        Attestation de régularité fiscale*
                      </label>
                      <input
                        type="file"
                        id="fiscalCertificate"
                        name="fiscalCertificate"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="kbis" className="block text-sm font-medium mb-2 text-gray-700">
                        Kbis*
                      </label>
                      <input
                        type="file"
                        id="kbis"
                        name="kbis"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <p className="mt-4 text-sm text-gray-500">
                    Attention Assurance décennale et professionnelle valide. Attestation de régularité et Kbis de moins de 3 mois
                  </p>
                </div>
                
                {/* Submit button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-[#0046fe] hover:bg-[#0046fe]/90 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    {loading ? 'Envoi en cours...' : 'Je candidate'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Merci pour votre intérêt !</h3>
                <p className="text-gray-300 mb-6">
                  Notre équipe commerciale vous contactera très prochainement pour discuter des possibilités de partenariat.
                </p>
                <Link 
                  href="/" 
                  className="inline-flex items-center text-white hover:text-gray-300 transition-all"
                >
                  <span>Retour à l&apos;accueil</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            )}
          </div>
          
          {/* Contact information section removed as requested */}
        </div>
      </div>
    </section>
  );
}
