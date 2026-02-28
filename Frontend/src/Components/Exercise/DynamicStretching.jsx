import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import './DynamicStretching.css';

const DynamicStretching = () => {
  const navigate = useNavigate();

  const stretchingWorkouts = [
    {
      title: "Full Body Dynamic Warm-up",
      description: "Prepare your body for exercise with dynamic movements",
      duration: "15 minutes",
      level: "All Levels",
      focus: "Full Body Mobility",
      exercises: [
        "Arm circles - 30s each direction",
        "Leg swings - 20 each leg",
        "Hip circles - 30s each direction",
        "Walking knee hugs - 20 steps",
        "Walking lunges with twist - 20 steps",
        "Inchworm walks - 10 reps"
      ]
    },
    {
      title: "Athletic Dynamic Routine",
      description: "Sport-specific dynamic stretching sequence",
      duration: "20 minutes",
      level: "Intermediate",
      focus: "Sports Performance",
      exercises: [
        "High knees - 30s",
        "Butt kicks - 30s",
        "Lateral shuffles - 30s each side",
        "Carioca steps - 30s each side",
        "Dynamic leg kicks - 20 each leg",
        "Spider-man lunges - 10 each side"
      ]
    },
    {
      title: "Joint Mobility Flow",
      description: "Focus on joint mobility and range of motion",
      duration: "25 minutes",
      level: "Advanced",
      focus: "Joint Health",
      exercises: [
        "Neck mobility series",
        "Shoulder mobility flow",
        "Thoracic bridge rotations",
        "Hip 90/90 flows",
        "Ankle mobility drills",
        "Wrist/elbow mobility work"
      ]
    }
  ];

  return (
    <div className="dynamic-page">
      <div className="dynamic-container">
        <h1 className="dynamic-title">
          <HeartIcon className="title-icon" />
          Dynamic Stretching
        </h1>
        
        <div className="workouts-grid">
          {stretchingWorkouts.map((workout, index) => (
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
                  <span>{workout.level}</span>
                </div>
                <div className="detail-item">
                  <FireIcon className="detail-icon" />
                  <span>{workout.focus}</span>
                </div>
              </div>
              
              <div className="workout-phases">
                <h3>Exercise Sequence:</h3>
                <ul>
                  {workout.exercises.map((exercise, i) => (
                    <li key={i}>{exercise}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="back-button"
          onClick={() => navigate('/exercise/flexibility')}
        >
          <ArrowLeftIcon className="back-icon" />
          Back to Flexibility
        </button>
      </div>
    </div>
  );
};

export default DynamicStretching;