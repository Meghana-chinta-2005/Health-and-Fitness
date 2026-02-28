import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Water.css';

const Water = () => {
  const navigate = useNavigate();
  const [waterIntake, setWaterIntake] = useState(0);
  const [dailyGoal] = useState(2000);
  const [waterLog, setWaterLog] = useState([]);
  const [customAmount, setCustomAmount] = useState('');

  useEffect(() => {
    const savedWaterIntake = localStorage.getItem('waterIntake');
    const savedWaterLog = localStorage.getItem('waterLog');
    const today = new Date().toLocaleDateString();
    
    if (savedWaterIntake) {
      const savedDate = localStorage.getItem('lastTrackedDate');
      if (savedDate === today) {
        setWaterIntake(parseInt(savedWaterIntake));
        if (savedWaterLog) setWaterLog(JSON.parse(savedWaterLog));
      } else {
        resetWaterIntake();
      }
    }
  }, []);

  const handleAddWater = (amount) => {
    const newTotal = waterIntake + amount;
    const now = new Date();
    
    const newLog = [...waterLog, {
      amount,
      date: now.toLocaleDateString(),
      timestamp: now.toLocaleTimeString(),
      total: newTotal
    }];
    
    setWaterLog(newLog);
    setWaterIntake(newTotal);
    localStorage.setItem('waterIntake', newTotal);
    localStorage.setItem('waterLog', JSON.stringify(newLog));
    localStorage.setItem('lastTrackedDate', now.toLocaleDateString());
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setCustomAmount(value);
  };

  const handleAddCustomAmount = () => {
    const amount = parseInt(customAmount);
    if (amount > 0) {
      handleAddWater(amount);
      setCustomAmount('');
    }
  };

  const resetWaterIntake = () => {
    setWaterIntake(0);
    setWaterLog([]);
    localStorage.setItem('waterIntake', 0);
    localStorage.setItem('waterLog', JSON.stringify([]));
    localStorage.setItem('lastTrackedDate', new Date().toLocaleDateString());
  };

  return (
    <div className="water-page">
      <div className="water-container">
        <div className="water-header">
          <h1>Water Intake Tracking</h1>
          <p>Stay hydrated, stay healthy!</p>
        </div>

        <div className="water-tracking-card">
          <div className="water-progress">
            <div className="water-glass">
              <div 
                className="water-fill" 
                style={{ height: `${Math.min((waterIntake / dailyGoal) * 100, 100)}%` }}
              />
              <div className="water-content">
                <h2>{waterIntake}ml</h2>
                <p>of {dailyGoal}ml</p>
              </div>
            </div>
          </div>

          <div className="water-controls">
            <button onClick={() => handleAddWater(250)} className="water-btn">
              Add 250ml
            </button>
            <button onClick={() => handleAddWater(500)} className="water-btn">
              Add 500ml
            </button>
            <button onClick={() => handleAddWater(1000)} className="water-btn">
              Add 1000ml
            </button>
            <button onClick={resetWaterIntake} className="reset-btn">
              Reset Day
            </button>
          </div>

          <div className="custom-input-container">
            <input
              type="text"
              className="custom-water-input"
              placeholder="Enter custom amount (ml)"
              value={customAmount}
              onChange={handleCustomAmountChange}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && customAmount) {
                  handleAddCustomAmount();
                }
              }}
            />
            <button 
              className="add-custom-btn"
              onClick={handleAddCustomAmount}
              disabled={!customAmount}
            >
              Add Custom
            </button>
          </div>

          <div className="water-log">
            <h3>Today's Water Log</h3>
            <div className="log-entries">
              {waterLog.map((entry, index) => (
                <div key={index} className="log-entry">
                  <span>{entry.timestamp}</span>
                  <span>+{entry.amount}ml</span>
                  <span>Total: {entry.total}ml</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="back-button" onClick={() => navigate('/tracking')}>
          Back to Tracking
        </button>
      </div>
    </div>
  );
};

export default Water;