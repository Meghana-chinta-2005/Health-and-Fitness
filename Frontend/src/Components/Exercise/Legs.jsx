import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Legs.css';

const Legs = () => {
  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);

  const legsExercises = [
    {
      id: 1,
      name: 'Barbell Back Squats',
      image: 'https://www.meanmuscles.com/wp-content/uploads/2020/09/barbell-bench-squat.png',
      description: 'Fundamental compound leg exercise',
      sets: '4 sets × 8-12 reps',
      instructions: [
        'Place barbell on upper back',
        'Keep feet shoulder-width apart',
        'Break at hips and knees simultaneously',
        'Squat until thighs are parallel'
      ]
    },
    {
      id: 2,
      name: 'Romanian Deadlifts',
      image: 'https://www.hertssportsvillage.co.uk/news-images/2022-Nov/rdl--4995.jpg',
      description: 'Hamstring and lower back focused',
      sets: '4 sets × 10-12 reps',
      instructions: [
        'Hold barbell at hip level',
        'Hinge at hips while keeping legs straight',
        'Lower bar along thighs',
        'Feel stretch in hamstrings'
      ]
    },
    {
      id: 3,
      name: 'Leg Press',
      image: 'https://training.fit/wp-content/uploads/2020/03/beinpresse.png',
      description: 'Machine-based compound movement',
      sets: '3 sets × 12-15 reps',
      instructions: [
        'Adjust seat position properly',
        'Place feet shoulder-width on platform',
        'Lower weight with control',
        'Push through full range of motion'
      ]
    },
    {
      id: 4,
      name: 'Walking Lunges',
      image: 'https://trainingstation.co.uk/cdn/shop/articles/Lunges-movment_d958998d-2a9f-430e-bdea-06f1e2bcc835_900x.webp?v=1741687877',
      description: 'Dynamic leg exercise',
      sets: '3 sets × 12 steps each leg',
      instructions: [
        'Hold dumbbells at sides',
        'Take long step forward',
        'Lower back knee near ground',
        'Push through front foot to next step'
      ]
    },
    {
      id: 5,
      name: 'Leg Extensions',
      image: 'https://liftmanual.com/wp-content/uploads/2023/04/resistance-band-leg-extension.jpg',
      description: 'Isolated quadriceps exercise',
      sets: '3 sets × 15-20 reps',
      instructions: [
        'Adjust machine to fit',
        'Place feet behind roller pad',
        'Extend legs fully',
        'Lower with controlled motion'
      ]
    },
    {
      id: 6,
      name: 'Lying Leg Curls',
      image: 'https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-lying-leg-curl.jpg',
      description: 'Isolated hamstring exercise',
      sets: '3 sets × 12-15 reps',
      instructions: [
        'Lie face down on machine',
        'Place ankles under pad',
        'Curl weight towards glutes',
        'Lower with control'
      ]
    },
    {
      id: 7,
      name: 'Standing Calf Raises',
      image: 'https://training.fit/wp-content/uploads/2020/03/wadenheben-langhantel-stehend-2.png',
      description: 'Isolated calf exercise',
      sets: '4 sets × 15-20 reps',
      instructions: [
        'Stand on elevated platform',
        'Place balls of feet on edge',
        'Lower heels below platform',
        'Rise up onto toes'
      ]
    },
    {
      id: 8,
      name: 'Bulgarian Split Squats',
      image: 'https://liftmanual.com/wp-content/uploads/2023/04/bulgarian-split-squat-with-chair.jpg',
      description: 'Unilateral leg development',
      sets: '3 sets × 10-12 reps each leg',
      instructions: [
        'Place rear foot on bench',
        'Keep front foot forward',
        'Lower into split squat',
        'Push through front heel'
      ]
    },
    {
      id: 9,
      name: 'Goblet Squats',
      image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdcJTqPaOy21WoVlN3BqNUDJwya5Xh4mD3xrc1m0-cDZvmj2uvSWpbghWtpDUl7KItLj-vMuKYc8rrGqwTk3WsT2wrM00dCHBlf_1iGNDfI0QW52iLUh80jjJFv-n7GmCRwk0r1TQ?key=L6F-lPsdlTlSgSYiWii7pNTC',
      description: 'Dumbbell squat variation',
      sets: '3 sets × 12-15 reps',
      instructions: [
        'Hold dumbbell at chest',
        'Keep feet shoulder-width',
        'Squat while keeping torso upright',
        'Push through heels to stand'
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
    const filtered = legsExercises.filter(exercise =>
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
    <div className="legs-wrapper">
      <div className="legs-container">
        <h1>Leg Exercises</h1>
        
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
          {(filteredExercises.length > 0 ? filteredExercises : legsExercises).map((exercise) => (
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

export default Legs;