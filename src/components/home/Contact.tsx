import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-[#2b3343] font-semibold text-sm uppercase tracking-wider mb-3">Contactez-nous</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Parlons de votre projet</h2>
          <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Notre équipe d&apos;experts est à votre écoute pour répondre à toutes vos questions et vous accompagner dans la réalisation de votre projet d&apos;ascenseur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-[#2b3343] mb-8">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-[#2b3343]/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-[#2b3343] transition-colors duration-300">
                    <FaMapMarkerAlt className="text-[#2b3343] text-lg group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-500">En soumettant ce formulaire, j&apos;accepte que les informations saisies soient utilisées pour me recontacter dans le cadre de ma demande.</p>
                  </div>
                </div>
              
                <div className="flex items-start group">
                  <div className="bg-[#2b3343]/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-[#2b3343] transition-colors duration-300">
                    <FaPhoneAlt className="text-[#2b3343] text-lg group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                    <p className="mb-1">
                      <a href="tel:+33123456789" className="text-[#2b3343] hover:text-[#3d4759] transition-colors font-medium">
                        +33 1 23 45 67 89
                      </a>
                    </p>
                    <div className="flex items-center mt-2">
                      <div className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full flex items-center border border-green-100">
                        <FaWhatsapp className="mr-2" />
                        <span>Disponible sur WhatsApp</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#2b3343]/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-[#2b3343] transition-colors duration-300">
                    <FaEnvelope className="text-[#2b3343] text-lg group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p>
                      <a href="mailto:contact@damad-ascenseurs.fr" className="text-[#2b3343] hover:text-[#3d4759] transition-colors">
                        contact@damad-ascenseurs.fr
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#2b3343]/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-[#2b3343] transition-colors duration-300">
                    <FaClock className="text-[#2b3343] text-lg group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horaires d&apos;ouverture</h4>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 8h - 19h<br />
                      Samedi: 9h - 13h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Suivez-nous</h4>
                <div className="flex space-x-3">
                  <a href="#" className="bg-gray-50 hover:bg-gray-100 text-gray-700 p-2.5 rounded-lg transition-colors duration-300" aria-label="Facebook">
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-gray-50 hover:bg-gray-100 text-gray-700 p-2.5 rounded-lg transition-colors duration-300" aria-label="Twitter">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-gray-50 hover:bg-gray-100 text-gray-700 p-2.5 rounded-lg transition-colors duration-300" aria-label="LinkedIn">
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#2b3343] mb-6">Envoyez-nous un message</h3>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1.5">Prénom *</label>
                    <input
                      type="text"
                      id="first-name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2b3343]/50 focus:border-[#2b3343] transition-all text-gray-700 placeholder-gray-400"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1.5">Nom *</label>
                    <input
                      type="text"
                      id="last-name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2b3343]/50 focus:border-[#2b3343] transition-all text-gray-700 placeholder-gray-400"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2b3343]/50 focus:border-[#2b3343] transition-all text-gray-700 placeholder-gray-400"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2b3343]/50 focus:border-[#2b3343] transition-all text-gray-700 placeholder-gray-400"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Sujet *</label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2b3343]/50 focus:border-[#2b3343] transition-all appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em] text-gray-700"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236b7280\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")'
                    }}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="maintenance">Service de maintenance</option>
                    <option value="depannage">Dépannage</option>
                    <option value="renseignement">Renseignement</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2b3343]/50 focus:border-[#2b3343] transition-all text-gray-700 placeholder-gray-400"
                    placeholder="Décrivez-nous votre projet ou votre demande en détail..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-0.5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-[#2b3343] focus:ring-[#2b3343] border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="text-gray-600 leading-snug">
                      J&apos;accepte la <a href="#" className="text-[#2b3343] hover:underline font-medium">politique de confidentialité</a> et que mes informations soient utilisées pour répondre à ma demande. *
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group w-full bg-[#2b3343] hover:bg-[#3d4759] text-white font-medium py-3.5 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    Envoyer le message
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Champs obligatoires. Vos données personnelles sont collectées et traitées conformément à notre politique de confidentialité.
                </p>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-20 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156745374!3d48.85837007928747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            className="w-full h-[450px]"
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
