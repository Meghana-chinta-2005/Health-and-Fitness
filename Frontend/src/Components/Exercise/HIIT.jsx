import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import './HIIT.css';

const HIIT = () => {
  const navigate = useNavigate();

  const hiitWorkouts = [
    {
      title: "Beginner HIIT",
      description: "Start your HIIT journey with this basic workout",
      duration: "20 minutes",
      intensity: "Moderate",
      frequency: "2-3 times per week",
      phases: [
        "5 min dynamic warm-up",
        "30s jumping jacks / 30s rest",
        "30s mountain climbers / 30s rest",
        "30s high knees / 30s rest",
        "30s squats / 30s rest",
        "Repeat 3 times",
        "5 min cool-down"
      ]
    },
    {
      title: "Tabata Power",
      description: "Classic 20/10 interval training",
      duration: "25 minutes",
      intensity: "High",
      frequency: "2 times per week",
      phases: [
        "5 min warm-up",
        "20s burpees / 10s rest",
        "20s squat jumps / 10s rest",
        "20s push-ups / 10s rest",
        "20s sprint in place / 10s rest",
        "Repeat 4 times",
        "5 min cool-down stretches"
      ]
    },
    {
      title: "Advanced HIIT Circuit",
      description: "Intense full-body workout",
      duration: "35 minutes",
      intensity: "Very High",
      frequency: "2-3 times per week",
      phases: [
        "7 min dynamic warm-up",
        "45s box jumps / 15s rest",
        "45s kettlebell swings / 15s rest",
        "45s battle ropes / 15s rest",
        "45s burpee pull-ups / 15s rest",
        "Repeat 3 times",
        "8 min cool-down"
      ]
    }
  ];

  return (
    <div className="hiit-page">
      <div className="hiit-container">
        <h1 className="hiit-title">
          <HeartIcon className="title-icon" />
          HIIT Workouts
        </h1>
        
        <div className="workouts-grid">
          {hiitWorkouts.map((workout, index) => (
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

export default HIIT;