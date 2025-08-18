'use client';

import { useState, useEffect } from 'react';
import { FaCookieBite, FaTimes } from 'react-icons/fa';

interface CookieConsentProps {
  cookieName?: string;
  expiryDays?: number;
}

export default function CookieConsent({
  cookieName = 'damad-cookie-consent',
  expiryDays = 365,
}: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if cookie consent has been given
    const hasConsent = document.cookie.split(';').some(item => {
      return item.trim().startsWith(`${cookieName}=`);
    });
    
    // Only show banner if consent hasn't been given
    if (!hasConsent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [cookieName]);

  const acceptCookies = () => {
    // Set cookie with consent
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + expiryDays);
    
    document.cookie = `${cookieName}=true; expires=${expiryDate.toUTCString()}; path=/; ${process.env.NODE_ENV === 'production' ? 'secure; ' : ''}SameSite=Lax`;
    
    setVisible(false);
  };

  const declineCookies = () => {
    // Set cookie with declined status
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7); // Ask again in a week
    
    document.cookie = `${cookieName}=false; expires=${expiryDate.toUTCString()}; path=/; ${process.env.NODE_ENV === 'production' ? 'secure; ' : ''}SameSite=Lax`;
    
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-lg border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="text-[#2b3343] mt-1">
              <FaCookieBite size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#2b3343]">Nous utilisons des cookies</h3>
              <p className="text-gray-600 text-sm mt-1">
                Ce site utilise des cookies pour améliorer votre expérience et nos services. 
                En continuant à naviguer, vous acceptez notre utilisation des cookies conformément à notre politique de confidentialité.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 ml-0 md:ml-4">
            <button
              onClick={declineCookies}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-[#2b3343] text-white rounded-md hover:bg-[#3d4759] transition-colors text-sm font-medium"
            >
              Accepter
            </button>
          </div>
          
          <button 
            onClick={declineCookies} 
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Fermer"
          >
            <FaTimes size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
