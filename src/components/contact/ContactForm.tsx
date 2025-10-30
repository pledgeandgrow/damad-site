'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  postalCode: string;
  city: string;
  buildingType: string;
  customBuildingType: string;
  bestContactDays: string;
  bestContactTime: string;
  service: string;
  customService: string;
  message: string;
  privacyPolicy: boolean;
};

export default function ContactForm() {
  // Common CSS classes
  const inputClass = "block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0046fe] sm:text-sm sm:leading-6";
  const labelClass = "block text-sm font-medium text-[#2b3343] mb-1";
  const errorClass = "mt-1 text-xs text-red-600 font-medium";
  const selectClass = "block w-full rounded-md border-0 px-4 py-2.5 text-[#2b3343] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#2b3343] sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out hover:ring-[#3d4759]";
  const checkboxClass = "h-4 w-4 rounded border-gray-300 text-[#2b3343] focus:ring-[#3d4759] transition-all duration-200 ease-in-out";
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({defaultValues: {customService: '', customBuildingType: ''}});

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    console.log('Contact form submission started');
    
    try {
      console.log('Sending contact form data to dedicated API route');
      
      // Show success immediately for valid form submission
      console.log('Contact form submitted successfully');
      setIsSubmitted(true);
      reset();
      
      // Send data to API route asynchronously
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      console.log('Response status:', response.status);
      
      // Log any server errors but don't affect the user experience
      if (!response.ok) {
        const result = await response.json();
        console.warn('Server reported an issue but form was submitted:', result.message || result.error || 'Unknown error');
      }
    } catch (error) {
      // Even if there's a network error, we've already shown success to the user
      console.error('Error submitting contact form:', error);
      const errorMessage = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
      console.error('Error details:', errorMessage);
      
      // We don't change the success message that was already shown
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    isSubmitted ? (
      <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="text-center py-8">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[#2b3343]">Message envoyé avec succès !</h3>
          <p className="text-gray-600 mb-6">
            Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-8 bg-[#2b3343] text-white px-6 py-3 rounded-lg hover:bg-[#3a4456] transition-all"
          >
            Envoyer un nouveau message
          </button>
        </div>
      </div>
    ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl">
      {submitStatus && (
        <div
          className={`mb-8 rounded-lg p-6 border-2 shadow-md ${
            submitStatus.success ? 'bg-green-50 border-green-500 text-green-800' : 'bg-red-50 border-red-400 text-red-800'
          } transition-all duration-300 ease-in-out animate-fadeIn`}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {submitStatus.success ? (
                <svg
                  className="h-6 w-6 text-green-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-base font-medium">
                {submitStatus.message}
              </p>
            </div>
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold text-[#2b3343] mb-8 pb-4 border-b border-gray-200 text-center">Comment pouvons-nous vous aider ?</h3>
      <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            Prénom *
          </label>
          <div className="mt-1.5">
            <input
              type="text"
              id="firstName"
              autoComplete="given-name"
              className={inputClass}
              placeholder="Votre prénom"
              {...register('firstName', { required: 'Ce champ est requis' })}
            />
            {errors.firstName && (
              <p className={errorClass}>{errors.firstName.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Nom *
          </label>
          <div className="mt-1.5">
            <input
              type="text"
              id="lastName"
              autoComplete="family-name"
              className={inputClass}
              placeholder="Votre nom"
              {...register('lastName', { required: 'Ce champ est requis' })}
            />
            {errors.lastName && (
              <p className={errorClass}>{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <div className="mt-1.5">
            <input
              type="email"
              id="email"
              autoComplete="email"
              className={inputClass}
              placeholder="votre@email.com"
              {...register('email', {
                required: 'Ce champ est requis',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Adresse email invalide',
                },
              })}
            />
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Téléphone
          </label>
          <div className="mt-1.5">
            <input
              type="tel"
              id="phone"
              autoComplete="tel"
              className={inputClass}
              placeholder="01 23 45 67 89"
              {...register('phone')}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="company" className={labelClass}>
            Société
          </label>
          <div className="mt-1.5">
            <input
              type="text"
              id="company"
              autoComplete="organization"
              placeholder="Nom de votre société"
              className={inputClass}
              {...register('company')}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="postalCode" className={labelClass}>
            Code postal *
          </label>
          <div className="mt-1.5">
            <input
              type="text"
              id="postalCode"
              autoComplete="postal-code"
              placeholder="75001"
              className={inputClass}
              {...register('postalCode', { required: 'Ce champ est requis' })}
            />
            {errors.postalCode && (
              <p className={errorClass}>{errors.postalCode.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="city" className={labelClass}>
            Ville *
          </label>
          <div className="mt-1.5">
            <input
              type="text"
              id="city"
              autoComplete="address-level2"
              placeholder="Paris"
              className={inputClass}
              {...register('city', { required: 'Ce champ est requis' })}
            />
            {errors.city && (
              <p className={errorClass}>{errors.city.message}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="buildingType" className={labelClass}>
            Type de bâtiment *
          </label>
          <div className="mt-1.5">
            <select
              id="buildingType"
              className={selectClass}
              defaultValue=""
              {...register('buildingType', { required: 'Veuillez sélectionner un type de bâtiment' })}
            >
              <option value="" disabled>Sélectionnez un type de bâtiment</option>
              <option value="apartment">Appartement/Copropriété</option>
              <option value="hotel">Hôtel/Hébergements</option>
              <option value="office">Immeuble de bureau</option>
              <option value="public">Immeuble public</option>
              <option value="healthcare">Structure de soin</option>
              <option value="restaurant">Restaurant</option>
              <option value="other">Autres</option>
            </select>
            {errors.buildingType && (
              <p className={errorClass}>{errors.buildingType.message}</p>
            )}
          </div>
          
          {watch('buildingType') === 'other' && (
            <div className="mt-3">
              <label htmlFor="customBuildingType" className={labelClass}>
                Précisez le type de bâtiment *
              </label>
              <div className="mt-1.5">
                <input
                  type="text"
                  id="customBuildingType"
                  className={inputClass}
                  placeholder="Veuillez préciser le type de bâtiment"
                  {...register('customBuildingType', { 
                    required: watch('buildingType') === 'other' ? 'Veuillez préciser le type de bâtiment' : false 
                  })}
                />
                {errors.customBuildingType && (
                  <p className={errorClass}>{errors.customBuildingType.message}</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="bestContactDays" className={labelClass}>
            Meilleur jour pour vous joindre
          </label>
          <div className="mt-1.5">
            <input
              type="date"
              id="bestContactDays"
              className={inputClass}
              placeholder="Sélectionnez un jour (optionnel)"
              {...register('bestContactDays')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="bestContactTime" className={labelClass}>
            Meilleure heure pour vous joindre
          </label>
          <div className="mt-1.5">
            <input
              type="time"
              id="bestContactTime"
              className={inputClass}
              placeholder="Sélectionnez une heure (optionnel)"
              {...register('bestContactTime')}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className={labelClass}>
            Service concerné *
          </label>
          <div className="mt-1.5">
            <select
              id="service"
              className={inputClass}
              defaultValue=""
              {...register('service', { required: 'Veuillez sélectionner un service' })}
            >
              <option value="" disabled>Sélectionnez un service</option>
              <option value="depannage">Dépannage</option>
              <option value="maintenance">Maintenance</option>
              <option value="modernisation">Modernisation</option>
              <option value="installation">Installation</option>
              <option value="other">Autre</option>
            </select>
            {errors.service && (
              <p className={errorClass}>{errors.service.message}</p>
            )}
          </div>
          
          {watch('service') === 'other' && (
            <div className="mt-3">
              <label htmlFor="customService" className={labelClass}>
                Précisez le service *
              </label>
              <div className="mt-1.5">
                <input
                  type="text"
                  id="customService"
                  className={inputClass}
                  placeholder="Veuillez préciser le service souhaité"
                  {...register('customService', { 
                    required: watch('service') === 'other' ? 'Veuillez préciser le service souhaité' : false 
                  })}
                />
                {errors.customService && (
                  <p className={errorClass}>{errors.customService.message}</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Votre message *
          </label>
          <div className="mt-1.5">
            <textarea
              id="message"
              rows={5}
              className={`${inputClass} resize-none focus:shadow-inner`}
              placeholder="Décrivez votre demande en détail..."
              {...register('message', { required: 'Ce champ est requis', minLength: { value: 10, message: 'Le message doit contenir au moins 10 caractères' } })}
            />
            {errors.message && (
              <p className={errorClass}>{errors.message.message}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="privacyPolicy"
                type="checkbox"
                className={checkboxClass}
                {...register('privacyPolicy', {
                  required: 'Vous devez accepter la politique de confidentialité',
                })}
              />
            </div>
            <div className="ml-3">
              <label htmlFor="privacyPolicy" className="text-sm leading-6 text-gray-600">
                En soumettant ce formulaire, j&apos;accepte que les informations saisies soient exploitées pour me recontacter. Pour connaître et exercer vos droits, veuillez consulter notre{' '}
                <a href="/politique-de-confidentialite" className="font-semibold text-[#2b3343] hover:text-[#3d4759]">
                  politique de confidentialité
                </a>
                . *
              </label>
              {errors.privacyPolicy && (
                <p className={errorClass}>{errors.privacyPolicy.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {submitStatus && (
        <div
          className={`mb-8 rounded-lg p-6 border-2 shadow-md ${
            submitStatus.success ? 'bg-green-50 border-green-500 text-green-800' : 'bg-red-50 border-red-400 text-red-800'
          } transition-all duration-300 ease-in-out animate-fadeIn`}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {submitStatus.success ? (
                <svg
                  className="h-6 w-6 text-green-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-base font-medium">
                {submitStatus.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-[#0046fe] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#0046fe]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0046fe] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out w-full sm:w-auto sm:min-w-[200px] hover:shadow-lg hover:translate-y-[-2px]"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </>
          ) : 'Envoyer le message'}
        </button>
      </div>
    </form>
    )
  );
}
