import React from 'react';

function MessageInput({ input, setInput, onSend, loading }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  return (
    <div className="mt-4 flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about the weather..."
        className="flex-1 p-2 rounded-l border border-gray-300"
        disabled={loading}
      />
     <button
  onClick={onSend}
  disabled={loading}
  className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800 disabled:opacity-50"
>
  Send
</button>

    </div>
  );
}

export default MessageInput;