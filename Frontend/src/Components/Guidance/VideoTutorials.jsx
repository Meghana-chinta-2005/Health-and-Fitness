import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoTutorials.css';

const VideoTutorials = () => {
  const navigate = useNavigate();

  const tutorialCategories = [
    {
      id: 1,
      name: 'Beginner Workouts',
      image: 'https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/lean-man-doing-lateral-raises.jpg?itok=ug5NBdtX',
      description: 'Learn basic exercises and proper form for beginners',
      route: '/guidance/video-tutorials/beginner'  // Updated route path
    },
    {
      id: 2,
      name: 'Strength Training',
      image: 'https://www.fastandup.in/nutrition-world/wp-content/uploads/2023/05/Workouts-for-Men.jpg',
      description: 'Advanced strength building techniques and workouts',
      route: '/guidance/video-tutorials/strength'  // Updated route path
    },
    {
      id: 3,
      name: 'Yoga',
      image: 'https://yoga.ayush.gov.in/public/assets/front/blog/eys.jpg',
      description: 'Yoga asanas for flexibility and relaxation',
      route: '/guidance/video-tutorials/yoga'  // Updated route path
    },
    {
      id: 4,
      name: 'Powerlifting',
      image: 'https://hips.hearstapps.com/hmg-prod/images/powerlifter-with-strong-arms-lifting-weights-royalty-free-image-595768514-1546267269.jpg',
      description: 'Master squat, bench, and deadlift techniques',
      route: '/guidance/video-tutorials/powerlifting'  // Updated route path
    }
  ];

  return (
    <div className="video-tutorials-page">
      <h2>Video Tutorial Categories</h2>
      <div className="video-grid">
        {tutorialCategories.map((category) => (
          <div key={category.id} className="video-category-card">
            <div className="category-image">
              <img src={category.image} alt={category.name} loading="lazy" />
              <div className="category-overlay">
                <h3>{category.name}</h3>
              </div>
            </div>
            <div className="category-content">
              <p>{category.description}</p>
              <button 
                className="view-tutorials-btn"
                onClick={() => category.route && navigate(category.route)}
              >
                View Tutorials
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="back-to-categories" onClick={() => navigate('/guidance')}>
          Back to categories
        </button>
    </div>
  );
};

export default VideoTutorials;