'use client';

import Link from 'next/link';

export default function DocumentDrafter() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full bg-white border-2 border-green-200 rounded-3xl p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Document draft karne ke liye yahan click karo</h2>
        <p className="text-gray-600 mb-8">
          Aapke legal document ke liye free draft page par pahunchne ke liye neeche click karein.
        </p>
        <Link
          href="/draft"
          className="inline-flex items-center justify-center w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-2xl transition"
        >
          Draft Page Kholo
        </Link>
      </div>
    </div>
  );
}
