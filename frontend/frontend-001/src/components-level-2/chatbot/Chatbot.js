import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Form,
  Button,
  Spinner,
  Badge
} from "react-bootstrap";

import {
  FiMessageCircle,
  FiSend,
  FiTrash2,
  FiArrowDown
} from "react-icons/fi";

import { LuSparkles } from "react-icons/lu";

import requestManager from "../../api/RequestManager";
import messageManager from "../../actions/HandleErrorMessages";

import ChatbotMessage from "../../components-level-1/ChatbotMessage";
import "./Chatbot.css";

const API_ENDPOINT = "chatbot";

const SUGGESTIONS = [
  "¿Que cursos ofrecen?",
  "¿Como puedo inscribirme?",
  "¿Cuales son los horarios?"
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Desplazar automaticamente hasta el ultimo mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [messages, loading]);

  // Enviar mensaje al backend
  const handleSendMessage = (text = input) => {
    const message = text.trim();
    if (!message || loading) return;
    setMessages((previous) => [
      ...previous,
      {
        id: Date.now(),
        content: message
      }
    ]);

    setInput("");
    setLoading(true);

    requestManager.post(API_ENDPOINT, message,
      (response) => {
        // Validar respuesta exitosa
        if (
          response &&
          response.status >= 200 &&
          response.status < 300
        ) {
          const chatbotAnswer = response.data.message.content;
          const answer = typeof chatbotAnswer === "string"
              ? chatbotAnswer
              : String(chatbotAnswer?.response ?? "");

          setMessages((previous) => [
            ...previous,
            {
              id: Date.now() + 1,
              content:
                answer || "No se recibió una respuesta."
            }
          ]);
        } else {
          // Manejar errores HTTP
          const errorMessage = messageManager.getErrorMessage(response);
          setMessages((previous) => [
            ...previous,
            {
              id: Date.now() + 1,
              content: errorMessage || "No fue posible obtener una respuesta. Inténtalo nuevamente."
            }
          ]);
        }
        setLoading(false);
        textareaRef.current?.focus();
      }
    );
  };

  // Enviar con Enter; Shift + Enter agrega una nueva línea
  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  // Limpiar conversación
  const handleClearChat = () => {
    if (loading) return;

    setMessages([]);
    setInput("");
    textareaRef.current?.focus();
  };

  return (
    <Card className="chatbot-container">
      {/* Encabezado */}
      <div className="chatbot-header">
        <div className="chatbot-header-icon">
          <FiMessageCircle />
        </div>

        <div className="chatbot-header-info">
          <h5>Asistente virtual</h5>

          <div className="chatbot-status">
            <span className="chatbot-status-dot" />
            Chatbot
          </div>
        </div>

        <div className="chatbot-header-actions">
          <Badge
            bg="light"
            text="dark"
            className="chatbot-badge"
          >
            <LuSparkles/> IA
          </Badge>

          <Button
            variant="light"
            className="chatbot-clear-button"
            onClick={handleClearChat}
            disabled={loading || messages.length === 0}
            title="Limpiar conversación"
            aria-label="Limpiar conversación"
          >
            <FiTrash2 />
          </Button>
        </div>
      </div>

      {/* Área de conversación */}
      <div className="chatbot-conversation">
        {messages.length === 0 ? (
          <div className="chatbot-welcome">
            <div className="chatbot-welcome-icon">
              <LuSparkles/>
            </div>

            <h4>¡Hola! ¿En qué puedo ayudarte?</h4>

            <p>
              Soy el asistente virtual.
              Puedes consultarme.
            </p>

            <div className="chatbot-suggestions">
              <span className="chatbot-suggestions-title">
                Puedes preguntarme:
              </span>

              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  className="chatbot-suggestion"
                  onClick={() => handleSendMessage(suggestion)}
                  disabled={loading}
                >
                  {suggestion}
                  <FiArrowDown />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <ChatbotMessage
                key={msg.id}
                message={msg.content}
              />
            ))}
          </div>
        )}

        {/* Indicador de respuesta */}
        {loading && (
          <div className="chatbot-loading">
            <Spinner animation="grow" size="sm" />
            <span>El asistente está escribiendo...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Campo para escribir */}
      <div className="chatbot-input-area">
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            handleSendMessage();
          }}
        >
          <div className="chatbot-input-wrapper">
            <Form.Control
              ref={textareaRef}
              as="textarea"
              rows={1}
              className="chatbot-input"
              placeholder="Escribe tu consulta aquí..."
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
              disabled={loading}
              aria-label="Escribe tu mensaje"
            />

            <Button
              type="submit"
              className="chatbot-send-button"
              disabled={!input.trim() || loading}
              aria-label="Enviar mensaje"
              title="Enviar mensaje"
            >
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                <FiSend />
              )}
            </Button>
          </div>
        </Form>

        <div className="chatbot-footer">
          <span>
            <LuSparkles/> Asistente con inteligencia artificial
          </span>

          <span>Chatbot</span>
        </div>
      </div>
    </Card>
  );
};

export default Chatbot;
