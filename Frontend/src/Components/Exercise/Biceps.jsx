import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Biceps.css';

const Biceps = () => {
  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [dashboardExercises, setDashboardExercises] = useState(
    JSON.parse(localStorage.getItem('dashboardExercises')) || []
  );
  const bicepExercises = [
    {
      id: 1,
      name: 'Standing Barbell Curl',
      image: 'https://training.fit/wp-content/uploads/2018/12/bizepscurls.png',
      description: 'Classic bicep building movement',
      sets: '4 sets × 8-12 reps',
      instructions: [
        'Stand with feet shoulder-width apart',
        'Hold barbell with underhand grip',
        'Keep elbows close to sides',
        'Curl weight up with controlled motion'
      ]
    },
    {
      id: 2,
      name: 'Alternating Dumbbell Curl',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBQfQx4nXTmA-6unV6s9_r-UxAlZ6vYkd3w&s',
      description: 'Unilateral bicep development',
      sets: '3 sets × 12-15 reps each arm',
      instructions: [
        'Stand holding dumbbells at sides',
        'Alternate curling each arm',
        'Rotate wrist during movement',
        'Control the negative portion'
      ]
    },
    {
      id: 3,
      name: 'Preacher Curl',
      image: 'https://www.kettlebellkings.com/cdn/shop/articles/Preacher_Curl_Alternatives.png?v=1731324163',
      description: 'Isolated bicep exercise',
      sets: '3 sets × 10-12 reps',
      instructions: [
        'Adjust preacher bench height',
        'Rest arms fully on pad',
        'Curl weight with strict form',
        'Lower weight with control'
      ]
    },
    {
      id: 4,
      name: 'Hammer Curls',
      image: 'https://cdn.shopify.com/s/files/1/2384/0833/files/shutterstock_419477203_480x480_d668762a-37fc-4d56-acfc-7e12885e91c1.webp?v=1689192672',
      description: 'Targets biceps and forearms',
      sets: '3 sets × 12-15 reps',
      instructions: [
        'Hold dumbbells with neutral grip',
        'Keep palms facing each other',
        'Curl weights to shoulders',
        'Maintain strict form throughout'
      ]
    },
    {
      id: 5,
      name: 'Concentration Curl',
      image: 'https://cdn.shopify.com/s/files/1/1497/9682/files/2_413fef1b-5b68-41f6-a2f1-adbf1a2dea8f.jpg?v=1653401498',
      description: 'Peak contraction bicep exercise',
      sets: '3 sets × 12-15 reps each arm',
      instructions: [
        'Sit on bench, arm against inner thigh',
        'Keep upper arm stationary',
        'Curl weight towards shoulder',
        'Focus on peak contraction'
      ]
    },
    {
      id: 6,
      name: 'Incline Dumbbell Curl',
      image: 'https://images.squarespace-cdn.com/content/v1/5ffcea9416aee143500ea103/1638178144643-Y4UD7ZGNSHVCPROJBJ5P/Seated%2BIncline%2BDumbbell%2BBiceps%2BCurl.jpeg',
      description: 'Extended range of motion curl',
      sets: '3 sets × 10-12 reps',
      instructions: [
        'Set bench to 45-60 degree angle',
        'Let arms hang straight down',
        'Curl both dumbbells together',
        'Focus on full stretch at bottom'
      ]
    },
    {
      id: 7,
      name: 'Cable Curl',
      image: 'https://www.dmoose.com/cdn/shop/articles/1_1_42ccb79d-1b2f-4bd6-a9d4-e886fb09fd06.png?v=1646826645',
      description: 'Constant tension bicep exercise',
      sets: '3 sets × 15-20 reps',
      instructions: [
        'Attach straight bar to low pulley',
        'Keep elbows at sides throughout',
        'Curl bar towards shoulders',
        'Control the negative portion'
      ]
    },
    {
      id: 8,
      name: 'EZ Bar Curl',
      image: 'https://i.pinimg.com/736x/c3/e0/f2/c3e0f2bb07b01eba38433919f38706db.jpg',
      description: 'Wrist-friendly barbell variation',
      sets: '3 sets × 10-12 reps',
      instructions: [
        'Grip EZ bar on angled portions',
        'Keep upper arms stationary',
        'Curl bar in smooth motion',
        'Squeeze biceps at top'
      ]
    },
    {
      id: 9,
      name: '21s',
      image: 'https://training.fit/wp-content/uploads/2020/02/bizepscurls-stehend-langhantel.png',
      description: 'Intensive bicep training method',
      sets: '3 sets of 21 total reps',
      instructions: [
        '7 reps bottom half range',
        '7 reps top half range',
        '7 reps full range',
        'Minimal rest between segments'
      ]
    }
  ];

  // Your existing bicepExercises array stays the same...

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
    const filtered = bicepExercises.filter(exercise =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExercises(filtered);
  }, [searchTerm]);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="biceps-wrapper">
      <div className="biceps-container">
        <h1>Biceps Exercises</h1>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="exercises-grid">
          {(searchTerm ? filteredExercises : bicepExercises).map((exercise) => (
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
                <p className="sets-info">{exercise.sets}</p>
                <button 
                  className="start-exercise"
                  onClick={() => handleStartExercise(exercise)}
                >
                  Start Exercise
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
        <button className="back-to-categories" onClick={() => navigate('/exercise/strength')}>
          Back to strendth categories
        </button>
    </div>
  );
};

export default Biceps;