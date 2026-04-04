'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import templates from '@/data/document-templates.json';

interface Field {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'number';
  required: boolean;
}

interface Template {
  id: string;
  name: string;
  name_hindi: string;
  description: string;
  fields: Field[];
}

interface DraftPageProps {
  params: Promise<{ id: string }>;
}

export default function DraftTemplatePage({ params }: DraftPageProps) {
  const [resolvedId, setResolvedId] = useState<string | null>(null);
  const [fields, setFields] = useState<Record<string, string>>({});
  const [generatedDoc, setGeneratedDoc] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const { id } = await params;
      if (mounted) {
        setResolvedId(id);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [params]);

  const template = useMemo(() => {
    return templates.find((item) => item.id === resolvedId) as Template | undefined;
  }, [resolvedId]);

  useEffect(() => {
    if (copied) {
      const timer = window.setTimeout(() => setCopied(false), 2000);
      return () => window.clearTimeout(timer);
    }
  }, [copied]);

  const handleChange = (fieldId: string, value: string) => {
    setFields((prev) => ({ ...prev, [fieldId]: value }));
  };

  const requiredFieldsFilled = template
    ? template.fields.filter((field) => field.required).every((field) => fields[field.id]?.trim().length > 0)
    : false;

  const handleGenerate = async () => {
    if (!template || isLoading || !requiredFieldsFilled) return;

    setIsLoading(true);
    setIsGenerated(false);
    setGeneratedDoc('');

    try {
      const response = await fetch('/api/draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId: template.id, fields }),
      });

      const data = await response.json();
      if (data.document) {
        setGeneratedDoc(data.document);
        setIsGenerated(true);
      } else {
        setGeneratedDoc(data.error || 'Document generate nahi ho saka.');
        setIsGenerated(true);
      }
    } catch (error) {
      console.error('Draft generation error:', error);
      setGeneratedDoc('Kuch gadbad hui! Dobara try karo.');
      setIsGenerated(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!generatedDoc) return;
    await navigator.clipboard.writeText(generatedDoc);
    setCopied(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setFields({});
    setGeneratedDoc('');
    setIsGenerated(false);
  };

  if (resolvedId === null) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="py-20 px-4 text-center text-gray-600">Loading document template...</div>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white border border-red-200 rounded-3xl p-8 shadow-sm">
            <p className="text-red-700 font-semibold mb-4">Template not found</p>
            <Link href="/draft" className="text-green-700 font-semibold hover:underline">
              Wapas Draft page par jao
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="py-10 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <nav className="text-sm text-gray-600 mb-6 flex flex-wrap gap-2">
              <Link href="/" className="hover:text-green-700">
                Home
              </Link>
              <span>›</span>
              <Link href="/draft" className="hover:text-green-700">
                Documents
              </Link>
              <span>›</span>
              <span className="font-semibold text-gray-800">{template.name}</span>
            </nav>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold text-gray-900">📄 {template.name}</h1>
              <p className="text-gray-600 text-lg">{template.description}</p>
            </div>
          </div>

          <section className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-green-200 rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 Details Bharo</h2>
                <div className="space-y-5">
                  {template.fields.map((field) => (
                    <div key={field.id}>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          rows={4}
                          value={fields[field.id] || ''}
                          onChange={(e) => handleChange(field.id, e.target.value)}
                          className="w-full rounded-2xl border border-green-300 px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                        />
                      ) : (
                        <input
                          type={field.type}
                          value={fields[field.id] || ''}
                          onChange={(e) => handleChange(field.id, e.target.value)}
                          className="w-full rounded-2xl border border-green-300 px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={isLoading || !requiredFieldsFilled}
                  className="mt-8 w-full bg-green-700 disabled:bg-gray-300 text-white font-semibold py-4 rounded-2xl hover:bg-green-800 transition"
                >
                  {isLoading ? 'Document ban raha hai... ⏳' : '🤖 AI Se Document Banao'}
                </button>
              </div>

              {isGenerated && (
                <div className="space-y-6">
                  <div className="bg-white border border-green-200 rounded-3xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">✅ Aapka Document Taiyaar Hai!</h2>
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-800">
                      {generatedDoc}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="w-full bg-white border border-green-300 text-green-800 font-semibold py-3 rounded-2xl hover:bg-green-50 transition"
                    >
                      {copied ? '✅ Copied!' : '📋 Copy Karo'}
                    </button>
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="w-full bg-white border border-blue-300 text-blue-800 font-semibold py-3 rounded-2xl hover:bg-blue-50 transition"
                    >
                      🖨️ Print Karo
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full bg-white border border-orange-300 text-orange-800 font-semibold py-3 rounded-2xl hover:bg-orange-50 transition"
                    >
                      🔄 Dobara Banao
                    </button>
                  </div>

                  <div className="rounded-3xl border border-red-300 bg-yellow-50 p-5 text-sm text-red-800">
                    ⚠️ Ye AI-generated document hai. Use karne se pehle kisi lawyer se verify karwa lein. LegalSathi AI legal advice nahi deta.
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kya Karne Wala Hoon</h3>
                <p className="text-gray-600 leading-relaxed">
                  Apna document details se bharo, phir AI se draft generate karo. Agar zaroorat ho toh print ya copy karke apne lawyer ke paas le jao.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-3xl p-6 text-green-900">
                <h3 className="font-bold mb-2">Helpful Tip</h3>
                <p className="text-sm leading-relaxed">
                  Har required field ka sahi aur saaf information bharo, taaki document structured aur useful bane.
                </p>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </div>
  );
}
