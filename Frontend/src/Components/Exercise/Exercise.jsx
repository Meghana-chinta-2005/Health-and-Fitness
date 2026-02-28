import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Exercise.css';

const Exercise = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 1,
      name: 'Strength Training',
      path: '/exercise/strength',
      image: '/images/strength.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
      description: 'Build strength and muscle with targeted exercises for different muscle groups.',
      keywords: 'strength muscle weights lifting bodybuilding resistance'
    },
    {
      id: 2,
      name: 'Cardio',
      path: '/exercise/cardio',
      image: '/images/cardio.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c',
      description: 'Improve cardiovascular health and endurance with our diverse range of cardio workouts.',
      keywords: 'cardio running jogging cycling endurance stamina'
    },
    {
      id: 3,
      name: 'Flexibility',
      path: '/exercise/flexibility',
      image: '/images/flexibility.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      description: 'Enhance flexibility and mobility through targeted stretching and yoga-inspired movements.',
      keywords: 'flexibility yoga stretching mobility balance'
    }
  ];

  useEffect(() => {
    const loadImages = async () => {
      try {
        await Promise.all(
          categories.map(category => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = category.image;
              img.onload = resolve;
              img.onerror = () => {
                console.warn(`Failed to load ${category.image}, using fallback`);
                resolve();
              };
            });
          })
        );
      } catch (err) {
        setError('Failed to load images');
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const handleCategoryClick = (path) => {
    try {
      navigate(path);
    } catch (err) {
      console.error('Navigation failed:', err);
      setError('Failed to navigate to the selected category');
    }
  };

  const filteredCategories = categories.filter(category => {
    const searchString = searchTerm.toLowerCase();
    return (
      category.name.toLowerCase().includes(searchString) ||
      category.description.toLowerCase().includes(searchString) ||
      category.keywords.toLowerCase().includes(searchString)
    );
  });

  if (error) {
    return (
      <div className="exercise-page">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="exercise-page">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="exercise-page">
      <div className="exercise-container">
        
        
        <h1>Choose Your Workout</h1>
        
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search workouts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="category-column">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div 
                key={category.id} 
                className="category-card"
                onClick={() => handleCategoryClick(category.path)}
              >
                <div className="category-image">
                  <img 
                    src={category.image} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = category.fallbackImage;
                    }}
                    alt={category.name} 
                    loading="lazy" 
                  />
                  <div className="category-overlay">
                    <h3>{category.name}</h3>
                  </div>
                </div>
                <div className="category-content">
                  <p>{category.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              No workouts found matching your search.
            </div>
          )}
        </div>
      </div>
      <button className="back-btn" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default Exercise;