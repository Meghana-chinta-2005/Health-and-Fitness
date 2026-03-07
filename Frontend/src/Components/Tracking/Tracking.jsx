import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tracking.css';
import { FaWater, FaFireAlt, FaMoon, FaWalking } from 'react-icons/fa';

const Tracking = () => {
  const navigate = useNavigate();

  const trackingCards = [
    {
      id: 'water',
      title: 'Water Intake',
      description: 'Track your daily hydration',
      icon: <FaWater size={50} />,
      route: '/tracking/water',
      current: '1.5L',
      goal: '2.0L',
      color: '#3498db'
    },


    {
      id: 'calories',
      title: 'Calories Count',
      description: 'Track calorie intake and expenditure',
      icon: <FaFireAlt size={50} />,
      route: '/tracking/calories',
      current: '350',
      goal: '500',
      color: '#e74c3c'
    },
    {
      id: 'sleep',
      title: 'Sleep Tracking',
      description: 'Monitor your sleep pattern',
      icon: <FaMoon size={50} />,
      route: '/tracking/sleep',
      current: '7h',
      goal: '8h',
      color: '#9b59b6'
    }
  ];

  return (
    <div className="tracking-page">
      <div className="tracking-grid">
        {trackingCards.map((card) => (
          <div
            key={card.id}
            className="tracking-card"
            onClick={() => navigate(card.route)}
            style={{ '--card-color': card.color }}
          >
            <div className="card-content">
              <div className="card-icon-wrapper">
                {card.icon}
              </div>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
              <div className="card-metrics">
                <div className="metric">
                  <span className="metric-value">{card.current}</span>
                  <span className="metric-label">Current</span>
                </div>
                <div className="metric">
                  <span className="metric-value">{card.goal}</span>
                  <span className="metric-label">Goal</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          className="back-button"
          onClick={() => navigate('/')}
        > Back to Home</button>
      </div>
    </div>
  );
};
export default Tracking;