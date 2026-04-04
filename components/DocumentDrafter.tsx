'use client';

import { useState } from 'react';

interface DocumentTemplate {
  id: string;
  name: string;
  name_hindi: string;
  category: string;
  description: string;
  fields: Array<{
    id: string;
    label: string;
    type: 'text' | 'textarea' | 'number';
    required: boolean;
  }>;
}

interface Props {
  template: DocumentTemplate;
  onClose?: () => void;
}

export default function DocumentDrafter({ template, onClose }: Props) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldId: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: e.target.value,
    }));
  };

  const handleDownload = () => {
    // Create a text document from form data
    let content = `${template.name}\n${template.name_hindi}\n\n`;
    content += '='.repeat(50) + '\n\n';

    template.fields.forEach((field) => {
      const value = formData[field.id] || '[Not provided]';
      content += `${field.label}:\n${value}\n\n`;
    });

    content += `\n⚖️ Tayyar kiya gaya ${new Date().toLocaleDateString('en-IN')} ko\n`;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `${template.id}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-lg border-2 border-blue-300 p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{template.name}</h2>
          <p className="text-gray-600">{template.name_hindi}</p>
          <p className="text-sm text-gray-500 mt-2">{template.description}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        )}
      </div>

      <form className="space-y-5 mb-6">
        {template.fields.map((field) => (
          <div key={field.id}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                value={formData[field.id] || ''}
                onChange={(e) => handleChange(e, field.id)}
                placeholder="Yahan likho..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <input
                type={field.type}
                value={formData[field.id] || ''}
                onChange={(e) => handleChange(e, field.id)}
                placeholder="Yahan likho..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
        ))}
      </form>

      <div className="flex gap-3 justify-end">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-semibold"
        >
          🖨️ Print
        </button>
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          ⬇️ Download
        </button>
      </div>
    </div>
  );
}
