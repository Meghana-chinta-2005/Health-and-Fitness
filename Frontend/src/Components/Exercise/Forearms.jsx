import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Forearms.css';

const Forearms = () => {
  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);

  const forearmsExercises = [
    {
      id: 1,
      name: 'Wrist Curl',
      image: 'https://training.fit/wp-content/uploads/2020/03/unterarmcurls-kurzhantel-hammergriff.png',
      description: 'Basic forearm flexor exercise',
      sets: '3 sets × 15-20 reps',
      instructions: [
        'Rest forearms on bench with wrists hanging off',
        'Hold barbell with palms facing up',
        'Curl wrists upward',
        'Lower with control'
      ]
    },
    {
      id: 2,
      name: 'Reverse Wrist Curl',
      image: 'https://training.fit/wp-content/uploads/2020/03/unterarmcurls-langhantel-hinterruecken.png',
      description: 'Forearm extensor development',
      sets: '3 sets × 15-20 reps',
      instructions: [
        'Rest forearms on bench with wrists hanging off',
        'Hold barbell with palms facing down',
        'Extend wrists upward',
        'Lower slowly and controlled'
      ]
    },
    {
      id: 3,
      name: 'Hammer Curl',
      image: 'https://i.pinimg.com/736x/99/89/81/9989817d6f62668bc1ee79fb2b0a522e.jpg',
      description: 'Brachioradialis focused exercise',
      sets: '3 sets × 12-15 reps',
      instructions: [
        'Hold dumbbells with neutral grip',
        'Keep elbows at sides',
        'Curl weights while maintaining grip',
        'Lower with control'
      ]
    },
    {
      id: 4,
      name: 'Farmers Walk',
      image: 'https://liftmanual.com/wp-content/uploads/2023/04/farmers-walk.jpg',
      description: 'Grip strength and forearm endurance',
      sets: '3 sets × 30-40 seconds',
      instructions: [
        'Hold heavy dumbbells at sides',
        'Walk with controlled steps',
        'Maintain tight grip',
        'Keep shoulders back'
      ]
    },
    {
      id: 5,
      name: 'Plate Pinch',
      image: 'https://liftmanual.com/wp-content/uploads/2023/04/plate-pinch.jpg',
      description: 'Grip and pinch strength',
      sets: '3 sets × 30 seconds',
      instructions: [
        'Pinch weight plates between thumb and fingers',
        'Hold plates at sides',
        'Maintain grip for time',
        'Switch hands and repeat'
      ]
    },
    {
      id: 6,
      name: 'Behind-the-Back Wrist Curl',
      image: 'https://training.fit/wp-content/uploads/2020/03/unterarmcurls-langhantel-hinterruecken.png',
      description: 'Alternative wrist flexor exercise',
      sets: '3 sets × 15-20 reps',
      instructions: [
        'Hold barbell behind back',
        'Palms facing backward',
        'Curl wrists upward',
        'Control the descent'
      ]
    },
    {
      id: 7,
      name: 'Cable Rope Wrist Curl',
      image: 'https://liftmanual.com/wp-content/uploads/2023/04/cable-standing-wrist-curl.jpg',
      description: 'Constant tension forearm exercise',
      sets: '3 sets × 15-20 reps',
      instructions: [
        'Attach rope to low pulley',
        'Rest forearms on bench',
        'Curl wrists upward',
        'Lower with control'
      ]
    },
    {
      id: 8,
      name: 'Dumbbell Reverse Curl',
      image: 'https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-reverse-wrist-curl.jpg',
      description: 'Forearm and grip developer',
      sets: '3 sets × 12-15 reps',
      instructions: [
        'Hold dumbbells with palms down',
        'Keep elbows at sides',
        'Curl weights up',
        'Lower with controlled motion'
      ]
    },
    {
      id: 9,
      name: 'Bar Hang',
      image: 'https://liftmanual.com/wp-content/uploads/2023/04/dead-hang-stretch.jpg',
      description: 'Grip endurance builder',
      sets: '3 sets × Max time',
      instructions: [
        'Hang from pull-up bar',
        'Maintain full grip',
        'Keep shoulders engaged',
        'Hold as long as possible'
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
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const filtered = forearmsExercises.filter(exercise =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExercises(filtered);
  }, [searchTerm]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleStartExercise = (exercise) => {
    setSelectedExercise(exercise);
    scrollToTop();
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/400x300?text=Exercise+Image';
  };

  return (
    <div className="forearms-wrapper">
      <div className="forearms-container">
        <h1>Forearm Exercises</h1>
        
        <div className="search-container">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search exercises..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="exercises-grid">
          {(filteredExercises.length > 0 ? filteredExercises : forearmsExercises).map((exercise) => (
            <div key={exercise.id} className="exercise-card">
              <div className="exercise-image">
                <img 
                  src={exercise.image} 
                  alt={exercise.name}
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
              <div className="exercise-content">
                <h3>{exercise.name}</h3>
                <p className="description">{exercise.description}</p>
                <p className="sets">{exercise.sets}</p>
                <button 
                  className="start-exercise"
                  onClick={() => handleStartExercise(exercise)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredExercises.length === 0 && searchTerm && (
          <div className="no-results">
            <p>No exercises found matching "{searchTerm}"</p>
          </div>
        )}

        <button 
          className="back-to-categories"
          onClick={() => navigate('/exercise/strength')}
        >
          Back to Categories
        </button>
      </div>

      {selectedExercise && (
        <div className="exercise-modal" onClick={() => setSelectedExercise(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedExercise.name}</h2>
            </div>
            <div className="modal-details">
              <p className="sets">Sets: {selectedExercise.sets}</p>
              <div className="instructions">
                <h3>Instructions:</h3>
                <ol>
                  {selectedExercise.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
            <button 
              className="close-modal"
              onClick={() => setSelectedExercise(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showScrollButton && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Forearms;