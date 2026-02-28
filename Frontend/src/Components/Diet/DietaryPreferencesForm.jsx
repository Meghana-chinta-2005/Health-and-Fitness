// DietaryPreferencesForm.jsx
import React, { useState } from 'react';
import './DietaryPreferencesForm.css';

const DietaryPreferencesForm = ({ onSubmit }) => {
  const [preferences, setPreferences] = useState({
    goal: '',
    restriction: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="dietary-preferences-form">
      <h2>Enter Your Preferences</h2>
      <div className="form-group">
        <label>
          Fitness Goal:
          <select name="goal" value={preferences.goal} onChange={handleChange}>
            <option value="">Select Goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Dietary Restriction:
          <select name="restriction" value={preferences.restriction} onChange={handleChange}>
            <option value="">None</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={preferences.location}
            onChange={handleChange}
            placeholder="Enter your city"
          />
        </label>
      </div>
      <button type="submit" className="view-diet-btn">
        Submit Preferences
      </button>
    </form>
  );
};

export default DietaryPreferencesForm;