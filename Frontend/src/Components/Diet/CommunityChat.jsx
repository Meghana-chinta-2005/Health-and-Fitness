// CommunityChat.jsx (updated)
import React, { useState } from 'react';
import './CommunityChat.css';

const CommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages((prev) => [
        ...prev,
        { user: 'You', text: newMessage, timestamp: new Date().toLocaleString() },
      ]);
      setNewMessage('');
      // Simulate a reply from another user
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            user: 'Community Member',
            text: 'Thanks for sharing! That’s a great idea.',
            timestamp: new Date().toLocaleString(),
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="community-chat-page">
      <section className="chat-header">
        <h1>Community Chat</h1>
        <p className="chat-intro">Connect with others to share tips and progress!</p>
      </section>
      <section className="chat-section">
        <div className="chat-container">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.user === 'You' ? 'user-message' : 'community-message'}`}
              >
                <div className="message-content">
                  <strong>{msg.user}:</strong> {msg.text}
                  <small className="message-timestamp">({msg.timestamp})</small>
                </div>
              </div>
            ))
          ) : (
            <p className="no-messages">No messages yet. Start the conversation!</p>
          )}
        </div>
        <form onSubmit={handleSendMessage} className="chat-form">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="chat-input"
            aria-label="Type your message"
          />
          <button type="submit" className="view-diet-btn send-btn" aria-label="Send Message">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default CommunityChat;