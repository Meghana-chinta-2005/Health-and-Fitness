import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import './Pilates.css';

const Pilates = () => {
  const navigate = useNavigate();

  const pilatesWorkouts = [
    {
      title: "Mat Pilates Basics",
      description: "Foundation exercises for core strength and stability",
      duration: "30 minutes",
      level: "Beginner",
      focus: "Core & Posture",
      exercises: [
        "Breathing exercises - 2 mins",
        "The Hundred - 10 breaths",
        "Roll-ups - 8 reps",
        "Single Leg Circles - 5 each leg",
        "Rolling Like a Ball - 6 reps",
        "Single Leg Stretch - 8 each side"
      ]
    },
    {
      title: "Intermediate Flow",
      description: "Fluid sequence of classical Pilates exercises",
      duration: "45 minutes",
      level: "Intermediate",
      focus: "Full Body Control",
      exercises: [
        "Double Leg Stretch - 10 reps",
        "Spine Stretch Forward - 8 reps",
        "Open Leg Rocker - 6 reps",
        "Corkscrew - 5 each direction",
        "Saw - 6 alternating sides",
        "Teaser Progression - 4 sets"
      ]
    },
    {
      title: "Advanced Power Pilates",
      description: "Challenging sequence for experienced practitioners",
      duration: "50 minutes",
      level: "Advanced",
      focus: "Strength & Control",
      exercises: [
        "Boomerang - 6 reps",
        "Control Balance - 4 each side",
        "Jack Knife - 6 reps",
        "High Scissors - 8 each leg",
        "Shoulder Bridge - 10 reps",
        "Side Bend Series - 4 each side"
      ]
    }
  ];

  return (
    <div className="pilates-page">
      <div className="pilates-container">
        <h1 className="pilates-title">
          <HeartIcon className="title-icon" />
          Pilates Workouts
        </h1>
        
        <div className="workouts-grid">
          {pilatesWorkouts.map((workout, index) => (
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

export default Pilates;