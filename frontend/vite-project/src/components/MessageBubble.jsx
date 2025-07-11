import React from 'react';

function MessageBubble({ role, content }) {
  const isUser = role === 'user';
  return (
    <div className={`mb-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`rounded-lg p-3 max-w-xs whitespace-pre-line text-sm shadow ${
          isUser ? 'bg-black text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {content || '...'}
      </div>
    </div>
  );
}

export default MessageBubble;
