'use client';

import { useState, useEffect } from 'react';
import { checkRateLimit, incrementQueryCount } from '@/lib/rateLimit';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatBoxProps {
  category: string;
  categoryName: string;
}

export default function ChatBox({ category, categoryName }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [queriesRemaining, setQueriesRemaining] = useState(10);
  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    const { allowed, remaining } = checkRateLimit();
    setQueriesRemaining(remaining);
    setLimitReached(!allowed);

    // Initial message
    const initialMessage: Message = {
      role: 'assistant',
      content: `Namaste! 🙏 Main LegalSathi hoon.
${categoryName} ke baare mein aapki
madad karunga!

Aap pooch sakte hain:
• Apne rights kya hain?
• Complaint kaise karein?
• Kaunsa form bharna hoga?
• Lawyer kaise dhundhein?

Aaj ${remaining}/10 sawaal pooch sakte ho.
Himmat rakho! ⚖️`
    };
    setMessages([initialMessage]);
  }, [categoryName]);

  const handleSend = async () => {
    const message = input.trim();
    if (!message || isLoading || limitReached) return;

    const { allowed, remaining } = checkRateLimit();
    if (!allowed) {
      setLimitReached(true);
      setQueriesRemaining(0);
      return;
    }

    setIsLoading(true);
    const userMessage: Message = { role: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, category }),
      });

      const data = await response.json();

      if (data.reply) {
        const assistantMessage: Message = { role: 'assistant', content: data.reply };
        setMessages(prev => [...prev, assistantMessage]);
        incrementQueryCount();
        const newRemaining = remaining - 1;
        setQueriesRemaining(newRemaining);
        if (newRemaining <= 0) {
          setLimitReached(true);
        }
      } else {
        const errorMessage: Message = {
          role: 'assistant',
          content: data.error || 'Kuch gadbad hui! Dobara try karo.'
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Kuch gadbad hui! Dobara try karo.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <h3 className="text-lg font-bold">⚖️ LegalSathi AI</h3>
        <p className="text-sm opacity-90">{queriesRemaining}/10 free queries today</p>
      </div>

      {/* Chat Container */}
      <div className="h-80 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === 'user'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-800 border border-gray-200'
              }`}
            >
              <p className="whitespace-pre-line">{msg.content}</p>
              {msg.role === 'assistant' && (
                <p className="text-xs text-gray-500 mt-2 border-t border-gray-300 pt-2">
                  ⚠️ Ye general guidance hai. Serious cases mein lawyer se milein.
                </p>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-3 max-w-[80%]">
              <p className="text-gray-600">LegalSathi soch raha hai... ⚖️</p>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        {limitReached ? (
          <div className="text-center">
            <p className="text-red-600 font-semibold mb-2">
              Aaj ke 10 free queries khatam ho gaye! 😊
            </p>
            <p className="text-gray-600 text-sm mb-4">
              LegalSathi AI se free legal help mili! Try karo: https://legalsathi-ai.vercel.app
            </p>
            <button
              onClick={() => {
                const shareText = encodeURIComponent('LegalSathi AI se free legal help mili! Try karo: https://legalsathi-ai.vercel.app');
                window.open(`https://wa.me/?text=${shareText}`, '_blank');
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              WhatsApp Share 📱
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Apna sawaal likho..."
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              {isLoading ? '...' : 'Send'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}