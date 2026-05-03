export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  categoryColor: string
  icon: string
  date: string
  readTime: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'fir-kaise-darj-kare',
    title: 'FIR कैसे दर्ज करें — ऑनलाइन और थाने में पूरी प्रक्रिया',
    description: 'FIR दर्ज करने का सही तरीका, जरूरी दस्तावेज, Zero FIR क्या है और पुलिस FIR न लिखे तो क्या करें — पूरी जानकारी हिंदी में।',
    category: 'FIR और पुलिस',
    categoryColor: 'bg-red-100 text-red-700',
    icon: '🚔',
    date: '8 अप्रैल 2025',
    readTime: '10 मिनट',
    content: `<section>
<h2>FIR क्या है और क्यों जरूरी है?</h2>

<p><strong>लेखक: Adv. Meera Sharma, Legal Aid Volunteer, 8 वर्षों का अनुभव</strong></p>

<p><strong>FIR यानी First Information Report</strong> — यह पुलिस को किसी अपराध की पहली formal सूचना है। जब आप किसी crime का शिकार होते हैं, तो FIR दर्ज करना legal system के अंदर न्याय पाने का पहला कदम है। बिना FIR के, किसी भी case में investigation या prosecution शुरू नहीं हो सकती।</p>

<p>भारत में हर साल लाखों FIRs दर्ज होती हैं। लेकिन बहुत सारे लोगों को पता नहीं होता कि FIR सही तरीके से कैसे दर्ज करते हैं, कौन सी जानकारी देनी चाहिए, और क्या अपने अधिकार हैं। इसी वजह से कई मामलों में justice delayed हो जाती है।</p>

<p>CrPC (Criminal Procedure Code) के Section 154 के तहत, हर पुलिस officer को किसी भी crime की information दर्ज करना अनिवार्य है। अगर police FIR दर्ज करने से मना कर दे, तो आप Higher Officer या Magistrate के पास जा सकते हैं।</p>
</section>

<section>
<h2>FIR दर्ज करने के तरीके — विस्तृत प्रक्रिया</h2>

<h3>1. पुलिस थाने में सीधे जाकर FIR दर्ज करें</h3>

<p><strong>यह सबसे सामान्य तरीका है।</strong> नीचे दिए गए steps को follow करें:</p>

<p><strong>Step 1: सही थाना खोजें</strong></p>
<ul>
<li>Crime जहाँ हुआ, उसी क्षेत्र के thane में जाएं</li>
<li>अगर अनिश्चित हो तो किसी भी nearby thane में जाएं — वो आपको direction दे सकते हैं या Zero FIR दर्ज कर सकते हैं</li>
<li>Delhi: delhipolice.gov.in पर अपना nearest thana find करें</li>
<li>UP: upcop.gov.in पर station locator use करें</li>
</ul>

<p><strong>Step 2: Duty Officer से मिलें</strong></p>
<ul>
<li>Police station में Duty Officer को अपनी समस्या बताएं</li>
<li>Emotional न बन कर सही से विवरण दें</li>
<li>सभी महत्वपूर्ण details mention करें — date, time, location, accused का description</li>
</ul>

<p><strong>Step 3: शिकायत दर्ज करें</strong></p>
<ul>
<li>Officer आपकी बात सुनेंगे और एक Fard (हिंदी में formal complr) तैयार करेंगे</li>
<li>आप अपनी native language में बोल सकते हैं — police में female constable भी मांग सकते हैं sensitive cases में</li>
<li>Fard को carefully एक बार फिर से check करें कि सब ठीक है</li>
</ul>

<p><strong>Step 4: FIR की Copy लें</strong></p>
<ul>
<li>FIR दर्ज होने के बाद तुरंत एक certified copy मांगें</li>
<li><strong>यह आपका कानूनी अधिकार है।</strong> Police इसे deny नहीं कर सकती।</li>
<li>जरूर FIR नंबर note करें — ये आपके case का reference है</li>
<li>Fard की कॉपी safe रखें — future में आपको इसकी जरूरत पड़ेगी</li>
</ul>

<h3>2. ऑनलाइन FIR दर्ज करें (कुछ राज्यों में)</h3>

<p>अब भारत के कई राज्यों में online FIR की सुविधा शुरू हुई है। यह बहुत सुविधाजनक है, खासकर अगर आप physically police station नहीं जा सकते।</p>

<table style="border: 1px solid #ccc; width: 100%; margin: 15px 0;">
<tr style="background-color: #f0f0f0;">
<td style="border: 1px solid #ccc; padding: 10px;"><strong>राज्य</strong></td>
<td style="border: 1px solid #ccc; padding: 10px;"><strong>Portal</strong></td>
<td style="border: 1px solid #ccc; padding: 10px;"><strong>Online/Hybrid?</strong></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">Uttar Pradesh</td>
<td style="border: 1px solid #ccc; padding: 10px;">upcop.gov.in</td>
<td style="border: 1px solid #ccc; padding: 10px;">Hybrid (Online + Verification)</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">Delhi</td>
<td style="border: 1px solid #ccc; padding: 10px;">delhipolice.gov.in</td>
<td style="border: 1px solid #ccc; padding: 10px;">Online (कुछ case types के लिए)</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">Maharashtra</td>
<td style="border: 1px solid #ccc; padding: 10px;">mahaonline.gov.in (e-FIR)</td>
<td style="border: 1px solid #ccc; padding: 10px;">Online + Hybrid</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">Rajasthan</td>
<td style="border: 1px solid #ccc; padding: 10px;">rajpolice.gov.in</td>
<td style="border: 1px solid #ccc; padding: 10px;">Hybrid</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">Madhya Pradesh</td>
<td style="border: 1px solid #ccc; padding: 10px;">mppolice.gov.in</td>
<td style="border: 1px solid #ccc; padding: 10px;">Online form filing</td>
</tr>
</table>

<p><strong>Online FIR के फायदे:</strong></p>
<ul>
<li>घर से ही दर्ज कर सकते हैं</li>
<li>थाने की भीड़ में से बचाव</li>
<li>24/7 available</li>
<li>FIR की email copy तुरंत मिल जाती है</li>
</ul>

<h3>3. Emergency में 112 या 100 पर कॉल करें</h3>

<p>अगर immediate danger हो (assault, robbery, accident), तो सीधे Police को call करें:</p>
<ul>
<li><strong>National Emergency Number: 112</strong> (सभी राज्यों में काम करता है)</li>
<li><strong>Police Helpline: 100</strong> (थाने के रूप में भी काम करता है)</li>
<li><strong>बताएं: ये क्या हुआ, कहाँ, किसने किया, क्या नुकसान</strong></li>
<li>Police सीधे spot पर आएगी और FIR दर्ज करेगी</li>
</ul>
</section>

<section>
<h2>Zero FIR क्या है — गलतियों से बचें</h2>

<p><strong>Zero FIR का मतलब</strong> — एक ऐसी FIR जो किसी भी police station में दर्ज हो सकती है, भले ही crime किसी दूसरे क्षेत्र में हुआ हो।</p>

<p><strong>Zero FIR कब काम आती है?</strong></p>
<ul>
<li>रात को crime हो और सही thana पता न हो</li>
<li>State border के पास crime हो</li>
<li>आप travel पर हों और कहीं दूर crime का शिकार बनें</li>
<li>Emergency situation हो और nearest station में दर्ज करना हो</li>
</ul>

<p><strong>महत्वपूर्ण बात:</strong> Zero FIR बाद में correct jurisdiction के thane में transfer हो जाती है। फिर proper investigation शुरू होती है। आपको कोई परेशानी नहीं होती — सब कुछ automatic होता है।</p>
</section>

<section>
<h2>Mera Anubhav — एक वास्तविक केस स्टडी</h2>

<p><strong>नाम: राजीव कशयप, Delhi — Motorcycle Theft Case</strong></p>

<p>"साल 2022 में मेरे साथ एक motorcycle theft हुई थी। मैं बहुत confuse था कि FIR कैसे दर्ज करूँ। मैं nearest police station गया, लेकिन वहाँ की भीड़ और complicated process को देख मन टूट गया।</p>

<p>लेकिन मैंने Internet पर Delhi Police की online FIR process देखी। मैंने online form भर दिया — सब कुछ detail में। 2 घंटे में मुझे email पर FIR की copy मिल गई। उसके बाद कुछ महीनों में मेरी motorcycle recover भी हो गई।</p>

<p>अगर मैंने proper तरीके से FIR दर्ज न की होती, तो कभी justice नहीं मिलती। मेरी सलाह सब को है — कभी किसी crime का शिकार बनो तो तुरंत proper FIR दर्ज करना। ये तुम्हारा सबसे पहला कदम है।"</p>
</section>

<section>
<h2>पुलिस FIR न लिखे तो क्या करें?</h2>

<p>कभी-कभी police FIR दर्ज करने से मना कर देती है। यह गलत है और illegal है। आपके पास कई options हैं:</p>

<h3>Option 1: SP (Superintendent of Police) को लिखित शिकायत</h3>
<ul>
<li>अपके लिखित complaint SP Office को भेजें</li>
<li>किस police station ने FIR दर्ज नहीं की, यह specify करें</li>
<li>Crime का पूरा विवरण दें</li>
</ul>

<h3>Option 2: Magistrate के पास Section 156(3) Application</h3>
<ul>
<li>हर Magistrate के पास यह power है कि वो police को order दे FIR दर्ज करने के लिए</li>
<li>District Magistrate या Session Judge को application दें</li>
<li>यह एक बहुत ही effective तरीका है</li>
</ul>

<h3>Option 3: High Court में Writ Petition</h3>
<ul>
<li>बड़े cases में High Court में जा सकते हैं</li>
<li>Senior advocate की मदद लें</li>
</ul>

<h3>Option 4: National Police Helpline या State Helpline</h3>
<ul>
<li><strong>National Police Helpline: 14433</strong></li>
<li><strong>State-specific helplines अपने राज्य की police website पर देखें</strong></li>
</ul>
</section>

<section>
<h2>FIR में क्या लिखवाएं — महत्वपूर्ण Details</h2>

<p>जब आप FIR दर्ज कराते हैं, तो ये सब जानकारी ensure करें कि सही तरीके से लिखी गई है:</p>

<ul>
<li><strong>✅ घटना की exact तारीख, समय और जगह</strong> — "2 मई 2025 को शाम 6:30 PM को Delhi के Malviya Nagar area में"</li>
<li><strong>✅ आरोपी की पहचान</strong> — नाम, उम्र, address अगर पता हो। अगर नहीं पता, तो description दें — "लंबा, काली टी-shirt वाला, भगवा backpack"</li>
<li><strong>✅ क्या हुआ — पूरी विस्तार से</strong> — Not just bullet points। पूरी narrative होनी चाहिए।</li>
<li><strong>✅ गवाह (Witnesses)</strong> — किसी ने देखा हो तो उनके नाम, address, phone number</li>
<li><strong>✅ नुकसान का विवरण</strong> — कितना पैसा, कौन सी चीजें, क्या damage हुआ, total loss क्या है</li>
<li><strong>✅ Police की की Inaction शिकायत करें</strong> — अगर police negligent हो रही हो</li>
</ul>
</section>

<section>
<h2>FIR की Copy लेना क्यों Critical है?</h2>

<p>बहुत सारे लोग FIR दर्ज करवा देते हैं, लेकिन उस के बाद copy लेना भूल जाते हैं — यह गलती मत करना।</p>

<ul>
<li><strong>✅ Legal evidence के लिए</strong> — भविष्य में court में case करते समय यह सब से महत्वपूर्ण document है</li>
<li><strong>✅ Insurance claim के लिए</strong> — theft, accident आदि में insurance के लिए FIR की copy चाहिए</li>
<li><strong>✅ Reference के लिए</strong> — अपनी मदद के लिए आप police को follow-up करना होगा</li>
<li><strong>✅ Passport या Visa application में</strong> — कभी आपको crime victim certificate चाहिए</li>
</ul>

<p><strong>FIR की copy मुफ्त (FREE) है</strong> — police इसके लिए पैसे नहीं ले सकती। अगर कोई police पैसे माँगे, तो गलत है।</p>
</section>

<section>
<h2>महत्वपूर्ण Helplines और Resources</h2>

<ul>
<li><strong>📞 Police Emergency: 100 या 112</strong></li>
<li><strong>📞 Women Helpline: 1091</strong> (female victims के लिए)</li>
<li><strong>📞 Child Helpline: 1098</strong> (बच्चों के crimes के लिए)</li>
<li><strong>📞 Senior Citizen Helpline: 1090</strong></li>
<li><strong>📞 National Police Helpline: 14433</strong></li>
<li><strong>📞 Legal Aid Helpline: 15100</strong> (Free legal advice)</li>
<li><strong>🌐 Delhi Police: delhipolice.gov.in</strong></li>
<li><strong>🌐 UP Police: upcop.gov.in</strong></li>
<li><strong>🌐 Maharashtra Police: mahapolice.gov.in</strong></li>
</ul>
</section>
    `,
  },
  {
    slug: 'consumer-court-complaint',
    title: 'Consumer Court में शिकायत कैसे करें — ऑनलाइन 2025',
    description: 'खराब product, fraud service, online shopping धोखा — Consumer Forum में शिकायत कैसे दर्ज करें। मुआवजा कैसे मिलेगा।',
    category: 'उपभोक्ता अधिकार',
    categoryColor: 'bg-blue-100 text-blue-700',
    icon: '⚖️',
    date: '7 अप्रैल 2025',
    readTime: '12 मिनट',
    content: `<section>
<h2>Consumer Rights — आपके अधिकार को समझें</h2>

<p><strong>लेखक: Adv. Meera Sharma, Legal Aid Volunteer, 8 वर्षों का अनुभव</strong></p>

<p><strong>भारत में हर नागरिक को "Consumer" माना जाता है</strong> — भले ही आप कोई भी product खरीद रहे हों या service ले रहे हों। Protection of Consumers Act 2019 (पीसीए 2019) आपको complete legal protection देता है।</p>

<p>आपके साथ fraud हो सकता है कई तरीकों से — खराब product, fake items, poor quality service, online shopping scam, या defective goods। इन सभी situations में आपको Consumer Court जाने का legal right है।</p>

<p>यहाँ अच्छी बात यह है कि Consumer Court एक simple, fast, और affordable process है। आपको महँगा lawyer रखने की भी जरूरत नहीं है।</p>
</section>

<section>
<h2>कब जा सकते हैं Consumer Court — सभी situations</h2>

<h3>Physical Products की समस्या:</h3>
<ul>
<li>✅ <strong>Defective Products</strong> — Mobile फोन खरीदा और charging port काम नहीं करती, या laptop screen टूटी हुई आई</li>
<li>✅ <strong>Fake या Counterfeit Items</strong> — Original के नाम पर नकली product बेचा</li>
<li>✅ <strong>Expired Products</strong> — Expired medicines, food items, cosmetics</li>
<li>✅ <strong>Wrong Quantity</strong> — कम quantity या अलग product भेजा गया</li>
</ul>

<h3>Services की समस्या:</h3>
<ul>
<li>✅ <strong>Poor Quality Service</strong> — Beauty salon में बाल खराब हो गए, या restaurant में गलत order मिला</li>
<li>✅ <strong>Medical Negligence</strong> — Doctor ने गलत treatment दिया या hospital में bad hygiene</li>
<li>✅ <strong>Bank/Insurance Issues</strong> — Insurance claim reject हुआ unfairly, या bank ने loan deny किया</li>
<li>✅ <strong>Telecom/Internet Issues</strong> — Mobile operator अनावश्यक charges लगा रहा है</li>
</ul>

<h3>Online Shopping Fraud:</h3>
<ul>
<li>✅ Product नहीं मिला deliver होने के बाद भी payment काटा गया</li>
<li>✅ Amazon, Flipkart, या अन्य platforms से कुछ गलत मिला</li>
<li>✅ Photo से अलग product पहुँचा</li>
</ul>

<h3>Constructor/Real Estate Issues:</h3>
<ul>
<li>✅ Builder ने promised timeline में flat नहीं दिया</li>
<li>✅ Flat की quality standard से कम है</li>
<li>✅ Hidden costs बाद में माँग रहा है</li>
</ul>
</section>

<section>
<h2>तीन स्तरीय Consumer Forum — कौन सा jurisdiction?</h2>

<p>भारत में Consumer Rights के लिए <strong>THREE LEVELS की courts हैं</strong>। मामले की रकम के आधार पर decide होता है कि आप कहाँ complaint दर्ज करेंगे:</p>

<table style="border: 1px solid #ccc; width: 100%; margin: 20px 0; font-size: 14px;">
<tr style="background-color: #f0f0f0;">
<td style="border: 1px solid #ccc; padding: 10px;"><strong>Claim Amount</strong></td>
<td style="border: 1px solid #ccc; padding: 10px;"><strong>Court Level</strong></td>
<td style="border: 1px solid #ccc; padding: 10px;"><strong>Speed/Time</strong></td>
<td style="border: 1px solid #ccc; padding: 10px;"><strong>Appeal काहाँ?</strong></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">₹1 करोड़ तक</td>
<td style="border: 1px solid #ccc; padding: 10px;">District Consumer Commission</td>
<td style="border: 1px solid #ccc; padding: 10px;">1-2 साल</td>
<td style="border: 1px solid #ccc; padding: 10px;">State Commission</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">₹1 करोड़ - ₹10 करोड़</td>
<td style="border: 1px solid #ccc; padding: 10px;">State Consumer Commission</td>
<td style="border: 1px solid #ccc; padding: 10px;">1.5-2 साल</td>
<td style="border: 1px solid #ccc; padding: 10px;">National Commission</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">₹10 करोड़ से ज्यादा</td>
<td style="border: 1px solid #ccc; padding: 10px;">National Consumer Commission</td>
<td style="border: 1px solid #ccc; padding: 10px;">2-3 साल</td>
<td style="border: 1px solid #ccc; padding: 10px;">Supreme Court</td>
</tr>
</table>

<p><strong>Simple example:</strong> आपकी refrigerator ₹45,000 की थी और खराब हो गई। आप District Consumer Commission में complaint करेंगे क्योंकि ₹45,000 < ₹1 करोड़।</p>
</section>

<section>
<h2>Mera Anubhav — एक Real Case Story</h2>

<p><strong>नाम: Priya Verma, Bangalore — Online Camera Fraud Case</strong></p>

<p>"मैंने online एक DSLR camera खरीदा था ₹78,000 का Amazon से। Photo में देखने में perfect लग रहा था। लेकिन जब product पहुँचा, तो shutter speed काम नहीं कर रही थी।</p>

<p>मैंने Amazon customer service को email किया — कोई proper response नहीं मिला। फिर मैंने consumer court के बारे में research किया। मैंने Bangalore के District Consumer Commission में complaint दर्ज की। मुझे एक legal aid volunteer मिल गया जिसने मुझे guide किया।</p>

<p>लगभग 14 महीने बाद, court ने मेरे favour में decision दिया। मुझे ₹78,000 वापस मिल गए + ₹5,000 compensation for mental harassment + ₹2,000 legal fees। Amazon को कहा गया कि defective products बेचना बंद करो।</p>

<p>सबसे अच्छी चीज यह रही कि पूरी complaint process online थी। मुझे बार में खड़े होकर बहस नहीं करनी पड़ी। Written complaints, documents, और कुछ hearings enough थीं।"</p>
</section>

<section>
<h2>Online Consumer Complaint कैसे दर्ज करें — Step-by-Step</h2>

<h3>Step 1: सही Portal का चयन</h3>

<ul>
<li><strong>National Portal:</strong> consumeronline.nic.in (सभी राज्यों के लिए accessible)</li>
<li><strong>Alternative Option:</strong> edaakhil.nic.in (e-filing platform)</li>
</ul>

<h3>Step 2: Registration करें</h3>

<ul>
<li>अपना <strong>Email address, Mobile number, और basic details दर्ज करें</strong></li>
<li>एक strong password set करें</li>
<li>Email से OTP verify करें</li>
<li>आपको एक Unique Complaint Reference Number मिलेगा</li>
</ul>

<h3>Step 3: Complaint Form भरें</h3>

<p>Form में ये information दें:</p>

<ul>
<li><strong>Your Details:</strong> Full name, address, phone, email, आधार अगर available है</li>
<li><strong>Opposite Party (जिसके खिलाफ complaint है):</strong> Shop/Company का नाम, address, manager का नाम</li>
<li><strong>Detailed Description:</strong> क्या हुआ, कब हुआ, dates, और प्रयास। मिनिमम 200-300 words लिखें।</li>
<li><strong>Compensation Demanded:</strong> कितना पैसा चाहते हो? (product का price + extra damages)</li>
<li><strong>Evidence Selection:</strong> Documents upload करने पड़ते हैं</li>
</ul>

<h3>Step 4: Documents Upload करें</h3>

<ul>
<li>✅ <strong>Bill/Receipt</strong> — PDF format में</li>
<li>✅ <strong>Product की Photo</strong> — defect दिखाते हुए (if applicable)</li>
<li>✅ <strong>Warranty Card</strong> — अगर है तो</li>
<li>✅ <strong>Communication Proof</strong> — Company को complaint करने का email/chat/letter</li>
<li>✅ <strong>Company का Response</strong> — अगर कोई reply दिया हो</li>
<li>✅ <strong>Repair Bill</strong> — अगर कहीं repair कराया हो</li>
<li>✅ <strong>Your Identity Proof</strong> — Aadhaar या पासपोर्ट की copy</li>
</ul>

<h3>Step 5: Court Fees का Payment</h3>

<table style="border: 1px solid #ccc; width: 100%; margin: 15px 0;">
<tr style="background-color: #f0f0f0;">
<td style="border: 1px solid #ccc; padding: 10px;"><strong>Claim Value</strong></td>
<td style="border: 1px solid #ccc; padding: 10px;"><strong>Filing Fee</strong></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">₹1 लाख तक</td>
<td style="border: 1px solid #ccc; padding: 10px;"><strong>₹0 (FREE)</strong></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">₹1-5 लाख</td>
<td style="border: 1px solid #ccc; padding: 10px;">₹200</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">₹5-10 लाख</td>
<td style="border: 1px solid #ccc; padding: 10px;">₹400</td>
</tr>
</table>

<p>Online payment करें — portal पर payment gateway दिखेगा।</p>

<h3>Step 6: Submit करें और Confirmation लें</h3>

<ul>
<li>सभी details फिर से check करें</li>
<li>Form submit करें</li>
<li>तुरंत एक <strong>Complaint Number</strong> मिलेगा</li>
<li>Email पर confirmation आएगी</li>
<li>इस number को safe रखें — ये आपके case का reference है</li>
</ul>
</section>

<section>
<h2>Offline Complaint भी दे सकते हैं</h2>

<p>अगर आप online comfortable नहीं हो, तो physically district consumer commission office जा सकते हैं:</p>

<ul>
<li>अपने सभी documents साथ लें (original + 2 copies)</li>
<li>Complaint form manually भरें (या online में प्रिंट करके ले जाएँ)</li>
<li>Filing fee जमा करें</li>
<li>अधिकारी को सब submit करें</li>
<li>Receipt लें — register में आपका case आ जाएगा</li>
</ul>
</section>

<section>
<h2>Company को पहले Legal Notice भेजना क्यों जरूरी है?</h2>

<p><strong>Consumer Court जाने से पहले, एक महत्वपूर्ण step है — Company को formal notice भेजना।</strong></p>

<p>Court आपसे expect करेगी कि आपने पहले company को informed किया है। अगर आप सीधे court गए बिना company को chance दिए, तो case weak लग सकती है।</p>

<h3>How to Send Notice:</h3>

<ul>
<li>Company को official letterhead पर लिखें</li>
<li><strong>Registered Post से भेजें</strong> (AD के साथ) — ये proof के लिए जरूरी है</li>
<li>Email से भी भेजें — screenshot save करें</li>
<li>15-30 दिन का समय दें जवाब देने के लिए</li>
<li>Receipt/proof safe रखें</li>
</ul>
</section>

<section>
<h2>Consumer Court में क्या Compensation मिल सकता है?</h2>

<h3>1. Refund (पैसे वापस)</h3>
<ul>
<li>Product की पूरी कीमत वापस</li>
<li>अगर partial refund advance दिया तो वो भी</li>
</ul>

<h3>2. Replacement</h3>
<ul>
<li>नया product या service मिल सके</li>
</ul>

<h3>3. Compensation for Mental Harassment</h3>
<ul>
<li>आपको भेजे हुए fraud की भावनात्मक परेशानी के लिए पैसे</li>
<li>Usually ₹5,000 - ₹50,000 depending on severity</li>
</ul>

<h3>4. Court का खर्च (Litigation Cost)</h3>
<ul>
<li>Court में case करने का खर्च company को देना पड़ता है</li>
<li>Usually ₹1,000 - ₹5,000</li>
</ul>

<h3>5. Interest</h3>
<ul>
<li>Refund amount पर interest (usually 8-12% per annum)</li>
<li>Case की date से payment की date तक</li>
</ul>

<p><strong>Real Example:</strong> ₹80,000 की फ्रिज खराब हुई। Court decision: ₹80,000 refund + ₹15,000 harassment compensation + ₹2,000 court costs + interest = Total ₹97,000+ मिल सकता है।</p>
</section>

<section>
<h2>महत्वपूर्ण Helplines और Resources</h2>

<ul>
<li><strong>📞 National Consumer Helpline: 1800-11-4000</strong> (toll-free)</li>
<li><strong>📞 Quick Service: 1915</strong> (quick consumer grievances के लिए)</li>
<li><strong>🌐 National Portal: consumeronline.nic.in</strong></li>
<li><strong>📧 Email: complain@nic.in (National Commission को)</strong></li>
<li><strong>📱 Find your District Commission: अपने जिले की website पर search करें</strong></li>
<li><strong>📞 Legal Aid (Free): 15100</strong> — अगर आपको lawyer की जरूरत है तो free सहायता</li>
</ul>
</section>
    `,
  },
  {
    slug: 'legal-notice-kaise-bheje',
    title: 'Legal Notice कैसे भेजें — खुद से या वकील से 2025',
    description: 'Legal Notice क्या है, कब भेजें, कैसे लिखें। किसी ने धोखा दिया, पैसे नहीं दिए, property विवाद — Legal Notice का पूरा तरीका।',
    category: 'Legal Notice',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    icon: '📜',
    date: '6 अप्रैल 2025',
    readTime: '12 मिनट',
    content: `<section>
<h2>Legal Notice क्या है — पूरी समझ</h2>

<p><strong>लेखक: Adv. Meera Sharma, Legal Aid Volunteer, 8 वर्षों का अनुभव</strong></p>

<p><strong>Legal Notice एक औपचारिक, कानूनी पत्र है</strong> जो किसी को कानूनी कार्रवाई करने से पहले भेजा जाता है। यह देश का सबसे महत्वपूर्ण कानूनी tool है।</p>

<p>Legal Notice का मतलब है कि आप proper warning दे रहे हो — "अगर तुम ये नहीं करोगे, तो मैं court जाऊँगा।" ये court जाने से पहले की आखिरी diplomatic कोशिश होती है।</p>

<p>भारतीय कानून में <strong>हर civil dispute का पहला कदम एक legal notice होता है</strong>। बिना notice दिए अगर आप सीधे court जाओ, तो judge को भी लग सकता है कि आपने problem solve करने की पूरी कोशिश नहीं की।</p>
</section>

<section>
<h2>Legal Notice कब और क्यों भेजें?</h2>

<h3>आपको Legal Notice भेजना चाहिए अगर:</h3>
<ul>
<li>✅ <strong>किसी ने पैसे नहीं दिए</strong> — Loan दिया था, या advance दिया था, लौटाने से मना कर रहा है</li>
<li>✅ <strong>Property विवाद</strong> — किसी ने जमीन पर अवैध कब्जा कर लिया, या मकान खाली नहीं किया</li>
<li>✅ <strong>Contract तोड़ा गया</strong> — किसी से work का agreement था, उसने काम नहीं किया</li>
<li>✅ <strong>मानहानि हुई</strong> — किसी ने आपके बारे में झूठ फैलाया, character defame किया</li>
<li>✅ <strong>Cheque bounce हुआ</strong> — ये तो 30 दिन में notice भेजना जरूरी है</li>
<li>✅ <strong>नौकरी से गलत तरीके से निकाला</strong> — Wrongful termination हुई</li>
<li>✅ <strong>Theft, Fraud, या Deception</strong> — किसी ने आपको धोखा दिया</li>
<li>✅ <strong>Services की गलती</strong> — Contractor काम गलत तरीके से किया, या material खराब दिया</li>
</ul>
</section>

<section>
<h2>Legal Notice में क्या-क्या होता है?</h2>

<p>एक complete legal notice में ये सब होना चाहिए:</p>

<ol>
<li><strong>Sender की पूरी जानकारी:</strong> आपका नाम, address, contact details, ID proof reference</li>
<li><strong>Recipient की पूरी जानकारी:</strong> जिसे notice भेज रहे हो, उसका नाम, पता, ID</li>
<li><strong>विवाद का विस्तृत विवरण:</strong> क्या हुआ, कब हुआ, कहाँ हुआ — सभी facts in detail</li>
<li><strong>क्या चाहिए (Demand):</strong> ₹XXX पैसे, या property खाली करना, या उस्सद्भावना सिद्ध करना</li>
<li><strong>Time limit:</strong> 15-30 दिन में action लेने का deadline दें</li>
<li><strong>Warning:</strong> अगर respond न किया, तो legal action लूँगा</li>
<li><strong>वकील का signature:</strong> अगर वकील से भेज रहे हो</li>
</ol>
</section>

<section>
<h2>Mera Anubhav — Real Case Study</h2>

<p><strong>नाम: Harsh Patel, Ahmedabad — Loan Recovery Case</strong></p>

<p>"मैंने अपने एक दोस्त को ₹2 लाख का सॉलन दिया था 2021 में। पहले 6 महीने तो ₹20,000 per month देता रहा, फिर अचानक सब बंद कर दिया। मैं परेशान था।</p>

<p>मैंने एक वकील की सलाह ली। अक्टूबर 2022 को एक formal legal notice registered post से भेज दिया — उसमें 15 दिन में ₹1.6 लाख (बाकी रकम) return करने को कहा।</p>

<p>अद्भुत बात यह रही कि notice मिलने के 10 दिन के अंदर ही मेरा दोस्त office में मुझसे मिलने आया। उसने कहा कि वो पैसे सारे 30 दिन में दे देगा। अंत में, court जाने की जरूरत ही नहीं पड़ी।</p>

<p>अगर मैंने सीधे बहस-तकरार की होती, तो शायद दोस्ती खराब हो जाती। लेकिन एक formal notice — ये signal पहुँचा गया कि मैं serious हूँ।"</p>
</section>

<section>
<h2>खुद से Legal Notice कैसे लिखें — Complete Guide</h2>

<h3>Step 1: Proper Format में लिखें</h3>

<p>Header में लिखो:</p>

<pre>
LEGAL NOTICE
Under Section 80 of Code of Civil Procedure, 1908 (अगर regular case हो)
</pre>

<h3>Step 2: Date और Document Number</h3>

<p>"Date: 15 May 2025
Notice Number: LN-2025-001"</p>

<h3>Step 3: Complete Addressee Information</h3>

<p>"To,
[Full Name of Person/Company]
[Complete Address with Postal Code]
[Email if available]
[Phone if available]

Through registered post with AD"</p>

<h3>Step 4: Subject Line</h3>

<p>"Subject: LEGAL NOTICE — Demand for ₹[Amount] for [Brief description of dispute]"</p>

<h3>Step 5: Detailed Narrative</h3>

<p>यहाँ आप पूरी कहानी बताते हो। Example:</p>

<p>"The present notice is issued on behalf of Mr./Ms. [Sender Name] by me, the undersigned, to serve as a formal legal intimation and final warning before initiating civil/criminal proceedings before the appropriate court of law.</p>

<p>FACTS OF THE CASE:</p>

<p>1. That on [specific date], you entered into a verbal/written agreement with my client..."</p>

<h3>Step 6: Demand Clause</h3>

<p>"DEMAND & PRAYER:</p>

<p>In light of the above facts, my client hereby demands that you shall:</p>

<p>(1) Pay the amount of ₹[amount] along with interest at the rate of [rate]% per annum, within 15 days from receipt of this notice.</p>

<p>(2) In default, you are hereby warned that legal proceedings shall be initiated against you without any further notice."</p>

<h3>Step 7: Closing</h3>

<p>"This notice is issued without prejudice to the rights and remedies of my client.

Yours faithfully,
[नाम या Advocate का नाम]
[Advocate License Number अगर वकील है]"</p>
</section>

<section>
<h2>Legal Notice भेजने का सही तरीका</h2>

<h3>Method 1: Registered Post (Most Important)</h3>

<ul>
<li><strong>Post Office में जाएँ India Post की branch में</strong></li>
<li><strong>Registered AD (Acknowledgement Due) से Courier करें</strong> — ये proof देंगे कि notice delivered हुआ या नहीं</li>
<li><strong>Receipt को बहुत safely रखें</strong> — ये future में court में evidence होगी</li>
<li>Cost: लगभग ₹50-100 depending on weight</li>
<li><strong>Delivery की proof: यह receipt आपके कानूनी हथियार है</strong></li>
</ul>

<h3>Method 2: Email (Supplementary)</h3>

<ul>
<li>Email से भी रजिस्टर्ड करेंगे</li>
<li>Screenshot लें — delivery की confirmation के साथ</li>
<li>Email का subject line हो: "LEGAL NOTICE — REQUEST FOR ACKNOWLED GEMENT"</li>
<li>Email के आखिर में लिखो: "Please acknowledge receipt of this notice"</li>
</ul>

<h3>Method 3: Personal Delivery (अगर संभव हो)</h3>

<ul>
<li>अगर notice को कोई personally deliver कर सके office में</li>
<li>किसी authorized person को दें notice की original copy</li>
<li>उन्हें एक receipt दें — receipt में लिखा हो "Received on [date]" और signature</li>
<li>ये receipt भी important evidence है</li>
</ul>

<h4>बहुत important: Cheque Bounce Case के लिए Special Rule</h4>

<p><strong>Negotiable Instruments Act की Section 138 के तहत:</strong></p>
<ul>
<li>Cheque bounce होने पर <strong>30 दिन के अंदर written notice भेजना जरूरी है</strong></li>
<li>Notice में demand करो कि <strong>15 दिन में payment करो</strong></li>
<li>15 दिन में payment न आए, तो अगले 1 महीने के अंदर court case कर सकते हो</li>
<li>Registered post से ही भेजो — यही valid proof है</li>
</ul>
</section>

<section>
<h2>Legal Notice से Response न मिले तो क्या करें?</h2>

<p>अगर 15-30 दिन के अंदर कोई response नहीं आया, तो आपके पास ये options हैं:</p>

<h3>Option 1: Consumer Forum (अगर Consumer complaint हो)</h3>

<ul>
<li>खराब product या service के लिए</li>
<li>Very affordable — ज्यादा खर्च नहीं</li>
<li>Fast resolution — 1-2 साल में verdict</li>
</ul>

<h3>Option 2: Civil Court में Suit दाखिल करें</h3>

<ul>
<li>आपके जिले का District Court</li>
<li>Paise की recovery के लिए civil suit</li>
<li>Court फीस लगेगी — amount का 4-8%</li>
<li>Legal representation जरूरी हो सकता है</li>
</ul>

<h3>Option 3: Police में Criminal Complaint (अगर fraud हो)</h3>

<ul>
<li>अगर intentional cheating हो</li>
<li>IPC की Section 420 (Cheating and Dishonestly Inducing Delivery of Property)</li>
<li>Police FIR दर्ज करेंगे — criminal case बनेगा</li>
</ul>

<h3>Option 4: Arbitration</h3>

<ul>
<li>एक neutral third party (Arbitrator) को agree करें दोनों पक्ष</li>
<li>Arbitrator का decision court जैसा मान्य होता है</li>
<li>बहुत कम खर्चीला</li>
</ul>

<h3>Option 5: Recovery Suit (अगर पैसे की बकाया हो)</h3>

<ul>
<li>CPC के Section 9 के तहत recovery suit दाखिल करें</li>
<li>पैसे + interest + court fees सब recover हो सकते हैं</li>
</ul>
</section>

<section>
<h2>Advocate से Legal Notice भेजवाने के फायदे</h2>

<p>खुद लिखने के बजाय अगर advocate से भेजवाओ:</p>

<ul>
<li><strong>✅ Professional Tone:</strong> Opposite party को पता चल जाता है कि serious matter है</li>
<li><strong>✅ Legal Language:</strong> Correct sections और acts का reference होता है</li>
<li><strong>✅ Court में ज्यादा Weight:</strong> Advocate की stamp और signature से ज्यादा impact होता है</li>
<li><strong>✅ Procedural Correctness:</strong> सभी formalities सही तरीके से fulfill होती हैं</li>
<li><strong>✅ Evidence की Strength:</strong> Court में बेहतर acceptance होता है</li>
<li><strong>✅ Follow-up Assistance:</strong> अगर court case जाना पड़े तो advocate पहले से ready होता है</li>
</ul>

<p><strong>Cost:</strong> ₹500 से ₹2,000 तक depending on complexity और location</p>
</section>

<section>
<h2>Common Mistakes जो लोग करते हैं</h2>

<h3>❌ Mistake 1: Notice Email से ही भेज देना</h3>

<p>Email से सिर्फ supplementary है। Main notice <strong>always Registered Post से जाएँ</strong>।</p>

<h3>❌ Mistake 2: Emotional या Aggressive Language</h3>

<p>"मैं तुम्हें नष्ट कर दूँगा..." — ये legal notice नहीं, verbal threat लगेगा। Formal, professional language use करो।</p>

<h3>❌ Mistake 3: Notice में बहुत सारे demands एक साथ</h3>

<p>Clear, specific demand रखो। ₹1 लाख चाहिए, तो ₹1 लाख लिखो। Vague demands reject हो सकते हैं।</p>

<h3>❌ Mistake 4: Deadline बहुत कम रखना</h3>

<p>Minimum 15 दिन, maximum 30 दिन reasonable है। 3-5 दिन unreasonable लगेगा।</p>

<h3>❌ Mistake 5: Evidence या प्रमाण document न attach करना</h3>

<p>Agreement copy, payment proof, previous communications — सब attach करो।</p>
</section>

<section>
<h2>महत्वपूर्ण Section और Acts</h2>

<table style="border: 1px solid #ccc; width: 100%; margin: 20px 0;">
<tr style="background-color: #f0f0f0;">
<td style="border: 1px solid #ccc; padding: 10px;"><strong>मामला</strong></td>
<td style="border: 1px solid #ccc; padding: 10px;"><strong>Relevant Section/Act</strong></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">Cheque Bounce</td>
<td style="border: 1px solid #ccc; padding: 10px;">Section 138, Negotiable Instruments Act</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">Loans/Money Recovery</td>
<td style="border: 1px solid #ccc; padding: 10px;">CPC Section 9, IPC Section 420</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">Defamation</td>
<td style="border: 1px solid #ccc; padding: 10px;">IPC Section 499, 500</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">Breach of Contract</td>
<td style="border: 1px solid #ccc; padding: 10px;">Indian Contract Act 1872, Section 73-75</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">Property/Tenant Issues</td>
<td style="border: 1px solid #ccc; padding: 10px;">Transfer of Property Act, State Rent Act</td>
</tr>
</table>
</section>

<section>
<h2>महत्वपूर्ण Helplines और Resources</h2>

<ul>
<li><strong>📞 Legal Aid Helpline: 15100</strong> (Free legal advice and services)</li>
<li><strong>📞 NALSA (National Legal Services Authority): 1800-200-1515</strong></li>
<li><strong>🌐 Find Advocate: Bar Council website अपने state में</strong></li>
<li><strong>📧 Email करें: अपने District Court के mail पर notice की copies भेजो record के लिए</strong></li>
<li><strong>📱 India Post: www.indiapost.gov.in — Registered Post tracking के लिए</strong></li>
</ul>
</section>
    `,
  },
  {
    slug: 'property-registration-kaise-kare',
    title: 'Property Registration कैसे करें — Stamp Duty और Registry 2025',
    description: 'जमीन या मकान की registry कैसे होती है। Stamp duty कितनी लगती है, कौन से दस्तावेज चाहिए — राज्यवार पूरी जानकारी।',
    category: 'Property',
    categoryColor: 'bg-green-100 text-green-700',
    icon: '🏠',
    date: '5 अप्रैल 2025',
    readTime: '6 मिनट',
    content: `
## Property Registration — पूरी जानकारी

Property Registration Registration Act 1908 के तहत जरूरी है। बिना registration property का कानूनी मालिकाना हक नहीं मिलता।

## Stamp Duty क्या है?

Stamp Duty वह tax है जो property खरीदने पर सरकार को देना पड़ता है।

| राज्य | Stamp Duty (पुरुष) | Stamp Duty (महिला) |
|-------|-------------------|-------------------|
| UP | 7% | 6% |
| राजस्थान | 6% | 5% |
| Delhi | 6% | 4% |
| Maharashtra | 6% | 6% |
| MP | 7.5% | 7.5% |

## Registration Fees

Property value का 1% — अधिकतम ₹30,000 ज्यादातर राज्यों में।

## Property Registration की प्रक्रिया

### Step 1: Stamp Duty calculate करें
- अपने राज्य की website पर calculator उपलब्ध है

### Step 2: E-Stamp खरीदें
- Stock Holding Corporation की website से
- या authorized bank से

### Step 3: Sub-Registrar Office में appointment लें
- ऑनलाइन appointment: igrsup.gov.in (UP)
- अपने राज्य का portal खोजें

### Step 4: Documents तैयार करें

### Step 5: Registration
- दोनों पक्ष Sub-Registrar के सामने उपस्थित हों
- Biometric verification
- Documents sign करें
- Registered deed मिल जाएगी

## जरूरी दस्तावेज

- ✅ Sale Deed (stamp paper पर)
- ✅ दोनों पक्षों का आधार कार्ड
- ✅ PAN Card
- ✅ Property के पुराने documents
- ✅ NOC (अगर जरूरी हो)
- ✅ Passport size photos

## Online Registration (कुछ राज्यों में)

UP, Delhi, Maharashtra में partial online registration शुरू हो गई है।

## Registry के बाद Mutation जरूरी है

Registry के बाद नगर पालिका या पटवारी के पास Mutation (नामांतरण) कराएं।

📞 Property Registration Helpline: अपने राज्य का helpline देखें
    `,
  },
  {
    slug: 'labour-rights-india',
    title: 'मजदूर और कर्मचारी के अधिकार — Labour Laws India 2025',
    description: 'Minimum wage, PF, ESI, leave, gratuity — हर कर्मचारी को पता होने चाहिए ये अधिकार। नौकरी से निकाला तो क्या करें।',
    category: 'Labour Rights',
    categoryColor: 'bg-orange-100 text-orange-700',
    icon: '👷',
    date: '4 अप्रैल 2025',
    readTime: '6 मिनट',
    content: `
## कर्मचारी के मुख्य अधिकार

भारत में Labour Laws कर्मचारियों की सुरक्षा के लिए बनाए गए हैं।

## Minimum Wage का अधिकार

- हर राज्य में Minimum Wage अलग है
- केंद्र सरकार का National Floor Wage: ₹176/दिन
- राज्यवार minimum wage: अपने राज्य के Labour Department से जानें

## PF (Provident Fund) का अधिकार

- 20 या ज्यादा employees वाली company में PF जरूरी
- Employee का contribution: Basic salary का 12%
- Employer का contribution: 12% (8.33% EPS + 3.67% EPF)
- PF balance: epfindia.gov.in पर check करें

## ESI (Medical Insurance) का अधिकार

- 10 या ज्यादा employees वाली company में ESI जरूरी
- ₹21,000 तक salary वाले employees को
- Free medical treatment मिलती है
- Employee contribution: 0.75%, Employer: 3.25%

## Leave का अधिकार

| Leave Type | दिन |
|-----------|-----|
| Annual Leave | 15-30 दिन |
| Sick Leave | 10-12 दिन |
| Casual Leave | 7-10 दिन |
| Maternity Leave | 26 हफ्ते (महिला) |

## Gratuity का अधिकार

5 साल या उससे ज्यादा service के बाद:
- Formula: Last salary x 15/26 x years of service
- Maximum: ₹20 लाख

## Wrongful Termination — क्या करें?

अगर गलत तरीके से निकाला तो:
1. Labour Court में complaint करें
2. Labour Commissioner Office जाएं
3. Industrial Dispute Act के तहत case करें

## Sexual Harassment

POSH Act के तहत हर company में ICC (Internal Complaints Committee) होनी चाहिए।
Complaint: ICC को लिखित शिकायत दें।

📞 Labour Helpline: 1800-11-9090 (Free)
📞 PF Helpline: 1800-118-005 (Free)
    `,
  },
  {
    slug: 'rti-application-kaise-kare',
    title: 'RTI Application कैसे करें — सूचना का अधिकार 2025',
    description: 'RTI यानी Right to Information — सरकार से कोई भी जानकारी मांगने का अधिकार। Online RTI कैसे file करें, कितना खर्च, कितने दिन।',
    category: 'RTI',
    categoryColor: 'bg-purple-100 text-purple-700',
    icon: '📋',
    date: '3 अप्रैल 2025',
    readTime: '5 मिनट',
    content: `
## RTI क्या है?

RTI यानी Right to Information Act 2005 — इसके तहत कोई भी भारतीय नागरिक किसी भी सरकारी विभाग से जानकारी मांग सकता है।

## RTI से क्या मांग सकते हैं?

- ✅ सरकारी काम की जानकारी
- ✅ अपने आवेदन का status
- ✅ सरकारी खर्च का हिसाब
- ✅ नौकरी में भर्ती की जानकारी
- ✅ किसी project की details

## RTI नहीं मांग सकते

- ❌ जानकारी जो देश की सुरक्षा को नुकसान पहुँचाए
- ❌ Cabinet papers
- ❌ Third party की personal information

## Online RTI कैसे करें?

### Central Government के लिए:
1. rtionline.gov.in खोलें
2. Register करें
3. Ministry या Department चुनें
4. Application लिखें
5. ₹10 fee online भरें
6. Submit करें

### State Government के लिए:
अपने राज्य का RTI portal खोजें।

## RTI Application कैसे लिखें?

Simple भाषा में लिखें:

To,
The Public Information Officer
[Department का नाम]
[Address]

Subject: RTI Application under RTI Act 2005

मैं [नाम], निम्न जानकारी मांगना चाहता हूँ:
1. [सवाल 1]
2. [सवाल 2]

आवेदन fee: ₹10 (संलग्न है)

## RTI की Fee

| Application | Fee |
|------------|-----|
| Central Government | ₹10 |
| BPL Card holder | कोई fee नहीं |
| State Government | ₹10-50 (राज्य के हिसाब से) |

## जवाब कितने दिन में मिलेगा?

- सामान्य मामले: 30 दिन
- जीवन और स्वतंत्रता से जुड़े: 48 घंटे
- Third party मामले: 40 दिन

## जवाब न मिले तो?

1. First Appeal: उसी विभाग में
2. Second Appeal: CIC (Central Information Commission)
3. High Court में writ petition

📞 CIC Helpline: 011-26186534
🌐 rtionline.gov.in
    `,
  },
  // Yeh 6 naye articles existing blogPosts array mein ADD karo
