import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-green-800">Privacy Policy</h1>
          <p className="text-gray-700 leading-relaxed">
            LegalSathi AI ek free legal help platform hai jo Indian users ko general
            legal guidance aur resources provide karta hai. Hum aapki privacy ko
            gaur se dekhte hain.
          </p>
        </section>

        <section className="space-y-4 bg-green-50 border border-green-200 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-green-900">Platform Information</h2>
          <p className="text-gray-700 leading-relaxed">
            LegalSathi AI sirf ek information platform hai. Hum kisi bhi tarah ka
            legal advice provide nahi karte. Humare suggestions general guidance ke liye hote hain.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Services Used</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Groq AI</strong> - AI-powered responses aur text processing ke liye.</li>
            <li><strong>Vercel</strong> - Hosting aur deployment ke liye.</li>
            <li><strong>Google Analytics</strong> - Traffic analytics aur website performance ke liye.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Agar aapko koi sawaal ho, toh humein <a href="mailto:legalsathi.ai@gmail.com" className="text-green-700 font-semibold">legalsathi.ai@gmail.com</a> par email karein.
          </p>
        </section>

        <section className="space-y-4 bg-yellow-50 border border-yellow-300 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-yellow-900">Legal Disclaimer</h2>
          <p className="text-gray-800 leading-relaxed">
            Ye platform legal advice nahi deta. Sirf general guidance hai. Serious cases mein registered lawyer se milein.
          </p>
        </section>

        <section className="text-sm text-gray-500">
          <p>
            <Link href="/" className="text-green-700 hover:underline">Home</Link> · 
            <Link href="/about" className="text-green-700 hover:underline">About</Link> · 
            <Link href="/fir-guide" className="text-green-700 hover:underline">FIR Guide</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
