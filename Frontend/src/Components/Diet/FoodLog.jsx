// FoodLog.jsx
import React, { useState, useEffect } from 'react';
import './FoodLog.css';

const FoodLog = () => {
  const [logs, setLogs] = useState(() => {
    try {
      const savedLogs = localStorage.getItem('foodLogs');
      return savedLogs ? JSON.parse(savedLogs) : [];
    } catch (error) {
      console.error('Error parsing foodLogs from localStorage:', error);
      return [];
    }
  });
  const [meal, setMeal] = useState({ time: '', description: '', quantity: '' });

  useEffect(() => {
    try {
      localStorage.setItem('foodLogs', JSON.stringify(logs));
    } catch (error) {
      console.error('Error saving foodLogs to localStorage:', error);
    }
  }, [logs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!meal.time || !meal.description || !meal.quantity) {
      alert('Please fill in all fields.');
      return;
    }

    const newLog = {
      ...meal,
      date: new Date().toISOString(),
    };

    setLogs((prev) => {
      const updatedLogs = [...prev, newLog];
      console.log('Updated logs:', updatedLogs); // Debug log
      return updatedLogs;
    });

    setMeal({ time: '', description: '', quantity: '' });
  };

  return (
    <div>
      <h1>Food Log</h1>
      <p className="diet-intro">Track your daily food intake here.</p>
      <form onSubmit={handleSubmit} className="food-log-form">
        <div className="form-group">
          <label>
            Meal Time:
            <select name="time" value={meal.time} onChange={handleChange}>
              <option value="">Select Time</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            What did you eat?
            <input
              type="text"
              name="description"
              value={meal.description}
              onChange={handleChange}
              placeholder="Enter food details"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Quantity:
            <input
              type="text"
              name="quantity"
              value={meal.quantity}
              onChange={handleChange}
              placeholder="e.g., 2 cups, 100 grams"
            />
          </label>
        </div>
        <button type="submit" className="view-diet-btn">
          Log Food
        </button>
      </form>
      <div className="diet-grid">
        {logs.length === 0 ? (
          <p>No food logs yet. Start logging your meals above!</p>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="diet-card">
              <div className="diet-content">
                <h2>{log.time}</h2>
                <p>{log.description}</p>
                <p className="log-quantity">
                  <strong>Quantity:</strong> {log.quantity}
                </p>
                <p className="log-date">
                  <small>{new Date(log.date).toLocaleString()}</small>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FoodLog;