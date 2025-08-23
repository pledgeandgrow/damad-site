import React from 'react';

interface ServiceSchemaProps {
  service: {
    title: string;
    description: string;
    url: string;
  };
}

export default function ServiceSchema({ service }: ServiceSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": service.title,
          "name": service.title,
          "url": `https://dmd-ascenseur.fr${service.url}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "DMD Ascenseur",
            "url": "https://dmd-ascenseur.fr"
          },
          "areaServed": {
            "@type": "Country",
            "name": "France"
          },
          "description": service.description,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "EUR"
            }
          }
        })
      }}
    />
  );
}
