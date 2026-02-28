import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import './PNFStretching.css';

const PNFStretching = () => {
  const navigate = useNavigate();

  const pnfWorkouts = [
    {
      title: "PNF Basics",
      description: "Introduction to PNF stretching techniques",
      duration: "30 minutes",
      level: "Beginner",
      focus: "Technique Learning",
      exercises: [
        "Contract-Relax Hamstring - 3 sets each leg",
        "Hold-Relax Hip Flexors - 2 sets each side",
        "Contract-Relax-Antagonist-Contract Quads",
        "Isometric Shoulder Stretch",
        "Assisted PNF Chest Stretch",
        "Basic Lower Back Protocol"
      ]
    },
    {
      title: "Advanced PNF",
      description: "Complex PNF patterns for experienced practitioners",
      duration: "45 minutes",
      level: "Advanced",
      focus: "Deep Flexibility",
      exercises: [
        "Dynamic Reversal Split Stretch",
        "Rhythmic Stabilization Hip Complex",
        "Contract-Relax Shoulder Pattern",
        "Advanced Spiral Pattern",
        "Diagonal Pattern Integration",
        "Full Body PNF Flow"
      ]
    },
    {
      title: "Athletic PNF",
      description: "Sport-specific PNF techniques",
      duration: "40 minutes",
      level: "Intermediate",
      focus: "Performance",
      exercises: [
        "Dynamic Sprint Pattern",
        "Rotational Core Protocol",
        "Power Position PNF",
        "Athletic Stance Series",
        "Multi-Joint Integration",
        "Sport-Specific Patterns"
      ]
    }
  ];

  return (
    <div className="pnf-page">
      <div className="pnf-container">
        <h1 className="pnf-title">
          <HeartIcon className="title-icon" />
          PNF Stretching
        </h1>
        
        <div className="workouts-grid">
          {pnfWorkouts.map((workout, index) => (
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
                <h3>PNF Sequence:</h3>
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

export default PNFStretching;