import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../utils/api';
import './Arena.css';

const Arena = () => {
  const navigate = useNavigate();
  const { user: username } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: username || 'User',
    bmi: 'Not calculated',
    bodyFat: '18%',
    upcomingClasses: [
      { id: 1, name: 'Yoga', date: '2024-01-20', time: '10:00 AM', trainer: 'Sarah' },
      { id: 2, name: 'HIIT', date: '2024-01-21', time: '2:00 PM', trainer: 'Mike' },
    ],
    appointments: [
      { id: 1, type: 'Personal Training', trainer: 'John', date: '2024-01-22', time: '3:00 PM' },
    ],
  });

  const [selectedExercises, setSelectedExercises] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name: '', ingredients: '', calories: '' });
  const [nutritionGoals, setNutritionGoals] = useState({
    calories: 2000,
    protein: 100,
    carbs: 250,
    fats: 70,
  });
  const [communityPosts, setCommunityPosts] = useState([]);

  useEffect(() => {
    fetchArenaData();
  }, []);

  const fetchArenaData = async () => {
    try {
      setIsLoading(true);
      const [exerciseRes] = await Promise.all([
        api.get('/exercises'),
      ]);

      setSelectedExercises(exerciseRes.data);
    } catch (error) {
      console.error('Error fetching arena data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShareToCommunity = () => {
    const post = {
      user: userData.name,
      report: `Shared Nutrition Goals:\nCalories: ${nutritionGoals.calories}, Protein: ${nutritionGoals.protein}g, Carbs: ${nutritionGoals.carbs}g, Fats: ${nutritionGoals.fats}g`,
      timestamp: new Date().toISOString(),
    };
    setCommunityPosts([post, ...communityPosts]);
  };

  const handleAddRecipe = () => {
    if (!newRecipe.name || !newRecipe.ingredients || !newRecipe.calories) {
      alert('Please fill in all fields.');
      return;
    }
    alert(`Recipe "${newRecipe.name}" added successfully!`);
    setNewRecipe({ name: '', ingredients: '', calories: '' });
  };

  const handleSetGoals = async () => {
    alert('Nutrition goals updated in your session!');
  };

  const removeExercise = async (id, backendId) => {
    try {
      await api.delete(`/exercises/${backendId}`);
      setSelectedExercises(prev => prev.filter(ex => ex._id !== backendId));
    } catch (error) {
      console.error('Error removing exercise:', error);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="arena-container">
      <div className="arena-header">
        <h1>Welcome to Your Training Arena, {userData.name}!</h1>
        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-label">BMI</span>
            <span className="stat-value">{userData.bmi}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Body Fat</span>
            <span className="stat-value">{userData.bodyFat}</span>
          </div>
        </div>
      </div>

      <div className="arena-grid">
        <div className="arena-card selected-exercises">
          <h2>Your Workout Plan</h2>
          <div className="exercise-list">
            {selectedExercises.map((exercise) => (
              <div key={exercise._id || exercise.id} className="exercise-item">
                <div className="exercise-info">
                  <img src={exercise.image} alt={exercise.name} />
                  <div className="exercise-details">
                    <h3>{exercise.name}</h3>
                    <p>{exercise.description}</p>
                    <p className="sets-info">{exercise.sets}</p>
                    {exercise.instructions && Array.isArray(exercise.instructions) && (
                      <div className="instructions">
                        <h4>Instructions:</h4>
                        <ul>
                          {exercise.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="exercise-actions">
                  <button className="start-btn">Start Exercise</button>
                  <button
                    className="remove-btn"
                    onClick={() => removeExercise(exercise.id, exercise._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            {selectedExercises.length === 0 && (
              <div className="no-exercises">
                <p>Your workout plan is empty!</p>
                <p>Add exercises from the workout categories to build your plan.</p>
              </div>
            )}
          </div>
        </div>

        <div className="arena-card upcoming-classes">
          <h2>Upcoming Classes</h2>
          <div className="class-list">
            {userData.upcomingClasses.map((classItem) => (
              <div key={classItem.id} className="class-item">
                <div className="class-info">
                  <h3>{classItem.name}</h3>
                  <p>with {classItem.trainer}</p>
                  <p>
                    {classItem.date} at {classItem.time}
                  </p>
                </div>
                <div className="class-actions">
                  <button className="reschedule-btn">Reschedule</button>
                  <button className="cancel-btn">Cancel</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ... (rest of the cards) */}
        <div className="arena-card appointments">
          <h2>Personal Training Sessions</h2>
          <div className="appointment-list">
            {userData.appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-item">
                <div className="appointment-info">
                  <h3>{appointment.type}</h3>
                  <p>with {appointment.trainer}</p>
                  <p>
                    {appointment.date} at {appointment.time}
                  </p>
                </div>
                <div className="appointment-actions">
                  <button className="reschedule-btn">Reschedule</button>
                  <button className="cancel-btn">Cancel</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="arena-card nutrition-goals">
          <h2>Set Your Nutrition Goals</h2>
          <div className="nutrition-goals-form">
            <input
              type="number"
              placeholder="Daily Calories"
              value={nutritionGoals.calories}
              onChange={(e) => setNutritionGoals({ ...nutritionGoals, calories: e.target.value })}
            />
            <button onClick={handleSetGoals}>Set Goals</button>
          </div>
        </div>
      </div>

      <button className="back-button" onClick={handleBack}>
        Back to Home
      </button>
    </div>
  );
};

export default Arena;