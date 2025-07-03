'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  privacyPolicy: boolean;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // TODO: Replace with your form submission logic
      console.log('Form submitted:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.'
      });
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
            Prénom *
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="firstName"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              {...register('firstName', { required: 'Ce champ est requis' })}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
            Nom *
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="lastName"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              {...register('lastName', { required: 'Ce champ est requis' })}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email *
          </label>
          <div className="mt-2">
            <input
              type="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              {...register('email', {
                required: 'Ce champ est requis',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Adresse email invalide',
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
            Téléphone
          </label>
          <div className="mt-2">
            <input
              type="tel"
              id="phone"
              autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              {...register('phone')}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
            Société
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="company"
              autoComplete="organization"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              {...register('company')}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-sm font-medium leading-6 text-gray-900">
            Service concerné *
          </label>
          <div className="mt-2">
            <select
              id="service"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              defaultValue=""
              {...register('service', { required: 'Veuillez sélectionner un service' })}
            >
              <option value="" disabled>Sélectionnez un service</option>
              <option value="reparation">Réparation</option>
              <option value="maintenance">Maintenance</option>
              <option value="modernisation">Modernisation</option>
              <option value="other">Autre</option>
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
            Votre message *
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              defaultValue={''}
              {...register('message', { required: 'Ce champ est requis', minLength: { value: 10, message: 'Le message doit contenir au moins 10 caractères' } })}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="privacyPolicy"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                {...register('privacyPolicy', {
                  required: 'Vous devez accepter la politique de confidentialité',
                })}
              />
            </div>
            <div className="ml-3">
              <label htmlFor="privacyPolicy" className="text-sm leading-6 text-gray-600">
                En soumettant ce formulaire, j&apos;accepte que les informations saisies soient exploitées pour me recontacter. Pour connaître et exercer vos droits, veuillez consulter notre{' '}
                <a href="/politique-de-confidentialite" className="font-semibold text-blue-600 hover:text-blue-500">
                  politique de confidentialité
                </a>
                . *
              </label>
              {errors.privacyPolicy && (
                <p className="mt-1 text-sm text-red-600">{errors.privacyPolicy.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {submitStatus && (
        <div
          className={`mt-6 rounded-md p-4 ${
            submitStatus.success ? 'bg-green-50' : 'bg-red-50'
          }`}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              {submitStatus.success ? (
                <svg
                  className="h-5 w-5 text-green-400"
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
                  className="h-5 w-5 text-red-400"
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
              <p
                className={`text-sm font-medium ${
                  submitStatus.success ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {submitStatus.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </div>
    </form>
  );
}
