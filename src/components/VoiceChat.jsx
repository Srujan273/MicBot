/*import { useState, useEffect } from "react";
import axios from "axios";
import { Mic, Square } from "lucide-react";

const VoiceChat = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.continuous = false;
      recog.interimResults = false;
      recog.lang = "en-US";

      recog.onresult = (event) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        handleSendMessage(text);
      };

      recog.onerror = (event) => console.error("Speech recognition error:", event.error);
      recog.onend = () => setIsRecording(false);

      setRecognition(recog);
    } else {
      console.error("Speech Recognition not supported in this browser.");
    }
  }, []);

  const toggleRecording = () => {
    if (!recognition) return;
    if (isRecording) {
      recognition.stop();
    } else {
      setTranscript("");
      recognition.start();
      setIsRecording(true);
    }
  };
    */








  /*const handleSendMessage = async (text) => {
    if (!text) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setLoading(true);

    const apiToken = import.meta.env.VITE_HF_API_TOKEN;
    console.log("API Token:", apiToken);
    console.log("Input Text:", text);
    console.log("Authorization Header:", `Bearer ${apiToken}`);

    try {
      const response = await Promise.race([
        axios.post(
          "https://api-inference.huggingface.co/models/distilgpt2", // Updated to distilgpt2
          {
            inputs: text,
            parameters: { max_length: 100, temperature: 0.9 },
          },
          {
            headers: {
              Authorization: `Bearer ${apiToken}`,
              "Content-Type": "application/json",
            },
          }
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 10000)
        ),
      ]);
      console.log("Raw API Response:", response.data);
      const aiResponse = response.data[0]?.generated_text || "No response generated";
      console.log("Parsed AI Response:", aiResponse);
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Hugging Face API Error:", error.response ? error.response.data : error.message);
      console.error("Status Code:", error.response ? error.response.status : "No response");
      setMessages((prev) => [...prev, { sender: "ai", text: "Sorry, I couldn't respond." }]);
    } finally {
      setLoading(false);
    }
  };*/


  /*const handleSendMessage = async (text) => {
    if (!text) return;
  
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setLoading(true);
  
    const apiToken = import.meta.env.VITE_HF_API_TOKEN;
  
    try {
      const response = await Promise.race([
        axios.post(
          "https://api-inference.huggingface.co/models/google/flan-t5-small",
          {
            inputs: `Question: ${text} Answer:`,
          },
          {
            headers: {
              Authorization: `Bearer ${apiToken}`,
              "Content-Type": "application/json",
            },
          }
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 10000)
        ),
      ]);
  
      const aiResponse = response.data[0]?.generated_text || "No response generated";
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Hugging Face API Error:", error.response ? error.response.data : error.message);
      setMessages((prev) => [...prev, { sender: "ai", text: "Sorry, I couldn't respond." }]);
    } finally {
      setLoading(false);
    }
  };*/

  /*const handleSendMessage = async (text) => {
    if (!text) return;
  
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setLoading(true);
  
    const apiToken = import.meta.env.VITE_HF_API_TOKEN;
  
    try {
      const response = await Promise.race([
        axios.post(
          "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
          {
            inputs: `<|prompter|>${text}<|endoftext|><|assistant|>`,
          },
          {
            headers: {
              Authorization: `Bearer ${apiToken}`,
              "Content-Type": "application/json",
            },
          }
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 15000)
        ),
      ]);
  
      const aiResponse = response.data[0]?.generated_text?.split("<|assistant|>")[1]?.trim()
        || "No response generated";
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Hugging Face API Error:", error.response ? error.response.data : error.message);
      setMessages((prev) => [...prev, { sender: "ai", text: "Sorry, I couldn't respond." }]);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        <div className="h-96 overflow-y-auto mb-4 p-2 border rounded">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded ${
                msg.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-200 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <div className="text-center text-gray-500">AI is thinking...</div>}
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={toggleRecording}
            className={`p-3 rounded-full ${
              isRecording ? "bg-red-500" : "bg-blue-500"
            } text-white hover:opacity-80`}
          >
            {isRecording ? <Square size={24} /> : <Mic size={24} />}
          </button>
        </div>
        {transcript && (
          <p className="text-center text-gray-600 mt-2">You said: "{transcript}"</p>
        )}
      </div>
    </div>
  );
};

export default VoiceChat;*/


