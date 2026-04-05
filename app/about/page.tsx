export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-green-800">About LegalSathi AI ⚖️</h1>
          <p className="text-gray-700 leading-relaxed">
            LegalSathi AI ka mission hai Har Indian ko free legal help dena. Hum simple
            aur accessible resources banate hain jo aapki legal journey ko aasaan banayein.
          </p>
        </section>

        <section className="space-y-4 bg-green-50 border border-green-200 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-green-900">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>12 Legal categories</li>
            <li>Free document drafting with 8 templates</li>
            <li>FIR Guide step-by-step</li>
            <li>Emergency helplines</li>
            <li>AI legal guidance in Hinglish</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Har Indian ko free legal help!
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Sawalon ke liye email karein: <a href="mailto:legalsathi.ai@gmail.com" className="text-green-700 font-semibold">legalsathi.ai@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
