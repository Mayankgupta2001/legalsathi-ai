export default function TrustBanner() {
  return (
    <div className="bg-green-50 border-2 border-green-200 rounded-lg py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-2">✅</span>
            <span className="font-semibold text-gray-800 text-sm">Verified Legal Info</span>
            <span className="text-xs text-gray-600">Trusted sources se</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-2">🔒</span>
            <span className="font-semibold text-gray-800 text-sm">No Data Stored</span>
            <span className="text-xs text-gray-600">Aapka privacy safe</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-2">🆓</span>
            <span className="font-semibold text-gray-800 text-sm">Always Free</span>
            <span className="text-xs text-gray-600">Bilkul bilkul free</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-2">👨‍⚖️</span>
            <span className="font-semibold text-gray-800 text-sm">Plain Hindi Mein</span>
            <span className="text-xs text-gray-600">Hinglish mein guidance</span>
          </div>
        </div>
      </div>
    </div>
  );
}
