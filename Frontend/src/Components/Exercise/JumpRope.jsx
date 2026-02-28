import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import './JumpRope.css';

const JumpRope = () => {
  const navigate = useNavigate();

  const jumpRopeWorkouts = [
    {
      title: "Beginner Basics",
      description: "Master fundamental jump rope techniques",
      duration: "15 minutes",
      intensity: "Low to Moderate",
      frequency: "3-4 times per week",
      phases: [
        "5 min basic bounce warm-up",
        "30s jump / 30s rest x 5 sets",
        "Practice alternate foot jumps",
        "Basic bounce cool-down",
        "Stretching"
      ]
    },
    {
      title: "Intermediate Combo",
      description: "Mix different jump rope techniques",
      duration: "25 minutes",
      intensity: "Moderate",
      frequency: "3 times per week",
      phases: [
        "5 min dynamic warm-up",
        "1 min basic bounce",
        "1 min alternate foot",
        "1 min high knees",
        "30s double unders practice",
        "1 min rest",
        "Repeat 3 times",
        "5 min cool-down"
      ]
    },
    {
      title: "Advanced HIIT Rope",
      description: "High-intensity jump rope intervals",
      duration: "30 minutes",
      intensity: "High",
      frequency: "2-3 times per week",
      phases: [
        "7 min technique warm-up",
        "30s double unders",
        "30s high knees",
        "30s crossovers",
        "30s speed jumps",
        "1 min rest",
        "Repeat 4 times",
        "5 min skill practice",
        "5 min cool-down"
      ]
    }
  ];

  return (
    <div className="jumprope-page">
      <div className="jumprope-container">
        <h1 className="jumprope-title">
          <HeartIcon className="title-icon" />
          Jump Rope Workouts
        </h1>
        
        <div className="workouts-grid">
          {jumpRopeWorkouts.map((workout, index) => (
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

export default JumpRope;