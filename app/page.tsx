'use client';

import Navbar from '@/components/Navbar';
import TrustBanner from '@/components/TrustBanner';
import EmergencyHelp from '@/components/EmergencyHelp';
import LegalCategoryCard from '@/components/LegalCategoryCard';
import { useState, useRef } from 'react';
import categories from '@/data/legal-categories.json';
import templates from '@/data/document-templates.json';

export default function Home() {
  const [query, setQuery] = useState('');
  const [reply, setReply] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const submitQuery = async () => {
    const message = query.trim();
    if (!message) return;

    setIsLoading(true);
    setReply('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, category: '' }),
      });

      const data = await response.json();
      if (data.reply) {
        setReply(data.reply);
      } else if (data.error) {
        setReply(data.error);
      }

      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Search error:', error);
      setReply('Kuch gadbad hui! Dobara try karo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitQuery();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Banner */}
      <div className="sticky top-16 z-40 bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm font-semibold">
            <span>🚨 Emergency?</span>
            <span className="hidden sm:inline">Police: <span className="text-yellow-200">100</span></span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Women: <span className="text-yellow-200">1091</span></span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Cyber: <span className="text-yellow-200">1930</span></span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Legal Aid: <span className="text-yellow-200">15100</span></span>
          </div>
        </div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-green-100 border border-green-400 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-green-800">
                ⚖️ Free Legal Help for Every Indian
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4 leading-tight">
              Kanoon Aapki Taraf Hai!
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Lawyer afford nahi kar sakte? Koi baat nahi! <span className="font-bold">LegalSathi AI</span> aapke
              saath hai. Free mein legal guidance, documents, aur apne rights janiye.
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    submitQuery();
                  }
                }}
                placeholder="Apni samasya likho... Jaise: landlord ne deposit nahi diya"
                className="flex-1 px-4 py-3 md:py-4 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-600 text-gray-800"
              />
              <button
                type="button"
                onClick={submitQuery}
                disabled={isLoading}
                className="px-6 md:px-8 py-3 md:py-4 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Pooch raha hoon...' : 'Poochho 🤔'}
              </button>
            </div>
          </form>

          {reply && (
            <div
              ref={resultsRef}
              className="max-w-2xl mx-auto border-2 border-green-400 bg-green-50 rounded-lg p-5 mb-8"
            >
              <p className="font-semibold text-green-800 mb-2">⚖️ LegalSathi ka Jawab:</p>
              <p className="text-gray-800 whitespace-pre-line">{reply}</p>
              <p className="text-xs text-gray-500 mt-3">
                Ye general guidance hai. Serious cases mein lawyer se milein.
              </p>
            </div>
          )}

          {/* Trust Stats */}
          <div className="bg-white border-2 border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <span className="text-2xl">⚖️</span>
                <p className="text-sm font-bold text-gray-800">12 Legal Topics</p>
              </div>
              <div>
                <span className="text-2xl">📄</span>
                <p className="text-sm font-bold text-gray-800">8 Free Documents</p>
              </div>
              <div>
                <span className="text-2xl">🆓</span>
                <p className="text-sm font-bold text-gray-800">Bilkul Free</p>
              </div>
              <div>
                <span className="text-2xl">🔒</span>
                <p className="text-sm font-bold text-gray-800">Private & Secure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <TrustBanner />
        </div>
      </section>

      {/* Emergency Helplines */}
      <section id="emergency" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🚨 Emergency Helplines</h2>
          <EmergencyHelp />
        </div>
      </section>

      {/* Legal Categories */}
      <section id="help" className="py-12 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Apni Samasya Chuniye ⚖️</h2>
          <p className="text-center text-gray-600 mb-10">
            12 legal topics mein se koi bhi chuniye aur bilkul free guidance lo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category.id} onClick={() => setSelectedCategory(category.id)}>
                <LegalCategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Drafter */}
      <section id="documents" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">📄 Free Legal Documents Banao</h2>
          <p className="text-center text-gray-600 mb-10">
            Professional legal documents sirf 2 minute mein - bilkul free
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white border-2 border-blue-200 rounded-lg p-5 hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-4xl mb-3">📋</div>
                <h3 className="font-bold text-gray-800 mb-1">{template.name}</h3>
                <p className="text-xs text-gray-600 italic mb-3">{template.name_hindi}</p>
                <p className="text-sm text-gray-700 mb-4">{template.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition text-sm">
                  Draft Karo →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Kya Aap Ye Rights Jaante Hain? 🤔
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-green-400 rounded-lg p-6">
              <span className="text-3xl block mb-3">⚖️</span>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Free Legal Aid</h3>
              <p className="text-gray-700 text-sm">
                Agar aapki income kam hai (2 lakh se kam per year), toh state legal services aapko bilkul
                free mein case defend karengi.
              </p>
            </div>

            <div className="bg-white border-2 border-green-400 rounded-lg p-6">
              <span className="text-3xl block mb-3">🚔</span>
              <h3 className="font-bold text-lg text-gray-800 mb-2">FIR Registration</h3>
              <p className="text-gray-700 text-sm">
                Police bina koi reason likhe FIR darz nahi kar sakte. Ye aapka legal right hai - police ka
                duty hai FIR likha dena.
              </p>
            </div>

            <div className="bg-white border-2 border-green-400 rounded-lg p-6">
              <span className="text-3xl block mb-3">🛒</span>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Consumer Rights</h3>
              <p className="text-gray-700 text-sm">
                Consumer forum mein complaint karna bilkul free hai. Ye courts fast hote hain aur common
                Indians ke liye easy.
              </p>
            </div>

            <div className="bg-white border-2 border-green-400 rounded-lg p-6">
              <span className="text-3xl block mb-3">💼</span>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Workplace Protection</h3>
              <p className="text-gray-700 text-sm">
                Workplace mein harassment ke against complaint ka haq hai. Gender, caste, ya kisi bhi aadhar
                par discrimination illegal hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Kaise Kaam Karta Hai?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Samasya Batao 📝</h3>
              <p className="text-gray-700 text-sm">
                Upar search bar mein apni legal samasya likho - koi bhi lang mein likho
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">AI Guidance Lo ⚖️</h3>
              <p className="text-gray-700 text-sm">
                LegalSathi AI turant simple aur practical guidance de dega - bilkul free
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Aage Badhao 📞</h3>
              <p className="text-gray-700 text-sm">
                Document banao ya helpline call karo - saari resources bilkul free hain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold mb-2">LegalSathi AI ⚖️</h3>
            <p className="text-gray-300 text-sm">Free Legal Help for India</p>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-xs text-gray-400 text-center mb-3">
              ⚠️ <span className="font-semibold">Disclaimer:</span> Ye platform legal advice nahi deta.
              Ye sirf general information aur guidance provide karta hai.
            </p>
            <p className="text-xs text-red-400 text-center">
              Serious ya criminal cases mein hamesha qualified aur registered lawyer se personally mile.
              Emergency situations mein turant police (100) ko call karo.
            </p>
          </div>

          <div className="mt-6 text-center border-t border-gray-700 pt-6">
            <p className="text-xs text-gray-500">
              © 2026 LegalSathi AI. All rights reserved. | Made with ❤️ for India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
