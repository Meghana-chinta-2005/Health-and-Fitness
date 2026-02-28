import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import './StairClimbing.css';

const StairClimbing = () => {
  const navigate = useNavigate();

  const stairWorkouts = [
    {
      title: "Beginner Stair Basics",
      description: "Introduction to stair climbing workouts",
      duration: "20 minutes",
      intensity: "Low to Moderate",
      frequency: "2-3 times per week",
      phases: [
        "5 min walking warm-up",
        "1 min climb, 1 min walk x 5",
        "Basic stepping patterns",
        "5 min cool-down walk",
        "Stretching"
      ]
    },
    {
      title: "Endurance Builder",
      description: "Improve stamina with varied patterns",
      duration: "30 minutes",
      intensity: "Moderate",
      frequency: "3 times per week",
      phases: [
        "5 min dynamic warm-up",
        "Double step climbs x 5 mins",
        "Single step speed climbs x 5 mins",
        "Alternating patterns x 10 mins",
        "5 min cool-down"
      ]
    },
    {
      title: "Power Climbing",
      description: "High-intensity stair workout",
      duration: "40 minutes",
      intensity: "High",
      frequency: "2 times per week",
      phases: [
        "7 min warm-up",
        "Sprint climbs x 1 min",
        "Recovery walk x 1 min",
        "Double step bounds x 30s",
        "Side steps x 30s each side",
        "Repeat circuit 4 times",
        "5 min cool-down"
      ]
    }
  ];

  return (
    <div className="stairclimbing-page">
      <div className="stairclimbing-container">
        <h1 className="stairclimbing-title">
          <HeartIcon className="title-icon" />
          Stair Climbing Workouts
        </h1>
        
        <div className="workouts-grid">
          {stairWorkouts.map((workout, index) => (
            <div key={index} className="workout-card">
              <h2>{workout.title}</h2>
              <p className="workout-description">{workout.description}</p>
              
              <div className="workout-details">
                <div className="detail-item">
                  <ClockIcon className="detail-icon" />
                  <span>{workout.duration}</span>
                </div>
                <div className="detail-item">
                  <ChartBarIcon className="detail-icon" />
                  <span>{workout.intensity}</span>
                </div>
                <div className="detail-item">
                  <FireIcon className="detail-icon" />
                  <span>{workout.frequency}</span>
                </div>
              </div>
              
              <div className="workout-phases">
                <h3>Workout Structure:</h3>
                <ul>
                  {workout.phases.map((phase, i) => (
                    <li key={i}>{phase}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="back-button"
          onClick={() => navigate('/exercise/cardio')}
        >
          <ArrowLeftIcon className="back-icon" />
          Back to Cardio
        </button>
      </div>
    </div>
  );
};

export default StairClimbing;