import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import Chatbot from "../../components-level-2/chatbot/Chatbot";

const ChatbotPage = () => {
  return (
    <div className="chatbot-page">
      <NavBar />

      <main className="chatbot-page-content">
        <div className="chatbot-page-container">

          <div className="chatbot-page-header">
            <h1 className="chatbot-page-title">
              Asistente virtual
            </h1>

            <p className="chatbot-page-subtitle">
              Chatbot
            </p>
          </div>

          <Chatbot />

        </div>
      </main>
    </div>
  );
};

export default ChatbotPage;
