import React, { useState } from 'react';
import MessageInput from './components/MessageInput';
import ChatWindow from './components/chatWindow';
import { useChatStream } from './hooks/useChatStream';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const { sendMessage } = useChatStream();

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input.trim(), setMessages, setLoading); 
    setInput('');
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Weather Chat</h1>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          onClick={handleClearChat}
          disabled={loading}
        >
          Clear Chat
        </button>
      </div>

      <ChatWindow messages={messages} />
      <MessageInput
        input={input}
        setInput={setInput}
        onSend={handleSend}
        loading={loading}
      />
    </div>
  );
}

export default App;
