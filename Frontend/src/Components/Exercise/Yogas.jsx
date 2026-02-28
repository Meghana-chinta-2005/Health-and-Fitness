import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  HeartIcon,
  MoonIcon
} from '@heroicons/react/24/solid';
import './Yogas.css';

const Yogas = () => {
  const navigate = useNavigate();

  const yogaPractices = [
    {
      title: "Morning Flow",
      description: "Energizing yoga sequence to start your day",
      duration: "25 minutes",
      level: "Beginner",
      focus: "Energy & Flexibility",
      poses: [
        "Child's Pose - 1 minute",
        "Cat-Cow Stretch - 2 minutes",
        "Downward Dog - 2 minutes",
        "Sun Salutation A x3",
        "Warrior I & II",
        "Triangle Pose",
        "Final Relaxation"
      ]
    },
    {
      title: "Power Yoga",
      description: "Strength-building yoga sequence",
      duration: "45 minutes",
      level: "Intermediate",
      focus: "Strength & Balance",
      poses: [
        "Sun Salutation B x3",
        "Chaturanga Flow",
        "Crow Pose Practice",
        "Standing Balance Series",
        "Core Work",
        "Inversions Practice",
        "Savasana"
      ]
    },
    {
      title: "Restorative Evening",
      description: "Gentle stretching for relaxation",
      duration: "30 minutes",
      level: "All Levels",
      focus: "Relaxation & Recovery",
      poses: [
        "Seated Meditation",
        "Gentle Twists",
        "Pigeon Pose",
        "Happy Baby",
        "Legs Up the Wall",
        "Supported Bridge",
        "Extended Savasana"
      ]
    }
  ];

  return (
    <div className="yogas-page">
      <div className="yogas-container">
        <h1 className="yogas-title">
          <HeartIcon className="title-icon" />
          Yoga Practices
        </h1>
        
        <div className="workouts-grid">
          {yogaPractices.map((workout, index) => (
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
                  <MoonIcon className="detail-icon" />
                  <span>{workout.focus}</span>
                </div>
              </div>
              
              <div className="workout-phases">
                <h3>Sequence:</h3>
                <ul>
                  {workout.poses.map((pose, i) => (
                    <li key={i}>{pose}</li>
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

export default Yogas;