import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Mic, Square, MessageCircle, Send, Volume2 } from "lucide-react";

const VoiceChat = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [textInput, setTextInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.continuous = false;
      recog.interimResults = false;
      recog.lang = "en-US";

      recog.onresult = (event) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        handleSendMessage(text);
      };

      recog.onerror = (event) => console.error("Speech recognition error:", event.error);
      recog.onend = () => setIsRecording(false);

      setRecognition(recog);
    } else {
      console.error("Speech Recognition not supported in this browser.");
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const toggleRecording = () => {
    if (!recognition) return;
    if (isRecording) {
      recognition.stop();
    } else {
      setTranscript("");
      recognition.start();
      setIsRecording(true);
    }
  };

  const handleSendMessage = async (text) => {
    if (!text) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setLoading(true);
    setTextInput("");

    const apiToken = import.meta.env.VITE_HF_API_TOKEN;

    try {
      const response = await Promise.race([
        axios.post(
          "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
          {
            inputs: `<|prompter|>${text}<|endoftext|><|assistant|>`,
          },
          {
            headers: {
              Authorization: `Bearer ${apiToken}`,
              "Content-Type": "application/json",
            },
          }
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 15000)
        ),
      ]);

      const aiResponse = response.data[0]?.generated_text?.split("<|assistant|>")[1]?.trim()
        || "No response generated";
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Hugging Face API Error:", error.response ? error.response.data : error.message);
      setMessages((prev) => [...prev, { sender: "ai", text: "Sorry, I couldn't respond." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim()) {
      handleSendMessage(textInput.trim());
    }
  };

  // Function to get avatar based on sender
  const getAvatar = (sender) => {
    return sender === "user" ? "👤" : "🤖";
  };

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-3xl">
      <div className="flex flex-col w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl h-full">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur p-6 rounded-t-3xl shadow-lg text-center">
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4">
              <MessageCircle size={32} className="text-white" />
            </div>
            <div>
              <h1 className="font-bold text-3xl text-gray-800">MicBot</h1>
              <p className="text-lg text-gray-600">Your voice-powered AI assistant</p>
            </div>
          </div>
        </header>

        {/* Chat Messages */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col gap-6">
            {messages.length === 0 && (
              <div className="text-center p-8 rounded-lg bg-white/20 backdrop-blur-sm text-white">
                <h2 className="font-bold text-2xl mb-3">Welcome to MicBot!</h2>
                <p className="text-xl">Press the microphone button and start speaking, or type your message below.</p>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div className="flex items-center mb-2">
                  <div className={`h-12 w-12 flex items-center justify-center rounded-full text-2xl
                    ${msg.sender === "user" ? "bg-green-400" : "bg-blue-400"}`}>
                    {getAvatar(msg.sender)}
                  </div>
                </div>
                <div
                  className={`rounded-3xl px-6 py-4 shadow-lg w-full max-w-lg text-center ${
                    msg.sender === "user"
                      ? "bg-green-400 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-lg md:text-xl">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-400 text-2xl">
                    {getAvatar("ai")}
                  </div>
                </div>
                <div className="bg-white rounded-3xl px-6 py-4 shadow-lg w-full max-w-lg text-center">
                  <p className="text-gray-700 font-medium mb-2">AI is thinking...</p>
                  <div className="flex gap-2 justify-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white/90 backdrop-blur p-6 rounded-b-3xl shadow-inner">
          {/*transcript && (
            <div className="text-center text-gray-700 text-lg mb-4 italic">
              You said: "{transcript}"
            </div>
          )*/}
          
          <div className="flex flex-col gap-4">
            <form onSubmit={handleTextSubmit} className="flex gap-3">
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full border border-gray-300 px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700 transition-colors"
                disabled={!textInput.trim()}
              >
                <Send size={24} />
              </button>
            </form>
            
            <div className="flex justify-center">
              <button
                onClick={toggleRecording}
                className={`p-6 rounded-full shadow-lg transition-all duration-300 ${
                  isRecording 
                    ? "bg-red-600 animate-pulse" 
                    : "bg-gradient-to-r from-blue-600 to-purple-600"
                } text-white hover:scale-105`}
                aria-label={isRecording ? "Stop recording" : "Start recording"}
              >
                {isRecording ? <Square size={36} /> : <Mic size={36} />}
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default VoiceChat;