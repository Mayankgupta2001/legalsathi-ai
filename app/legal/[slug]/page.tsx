import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ChatBox from '@/components/ChatBox';
import categories from '@/data/legal-categories.json';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    return {
      title: 'Not Found - LegalSathi AI',
      description: 'Page not found',
    };
  }

  return {
    title: `${category.name} - Free Legal Help | LegalSathi AI`,
    description: `Free AI-powered legal guidance for ${category.name.toLowerCase()} in Hindi. Know your rights!`,
  };
}

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-200',
  green: 'bg-green-50 border-green-200',
  red: 'bg-red-50 border-red-200',
  purple: 'bg-purple-50 border-purple-200',
  yellow: 'bg-yellow-50 border-yellow-200',
  pink: 'bg-pink-50 border-pink-200',
  indigo: 'bg-indigo-50 border-indigo-200',
  orange: 'bg-orange-50 border-orange-200',
};

const urgencyBadge: Record<string, string> = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    notFound();
  }

  const bgClass = colorClasses[category.color] || colorClasses.blue;
  const urgencyClass = urgencyBadge[category.urgency] || urgencyBadge.medium;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span className="mx-2">›</span>
            <a href="#help" className="hover:text-green-700">Legal Help</a>
            <span className="mx-2">›</span>
            <span className="text-gray-800 font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Card */}
      <section className={`py-12 px-4 ${bgClass}`}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <span className="text-6xl">{category.emoji}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {category.name}
                  </h1>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${urgencyClass}`}>
                    {category.urgency.charAt(0).toUpperCase() + category.urgency.slice(1)} Priority
                  </span>
                </div>
                <p className="text-xl text-gray-600 mb-4">{category.name_hindi}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>
                <a
                  href={`tel:${category.helpline}`}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  📞 Call Now: {category.helpline}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aapke Rights Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            ⚖️ Aapke Key Rights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.key_rights.map((right, idx) => (
              <div key={idx} className="bg-white border-2 border-green-200 rounded-lg p-4 hover:bg-green-50 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✅</span>
                  <p className="text-gray-800 font-medium">{right}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            😰 Common Problems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.common_issues.map((issue, idx) => (
              <div key={idx} className="bg-white border-2 border-orange-200 rounded-lg p-4 hover:bg-orange-50 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">⚠️</span>
                  <p className="text-gray-800 font-medium">{issue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              🤖 AI Se Poochho - Bilkul Free
            </h2>
            <p className="text-gray-600">
              Is {category.name_hindi} ke baare mein kuch bhi poochho
            </p>
          </div>
          <ChatBox category={category.slug} categoryName={category.name} />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={`tel:${category.helpline}`}
              className="bg-white border-2 border-green-200 rounded-lg p-6 text-center hover:bg-green-50 transition-colors"
            >
              <span className="text-4xl mb-3 block">📞</span>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Helpline Call Karo</h3>
              <p className="text-gray-600 mb-3">{category.helpline}</p>
              <span className="text-green-600 font-semibold">Call Now →</span>
            </a>
            <Link
              href="/draft"
              className="bg-white border-2 border-blue-200 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors"
            >
              <span className="text-4xl mb-3 block">📄</span>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Document Draft Karo</h3>
              <p className="text-gray-600 mb-3">Free legal documents banao</p>
              <span className="text-blue-600 font-semibold">Start Drafting →</span>
            </Link>
            <a
              href="https://nalsa.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-purple-200 rounded-lg p-6 text-center hover:bg-purple-50 transition-colors"
            >
              <span className="text-4xl mb-3 block">🏛️</span>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Free Legal Aid Dhundho</h3>
              <p className="text-gray-600 mb-3">Government legal aid services</p>
              <span className="text-purple-600 font-semibold">Find Help →</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}