'use client';

import { useState } from 'react';

interface Props {
  categoryName: string;
  keyRights: string[];
}

export default function RightsChecker({ categoryName, keyRights }: Props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const rightDescriptions: Record<string, string> = {
    'Right to Refund within 30 days':
      'Agar product defective hai ya description se alag hai, toh 30 din ke andar refund le sakte ho.',
    'Consumer Forum mein complaint free hai':
      'Consumer Forum mein complaint karna bilkul free hai. Kisi lawyer ki zaroorat nahi.',
    'Right to information (RTI)':
      'Kisi bhi government department se aap information maang sakte ho bilkul free mein.',
    'Free legal aid (if income < 2 lakh/year)':
      'Agar income kam hai, toh state legal services free mein case lehengi.',
    'Protection from harassment':
      'Employer ya landlord aapko harass nahi kar sakte. Iska violation illegal hai.',
    'Minimum wage guaranteed':
      'Government ne minimum wage set kiya hai jo employer ko dena hi hoga.',
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-green-300 p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-3xl">✨</span>
        <h3 className="text-xl font-bold text-gray-800">Aapke Legal Rights</h3>
      </div>

      <p className="text-sm text-gray-700 mb-4">
        {categoryName} ke andar aapke ye rights hain:
      </p>

      <div className="space-y-2">
        {keyRights.map((right, index) => (
          <div key={index} className="border border-green-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full flex items-center gap-3 p-4 hover:bg-green-100 transition text-left"
            >
              <span className="text-lg">
                {expandedIndex === index ? '▼' : '▶'}
              </span>
              <span className="font-semibold text-gray-800">{right}</span>
            </button>

            {expandedIndex === index && (
              <div className="px-4 pb-4 pt-0 bg-white border-t border-green-200">
                <p className="text-sm text-gray-700">
                  {rightDescriptions[right] || 'Ye aapka legal adhikaar hai.'}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
        <p className="text-sm text-blue-900">
          <span className="font-bold">💡 Yaad rakho:</span> Ye rights aapke hain, chahey aapke
          paas paise ho ya na ho. Inhe use karne mein koi sharm nahi hai!
        </p>
      </div>
    </div>
  );
}
