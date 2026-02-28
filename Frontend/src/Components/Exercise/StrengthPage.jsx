import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StrengthPage.css';

const StrengthPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Back',
      image: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec',
      description: 'Back development exercises including pull-ups, rows, and lat pulldowns',
      route: '/exercise/strength/back' // ✅ Correct route for Back
    },
    {
      id: 2,
      name: 'Chest',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b',
      description: 'Chest building exercises including bench press, push-ups, and flyes',
      route: '/exercise/strength/chest' // ✅ Correct route for Chest
    },
    {
      id: 3,
      name: 'Triceps',
      image: 'https://st.depositphotos.com/2389277/3604/i/450/depositphotos_36042999-stock-photo-exercise-for-triceps-with-cable.jpg',
      description: 'Tricep focused exercises for arm development',
      route: '/exercise/strength/triceps'
    },
    {
      id: 4,
      name: 'Biceps',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61',
      description: 'Bicep building exercises for stronger arms',
      route: '/exercise/strength/biceps'
    },
    {
      id: 5,
      name: 'Legs',
      image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d',
      description: 'Lower body exercises for strength and muscle development',
      route: '/exercise/strength/legs'
    },
    {
      id: 6,
      name: 'Forearms',
      image: 'https://manofmany.com/wp-content/uploads/2023/09/13-Best-Forearm-Workouts-and-Exercises.jpg',
      description: 'Forearm and grip strength training exercises',
      route: '/exercise/strength/forearms'
    }
  ];

  return (
    <div className="strength-page">
      <h2>Strength Training Categories</h2>
      <div className="strength-grid">
        {categories.map((category) => (
          <div key={category.id} className="strength-category-card">
            <div className="category-image">
              <img src={category.image} alt={category.name} loading="lazy" />
              <div className="category-overlay">
                <h3>{category.name}</h3>
              </div>
            </div>
            <div className="category-content">
              <p>{category.description}</p>
              <button 
                className="view-exercises-btn" 
                onClick={() => category.route && navigate(category.route)} // ✅ Navigates to correct route
              >
                View Exercises
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={() => navigate('/exercise')}>
        Back to Categories
      </button>
    </div>
  );
};

export default StrengthPage;