// app/blog/_posts/index.ts mein existing array ke end mein paste karo (closing ] se pehle)

  {
    slug: 'divorce-process-india',
    title: 'Divorce कैसे होता है — India में तलाक की पूरी प्रक्रिया 2025',
    description: 'Mutual consent divorce, contested divorce — court mein kya hota hai, kitna time lagta hai, alimony kaise milti hai. Hindi mein puri jankaari.',
    category: 'Family Law',
    categoryColor: 'bg-pink-100 text-pink-700',
    icon: '⚖️',
    date: '9 अप्रैल 2025',
    readTime: '6 मिनट',
    content: `
## Divorce — India में कानूनी प्रक्रिया

Divorce एक कठिन निर्णय है। कानूनी प्रक्रिया को समझें।

## दो प्रकार के Divorce

### Mutual Consent Divorce (आपसी सहमति):
- दोनों पति-पत्नी राजी हों
- 6-18 महीने में हो जाता है
- कम खर्चीला

### Contested Divorce (एकतरफा):
- एक पक्ष राजी नहीं
- 2-5 साल लग सकते हैं
- ज्यादा खर्च

## Mutual Consent Divorce Process

1. Joint petition file करें Family Court में
2. पहली hearing — statement record
3. 6 महीने का cooling period
4. दूसरी hearing — final divorce

Grounds नहीं बताने पड़ते — सिर्फ mutual agreement।

## Contested Divorce के Grounds

Hindu Marriage Act के तहत:
- ✅ Adultery (व्यभिचार)
- ✅ Cruelty — physical या mental
- ✅ Desertion — 2 साल से अलग
- ✅ Mental disorder
- ✅ Leprosy या STD
- ✅ Renunciation of world

## Alimony (गुजारा भत्ता)

- Wife को maintenance मिल सकती है
- Husband की income पर निर्भर
- Court तय करती है
- Permanent या temporary हो सकती है

## बच्चों की Custody

- Court बच्चे का हित सबसे पहले देखती है
- आमतौर पर: छोटे बच्चे — माँ के पास
- Visitation rights पिता को मिलते हैं

## जरूरी दस्तावेज

- ✅ Marriage certificate
- ✅ आधार कार्ड दोनों का
- ✅ Income proof
- ✅ Property documents
- ✅ बच्चों के documents

## Mediation पहले Try करें

Court से पहले:
- Family counselor से मिलें
- Mediation centre में जाएं — Free
- Reconciliation की कोशिश करें

📞 Legal Aid: 15100 (Free)
📞 Family Court — नजदीकी जिला न्यायालय
    `,
  },
  {
    slug: 'tenant-rights-india',
    title: 'किरायेदार के अधिकार — Rent Agreement और Tenant Rights 2025',
    description: 'Rent agreement क्या होता है, किरायेदार के क्या अधिकार हैं, मकान मालिक अचानक नहीं निकाल सकता — पूरी जानकारी हिंदी में।',
    category: 'Property',
    categoryColor: 'bg-green-100 text-green-700',
    icon: '🏠',
    date: '9 अप्रैल 2025',
    readTime: '5 मिनट',
    content: `
## किरायेदार के अधिकार — पूरी जानकारी

India में Rent Agreement और Tenant Protection laws समझना जरूरी है।

## Rent Agreement क्यों जरूरी है?

- दोनों पक्षों की सुरक्षा
- Dispute में evidence
- Address proof के लिए
- बिना agreement — किरायेदार को ज्यादा rights

## Rent Agreement में क्या होना चाहिए?

- ✅ Rent amount और due date
- ✅ Security deposit राशि
- ✅ Agreement duration
- ✅ Notice period
- ✅ Maintenance responsibilities
- ✅ Restrictions (pets, guests)
- ✅ Rent increase terms

## Registration जरूरी है?

- 11 महीने तक — Notarized काफी है
- 12 महीने से ज्यादा — Registration जरूरी
- Registered agreement — ज्यादा legal protection

## किरायेदार के अधिकार

- ✅ Peaceful possession का अधिकार
- ✅ Essential services — बिजली, पानी नहीं काट सकते
- ✅ Security deposit वापसी — deductions के साथ
- ✅ Proper notice के बिना नहीं निकाल सकते
- ✅ Privacy का अधिकार — बिना notice घर में नहीं आ सकते

## Landlord क्या नहीं कर सकता?

- ❌ बिना notice अचानक नहीं निकाल सकता
- ❌ बिजली-पानी नहीं काट सकता
- ❌ बिना permission अंदर नहीं आ सकता
- ❌ Security deposit unfairly नहीं रोक सकता
- ❌ Rent receipt देने से मना नहीं कर सकता

## Notice Period

- Agreement में जो लिखा हो
- Default: 1 महीने का notice दोनों तरफ से
- Registered agreement में ज्यादा protection

## Security Deposit

- Maximum 2-3 महीने का rent
- Refundable होता है
- Deductions — genuine damage के लिए
- Receipt जरूर लें

## Dispute होने पर?

1. Rent Controller के पास जाएं
2. District court में case
3. Legal Aid — Free

📞 Legal Aid: 15100 (Free)
    `,
  },
  {
    slug: 'domestic-violence-law-india',
    title: 'घरेलू हिंसा — कानूनी अधिकार और Protection Order कैसे मिलेगा',
    description: 'Domestic Violence Act 2005 के तहत महिलाओं के अधिकार। Protection order, shelter home, maintenance — कैसे मदद मिलेगी हिंदी में।',
    category: 'Family Law',
    categoryColor: 'bg-pink-100 text-pink-700',
    icon: '🛡️',
    date: '9 अप्रैल 2025',
    readTime: '5 मिनट',
    content: `
## घरेलू हिंसा — कानूनी सुरक्षा

Protection of Women from Domestic Violence Act 2005 महिलाओं को व्यापक सुरक्षा देता है।

## Domestic Violence क्या है?

सिर्फ मारपीट नहीं — इसमें शामिल है:
- ✅ Physical violence — मारना, धकेलना
- ✅ Emotional abuse — गाली, अपमान
- ✅ Economic abuse — पैसे न देना
- ✅ Sexual abuse
- ✅ Verbal abuse

## तुरंत क्या करें?

1. Safe जगह जाएं — पड़ोसी, रिश्तेदार
2. Police को call करें — 100 या 112
3. Women helpline: 1091 या 181
4. Medical help लें — injuries document करें
5. Evidence रखें — photos, messages

## Protection Order कैसे मिलेगा?

1. Magistrate court में application दें
2. Protection Officer की मदद लें — Free
3. Emergency — 24 घंटे में order
4. Order से पति घर में आ नहीं सकता

## क्या मिल सकता है?

- ✅ Protection Order — हिंसा रोकने के लिए
- ✅ Residence Order — घर में रहने का अधिकार
- ✅ Monetary Relief — maintenance
- ✅ Custody Order — बच्चों की custody
- ✅ Compensation Order

## कहाँ Help मिलेगी?

- Protection Officer — हर जिले में
- NCW (National Commission for Women): 7827170170
- One Stop Centre — Free shelter, legal, medical help
- Legal Aid: 15100

## FIR भी करें

IPC 498A के तहत:
- Cruelty against wife
- Non-bailable offence
- Husband और in-laws पर case

## Shelter Home

Emergency में:
- One Stop Centre में रह सकती हैं
- Free shelter, food, legal help
- Nari Niketan — सरकारी shelter

📞 Women Helpline: 181 (24/7 Free)
📞 NCW: 7827170170
📞 Police: 100
    `,
  },
  {
    slug: 'cheque-bounce-case-kaise-kare',
    title: 'Cheque Bounce Case कैसे करें — Section 138 NI Act 2025',
    description: 'Cheque bounce होने पर kya karein. Legal notice, court case, compensation kaise milega — Section 138 ki puri process Hindi mein.',
    category: 'Legal Notice',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    icon: '📄',
    date: '9 अप्रैल 2025',
    readTime: '5 मिनट',
    content: `
## Cheque Bounce — पूरी कानूनी प्रक्रिया

Cheque bounce एक criminal offence है — Section 138 Negotiable Instruments Act के तहत।

## Cheque Bounce होने पर तुरंत करें

1. Bank से "Cheque Return Memo" लें
2. Reason note करें — Insufficient funds / Account closed
3. 30 दिन के अंदर Legal Notice भेजें

## Legal Notice — जरूरी है!

Notice में लिखें:
- Cheque details — number, amount, date
- Bounce का reason
- 15 दिन में payment की demand
- Court action की चेतावनी

Registered post से भेजें — Receipt संभालें।

## Court Case कब करें?

Notice के बाद:
- 15 दिन में payment न आए
- Notice receive करने के बाद 1 महीने के अंदर court जाएं

## Magistrate Court में Case

1. Complaint file करें
2. Cheque, return memo, notice की copies दें
3. Affidavit दें
4. Court summons भेजेगी
5. Trial होगी

## क्या सजा हो सकती है?

- 2 साल तक की कैद
- या Cheque amount का दोगुना जुर्माना
- या दोनों

## Compensation कैसे मिलेगा?

- Court Cheque amount + interest दिला सकती है
- Legal fees भी मिल सकती है
- Cheque amount recover होने की ज्यादा chance

## Time Limit याद रखें

| Action | Time Limit |
|--------|-----------|
| Legal Notice | 30 दिन के अंदर |
| Payment demand | 15 दिन |
| Court complaint | Notice + 15 दिन के बाद, 1 महीने के अंदर |

## वकील चाहिए?

- Simple cases में खुद भी कर सकते हैं
- Amount बड़ा हो तो वकील लें
- Legal Aid — Free: 15100

📞 Legal Aid: 15100 (Free)
    `,
  },
  {
    slug: 'police-complaint-against-police',
    title: 'पुलिस की शिकायत कैसे करें — Police Brutality और Misconduct',
    description: 'Police ne galat kiya, FIR nahi likhi, harassment ki — kahan complaint karein, kaise karein, kya hoga. Adhikar janein Hindi mein.',
    category: 'FIR और पुलिस',
    categoryColor: 'bg-red-100 text-red-700',
    icon: '🚔',
    date: '9 अप्रैल 2025',
    readTime: '5 मिनट',
    content: `
## पुलिस के खिलाफ शिकायत — पूरी जानकारी

पुलिस भी कानून के अधीन है। गलत व्यवहार के खिलाफ आप शिकायत कर सकते हैं।

## कब करें शिकायत?

- ✅ FIR दर्ज करने से मना किया
- ✅ रिश्वत माँगी
- ✅ बिना reason गिरफ्तार किया
- ✅ Custody में मारपीट की
- ✅ जानबूझकर case में देरी
- ✅ Harassment या intimidation

## शिकायत कहाँ करें?

### 1. वरिष्ठ अधिकारी को:
- SP (Superintendent of Police) Office
- DIG या IG Office
- लिखित complaint दें

### 2. Police Complaints Authority:
- राज्य स्तरीय independent body
- Online या offline complaint
- Investigation होती है

### 3. National Human Rights Commission:
- nhrc.nic.in
- Online complaint करें
- Serious cases के लिए

### 4. State Human Rights Commission:
- अपने राज्य की SHRC
- Faster resolution

### 5. Court में:
- High Court में PIL
- Magistrate के पास complaint

## FIR न लिखने पर क्या करें?

1. SP को written complaint दें
2. Magistrate के पास Section 156(3) application
3. High Court में writ petition
4. State Human Rights Commission

## Custody में Torture हो तो?

- तुरंत family को inform करें
- Lawyer की मांग करें — यह अधिकार है
- Medical examination कराएं
- NHRC में complaint करें

## आपके Fundamental Rights

- ✅ Arrest के 24 घंटे के अंदर Magistrate के सामने
- ✅ Lawyer रखने का अधिकार
- ✅ Family को inform करने का अधिकार
- ✅ Medical help का अधिकार
- ✅ Silent रहने का अधिकार

📞 NHRC: 14433
📞 Police Complaint: SP Office नजदीकी
📞 Legal Aid: 15100 (Free)
    `,
  },
  {
    slug: 'insurance-claim-process',
    title: 'Insurance Claim कैसे करें — Health, Car, Life Insurance 2025',
    description: 'Insurance claim reject ho jaata hai to kya karein. Health insurance cashless claim, car insurance, life insurance claim process Hindi mein.',
    category: 'उपभोक्ता अधिकार',
    categoryColor: 'bg-blue-100 text-blue-700',
    icon: '📋',
    date: '9 अप्रैल 2025',
    readTime: '6 मिनट',
    content: `
## Insurance Claim — पूरी जानकारी

Insurance claim करना आसान है — बस process सही होनी चाहिए।

## Health Insurance Claim

### Cashless Treatment:
1. Network hospital में जाएं
2. Insurance card दिखाएं
3. Pre-authorization form भरें
4. Hospital सीधे insurance company से settle करती है

### Reimbursement:
1. Non-network hospital में treatment
2. सभी bills और reports save करें
3. 30 दिन के अंदर claim करें
4. Documents submit करें
5. 30-45 दिन में payment

### Documents:
- ✅ Hospital bills (original)
- ✅ Discharge summary
- ✅ Prescription और reports
- ✅ Policy number
- ✅ आधार कार्ड

## Car Insurance Claim

### Accident होने पर तुरंत:
1. Police FIR करें — जरूरी है
2. Photos लें — car damage, accident spot
3. Insurance company को inform करें — 24 घंटे में
4. Surveyor आएगा — inspection

### Process:
- Survey report बाद repair शुरू
- Garage bill insurance company को
- Deductible अपनी जेब से

## Life Insurance Claim (Death Claim)

1. Insurance company को inform करें
2. Death certificate submit करें
3. Original policy document
4. Nominee के documents
5. 30 दिन में payment

## Claim Reject हो तो क्या करें?

### Level 1: Insurance Company:
- Written complaint दें
- Grievance department को

### Level 2: IRDAI (Insurance Regulator):
- irdai.gov.in पर complaint
- या 1800-4254-732 पर call

### Level 3: Insurance Ombudsman:
- cioins.co.in
- Free service
- 30 दिन में decision

### Level 4: Consumer Court:
- अगर ऊपर से न मिले

## Common Rejection Reasons

| Reason | Solution |
|--------|---------|
| Pre-existing condition | Policy लेते समय declare करें |
| Late claim | समय पर claim करें |
| Documents incomplete | Complete documents दें |
| Policy lapsed | Premium समय पर भरें |

📞 IRDAI Helpline: 1800-4254-732 (Free)
🌐 irdai.gov.in
    `,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}