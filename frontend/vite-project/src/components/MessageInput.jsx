import React from 'react';
import { ArrowRight } from 'lucide-react';

function MessageInput({ input, setInput, onSend, loading }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  return (
    <div className="mt-4 w-full max-w-3xl mx-auto">
      <div className="flex shadow-md border border-gray-300 rounded-full overflow-hidden">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about the weather..."
          className="flex-1 px-4 py-3 text-base focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-colors duration-200"
          disabled={loading}
        />

        <button
          onClick={onSend}
          disabled={loading}
          className="bg-black text-white px-5 py-3 hover:bg-gray-800 disabled:opacity-50 flex items-center justify-center"
        >
          <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
