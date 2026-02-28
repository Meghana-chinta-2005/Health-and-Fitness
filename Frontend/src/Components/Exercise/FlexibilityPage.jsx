import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Flexibility.css';

const FlexibilityPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Yoga',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      description: 'Improve flexibility and mindfulness through traditional yoga poses',
      route: '/exercise/flexibility/yogas'
    },
    {
      id: 2,
      name: 'Dynamic Stretching',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
      description: 'Active stretches to prepare muscles for exercise and improve range of motion',
      route: '/exercise/flexibility/dynamic-stretching'
    },
    {
      id: 3,
      name: 'Static Stretching',
      image: 'https://www.scienceforsport.com/wp-content/uploads/2024/02/post-workout-stretches-.png',
      description: 'Hold stretches to improve muscle flexibility and joint mobility',
      route: '/exercise/flexibility/static-stretching'
    },
    {
      id: 4,
      name: 'Pilates',
      image: 'https://fitonist.com/wp-content/uploads/pilates3.jpg',
      description: 'Core strengthening and flexibility exercises for better posture',
      route: '/exercise/flexibility/pilates'
    },
    {
      id: 5,
      name: 'Mobility Training',
      image: 'https://sdpersonaltrainer.com/wp-content/uploads/2023/02/Mobility-Exercises_1200x.jpg',
      description: 'Joint mobility exercises to improve functional movement patterns',
      route: '/exercise/flexibility/mobility'
    },
    {
      id: 6,
      name: 'PNF Stretching',
      image: 'https://humankinetics.me/wp-content/uploads/2018/04/PNF-Stretching.png',
      description: 'Advanced stretching techniques for maximum flexibility gains',
      route: '/exercise/flexibility/PNF-stretching'
    }
  ];

  return (
    <div className="flexibility-page">
      <div className="flexibility-container">
        <h1>Flexibility Exercises</h1>
        <div className="category-row">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="category-card"
              onClick={() => navigate(category.route)}
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <h3>{category.name}</h3>
                </div>
              </div>
              <div className="category-content">
                <p>{category.description}</p>
                <button className="explore-btn">
                  Explore Exercises
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="back-to-categories" onClick={() => navigate('/exercise')}>
          Back to categories
        </button>
      </div>
    </div>
  );
};

export default FlexibilityPage;