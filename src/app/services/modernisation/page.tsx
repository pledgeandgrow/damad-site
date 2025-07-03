import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';

export const metadata: Metadata = {
  title: 'Modernisation d\'Ascenseurs - Damad Ascenceurs',
  description: 'Mise à niveau de vos ascenseurs pour améliorer la sécurité, l\'efficacité énergétique et le confort.',
};

export default function ModernisationPage() {
  const service = {
    title: 'Modernisation d\'Ascenseurs',
    description: 'Mise à niveau de vos ascenseurs pour améliorer sécurité, efficacité énergétique et confort.',
    features: [
      'Amélioration de la sécurité',
      'Réduction de la consommation énergétique',
      'Amélioration du confort d\'utilisation',
      'Mise aux normes actuelles',
      'Augmentation de la valeur du bâtiment',
    ],
    icon: '⚡',
    image: '/images/services/modernisation.jpg',
  };

  return <ServiceDetail service={service} />;
}
