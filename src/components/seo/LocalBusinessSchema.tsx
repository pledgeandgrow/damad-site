import React from 'react';

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "DMD Ascenseur",
          "image": "https://dmd-ascenseur.fr/images/logo.png",
          "url": "https://dmd-ascenseur.fr",
          "telephone": "+33970722263", // Replace with actual phone number
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3 BOULEVARD DE SEBASTOPOL", // Replace with actual address
            "addressLocality": "Paris", // Replace with actual city
            "postalCode": "75001", // Replace with actual postal code
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.8566, // Replace with actual coordinates
            "longitude": 2.3522 // Replace with actual coordinates
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/dmd-ascenseur" // Replace with actual social links
          ],
          "priceRange": "€€",
          "description": "Expert en installation, maintenance et dépannage d'ascenseurs. Solutions sur mesure pour particuliers et professionnels dans toute la France."
        })
      }}
    />
  );
}
