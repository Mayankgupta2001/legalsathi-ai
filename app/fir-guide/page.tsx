'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ChatBox from '@/components/ChatBox';

interface Step {
  title: string;
  content: string;
  tip?: string;
}

const steps: Step[] = [
  {
    title: "📍 Sahi Police Station Jaao",
    content: "Jahan crime hua hai us area ka police station. Online FIR bhi ho sakti hai kuch states mein.",
    tip: "Apne saath ek trusted person le jaao"
  },
  {
    title: "📝 Written Complaint Likho",
    content: "Clearly likho:\n• Kya hua (incident details)\n• Kab hua (date, time)\n• Kahan hua (exact location)\n• Kaun involved tha (names/descriptions)\n• Witnesses kaun hain",
    tip: "Complaint ki copy apne paas rakho"
  },
  {
    title: "⚖️ Apne Rights Jaano",
    content: "Police MUST:\n✅ FIR register karni hi hogi\n✅ FIR ki copy FREE deni hogi\n✅ FIR number dena hoga\n\nPolice CANNOT:\n❌ FIR refuse nahi kar sakti\n❌ Aapko bina reason detain nahi kar sakti\n❌ Aapko intimidate nahi kar sakti"
  },
  {
    title: "📋 FIR Copy Lo",
    content: "FIR register hone ke baad:\n• Free copy maango - ye aapka haq hai\n• FIR number note karo\n• SP/DSP ko complaint kar sakte ho agar police refuse kare"
  },
  {
    title: "🚫 Agar Police FIR Refuse Kare",
    content: "Ye options hain:\n1. SP (Superintendent of Police) ko written complaint do\n2. Magistrate ke paas Section 156(3) ke under jaao\n3. State Human Rights Commission mein complaint karo\n4. Online: pgportal.gov.in pe complaint",
    tip: "Sab kuch likhit mein rakho"
  },
  {
    title: "💻 Online FIR Options",
    content: "Kuch crimes mein online FIR:\n• Cyber crime: cybercrime.gov.in\n• UP: upcop.up.gov.in\n• Delhi: delhipolice.gov.in\n• Maharashtra: mahapolice.gov.in\nCheck apne state ki police website"
  },
  {
    title: "📱 Important Documents",
    content: "Saath le jaao:\n📄 Aadhar Card / ID Proof\n📸 Incident ke photos/videos (agar hain)\n👥 Witness contact numbers\n📝 Apni written complaint ki copy\n💊 Medical reports (agar injury ho)"
  },
  {
    title: "🏛️ Free Legal Help",
    content: "Agar lawyer chahiye:\n• NALSA (National Legal Aid): 15100\n• District Legal Aid Authority free help deti hai\n• Income limit ke andar hain toh free lawyer milega\n• Women aur SC/ST ke liye special provisions"
  }
];

export default function FIRGuidePage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
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
            <span className="hidden sm:inline">Cyber Crime: <span className="text-yellow-200">1930</span></span>
          </div>
        </div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-800 mb-4 leading-tight">
            🚔 FIR Guide - Apna Haq Jaano
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            FIR darz karana aapka kanuni haq hai. Police refuse nahi kar sakti!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-red-100 border border-red-400 rounded-full px-4 py-2">
              <span className="text-sm font-semibold text-red-800">
                ⚖️ IPC Section 154
              </span>
            </div>
            <div className="bg-green-100 border border-green-400 rounded-full px-4 py-2">
              <span className="text-sm font-semibold text-green-800">
                🆓 FIR Filing is FREE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Step-by-Step FIR Guide</h2>
          <p className="text-center text-gray-600 mb-10">
            8 simple steps mein FIR filing ka pura process
          </p>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full px-6 py-4 text-left flex items-center gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 flex-1">{step.title}</h3>
                  <span className="text-gray-400 text-xl">
                    {activeStep === index ? '−' : '+'}
                  </span>
                </button>

                {activeStep === index && (
                  <div className="px-6 pb-6">
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-gray-800 whitespace-pre-line leading-relaxed">{step.content}</p>
                    </div>

                    {step.tip && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 text-lg">💡</span>
                          <div>
                            <p className="font-semibold text-green-800 mb-1">Pro Tip</p>
                            <p className="text-green-700">{step.tip}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {index === 7 && (
                      <div className="mt-4">
                        <a
                          href="https://nalsa.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                        >
                          NALSA Website →
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference Card */}
      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-green-500 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">⚡ FIR Quick Reference</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🆓</div>
                <h3 className="font-bold text-gray-800 mb-1">FREE</h3>
                <p className="text-sm text-gray-600">FIR filing cost</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🕐</div>
                <h3 className="font-bold text-gray-800 mb-1">24/7</h3>
                <p className="text-sm text-gray-600">Police station open</p>
              </div>
              <div>
                <div className="text-3xl mb-2">✅</div>
                <h3 className="font-bold text-gray-800 mb-1">MUST</h3>
                <p className="text-sm text-gray-600">Police register karne par</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚖️</div>
                <h3 className="font-bold text-gray-800 mb-1">RIGHT</h3>
                <p className="text-sm text-gray-600">Aapka kanuni haq</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              🤖 FIR ke baare mein AI Se Poochho
            </h2>
            <p className="text-gray-600">
              FIR filing ke baare mein koi bhi sawaal pooch sakte hain
            </p>
          </div>
          <ChatBox category="police-fir" categoryName="FIR & Police Rights" />
        </div>
      </section>
    </div>
  );
}