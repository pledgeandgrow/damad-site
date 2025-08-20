'use client';

import { FaFileInvoiceDollar } from 'react-icons/fa';
import Link from 'next/link';

export default function FloatingDevis() {
  return (
    <Link
      href="/contact?subject=demande-de-devis"
      aria-label="Demander un devis"
      className="fixed bottom-24 right-6 z-50 p-3 rounded-full bg-[#0046fe] text-white shadow-lg hover:bg-[#0035c1] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
    >
      <FaFileInvoiceDollar className="text-lg" />
    </Link>
  );
}
