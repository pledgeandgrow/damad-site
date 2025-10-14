'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fbfcfc] px-4">
      <div className="max-w-md text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#2b3343] mb-4">
          Une erreur est survenue
        </h2>
        <p className="text-gray-600 mb-6">
          Nous sommes désolés, une erreur inattendue s&apos;est produite. Veuillez réessayer.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#0046fe] text-white rounded-lg font-medium hover:bg-[#0046fe]/90 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
