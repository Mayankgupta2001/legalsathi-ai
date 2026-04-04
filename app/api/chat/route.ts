import { groq, SYSTEM_PROMPT } from '@/lib/groq';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, category } = body;

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Kuch likho!' }, 
        { status: 400 }
      );
    }

    const userMessage = category
      ? `[Category: ${category}]\n${message}`
      : message;

    const response = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage }
      ],
      model: 'llama-3.3-70b-versatile',
      max_tokens: 600,
      temperature: 0.7,
    });

    const reply = response.choices[0]?.message?.content || 
      'Kuch gadbad hui! Dobara try karo.';

    return NextResponse.json({ reply });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Kuch gadbad hui! Dobara try karo.' },
      { status: 500 }
    );
  }
}