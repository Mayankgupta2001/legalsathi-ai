'use client';

import { useState } from 'react';

export default function FIRGuide() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: 'FIR Likhwaane Ke Steps',
      hindi: 'एफआईआर दर्ज कराने के कदम',
      description: 'Police station jaao',
      details: [
        'Qareeb ke police station mein jao',
        'Station house officer (SHO) ya constable se baat karo',
        'Ya to FIR likha de sakte ho ya dictate kar sakte ho',
      ],
    },
    {
      title: 'FIR Likhwate Waqt',
      hindi: 'एफआईआर दर्ज कराते समय',
      description: 'Ye details dena zaroori hai',
      details: [
        'Pura naam aur address',
        'Kya galat hua - detailed description',
        'Kab hua - exact date and time',
        'Kaise hua - what made you realize this',
        'Kaha hua - exact location',
        'Kisne kiya - accused ke details (pata ho toh)',
      ],
    },
    {
      title: 'FIR Registration',
      hindi: 'एफआईआर पंजीकरण',
      description: 'Police action',
      details: [
        'Police FIR number dega',
        'Aapko copy dedena chahiye (free hai)',
        'Agar copy nahi de toh politely maango',
        'Copy mein signature lena zaroori hai',
      ],
    },
    {
      title: 'Aapke Rights',
      hindi: 'आपके अधिकार',
      description: 'Police station mein',
      details: [
        'FIR likha dena police ka duty hai - option nahi',
        'Aap lawyer ke saath ja sakte ho',
        'Aap video recording bhi kar sakte ho (official)',
        'Agar FIR nahi likhe toh highest officer ko complaint kro',
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border-2 border-orange-400 p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-3xl">📋</span>
        <div>
          <h3 className="text-xl font-bold text-gray-800">FIR Kaise Likhayen</h3>
          <p className="text-sm text-gray-600">एफआईआर दर्ज कराने का तरीका</p>
        </div>
      </div>

      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap font-semibold text-sm transition ${
              activeStep === idx
                ? 'bg-orange-600 text-white'
                : 'bg-white text-orange-600 border border-orange-300 hover:bg-orange-50'
            }`}
          >
            Step {idx + 1}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg p-6 border border-orange-200">
        <div className="mb-4">
          <h4 className="text-lg font-bold text-gray-800">{steps[activeStep].title}</h4>
          <p className="text-sm text-gray-600 italic">{steps[activeStep].hindi}</p>
        </div>

        <p className="text-orange-700 font-semibold mb-4">{steps[activeStep].description}</p>

        <ul className="space-y-3">
          {steps[activeStep].details.map((detail, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-orange-600 font-bold">▪</span>
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded">
        <p className="text-sm text-yellow-900">
          <span className="font-bold">💡 Important:</span> Police ko FIR darna zaroori hay.
          Agar refuse kre, toh complaint likha de aur higher officer ko de de.
        </p>
      </div>
    </div>
  );
}
