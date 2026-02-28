import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './guidance.css';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';



const GuidanceSystem = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const guidanceCategories = [
    {
      id: 1,
      name: 'Calorify',
      path: '/guidance/Calorify',
      image: 'https://www.shutterstock.com/image-photo/calculator-food-products-on-dark-600nw-2271931057.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      description: 'Get personalized workout guidance from our AI-powered virtual coach.',
      keywords: 'coach virtual ai guidance training'
    },
    {
      id: 2,
      name: 'Progress Tracking',
      path: '/guidance/progress',
      image: '/images/progress.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77',
      description: 'Monitor your fitness journey with detailed progress tracking tools.',
      keywords: 'progress tracking stats analytics'
    },
    {
      id: 3,
      name: 'Video Tutorials',
      path: '/guidance/video-tutorials',
      image: 'https://e59j8snktre.exactdn.com/wp-content/uploads/2019/10/DSC5207-1.jpg?strip=all&lossy=1&ssl=1',
      fallbackImage: 'https://images.unsplash.com/photo-1581009146145-6d9f24ec2675',
      description: 'Learn proper form and technique through our expert-led video tutorials.',
      keywords: 'videos tutorials training learning'
    }
  ];

  useEffect(() => {
    const loadImages = async () => {
      try {
        await Promise.all(
          guidanceCategories.map(category => {
            return new Promise((resolve) => {
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

  if (error) {
    return (
      <div className="guidance-page">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="guidance-page">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="guidance-page">
      <div className="guidance-container">
        <h1>Guidance System</h1>
        
        <div className="category-column">
          {guidanceCategories.map((category) => (
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
          ))}
        </div>

        <button className="home-button" onClick={() => navigate('/')}>
          Back
        </button>
      </div>
    </div>
  );
};

export default GuidanceSystem;