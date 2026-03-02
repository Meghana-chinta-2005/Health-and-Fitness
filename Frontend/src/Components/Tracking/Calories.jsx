import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaFire, FaChevronLeft } from 'react-icons/fa';
import './Calories.css';

const foodData = {
  breakfast: [
    { name: 'Chappati', calories: 70 },
    { name: 'Poha', calories: 250 },
    { name: 'Idli', calories: 39 },
    { name: 'Dosa', calories: 133 },
    { name: 'Eggs', calories: 78 }
  ],
  lunch: [
    { name: 'Rice', calories: 200 },
    { name: 'Dal', calories: 150 },
    { name: 'Paneer Curry', calories: 265 },
    { name: 'Chicken Curry', calories: 300 },
    { name: 'Chappati', calories: 70 }
  ],
  dinner: [
    { name: 'Khichdi', calories: 180 },
    { name: 'Vegetable Curry', calories: 150 },
    { name: 'Fish Curry', calories: 220 },
    { name: 'Rice', calories: 200 },
    { name: 'Chappati', calories: 70 }
  ],
  snack: [
    { name: 'Samosa', calories: 260 },
    { name: 'Biscuits', calories: 150 },
    { name: 'Fruit Salad', calories: 120 },
    { name: 'Nuts', calories: 180 },
    { name: 'Yogurt', calories: 100 }
  ]
};

const Calories = () => {
  const navigate = useNavigate();
  const [calories, setCalories] = useState(0);
  const [calorieLog, setCalorieLog] = useState([]);
  const [formData, setFormData] = useState({
    food: '',
    calories: '',
    mealType: 'breakfast',
    isCustom: false
  });

  useEffect(() => {
    fetchCalorieHistory();
  }, []);

  const fetchCalorieHistory = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/tracking/calories', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCalorieLog(response.data);
      const total = response.data.reduce((sum, item) => sum + item.calories, 0);
      setCalories(total);
    } catch (error) {
      console.error('Error fetching calorie history:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let foodName = formData.food;
    let foodCalories = parseInt(formData.calories);

    if (!formData.isCustom) {
      const selectedFood = foodData[formData.mealType].find(f => f.name === foodName);
      if (selectedFood) {
        foodCalories = selectedFood.calories;
      }
    }

    if (!foodName || isNaN(foodCalories)) {
      return alert('Please select a valid food item or enter custom values.');
    }

    const newEntry = {
      foodItem: foodName,
      calories: foodCalories,
      mealType: formData.mealType,
      date: new Date().toLocaleDateString(),
      timestamp: new Date().toLocaleTimeString()
    };

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/tracking/calories', newEntry, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setCalorieLog(prev => [response.data, ...prev]);
      setCalories(prev => prev + foodCalories);
      setFormData({ ...formData, food: '', calories: '', isCustom: false });
      alert(`Added ${foodName} with ${foodCalories} calories.`);
    } catch (error) {
      console.error('Error saving calories:', error);
      alert('Failed to save calorie data. Please try again.');
    }
  };

  const handleFoodChange = (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      setFormData({ ...formData, isCustom: true, food: '', calories: '' });
    } else {
      setFormData({ ...formData, isCustom: false, food: value, calories: '' });
    }
  };

  const handleResetHistory = () => {
    alert('Clear History is managed in the database for tracking your progress.');
  };

  return (
    <div className="calories-page">
      <button onClick={() => navigate(-1)} className="back-btn"><FaChevronLeft /> Back to Tracking Page</button>
      <div className="calories-container">
        <h1><FaFire /> Calorie Tracker</h1>
        <p>Monitor your daily calorie intake</p>

        <form onSubmit={handleSubmit}>
          <label>Meal Type</label>
          <select value={formData.mealType} onChange={(e) => setFormData({ ...formData, mealType: e.target.value })}>
            {Object.keys(foodData).map(meal => <option key={meal} value={meal}>{meal}</option>)}
          </select>

          <label>Food Item</label>
          <select onChange={handleFoodChange} value={formData.isCustom ? 'custom' : formData.food}>
            <option value="">Select Food</option>
            {foodData[formData.mealType].map(food => (
              <option key={food.name} value={food.name}>{food.name}</option>
            ))}
            <option value="custom">Custom Food</option>
          </select>

          {formData.isCustom && (
            <>
              <label>Custom Food Name</label>
              <input
                type="text"
                value={formData.food}
                onChange={(e) => setFormData({ ...formData, food: e.target.value })}
                placeholder="Enter food name"
                required
              />

              <label>Calories</label>
              <input
                type="number"
                value={formData.calories}
                onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                placeholder="Enter calorie amount"
                required
              />
            </>
          )}

          <button type="submit">Add Entry</button>
        </form>

        <button onClick={handleResetHistory} className="reset-btn">Reset History</button>

        <h2>Calorie Log</h2>
        <ul>
          {calorieLog.map((entry, index) => (
            <li key={entry._id || index}>
              {entry.foodItem} - {entry.calories} calories ({entry.mealType}) on {entry.date} at {entry.timestamp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calories;
