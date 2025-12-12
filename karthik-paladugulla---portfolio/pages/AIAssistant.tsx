import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Send, Sparkles, AlertCircle, MessageSquare } from 'lucide-react';
import { sendMessageToGemini } from '../services/gemini';
import { ChatMessage } from '../types';

const AIAssistant = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hi there! I'm Karthik's portfolio assistant. Feel free to ask me anything about his projects, skills, or professional experience.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setLoading(true);

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', text: userText, timestamp: new Date() }
    ];
    setMessages(newMessages);

    // Prepare history for API
    const history = newMessages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const responseText = await sendMessageToGemini(history, userText);

    setMessages(prev => [
      ...prev,
      { role: 'model', text: responseText, timestamp: new Date() }
    ]);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto h-[80vh] flex flex-col">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-3">
          <MessageSquare size={14} /> Interactive Chat
        </div>
        <h2 className="text-3xl font-bold text-white">Ask Me Anything</h2>
      </motion.div>

      <div className="flex-1 glass-panel rounded-3xl overflow-hidden flex flex-col border border-white/5 shadow-2xl relative">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative z-10">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`p-2 rounded-xl flex-shrink-0 ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-slate-700'}`}>
                {msg.role === 'user' ? <User size={20} className="text-white" /> : <Bot size={20} className="text-white" />}
              </div>
              <div 
                className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                }`}
              >
                {msg.text}
                <div className="mt-2 text-[10px] opacity-60 text-right">
                  {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            </motion.div>
          ))}
          {loading && (
             <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="flex items-start gap-3"
           >
             <div className="p-2 rounded-xl bg-slate-700">
               <Bot size={20} className="text-white" />
             </div>
             <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl rounded-tl-none">
               <div className="flex gap-1.5">
                 <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
                 <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-75"></span>
                 <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-150"></span>
               </div>
             </div>
           </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-900/80 backdrop-blur border-t border-slate-800 z-20">
          <form onSubmit={handleSend} className="relative flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Karthik's skills or projects..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 pl-4 pr-12 text-white focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="absolute right-2 p-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </form>
          {!process.env.API_KEY && (
            <div className="flex items-center gap-2 text-amber-500 text-xs mt-3 justify-center bg-amber-500/10 py-1 px-3 rounded-full w-fit mx-auto">
              <AlertCircle size={12} />
              <span>Demo Mode: Add API Key for AI responses</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;