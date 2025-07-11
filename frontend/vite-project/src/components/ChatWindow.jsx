import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

function ChatWindow({ messages }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto bg-white p-4 rounded shadow">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} role={msg.role} content={msg.content} />
      ))}
      <div ref={chatEndRef} />
    </div>
  );
}

export default ChatWindow;