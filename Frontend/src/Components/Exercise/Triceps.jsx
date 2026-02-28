import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Triceps.css';

const Triceps = () => {
  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);

  // Triceps exercises array
  const tricepsExercises = [
    {
      id: 1,
      name: 'Tricep Rope Pushdown',
      image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Rope-Pushdown.gif',
      description: 'Isolation exercise targeting all three heads of the triceps',
      sets: '4 sets × 12-15 reps',
      instructions: [
        'Attach rope to high pulley',
        'Grasp rope with palms facing each other',
        'Keep upper arms close to body',
        'Extend arms downward, spreading rope ends at bottom'
      ]
    },
    {
      id: 2,
      name: 'Close-Grip Bench Press',
      image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif',
      description: 'Compound movement for tricep strength and mass',
      sets: '4 sets × 8-12 reps',
      instructions: [
        'Grip barbell with hands shoulder-width apart',
        'Keep elbows tucked close to body',
        'Lower bar to lower chest',
        'Press bar up with focus on triceps'
      ]
    },
    {
      id: 3,
      name: 'Overhead Dumbbell Extension',
      image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Dumbbell-Triceps-Extension.gif',
      description: 'Targets the long head of the triceps',
      sets: '3 sets × 12-15 reps',
      instructions: [
        'Hold dumbbell overhead with both hands',
        'Lower weight behind head by bending elbows',
        'Keep upper arms stationary and close to ears',
        'Extend arms back to starting position'
      ]
    },
    {
      id: 4,
      name: 'Diamond Push-Ups',
      image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Diamond-Push-Up.gif',
      description: 'Bodyweight exercise focusing on triceps',
      sets: '3 sets × Max reps',
      instructions: [
        'Form diamond shape with hands under chest',
        'Keep elbows close to body',
        'Lower chest to hands',
        'Push back up while maintaining form'
      ]
    },
    {
      id: 5,
      name: 'Skull Crushers',
      image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Skullcrusher.gif',
      description: 'Classic tricep isolation exercise',
      sets: '3 sets × 10-12 reps',
      instructions: [
        'Lie on bench holding EZ bar above chest',
        'Keep upper arms perpendicular to floor',
        'Lower bar toward forehead by bending elbows',
        'Extend arms back to starting position'
      ]
    },
    {
      id: 6,
      name: 'Tricep Dips',
      image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dip.gif',
      description: 'Advanced bodyweight exercise for triceps',
      sets: '3 sets × 8-12 reps',
      instructions: [
        'Support body on parallel bars',
        'Keep torso upright',
        'Lower body by bending elbows',
        'Push back up to starting position'
      ]
    },
    {
      id: 7,
      name: 'Reverse Grip Pushdown',
      image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Grip-Pushdown.gif',
      description: 'Variation targeting medial head of triceps',
      sets: '3 sets × 12-15 reps',
      instructions: [
        'Grip bar with palms facing up',
        'Keep elbows at sides',
        'Push bar down until arms are straight',
        'Control weight on return'
      ]
    },
    {
      id: 8,
      name: 'One-Arm Tricep Extension',
      image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Arm-Overhead-Dumbbell-Extension.gif',
      description: 'Unilateral exercise for balanced development',
      sets: '3 sets × 12-15 reps each arm',
      instructions: [
        'Hold dumbbell overhead in one hand',
        'Keep upper arm close to ear',
        'Lower weight behind head',
        'Extend arm back to start position'
      ]
    },
    {
      id: 9,
      name: 'Cable Kickbacks',
      image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Triceps-Kickback.gif',
      description: 'Isolation exercise for peak contraction',
      sets: '3 sets × 15-20 reps',
      instructions: [
        'Attach handle to low pulley',
        'Bend forward with upper arm parallel to floor',
        'Extend arm straight back',
        'Squeeze tricep at full extension'
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
    const filtered = tricepsExercises.filter(exercise =>
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
    <div className="triceps-wrapper">
      <div className="triceps-container">
        <h1>Triceps Exercises</h1>

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
        {(filteredExercises.length > 0 ? filteredExercises : tricepsExercises).map((exercise) => (
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

        <button className="back-to-categories" onClick={() => navigate('/exercise/strength')}>
          Back to strength categories
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

export default Triceps;