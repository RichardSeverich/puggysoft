import React from "react";
import { Card } from "react-bootstrap";
import { FiMessageCircle } from "react-icons/fi";
import "./ChatbotMessage.css";

const ChatbotMessage = ({ message }) => {
  return (
    <div className="chatbot-message">
      <Card className="chatbot-message-card">
        <Card.Body className="chatbot-message-body">
          <div className="chatbot-message-icon">
            <FiMessageCircle />
          </div>

          <div className="chatbot-message-content">
            {message}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChatbotMessage;
