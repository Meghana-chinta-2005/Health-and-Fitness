import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './ProgressTracking.css';

const ProgressTracking = () => {
  // State for workout logging
  const [workouts, setWorkouts] = useState([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [personalBests, setPersonalBests] = useState({});
  const [newWorkout, setNewWorkout] = useState({
    exercise: '',
    sets: '',
    reps: '',
    weight: '',
    date: new Date().toISOString().split('T')[0]
  });

  // State for goals
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({
    title: '',
    type: 'weight',
    target: '',
    deadline: '',
    startDate: new Date().toISOString().split('T')[0],
    current: ''
  });

  // Calculate streak
  useEffect(() => {
    const calculateStreak = () => {
      let streak = 0;
      const today = new Date();
      const sortedWorkouts = [...workouts].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
      );

      for (let i = 0; i < sortedWorkouts.length; i++) {
        const workoutDate = new Date(sortedWorkouts[i].date);
        const diff = today.getDate() - workoutDate.getDate();
        if (diff === i) streak++;
        else break;
      }
      setCurrentStreak(streak);
    };

    calculateStreak();
  }, [workouts]);

  // Update personal bests
  useEffect(() => {
    const updatePersonalBests = () => {
      const bests = {};
      workouts.forEach(workout => {
        if (!bests[workout.exercise] || 
            parseFloat(workout.weight) > parseFloat(bests[workout.exercise])) {
          bests[workout.exercise] = workout.weight;
        }
      });
      setPersonalBests(bests);
    };

    updatePersonalBests();
  }, [workouts]);

  // Chart data
  const chartData = {
    labels: workouts.slice(-7).map(w => w.date),
    datasets: [
      {
        label: 'Weight Lifted (kg)',
        data: workouts.slice(-7).map(w => w.weight),
        borderColor: '#00695c',
        tension: 0.1
      }
    ]
  };

  // Handle workout submission
  const handleWorkoutSubmit = (e) => {
    e.preventDefault();
    setWorkouts([...workouts, newWorkout]);
    setNewWorkout({
      exercise: '',
      sets: '',
      reps: '',
      weight: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  // Handle goal submission
  const handleGoalSubmit = (e) => {
    e.preventDefault();
    setGoals([...goals, { 
      ...newGoal, 
      id: Date.now(),
      progress: 0,
      achieved: false 
    }]);
    setNewGoal({
      title: '',
      type: 'weight',
      target: '',
      deadline: '',
      startDate: new Date().toISOString().split('T')[0],
      current: ''
    });
  };

  // Calculate goal progress
  const calculateProgress = (goal) => {
    const total = goal.target - goal.current;
    const current = goal.target - goal.current;
    return (current / total) * 100;
  };

  return (
    <div className="progress-tracking-container">
      <h1>Progress Tracking</h1>
      
      {/* Workout Logging Section */}
      <section className="workout-section">
        <h2>Workout Progress</h2>
        <div className="stats-container">
          <div className="stat-card">
            <h3>Current Streak</h3>
            <p>{currentStreak} days</p>
          </div>
          <div className="stat-card">
            <h3>Personal Bests</h3>
            {Object.entries(personalBests).map(([exercise, weight]) => (
              <p key={exercise}>{exercise}: {weight}kg</p>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <Line data={chartData} options={{ responsive: true }} />
        </div>

        <form onSubmit={handleWorkoutSubmit} className="workout-form">
          <h3>Log Workout</h3>
          <div className="form-group">
            <input
              type="text"
              placeholder="Exercise Name"
              value={newWorkout.exercise}
              onChange={(e) => setNewWorkout({ ...newWorkout, exercise: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Sets"
              value={newWorkout.sets}
              onChange={(e) => setNewWorkout({ ...newWorkout, sets: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Reps"
              value={newWorkout.reps}
              onChange={(e) => setNewWorkout({ ...newWorkout, reps: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              value={newWorkout.weight}
              onChange={(e) => setNewWorkout({ ...newWorkout, weight: e.target.value })}
              required
            />
            <input
              type="date"
              value={newWorkout.date}
              onChange={(e) => setNewWorkout({ ...newWorkout, date: e.target.value })}
              required
            />
          </div>
          <button type="submit">Log Workout</button>
        </form>
      </section>

      {/* Goals Section */}
      <section className="goals-section">
        <h2>Fitness Goals</h2>
        <form onSubmit={handleGoalSubmit} className="goal-form">
          <h3>Set New Goal</h3>
          <div className="form-group">
            <input
              type="text"
              placeholder="Goal Title"
              value={newGoal.title}
              onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
              required
            />
            <select
              value={newGoal.type}
              onChange={(e) => setNewGoal({ ...newGoal, type: e.target.value })}
              required
            >
              <option value="weight">Weight Loss/Gain</option>
              <option value="distance">Running Distance</option>
              <option value="strength">Strength Goal</option>
            </select>
            <input
              type="number"
              placeholder="Target Value"
              value={newGoal.target}
              onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Current Value"
              value={newGoal.current}
              onChange={(e) => setNewGoal({ ...newGoal, current: e.target.value })}
              required
            />
            <input
              type="date"
              value={newGoal.deadline}
              onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
              required
            />
          </div>
          <button type="submit">Set Goal</button>
        </form>

        <div className="goals-list">
          {goals.map(goal => (
            <div key={goal.id} className="goal-card">
              <h3>{goal.title}</h3>
              <div className="progress-bar">
                <div 
                  className="progress"
                  style={{ width: `${calculateProgress(goal)}%` }}
                ></div>
              </div>
              <p>Target: {goal.target} {goal.type === 'weight' ? 'kg' : 'km'}</p>
              <p>Current: {goal.current} {goal.type === 'weight' ? 'kg' : 'km'}</p>
              <p>Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProgressTracking;