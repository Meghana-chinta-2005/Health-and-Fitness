import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import './MobilityTraining.css';

const MobilityTraining = () => {
  const navigate = useNavigate();

  const mobilityWorkouts = [
    {
      title: "Joint Mobility Basics",
      description: "Fundamental movements to improve range of motion",
      duration: "25 minutes",
      level: "Beginner",
      focus: "Full Body Mobility",
      exercises: [
        "Neck circles - 10 each direction",
        "Shoulder mobility flow - 2 mins",
        "Hip CAR's - 8 each side",
        "Ankle mobility - 1 min each",
        "Wrist mobility flow - 2 mins",
        "Spinal waves - 10 reps"
      ]
    },
    {
      title: "Dynamic Joint Prep",
      description: "Pre-workout mobility routine",
      duration: "30 minutes",
      level: "Intermediate",
      focus: "Movement Prep",
      exercises: [
        "Thoracic bridges - 8 reps",
        "90/90 hip flows - 10 each side",
        "Shoulder PAIL/RAILS - 3 sets",
        "Jefferson curls - 8 reps",
        "Squat mobility flow - 2 mins",
        "Bear crawl variations - 3 mins"
      ]
    },
    {
      title: "Advanced Mobility Flow",
      description: "Complex movements for enhanced mobility",
      duration: "40 minutes",
      level: "Advanced",
      focus: "Movement Mastery",
      exercises: [
        "Skin the cat progression",
        "Deep squat transitions",
        "handstand shoulder mobility",
        "Pancake mobility flow",
        "Bridge progressions",
        "Advanced hip flow sequence"
      ]
    }
  ];

  return (
    <div className="mobility-page">
      <div className="mobility-container">
        <h1 className="mobility-title">
          <HeartIcon className="title-icon" />
          Mobility Training
        </h1>
        
        <div className="workouts-grid">
          {mobilityWorkouts.map((workout, index) => (
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
                <h3>Mobility Sequence:</h3>
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

export default MobilityTraining;