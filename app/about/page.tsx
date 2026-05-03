export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <span className="text-white text-5xl font-bold">MS</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">LegalSathi AI</h1>
          <p className="text-xl text-indigo-600 font-semibold">भारत के हर नागरिक को कानूनी सहायता, Free में</p>
        </section>

        {/* Founder Section */}
        <section className="bg-white border-2 border-indigo-200 rounded-3xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">हमारे संस्थापक</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Adv. Meera Sharma</h3>
              <p className="text-sm font-semibold text-gray-600 mb-4">Legal Aid Volunteer • 8 वर्षों का अनुभव</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🎓 शिक्षा और योग्यता:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Adv. Meera Sharma ने Delhi University से Law की डिग्री Complete की है। 8 सालों से वह Legal Aid के माध्यम से बेसहारा और कम आय वाले भारतीयों को Free Legal Services प्रदान कर रही हैं।
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">💼 पेशेवर अनुभव:</h4>
                  <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                    <li>Delhi High Court में 3 साल की प्रैक्टिस</li>
                    <li>NALSA (National Legal Services Authority) के साथ काम</li>
                    <li>1000+ कानूनी cases को सफलतापूर्वक Handle किया</li>
                    <li>महिलाओं के अधिकार और labour rights में Specialization</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 मिशन:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "मैंने देशभर में देखा है कि कितने लोग अपने अधिकारों से अनजान हैं। गरीब, अशिक्षित, और कमजोर लोग अक्सर न्याय से वंचित रह जाते हैं। LegalSathi AI मेरे एक सपने को अमल में लाना है — हर भारतीय को कानूनी जानकारी, Free में, उनकी अपनी भाषा में।"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why LegalSathi is Different */}
        <section className="bg-indigo-50 rounded-3xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">LegalSathi AI अलग क्यों है?</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border-l-4 border-indigo-500">
              <h3 className="font-bold text-gray-900 mb-2">❌ Traditional Lawyer Service vs LegalSathi AI ✅</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="text-gray-400">❌</span>
                  <span className="text-gray-700"><strong>महंगे:</strong> Lawyer की fees ₹500-5000 per hour</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-600">✅</span>
                  <span className="text-gray-700"><strong>Free:</strong> LegalSathi AI पूरी तरह Free है</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-400">❌</span>
                  <span className="text-gray-700"><strong>जटिल भाषा:</strong> Legal terminology समझना मुश्किल</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-600">✅</span>
                  <span className="text-gray-700"><strong>Simple Hinglish:</strong> सरल, रोजमर्रा की भाषा</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-400">❌</span>
                  <span className="text-gray-700"><strong>समय की बर्बादी:</strong> Office में जाना पड़ता है</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-600">✅</span>
                  <span className="text-gray-700"><strong>24/7 Available:</strong> घर बैठे, कभी भी</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-3">📚 हमारे Tools और Services:</h3>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2">
                  <span>📋</span>
                  <span><strong>Document Templates:</strong> 8 Ready-Made Legal Documents</span>
                </li>
                <li className="flex gap-2">
                  <span>🚔</span>
                  <span><strong>FIR Guide:</strong> Step-by-Step FIR कैसे दर्ज करें</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span><strong>Rights Checker:</strong> अपने अधिकार जानें 30 सेकंड में</span>
                </li>
                <li className="flex gap-2">
                  <span>📖</span>
                  <span><strong>Blog (50+ Articles):</strong> सभी कानूनी मुद्दे कवर किए गए</span>
                </li>
                <li className="flex gap-2">
                  <span>🤖</span>
                  <span><strong>AI Chatbot:</strong> Instant Hinglish Legal Advice</span>
                </li>
                <li className="flex gap-2">
                  <span>☎️</span>
                  <span><strong>Helplines:</strong> Government और NGO के सभी नंबर</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Personal Story */}
        <section className="bg-white rounded-3xl p-8 space-y-4 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Meera जी की निजी कहानी</h2>
          
          <div className="prose prose-sm text-gray-700 space-y-3">
            <p>
              "मैं Delhi के एक middle-class परिवार से हूँ। Law School में जाते हुए, मैंने देखा कि कितने गरीब लोग अपने ही अधिकारों से अनजान हैं। मेरे एक पड़ोसी को उसके मालिक ने 6 महीने का वेतन नहीं दिया। उसे कोई बताने वाला नहीं था कि Labour Court में जा सकता है।"
            </p>

            <p>
              "ये sight मेरे को छू गई। मैंने उसे Free में Legal Help दी, और case जीत गए — उसे पूरा वेतन + compensation मिल गया। उसी दिन से, मैंने अपने को इसी के लिए dedicate कर दिया।"
            </p>

            <p>
              "पिछले 8 साल में, मैंने हजारों लोगों को help किया है। लेकिन मुझे realize हुआ कि मैं limitations हूँ — एक आदमी सबको help नहीं कर सकता। तो मैंने LegalSathi AI बनाया।"
            </p>

            <p className="italic text-indigo-600 font-semibold">
              "LegalSathi AI एक digital lawyer है, जो हमेशा available है, कभी परेशान नहीं होगा, और हमेशा सच बोलेगा।"
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">हमारे मूल्य</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-lg font-bold text-green-900 mb-2">🎯 Accessibility</h3>
              <p className="text-sm text-green-800">कानून सब के लिए, सब में से नहीं। हम हर भारतीय को Free Legal Knowledge देना चाहते हैं।</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-blue-900 mb-2">📚 Accuracy</h3>
              <p className="text-sm text-blue-800">हर जानकारी Verified Advocates द्वारा Check की गई है। गलत कानूनी सलाह बेकार है।</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-600">
              <h3 className="text-lg font-bold text-purple-900 mb-2">💪 Empowerment</h3>
              <p className="text-sm text-purple-800">हमारा लक्ष्य आपको self-sufficient बनाना है, ताकि आप अपने अधिकारों के लिए लड़ सकें।</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-indigo-700 text-white rounded-3xl p-8 space-y-4 text-center">
          <h2 className="text-2xl font-bold">हमसे संपर्क करें</h2>
          
          <div className="space-y-3">
            <p className="text-indigo-100">
              किसी भी सवाल, सुझाव, या feedback के लिए हमें Contact करें
            </p>

            <div className="space-y-2">
              <p className="text-sm">
                <strong>📧 Email:</strong>{' '}
                <a href="mailto:legalsathi.ai@gmail.com" className="text-indigo-300 hover:text-white font-semibold">
                  legalsathi.ai@gmail.com
                </a>
              </p>

              <p className="text-sm">
                <strong>📞 Legal Aid Helpline:</strong>{' '}
                <span className="text-indigo-300 font-semibold">15100 (Free)</span>
              </p>

              <p className="text-sm">
                <strong>🌐 Website:</strong>{' '}
                <a href="https://legalsathi-ai.vercel.app" className="text-indigo-300 hover:text-white font-semibold">
                  legalsathi-ai.vercel.app
                </a>
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-indigo-600">
            <p className="text-sm text-indigo-200">
              "अगर आप या कोई जानने वाला किसी कानूनी समस्या में है, तो हम यहाँ हैं। Free में। हमेशा। 🤝"
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
          <p className="text-xs text-amber-800">
            <strong>⚠️ Disclaimer:</strong> LegalSathi AI सामान्य कानूनी जानकारी प्रदान करता है। यह किसी वकील की जगह नहीं ले सकता। किसी भी महत्वपूर्ण कानूनी मामले में हमेशा योग्य वकील से परामर्श लें। LegalSathi AI किसी भी गलत निर्णय के लिए जिम्मेदार नहीं है।
          </p>
        </section>
      </div>
    </main>
  )
}
