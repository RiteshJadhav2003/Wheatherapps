import React, { useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';

function ChatWindow({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 max-w-2xl mx-auto w-full">
      {messages.map((msg, index) => (
        <MessageBubble key={index} role={msg.role} content={msg.content} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatWindow;
