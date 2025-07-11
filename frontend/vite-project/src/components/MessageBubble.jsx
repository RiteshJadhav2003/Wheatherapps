import React from 'react';

function MessageBubble({ role, content }) {
  const isUser = role === 'user';

  return (
    <div className={`mb-4 ${isUser ? 'flex justify-end' : 'flex justify-start'}`}>
      <div
        className={`rounded-xl px-4 py-3 whitespace-pre-line font-sans text-base leading-relaxed tracking-normal ${
          isUser
            ? 'max-w-md bg-gray-200 text-black border border-gray-200'
            : 'w-full bg-white text-black'
        }`}
      >
        {content || '...'}
      </div>
    </div>
  );
}

export default MessageBubble;
