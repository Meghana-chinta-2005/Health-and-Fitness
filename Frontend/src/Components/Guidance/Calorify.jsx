import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FireIcon, 
  ScaleIcon,
  BeakerIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/solid';
import './Calorify.css';

const Calorify = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male',
    goal: 'maintain',
    activityLevel: 'moderate'
  });
  const [results, setResults] = useState(null);

  const calculateBMI = (weight, heightInCm) => {
    const heightInM = heightInCm / 100;
    return (weight / (heightInM * heightInM)).toFixed(1);
  };

  const calculateCalories = (weight, height, age, gender, activityLevel, goal) => {
    // BMR calculation using Mifflin-St Jeor Equation
    let bmr = gender === 'male' 
      ? (10 * weight) + (6.25 * height) - (5 * age) + 5
      : (10 * weight) + (6.25 * height) - (5 * age) - 161;

    // Activity multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    let totalCalories = bmr * activityMultipliers[activityLevel];

    // Adjust calories based on goal
    switch(goal) {
      case 'lose':
        return Math.round(totalCalories - 500);
      case 'gain':
        return Math.round(totalCalories + 500);
      default:
        return Math.round(totalCalories);
    }
  };

  const calculateProtein = (weight, goal) => {
    // Protein in grams per kg of body weight
    switch(goal) {
      case 'gain':
        return (weight * 2.2).toFixed(1);
      case 'lose':
        return (weight * 2).toFixed(1);
      default:
        return (weight * 1.8).toFixed(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { weight, height, age, gender, activityLevel, goal } = formData;
    
    const bmi = calculateBMI(weight, height);
    const calories = calculateCalories(
      parseFloat(weight),
      parseFloat(height),
      parseFloat(age),
      gender,
      activityLevel,
      goal
    );
    const protein = calculateProtein(parseFloat(weight), goal);

    setResults({
      bmi,
      calories,
      protein,
      goal,
      category: bmi < 18.5 ? 'Underweight' : 
                bmi < 25 ? 'Normal weight' : 
                bmi < 30 ? 'Overweight' : 'Obese'
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="calorify-page">
      <div className="calorify-container">
      

        <div className="content-section">
          <div className="header-section">
            <h1>
              <FireIcon className="header-icon" />
              Calorify Calculator
            </h1>
            <p className="subtitle">Calculate your optimal nutrition intake</p>
          </div>

          <form onSubmit={handleSubmit} className="calculator-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="weight">Weight (kg)</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  min="30"
                  max="300"
                />
              </div>

              <div className="form-group">
                <label htmlFor="height">Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  min="100"
                  max="250"
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="15"
                  max="100"
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select 
                  id="gender"
                  name="gender" 
                  value={formData.gender} 
                  onChange={handleChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="activityLevel">Activity Level</label>
                <select 
                  id="activityLevel"
                  name="activityLevel" 
                  value={formData.activityLevel} 
                  onChange={handleChange}
                >
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Light Activity</option>
                  <option value="moderate">Moderate Activity</option>
                  <option value="active">Very Active</option>
                  <option value="veryActive">Extra Active</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="goal">Goal</label>
                <select 
                  id="goal"
                  name="goal" 
                  value={formData.goal} 
                  onChange={handleChange}
                >
                  <option value="maintain">Maintain Weight</option>
                  <option value="lose">Lose Weight</option>
                  <option value="gain">Gain Weight</option>
                </select>
              </div>
            </div>

            <button type="submit" className="calculate-button">
              Calculate Nutrition Plan
            </button>
          </form>

          {results && (
            <div className="results-section">
              <h2>Your Personalized Plan</h2>
              <div className="results-grid">
                <div className="result-card bmi">
                  <div className="card-header">
                    <ScaleIcon className="result-icon" />
                    <h3>BMI Status</h3>
                  </div>
                  <div className="card-content">
                    <div className="main-value">{results.bmi}</div>
                    <div className="sub-value">{results.category}</div>
                  </div>
                </div>

                <div className="result-card calories">
                  <div className="card-header">
                    <FireIcon className="result-icon" />
                    <h3>Daily Calories</h3>
                  </div>
                  <div className="card-content">
                    <div className="main-value">{results.calories}</div>
                    <div className="sub-value">calories per day</div>
                    <div className="breakdown">
                      <div className="breakdown-item">
                        <span>Breakfast</span>
                        <span>{Math.round(results.calories * 0.3)} cal</span>
                      </div>
                      <div className="breakdown-item">
                        <span>Lunch</span>
                        <span>{Math.round(results.calories * 0.35)} cal</span>
                      </div>
                      <div className="breakdown-item">
                        <span>Dinner</span>
                        <span>{Math.round(results.calories * 0.25)} cal</span>
                      </div>
                      <div className="breakdown-item">
                        <span>Snacks</span>
                        <span>{Math.round(results.calories * 0.1)} cal</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="result-card protein">
                  <div className="card-header">
                    <BeakerIcon className="result-icon" />
                    <h3>Protein Intake</h3>
                  </div>
                  <div className="card-content">
                    <div className="main-value">{results.protein}g</div>
                    <div className="sub-value">protein per day</div>
                    <div className="breakdown">
                      <div className="breakdown-item">
                        <span>Morning</span>
                        <span>{Math.round(results.protein * 0.3)}g</span>
                      </div>
                      <div className="breakdown-item">
                        <span>Afternoon</span>
                        <span>{Math.round(results.protein * 0.4)}g</span>
                      </div>
                      <div className="breakdown-item">
                        <span>Evening</span>
                        <span>{Math.round(results.protein * 0.3)}g</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <button className="back-to-categories" onClick={() => navigate('/guidance')}>
          Back to categories
        </button>
        </div>
      </div>
    </div>
  );
};

export default Calorify;