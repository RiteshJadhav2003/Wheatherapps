import React from 'react';
import { ArrowRight } from 'lucide-react';

function MessageInput({ input, setInput, onSend, loading }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  return (
    <div className="mt-4 w-full max-w-3xl mx-auto px-4">
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about the weather..."
          className="w-full h-20 pl-5 pr-16 py-4 text-base border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-200"
          disabled={loading}
        />

        <button
          onClick={onSend}
          disabled={loading}
          className="absolute bottom-2 right-2 bg-black text-white px-4 py-2 rounded-full"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
