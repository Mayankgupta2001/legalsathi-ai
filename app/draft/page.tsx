'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import templates from '@/data/document-templates.json';

const emojiMap: Record<string, string> = {
  'legal-notice': '⚖️',
  'rti-application': '📋',
  'consumer-complaint': '🛒',
  'police-complaint': '🚔',
  'rent-agreement': '🏠',
  'salary-demand': '💰',
  'cyber-complaint': '💻',
  'harassment-complaint': '🛡️',
};

export default function DraftHome() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">📄 Free Legal Documents Banao</h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Professional legal documents 2 minute mein - bilkul free. Lawyer fees bachao!
            </p>
            <p className="mt-4 text-sm text-gray-500 bg-gray-100 inline-block px-4 py-3 rounded-lg border border-gray-200">
              🔒 Koi data store nahi hota. Sirf document generate hota hai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white border-2 border-gray-200 rounded-3xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <div className="text-5xl mb-4">{emojiMap[template.id] || '📄'}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{template.name}</h2>
                <p className="text-sm text-gray-500 italic mb-3">{template.name_hindi}</p>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">{template.description}</p>
                <Link
                  href={`/draft/${template.id}`}
                  className="inline-flex items-center justify-center w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-full transition"
                >
                  Draft Karo →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
