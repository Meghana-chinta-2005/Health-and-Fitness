import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import './FoodLog.css';

const FoodLog = () => {
  const [logs, setLogs] = useState([]);
  const [meal, setMeal] = useState({ time: '', description: '', quantity: '' });

  useEffect(() => {
    fetchFoodLogs();
  }, []);

  const fetchFoodLogs = async () => {
    try {
      const response = await api.get('/food');
      setLogs(response.data);
    } catch (error) {
      console.error('Error fetching food logs:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!meal.time || !meal.description || !meal.quantity) {
      alert('Please fill in all fields.');
      return;
    }

    const payload = {
      mealTime: meal.time,
      description: meal.description,
      quantity: meal.quantity
    };

    try {
      const response = await api.post('/food', payload);

      setLogs((prev) => [response.data, ...prev]);
      setMeal({ time: '', description: '', quantity: '' });
      alert('Food logged successfully!');
    } catch (error) {
      console.error('Error submitting food log:', error);
      alert('Failed to log food. Please try again.');
    }
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
            <div key={log._id || index} className="diet-card">
              <div className="diet-content">
                <h2>{log.mealTime || log.time}</h2>
                <p>{log.description}</p>
                <p className="log-quantity">
                  <strong>Quantity:</strong> {log.quantity}
                </p>
                <p className="log-date">
                  <small>{new Date(log.createdAt || log.date).toLocaleString()}</small>
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