import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Back.css';

const Back = () => {
  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [dashboardExercises, setDashboardExercises] = useState(
    JSON.parse(localStorage.getItem('dashboardExercises')) || []
  );

  const backExercises = [
    {
      id: 1,
      name: 'Pull-ups',
      description: 'Classic upper body exercise targeting back muscles',
      image: 'https://cdn.shopify.com/s/files/1/1497/9682/files/2_434b8599-da71-4153-9ee8-ba74a7b36626.jpg?v=1648821574',
      sets: '3 sets of 8-12 reps',
      instructions: [
        'Grip the pull-up bar with hands slightly wider than shoulder-width',
        'Hang with arms fully extended',
        'Pull yourself up until your chin is above the bar',
        'Lower yourself back down with control'
      ]
    },
    {
      id: 2,
      name: 'Bent-over Rows',
      description: 'Compound exercise for building back strength and muscle',
      image: 'https://liftmanual.com/wp-content/uploads/2023/04/trap-bar-bent-over-row.jpg',
      sets: '3 sets of 10-12 reps',
      instructions: [
        'Hold a barbell with an overhand grip',
        'Bend at the hips and knees',
        'Pull the bar up to your lower chest',
        'Lower the bar back down with control'
      ]
    },
    {
      id: 3,
      name: 'Lat Pulldowns',
      description: 'Machine exercise targeting the latissimus dorsi muscles',
      image: 'https://cdn.shopify.com/s/files/1/1497/9682/files/1_afeb7425-a45f-4c22-9219-8753dedf43e4.jpg?v=1666024796',
      sets: '3 sets of 12-15 reps',
      instructions: [
        'Sit at the lat pulldown machine with feet flat',
        'Grip the bar wider than shoulder width',
        'Pull the bar down to your upper chest',
        'Control the weight as you return to starting position'
      ]
    },
    {
      id: 4,
      name: 'Deadlifts',
      description: 'Full body exercise with emphasis on back muscles',
      image: 'https://sportivetricksstorage.blob.core.windows.net/images/articles/powerlifting/technique/deadlift-muscles/new/1-conventional-muscles.webp',
      sets: '4 sets of 6-8 reps',
      instructions: [
        'Stand with feet hip-width apart',
        'Bend down and grip the barbell',
        'Keep back straight and lift by extending hips and knees',
        'Return the weight to the ground with control'
      ]
    },
    {
      id: 5,
      name: 'Face Pulls',
      description: 'Upper back exercise for improved posture',
      image: 'https://liftmanual.com/wp-content/uploads/2023/04/cable-y-raise.jpg',
      sets: '3 sets of 15-20 reps',
      instructions: [
        'Set cable machine to head height',
        'Pull the rope attachment towards your face',
        'Focus on squeezing your shoulder blades',
        'Return to starting position with control'
      ]
    },
    {
      id: 6,
      name: 'Single-Arm Dumbbell Rows',
      description: 'Unilateral back exercise for balanced development',
      image: 'https://www.fitnessandpower.com/wp-content/uploads/2016/11/how-to-perform-barbell-dumbbell-bent-over-rows-with-proper-form.jpg',
      sets: '3 sets of 10-12 reps per side',
      instructions: [
        'Place one knee and hand on bench',
        'Hold dumbbell with free hand',
        'Pull dumbbell up to your ribcage',
        'Lower weight with control and repeat'
      ]
    },
    {
      id: 7,
      name: 'T-Bar Rows',
      description: 'Compound movement for middle back development',
      image: 'https://www.fitundattraktiv.de/wp-content/uploads/2017/12/t_bar_rudern-einarmig.png',
      sets: '3 sets of 10-12 reps',
      instructions: [
        'Position yourself on the T-bar machine',
        'Grip the handles with both hands',
        'Pull the weight up towards your chest',
        'Lower with control and maintain form'
      ]
    },
    {
      id: 8,
      name: 'Seated Cable Rows',
      description: 'Controlled back exercise with constant tension',
      image: 'https://www.mybodycreator.com/content/files/2023/05/25/82_M.png',
      sets: '3 sets of 12-15 reps',
      instructions: [
        'Sit at the cable row machine with feet secured',
        'Grab the attachment with both hands',
        'Pull towards your lower chest while keeping back straight',
        'Return to start position with control'
      ]
    },
    {
      id: 9,
      name: 'Meadows Row',
      description: 'Advanced unilateral back exercise for mass building',
      image: 'https://www.burnthefatinnercircle.com/members/images/2079.jpg?cb=20250102040759',
      sets: '3 sets of 8-10 reps per side',
      instructions: [
        'Position barbell in landmine attachment',
        'Stand parallel to bar with feet shoulder-width apart',
        'Grip the end of the barbell and pull to hip',
        'Lower weight with control and repeat'
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const openModal = (exercise) => {
    setSelectedExercise(exercise);
  };

  const closeModal = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="back-wrapper">
      <div className="back-container">
        <h1>Back Exercises</h1>
        <div className="exercises-grid">
          {backExercises.map((exercise) => (
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
                <p>{exercise.description}</p>
                <p>{exercise.sets}</p>
                <button 
                  className="start-exercise"
                  onClick={() => openModal(exercise)}
                >
                  Start Exercise
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="back-to-categories"
          onClick={() => navigate('/exercise/strength')}
        >
          Back to Categories
        </button>
      </div>

      {selectedExercise && (
        <div className="exercise-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{selectedExercise.name}</h2>
            </div>
            <div className="modal-details">
              <p><strong>Description:</strong> {selectedExercise.description}</p>
              <p><strong>Sets:</strong> {selectedExercise.sets}</p>
            </div>
            <div className="instructions">
              <h3>Instructions</h3>
              <ol>
                {selectedExercise.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {showScrollButton && (
        <button 
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Back;