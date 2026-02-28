import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import './Running.css';

const Running = () => {
  const navigate = useNavigate();

  const runningWorkouts = [
    {
      title: "Beginner's 5K Training",
      description: "Start your running journey with this 8-week program",
      duration: "30-40 minutes",
      intensity: "Low to Moderate",
      frequency: "3 times per week",
      phases: [
        "5 min warm-up walk",
        "Alternate 1 min run with 1.5 min walk x 8",
        "5 min cool-down walk"
      ]
    },
    {
      title: "Interval Speed Training",
      description: "Improve your pace and endurance",
      duration: "45 minutes",
      intensity: "High",
      frequency: "2 times per week",
      phases: [
        "10 min warm-up jog",
        "6-8 sets of 400m sprints with 200m recovery jogs",
        "5 min cool-down jog"
      ]
    },
    {
      title: "Long Distance Endurance",
      description: "Build stamina for longer runs",
      duration: "60+ minutes",
      intensity: "Moderate",
      frequency: "1 time per week",
      phases: [
        "10 min warm-up",
        "40-50 min steady-state run",
        "10 min cool-down"
      ]
    },
    {
      title: "Hill Training",
      description: "Build strength and power",
      duration: "45 minutes",
      intensity: "High",
      frequency: "1 time per week",
      phases: [
        "10 min flat warm-up",
        "8-10 hill repeats (30-60 seconds each)",
        "10 min flat cool-down"
      ]
    }
  ];

  return (
    <div className="running-page">
      <div className="running-container">
        <h1 className="running-title">
          <HeartIcon className="title-icon" />
          Running Workouts
        </h1>
        
        <div className="workouts-grid">
          {runningWorkouts.map((workout, index) => (
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
          onClick={() => navigate('/cardio')}
        >
          <ArrowLeftIcon className="back-icon" />
          Back to Cardio
        </button>
      </div>
    </div>
  );
};

export default Running;