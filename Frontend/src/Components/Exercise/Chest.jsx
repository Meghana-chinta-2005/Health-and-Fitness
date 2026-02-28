import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Chest.css';

const Chest = () => {
  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [dashboardExercises, setDashboardExercises] = useState(
    JSON.parse(localStorage.getItem('dashboardExercises')) || []
  );
  const chestExercises = [
    
    {
      id: 1,
      name: 'Bench Press',
      image: 'https://training.fit/wp-content/uploads/2018/11/bankdruecken-flachbank-langhantel.png',
      description: 'Foundation chest building exercise',
      sets: '4 sets × 8-12 reps',
      instructions: [
        'Lie flat on bench with feet firmly planted',
        'Grip barbell slightly wider than shoulders',
        'Lower bar to mid-chest with control',
        'Press bar back up to starting position'
      ]
    },
    {
      id: 2,
      name: 'Incline Dumbbell Press',
      image: 'https://st2.depositphotos.com/8546304/11406/i/950/depositphotos_114060930-stock-photo-dumbbell-bench-press-while-lying.jpg',
      description: 'Upper chest focused pressing movement',
      sets: '4 sets × 10-12 reps',
      instructions: [
        'Set bench to 30-45 degree angle',
        'Press dumbbells up from shoulder level',
        'Lower weights with control',
        'Keep core tight throughout movement'
      ]
    },
    {
      id: 3,
      name: 'Dumbbell Flyes',
      image: 'https://www.liftosaur.com/externalimages/exercises/full/large/chestfly_dumbbell_full_large.png',
      description: 'Isolation exercise for chest width',
      sets: '3 sets × 12-15 reps',
      instructions: [
        'Lie flat holding dumbbells above chest',
        'Lower weights in wide arc motion',
        'Keep slight bend in elbows',
        'Squeeze chest as you return to start'
      ]
    },
    {
      id: 4,
      name: 'Push-Ups',
      image: 'https://training.fit/wp-content/uploads/2020/02/liegestuetze-800x448.png',
      description: 'Classic bodyweight chest exercise',
      sets: '4 sets × Max reps',
      instructions: [
        'Start in plank position',
        'Lower chest to ground with control',
        'Push back up explosively',
        'Maintain straight body alignment'
      ]
    },
    {
      id: 5,
      name: 'Cable Crossovers',
      image: 'https://images.squarespace-cdn.com/content/v1/5e9f8e841520b34d121c63f2/1631764307526-KGZ0II59SN05LAKBGCPQ/cable-crossover.jpg',
      description: 'Cable machine chest isolation',
      sets: '3 sets × 15-20 reps',
      instructions: [
        'Stand between cable machines',
        'Pull handles down and across body',
        'Focus on squeezing chest',
        'Control return to starting position'
      ]
    },
    {
      id: 6,
      name: 'Decline Bench Press',
      image: 'https://training.fit/wp-content/uploads/2020/02/negativ-bankdruecken-langhantel.png',
      description: 'Lower chest development',
      sets: '3 sets × 8-12 reps',
      instructions: [
        'Lie on decline bench',
        'Unrack weight with stable grip',
        'Lower bar to lower chest',
        'Press up with controlled force'
      ]
    },
    {
      id: 7,
      name: 'Machine Chest Press',
      image: 'https://training.fit/wp-content/uploads/2020/02/brustpresse-flach.png',
      description: 'Controlled chest pressing movement',
      sets: '3 sets × 12-15 reps',
      instructions: [
        'Adjust seat for proper alignment',
        'Press handles forward smoothly',
        'Control weight on return',
        'Keep back against pad'
      ]
    },
    {
      id: 8,
      name: 'Dips',
      image: 'https://training.fit/wp-content/uploads/2020/02/dips.png',
      description: 'Compound chest and triceps exercise',
      sets: '3 sets × 8-12 reps',
      instructions: [
        'Support body on parallel bars',
        'Lean forward for chest emphasis',
        'Lower body with control',
        'Push back to starting position'
      ]
    },
    {
      id: 9,
      name: 'High to Low Cable Flyes',
      image: 'https://www.endomondo.com/wp-content/uploads/2024/02/Standing-Decline-Cable-Fly.jpg',
      description: 'Dynamic chest pressing variation',
      sets: '3 sets × 10-12 reps each side',
      instructions: [
        'Position barbell in landmine',
        'Hold end with one/both hands',
        'Press weight up and forward',
        'Control weight back down'
      ]
    }
  // ... your existing exercises ...
];

  // ... your existing chestExercises array ...

  useEffect(() => {
    localStorage.setItem('dashboardExercises', JSON.stringify(dashboardExercises));
  }, [dashboardExercises]);

  const handleAddToDashboard = (exercise) => {
    const isExerciseInDashboard = dashboardExercises.some(ex => ex.id === exercise.id);
    
    if (isExerciseInDashboard) {
      setDashboardExercises(dashboardExercises.filter(ex => ex.id !== exercise.id));
    } else {
      setDashboardExercises([...dashboardExercises, exercise]);
    }
  };

  const isInDashboard = (exerciseId) => {
    return dashboardExercises.some(ex => ex.id === exerciseId);
  };

  return (
    <div className="chest-wrapper">
      <div className="chest-container">
        <h1>Chest Exercises</h1>
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search exercises..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="exercises-grid">
          {chestExercises.map((exercise) => (
            <div className="exercise-card" key={exercise.id}>
              <div className="exercise-image">
                <img src={exercise.image} alt={exercise.name} />
                <button
                  className={`add-to-dashboard ${isInDashboard(exercise.id) ? 'added-to-dashboard' : ''}`}
                  onClick={() => handleAddToDashboard(exercise)}
                >
                  {isInDashboard(exercise.id) ? '−' : '+'}
                </button>
              </div>
              <div className="exercise-content">
                <h3>{exercise.name}</h3>
                <p className="description">{exercise.description}</p>
                <p className="sets">{exercise.sets}</p>
                <button className="start-exercise">Start Exercise</button>
              </div>
            </div>
          ))}
        </div>
        <button className="back-to-categories" onClick={() => navigate('/exercise/strength')}>
          Back to strendth categories
        </button>
      </div>
    </div>
  );
};

export default Chest;