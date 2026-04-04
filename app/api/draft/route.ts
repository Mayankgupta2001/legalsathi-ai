'use server';

import { NextResponse } from 'next/server';
import { groq } from '@/lib/groq';
import templates from '@/data/document-templates.json';

const DRAFT_PROMPT = `You are a legal document expert 
for India. Generate a professional legal document in 
Hindi and English both. Format it properly with date, 
subject, body, and signature space. Make it legally 
sound but simple to understand.`;

export async function POST(request: Request) {
  try {
    const { templateId, fields } = await request.json();

    const template = templates.find(t => t.id === templateId);
    if (!template) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: DRAFT_PROMPT },
        { 
          role: 'user', 
          content: `Generate ${template.name} document 
          with these details: ${JSON.stringify(fields)}` 
        }
      ],
      max_tokens: 1000,
      temperature: 0.3,
    });

    const document = completion.choices[0]?.message?.content || 
      'Document generate nahi ho saka.';

    return NextResponse.json({ document });

  } catch (error) {
    console.error('Draft API error:', error);
    return NextResponse.json(
      { error: 'Kuch gadbad hui! Dobara try karo.' },
      { status: 500 }
    );
  }
}