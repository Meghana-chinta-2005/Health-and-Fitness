import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import './StaticStretching.css';

const StaticStretching = () => {
  const navigate = useNavigate();

  const staticWorkouts = [
    {
      title: "Full Body Flexibility",
      description: "Gentle static stretches for whole body flexibility",
      duration: "20 minutes",
      level: "Beginner",
      focus: "Overall Flexibility",
      stretches: [
        "Standing forward bend - 30s",
        "Seated forward fold - 30s",
        "Butterfly stretch - 45s",
        "Hip flexor stretch - 30s each side",
        "Calf stretch - 30s each leg",
        "Child's pose - 1 minute"
      ]
    },
    {
      title: "Lower Body Focus",
      description: "Deep stretches for legs and hips",
      duration: "25 minutes",
      level: "Intermediate",
      focus: "Lower Body",
      stretches: [
        "Standing quad stretch - 45s each",
        "Hamstring stretch - 1 min each",
        "Pigeon pose - 1 min each side",
        "Figure 4 stretch - 45s each",
        "Split stance calf stretch - 30s each",
        "Seated pike stretch - 1 min"
      ]
    },
    {
      title: "Upper Body Release",
      description: "Release tension in upper body",
      duration: "15 minutes",
      level: "All Levels",
      focus: "Upper Body",
      stretches: [
        "Chest stretch - 45s",
        "Shoulder rolls - 30s",
        "Cross-body arm stretch - 30s each",
        "Triceps stretch - 30s each",
        "Cat-cow stretch - 1 min",
        "Thread the needle - 45s each"
      ]
    }
  ];

  return (
    <div className="static-page">
      <div className="static-container">
        <h1 className="static-title">
          <HeartIcon className="title-icon" />
          Static Stretching
        </h1>
        
        <div className="workouts-grid">
          {staticWorkouts.map((workout, index) => (
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
                <h3>Stretching Sequence:</h3>
                <ul>
                  {workout.stretches.map((stretch, i) => (
                    <li key={i}>{stretch}</li>
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

export default StaticStretching;