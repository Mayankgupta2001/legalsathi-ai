'use client';

import Link from 'next/link';

export default function FIRGuide() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full bg-white border-2 border-red-200 rounded-3xl p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete FIR Guide ke liye</h2>
        <p className="text-gray-600 mb-8">
          Step-by-step FIR filing guide aur apne rights jaanne ke liye neeche click karein.
        </p>
        <Link
          href="/fir-guide"
          className="inline-flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-2xl transition"
        >
          FIR Guide Dekho →
        </Link>
      </div>
    </div>
  );
}
