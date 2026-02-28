import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import './Cycling.css';

const Cycling = () => {
  const navigate = useNavigate();

  const cyclingWorkouts = [
    {
      title: "Beginner's Cycling Program",
      description: "Perfect for those starting their cycling journey",
      duration: "30 minutes",
      intensity: "Low to Moderate",
      frequency: "3 times per week",
      phases: [
        "5 min warm-up at easy pace",
        "20 min steady-state cycling",
        "5 min cool-down"
      ]
    },
    {
      title: "Interval Training",
      description: "Build stamina and speed with intervals",
      duration: "45 minutes",
      intensity: "High",
      frequency: "2 times per week",
      phases: [
        "10 min warm-up",
        "6x (2 min high intensity, 3 min recovery)",
        "5 min cool-down"
      ]
    },
    {
      title: "Endurance Ride",
      description: "Long-distance cycling for improved endurance",
      duration: "90 minutes",
      intensity: "Moderate",
      frequency: "1 time per week",
      phases: [
        "15 min warm-up",
        "60 min steady pace",
        "15 min cool-down"
      ]
    }
  ];

  return (
    <div className="cycling-page">
      <div className="cycling-container">
        <h1 className="cycling-title">
          <HeartIcon className="title-icon" />
          Cycling Workouts
        </h1>
        
        <div className="workouts-grid">
          {cyclingWorkouts.map((workout, index) => (
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

export default Cycling;