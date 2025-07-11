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
    <div
      className="flex flex-col items-center h-screen p-4 bg-white"
      style={{
  cursor:
    'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 32 32\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M2 2 L2 30 L10 22 L18 30 L30 18 L22 10 L30 2 Z\' fill=\'black\'/%3E%3C/svg%3E") 2 2, auto'
}}

    >
      <div className="w-full max-w-2xl flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Weather Chat</h1>
          <button
            onClick={handleClearChat}
            disabled={loading}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-gray-400 to-gray-600 group-hover:from-gray-500 group-hover:to-black hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-gray-300 disabled:opacity-50"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Clear Chat
            </span>
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
    </div>
  );
}

export default App;
