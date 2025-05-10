import React, { useState, useRef, useEffect, useContext } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import '../styles/chatInterface.css';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';

const ChatInterfaceModal = ({ show, handleClose }) => {
  const { backendUrl } = useContext(ShopContext);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!currentMessage.trim()) return;
    
    // Add user message to chat
    const userMessage = { text: currentMessage, sender: 'user' };
    setMessages([...messages, userMessage]);
    
    // Save the message before clearing the input
    const messageToSend = currentMessage;
    setCurrentMessage('');
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Make API call to the backend
      const response = await axios.post(`${backendUrl}/api/ai/text`, {
        text: messageToSend
      });
      console.log("AI Response:", response.data.response);
      // Add bot response to chat
      const botReply = { 
        text: response.data.response || "Sorry, I couldn't process your request.", 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botReply]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      // Add error message as bot response
      const errorMessage = { 
        text: "Sorry, I'm having trouble connecting to the server. Please try again later.", 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-modal-container">
      <Modal 
        show={show} 
        onHide={handleClose} 
        size="lg" 
        centered
        dialogClassName="chat-modal-dialog"
      >
        <Modal.Header closeButton>
          <Modal.Title>Customer Support Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="chat-container">
            <div className="chat-messages-container">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                >
                  <div className="message-content">{message.text}</div>
                </div>
              ))}
              {isLoading && (
                <div className="message bot-message">
                  <div className="message-content typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <Form onSubmit={handleSendMessage} className="message-input-form">
              <Form.Group className="message-input-container">
                <Form.Control
                  type="text"
                  placeholder="Type your message here..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  className="message-input"
                  disabled={isLoading}
                />
                <Button 
                  variant="primary" 
                  type="submit"
                  className="send-button"
                  disabled={!currentMessage.trim() || isLoading}
                >
                  {isLoading ? "Sending..." : "Send"}
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChatInterfaceModal;
