export default function EmergencyHelp() {
  const emergencyNumbers = [
    { number: '100', label: 'Police Emergency', emoji: '🚔' },
    { number: '1091', label: 'Women Helpline', emoji: '👩' },
    { number: '1930', label: 'Cyber Crime', emoji: '💻' },
    { number: '15100', label: 'Legal Aid', emoji: '⚖️' },
    { number: '1098', label: 'Child Helpline', emoji: '👶' },
    { number: '14567', label: 'Senior Citizen', emoji: '👴' },
    { number: '1800-11-4000', label: 'Consumer Help', emoji: '🛒' },
    { number: '9152987821', label: 'Mental Health (iCall)', emoji: '💚' },
  ];

  return (
    <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-3xl animate-pulse">🚨</span>
        <h3 className="text-xl font-bold text-red-700">Emergency Helplines</h3>
      </div>

      <p className="text-sm text-red-800 mb-5 font-semibold">
        Ager kisi ko fauran help chahiye to ye numbers call karo:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {emergencyNumbers.map((item, idx) => (
          <a
            key={idx}
            href={`tel:${item.number}`}
            className="bg-white border-2 border-red-300 rounded-lg p-4 hover:bg-red-100 transition cursor-pointer block"
          >
            <div className="text-3xl mb-2">{item.emoji}</div>
            <p className="font-bold text-base text-red-700">{item.number}</p>
            <p className="text-xs text-gray-600 mb-2">{item.label}</p>
            <button className="w-full bg-red-600 text-white text-xs font-semibold py-1 rounded hover:bg-red-700 transition">
              Call Now
            </button>
          </a>
        ))}
      </div>

      <div className="mt-6 bg-red-100 border-l-4 border-red-600 p-3 rounded">
        <p className="text-sm text-red-900">
          <span className="font-bold">⚠️ Important:</span> Agar koi serious problem hai - injury, violence, ya threat - toh fauran police (100) ko call karo!
        </p>
      </div>
    </div>
  );
}
