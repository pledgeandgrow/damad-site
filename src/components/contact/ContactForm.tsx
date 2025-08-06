'use client';

import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  postalCode: string;
  city: string;
  buildingType: string;
  bestContactDays: Date[];
  bestContactTime: Date | null;
  service: string;
  message: string;
  privacyPolicy: boolean;
};

export default function ContactForm() {
  // Common CSS classes
  const inputClass = "block w-full rounded-md border-0 px-4 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2b3343] sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out hover:ring-[#3d4759]";
  const labelClass = "block text-sm font-medium text-[#2b3343] mb-1";
  const errorClass = "mt-1 text-xs text-red-600 font-medium";
  const selectClass = "block w-full rounded-md border-0 px-4 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#2b3343] sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out hover:ring-[#3d4759]";
  const checkboxClass = "h-4 w-4 rounded border-gray-300 text-[#2b3343] focus:ring-[#3d4759] transition-all duration-200 ease-in-out";
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    control,
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
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl">
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
        </div>

        <div>
          <label htmlFor="bestContactDays" className={labelClass}>
            Meilleur jour pour vous joindre
          </label>
          <div className="mt-1.5">
            <Controller
              control={control}
              name="bestContactDays"
              defaultValue={[]}
              render={({ field }) => (
                <div className="react-datepicker-wrapper">
                  <DatePicker
                    id="bestContactDays"
                    selected={null}
                    onChange={(date: Date | null) => {
                      if (date) {
                        const newDates = [...(field.value || [])]; 
                        // Check if date already exists
                        const dateExists = newDates.some(d => 
                          d.getDate() === date.getDate() && 
                          d.getMonth() === date.getMonth() && 
                          d.getFullYear() === date.getFullYear()
                        );
                        
                        if (!dateExists) {
                          newDates.push(date);
                          field.onChange(newDates);
                        }
                      }
                    }}
                    dateFormat="dd/MM/yyyy"
                    locale={fr}
                    placeholderText="Sélectionnez des jours (optionnel)"
                    className={inputClass}
                    calendarClassName="bg-white shadow-lg rounded-md"
                    monthsShown={1}
                    highlightDates={field.value || []}
                  />
                </div>
              )}
            />
            {/* Display selected dates */}
            <div className="mt-2 flex flex-wrap gap-2">
              <Controller
                control={control}
                name="bestContactDays"
                render={({ field }) => (
                  <>
                    {field.value && field.value.length > 0 ? (
                      field.value.map((date, index) => (
                        <div key={index} className="inline-flex items-center bg-[#2b3343] bg-opacity-10 rounded-md px-2 py-1">
                          <span className="text-sm text-[#2b3343]">
                            {format(date, 'dd/MM/yyyy', { locale: fr })}
                          </span>
                          <button
                            type="button"
                            className="ml-1 text-[#2b3343] hover:text-red-600"
                            onClick={() => {
                              const newDates = [...field.value];
                              newDates.splice(index, 1);
                              field.onChange(newDates);
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))
                    ) : null}
                  </>
                )}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="bestContactTime" className={labelClass}>
            Meilleure heure pour vous joindre
          </label>
          <div className="mt-1.5">
            <Controller
              control={control}
              name="bestContactTime"
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  id="bestContactTime"
                  selected={field.value}
                  onChange={(date: Date | null) => field.onChange(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Heure"
                  dateFormat="HH:mm"
                  timeFormat="HH:mm"
                  locale={fr}
                  placeholderText="Sélectionnez une heure (optionnel)"
                  className={inputClass}
                  calendarClassName="bg-white shadow-lg rounded-md"
                  isClearable
                />
              )}
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
              <option value="reparation">Réparation</option>
              <option value="maintenance">Maintenance</option>
              <option value="modernisation">Modernisation</option>
              <option value="installation">Installation</option>
              <option value="other">Autre</option>
            </select>
            {errors.service && (
              <p className={errorClass}>{errors.service.message}</p>
            )}
          </div>
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
          className={`mt-6 mb-6 rounded-lg p-4 border shadow-sm ${
            submitStatus.success ? 'bg-[#eef2f7] border-[#c0cfe0] text-[#2b3343]' : 'bg-red-50 border-red-200 text-red-800'
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {submitStatus.success ? (
                <svg
                  className="h-4 w-4 text-[#2b3343]"
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
                  className="h-4 w-4 text-red-500"
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
            <div className="ml-2">
              <p className="text-xs font-medium">
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
  );
}
