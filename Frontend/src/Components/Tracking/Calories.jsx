import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [calorieData, setCalorieData] = useState({
    food: '',
    calories: 0,
    mealType: 'breakfast',
    date: new Date().toISOString().split('T')[0],
    isCustom: false
  });

  const [calorieLog, setCalorieLog] = useState([]);

  useEffect(() => {
    const savedLog = localStorage.getItem('calorieLog');
    if (savedLog) {
      setCalorieLog(JSON.parse(savedLog));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const foodCalories = calorieData.isCustom ? parseInt(calorieData.calories) : foodData[calorieData.mealType]?.find(food => food.name === calorieData.food)?.calories;
    if (!foodCalories) return alert('Please select a valid food item or enter correct custom values.');

    const newEntry = {
      ...calorieData,
      calories: foodCalories,
      id: Date.now(),
      time: new Date().toLocaleTimeString()
    };

    const updatedLog = [newEntry, ...calorieLog];
    setCalorieLog(updatedLog);
    localStorage.setItem('calorieLog', JSON.stringify(updatedLog));
    alert(`Added ${calorieData.food} with ${foodCalories} calories.`);
  };

  const handleResetHistory = () => {
    if (window.confirm('Are you sure you want to clear all calorie history?')) {
      setCalorieLog([]);
      localStorage.removeItem('calorieLog');
    }
  };

  const handleFoodChange = (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      setCalorieData({ ...calorieData, isCustom: true, food: '', calories: '' });
    } else {
      setCalorieData({ ...calorieData, isCustom: false, food: value, calories: 0 });
    }
  };

  return (
    <div className="calories-page">
      <button onClick={() => navigate(-1)} className="back-btn"><FaChevronLeft /> Back to Tracking Page</button>
      <div className="calories-container">
        <h1><FaFire /> Calorie Tracker</h1>
        <p>Monitor your daily calorie intake</p>

        <form onSubmit={handleSubmit}>
          <label>Meal Type</label>
          <select value={calorieData.mealType} onChange={(e) => setCalorieData({ ...calorieData, mealType: e.target.value })}>
            {Object.keys(foodData).map(meal => <option key={meal} value={meal}>{meal}</option>)}
          </select>

          <label>Food Item</label>
          <select onChange={handleFoodChange} value={calorieData.isCustom ? 'custom' : calorieData.food}>
            <option value="">Select Food</option>
            {foodData[calorieData.mealType]?.map(food => (
              <option key={food.name} value={food.name}>{food.name}</option>
            ))}
            <option value="custom">Custom Food</option>
          </select>

          {calorieData.isCustom && (
            <>
              <label>Custom Food Name</label>
              <input type="text" value={calorieData.food} onChange={(e) => setCalorieData({ ...calorieData, food: e.target.value })} />

              <label>Calories</label>
              <input type="number" value={calorieData.calories} onChange={(e) => setCalorieData({ ...calorieData, calories: e.target.value })} />
            </>
          )}

          <button type="submit">Add Entry</button>
        </form>

        <button onClick={handleResetHistory} className="reset-btn">Reset History</button>

        <h2>Calorie Log</h2>
        <ul>
          {calorieLog.map(entry => (
            <li key={entry.id}>
              {entry.food} - {entry.calories} calories ({entry.mealType}) on {entry.date} at {entry.time}
            </li>
          ))}
        </ul>

        {/* <button onClick={() => navigate(-1)} className="back-button"><FaChevronLeft /> Back to Tracking Page</button> */}
      </div>
    </div>
  );
};

export default Calories;
