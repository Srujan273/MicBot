import React from "react";
import VoiceChat from "./components/VoiceChat";

const App = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-blue-100 p-4">
      <div className="w-full max-w-4xl h-[90vh]">
        <VoiceChat />
      </div>
    </div>
  );
};

export default App;
