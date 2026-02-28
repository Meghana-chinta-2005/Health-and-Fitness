import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cardio.css';

const CardioPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Running',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
      description: 'Improve endurance and cardiovascular health with running workouts',
      route: '/exercise/cardio/running'
    },
    {
      id: 2,
      name: 'Cycling',
      image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182',
      description: 'Low-impact cardio exercises for all fitness levels',
      route: '/exercise/cardio/cycling'
    },
    {
      id: 3,
      name: 'Swimming',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635',
      description: 'Full-body workout with minimal joint stress',
      route: '/exercise/cardio/swimming'
    },
    {
      id: 4,
      name: 'HIIT',
      image: 'https://images.unsplash.com/photo-1434596922112-19c563067271',
      description: 'High-intensity interval training for maximum calorie burn',
      route: '/exercise/cardio/hiit'
    },
    {
      id: 5,
      name: 'Jump Rope',
      image: 'https://media.gettyimages.com/id/1137177479/photo/jumping-rope.jpg?s=612x612&w=0&k=20&c=hOH72nP5p6mvomdQhosp-GywqgCkJDwKIphrTgcA5SY=',
      description: 'Improve coordination and burn calories with jump rope exercises',
      route: '/exercise/cardio/jump-rope'
    },
    {
      id: 6,
      name: 'Stair Climbing',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      description: 'Build lower body strength while improving cardiovascular fitness',
      route: '/exercise/cardio/stair-climbing'
    }
  ];

  return (
    <div className="cardio-page">
      <div className="cardio-container">
        <h1>Cardio Exercises</h1>
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

export default CardioPage;