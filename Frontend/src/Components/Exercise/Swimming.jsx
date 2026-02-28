import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import './Swimming.css';

const Swimming = () => {
  const navigate = useNavigate();

  const swimmingWorkouts = [
    {
      title: "Beginner's Pool Workout",
      description: "Perfect for swimming beginners",
      duration: "30 minutes",
      intensity: "Low",
      frequency: "3 times per week",
      phases: [
        "5 min easy freestyle warm-up",
        "4x50m freestyle with 30s rest",
        "4x50m breaststroke with 30s rest",
        "5 min cool-down"
      ]
    },
    {
      title: "Intermediate Endurance",
      description: "Build swimming stamina",
      duration: "45 minutes",
      intensity: "Moderate",
      frequency: "3 times per week",
      phases: [
        "10 min warm-up (mixed strokes)",
        "6x100m freestyle with 45s rest",
        "4x100m medley with 60s rest",
        "5 min cool-down"
      ]
    },
    {
      title: "Advanced HIIT Swim",
      description: "High-intensity interval training in water",
      duration: "60 minutes",
      intensity: "High",
      frequency: "2 times per week",
      phases: [
        "10 min dynamic warm-up",
        "8x50m sprints with 30s rest",
        "4x200m steady pace",
        "10 min technique work",
        "5 min cool-down"
      ]
    }
  ];

  return (
    <div className="swimming-page">
      <div className="swimming-container">
        <h1 className="swimming-title">
          <HeartIcon className="title-icon" />
          Swimming Workouts
        </h1>
        
        <div className="workouts-grid">
          {swimmingWorkouts.map((workout, index) => (
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

export default Swimming;