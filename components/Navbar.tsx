'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-green-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚖️</span>
            <span className="text-xl font-bold text-green-800">LegalSathi AI</span>
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="#help" className="text-gray-700 hover:text-green-700 font-medium transition">
              Legal Help
            </Link>
            <Link href="/fir-guide" className="text-red-700 hover:text-red-800 font-medium transition">
              FIR Guide 🚔
            </Link>
            <Link href="#documents" className="text-gray-700 hover:text-green-700 font-medium transition">
              Documents
            </Link>
            <Link href="/blog" className="text-indigo-700 hover:text-indigo-800 font-medium transition">
              Blog 📚
            </Link>
            <Link href="#emergency" className="text-gray-700 hover:text-green-700 font-medium transition">
              Emergency
            </Link>
          </div>

          <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-300">
            <span className="text-sm font-semibold text-green-700">Free & Secure 🔒</span>
          </div>
        </div>
      </div>
    </nav>
  );
}