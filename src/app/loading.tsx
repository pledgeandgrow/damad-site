export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fbfcfc]">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-[#0046fe] mb-4"></div>
        <p className="text-[#2b3343] font-medium">Chargement...</p>
      </div>
    </div>
  );
}
