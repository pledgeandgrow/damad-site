import SignInForm from '@/components/auth/SignInForm';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata = {
  title: 'Connexion | DAMAD Ascenseurs',
  description: 'Connectez-vous à votre compte DAMAD Ascenseurs',
};

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex items-center justify-center mb-6 text-steel-blue hover:text-blue-700">
          <FaArrowLeft className="mr-2" />
          <span>Retour à l'accueil</span>
        </Link>
        <img
          className="mx-auto h-16 w-auto"
          src="/wdamad-transparent.png"
          alt="DAMAD Ascenseurs"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Connectez-vous à votre compte
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Accédez à votre espace client pour suivre vos projets et demandes
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
