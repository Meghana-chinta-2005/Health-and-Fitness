// Arena.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Arena.css';

const Arena = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: localStorage.getItem('username') || 'User',
    bmi: localStorage.getItem('bmi') || 'Not calculated',
    bodyFat: '18%',
    upcomingClasses: [
      { id: 1, name: 'Yoga', date: '2024-01-20', time: '10:00 AM', trainer: 'Sarah' },
      { id: 2, name: 'HIIT', date: '2024-01-21', time: '2:00 PM', trainer: 'Mike' },
    ],
    appointments: [
      { id: 1, type: 'Personal Training', trainer: 'John', date: '2024-01-22', time: '3:00 PM' },
    ],
  });

  const [selectedExercises, setSelectedExercises] = useState(
    JSON.parse(localStorage.getItem('dashboardExercises')) || []
  );

  const [newRecipe, setNewRecipe] = useState({ name: '', ingredients: '', calories: '' });
  const [nutritionGoals, setNutritionGoals] = useState(
    JSON.parse(localStorage.getItem('nutritionGoals')) || {
      calories: 2000,
      protein: 100,
      carbs: 250,
      fats: 70,
    }
  );
  const [communityPosts, setCommunityPosts] = useState(
    JSON.parse(localStorage.getItem('communityPosts')) || []
  );

  const handleShareToCommunity = () => {
    const post = {
      user: userData.name,
      report: `Shared Nutrition Goals:\nCalories: ${nutritionGoals.calories}, Protein: ${nutritionGoals.protein}g, Carbs: ${nutritionGoals.carbs}g, Fats: ${nutritionGoals.fats}g`,
      timestamp: new Date().toISOString(),
    };

    const updatedPosts = [...communityPosts, post];
    localStorage.setItem('communityPosts', JSON.stringify(updatedPosts));
    setCommunityPosts(updatedPosts);
  };

  const handleAddRecipe = () => {
    if (!newRecipe.name || !newRecipe.ingredients || !newRecipe.calories) {
      alert('Please fill in all fields.');
      return;
    }

    // Since we're removing the diet report, we won't log recipes to foodLogs
    // Instead, we can just notify the user that the recipe was added
    alert(`Recipe "${newRecipe.name}" added successfully!`);
    setNewRecipe({ name: '', ingredients: '', calories: '' });
  };

  const handleSetGoals = () => {
    localStorage.setItem('nutritionGoals', JSON.stringify(nutritionGoals));
    alert('Nutrition goals updated!');
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setUserData((prev) => ({
        ...prev,
        bmi: localStorage.getItem('bmi') || 'Not calculated',
      }));
      setSelectedExercises(JSON.parse(localStorage.getItem('dashboardExercises')) || []);
      setNutritionGoals(
        JSON.parse(localStorage.getItem('nutritionGoals')) || {
          calories: 2000,
          protein: 100,
          carbs: 250,
          fats: 70,
        }
      );
      setCommunityPosts(JSON.parse(localStorage.getItem('communityPosts')) || []);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const removeExercise = (exerciseId) => {
    const updatedExercises = selectedExercises.filter((ex) => ex.id !== exerciseId);
    setSelectedExercises(updatedExercises);
    localStorage.setItem('dashboardExercises', JSON.stringify(updatedExercises));
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
              <div key={exercise.id} className="exercise-item">
                <div className="exercise-info">
                  <img src={exercise.image} alt={exercise.name} />
                  <div className="exercise-details">
                    <h3>{exercise.name}</h3>
                    <p>{exercise.description}</p>
                    <p className="sets-info">{exercise.sets}</p>
                    <div className="instructions">
                      <h4>Instructions:</h4>
                      <ul>
                        {exercise.instructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="exercise-actions">
                  <button className="start-btn">Start Exercise</button>
                  <button
                    className="remove-btn"
                    onClick={() => removeExercise(exercise.id)}
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
              placeholder="Daily Calories (e.g., 2000)"
              value={nutritionGoals.calories}
              onChange={(e) => setNutritionGoals({ ...nutritionGoals, calories: e.target.value })}
            />
            <input
              type="number"
              placeholder="Protein (g)"
              value={nutritionGoals.protein}
              onChange={(e) => setNutritionGoals({ ...nutritionGoals, protein: e.target.value })}
            />
            <input
              type="number"
              placeholder="Carbs (g)"
              value={nutritionGoals.carbs}
              onChange={(e) => setNutritionGoals({ ...nutritionGoals, carbs: e.target.value })}
            />
            <input
              type="number"
              placeholder="Fats (g)"
              value={nutritionGoals.fats}
              onChange={(e) => setNutritionGoals({ ...nutritionGoals, fats: e.target.value })}
            />
            <button onClick={handleSetGoals}>Set Goals</button>
          </div>
        </div>

        <div className="arena-card recipe-logger">
          <h2>Log a Recipe</h2>
          <div className="recipe-logger-form">
            <input
              type="text"
              placeholder="Recipe Name"
              value={newRecipe.name}
              onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
            />
            <textarea
              placeholder="Ingredients (e.g., 1 cup flour, 2 eggs)"
              value={newRecipe.ingredients}
              onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
            />
            <input
              type="number"
              placeholder="Total Calories"
              value={newRecipe.calories}
              onChange={(e) => setNewRecipe({ ...newRecipe, calories: e.target.value })}
            />
            <button onClick={handleAddRecipe}>Add Recipe</button>
          </div>
        </div>

        <div className="arena-card community">
          <h2>Community</h2>
          <button onClick={handleShareToCommunity}>Share Goals to Community</button>
          <div className="community-posts">
            {communityPosts.length > 0 ? (
              communityPosts.map((post, index) => (
                <div key={index} className="community-post">
                  <p><strong>{post.user}</strong> shared:</p>
                  <p>{post.report}</p>
                  <p className="post-timestamp">
                    <small>{new Date(post.timestamp).toLocaleString()}</small>
                  </p>
                </div>
              ))
            ) : (
              <p className="no-posts">No community posts yet. Share your goals!</p>
            )}
          </div>
        </div>

        <div className="arena-card book-classes">
          <h2>Book New Classes</h2>
          <div className="booking-grid">
            <button className="book-btn yoga">Yoga Class</button>
            <button className="book-btn zumba">Zumba Class</button>
            <button className="book-btn hiit">HIIT Training</button>
            <button className="book-btn pt">Personal Training</button>
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