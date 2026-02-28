import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DietaryPreferencesForm from './DietaryPreferencesForm';
import './Diet.css';

const Diet = () => {
  const navigate = useNavigate();
  const [userPreferences, setUserPreferences] = useState(null);

  // Base diet categories (excluding Location-Based Diet for now)
  const baseDietCategories = [
    {
      id: 1,
      title: 'Weight Loss Diet',
      description: 'Customized meal plans for healthy weight loss',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352', // Fresh salad for weight loss
      key_points: ['Calorie deficit', 'High protein', 'Rich in fiber'],
      goal: 'weight-loss',
      restriction: 'none',
    },
    {
      id: 2,
      title: 'Muscle Gain Diet',
      description: 'Nutrition plans for building lean muscle',
      image: 'https://imgs.search.brave.com/IFVY0QfjJaGaoM-fbOdIlSuj6GsgvvoqMhl2JXeWBnY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iYXJi/ZW5kLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMi9I/b3ctdG8tR2Fpbi1N/dXNjbGUtUHJvdGVp/bi5qcGc', // High-protein meal for muscle gain
      key_points: ['High protein', 'Complex carbs', 'Healthy fats'],
      goal: 'muscle-gain',
      restriction: 'none',
    },
    {
      id: 3,
      title: 'Maintenance Diet',
      description: 'Balanced nutrition for maintaining current weight',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', // Balanced meal for maintenance
      key_points: ['Balanced macros', 'Portion control', 'Nutrient timing'],
      goal: 'maintenance',
      restriction: 'none',
    },
    {
      id: 4,
      title: 'Vegetarian Diet',
      description: 'Plant-based nutrition plans',
      image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e', // Colorful vegetarian meal
      key_points: ['Plant protein', 'Iron-rich foods', 'B12 supplements'],
      goal: 'any',
      restriction: 'vegetarian',
    },
    {
      id: 5,
      title: 'Mediterranean Diet',
      description: 'Heart-healthy meals inspired by Mediterranean cuisine',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2', // Mediterranean meal with olives and fish
      key_points: ['Rich in omega-3', 'High in antioxidants', 'Healthy fats'],
      goal: 'any',
      restriction: 'none',
    },
    {
      id: 6,
      title: 'Paleo Diet',
      description: 'Whole foods diet mimicking ancestral eating habits',
      image: 'https://images.unsplash.com/photo-1606913084603-3e7702b01627', // Paleo meal with meat and veggies
      key_points: ['Grain-free', 'High protein', 'Natural ingredients'],
      goal: 'any',
      restriction: 'paleo',
    },
    {
      id: 7,
      title: 'Keto Diet',
      description: 'High-fat, low-carb diet to promote ketosis',
      image: 'https://images.unsplash.com/photo-1610741085219-1f585a9a7e04', // Keto meal with avocado and eggs
      key_points: ['Low carbs', 'High fat', 'Ketosis-focused'],
      goal: 'weight-loss',
      restriction: 'keto',
    },
    {
      id: 8,
      title: 'Low Carb Diet',
      description: 'Reduced carbohydrate intake for better health',
      image: 'https://imgs.search.brave.com/l4W-zCiPCgbjgkmvO0y75PViSBOFQJE_t96B8HjAXlM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bm0ub3JnLy0vbWVk/aWEvbm9ydGh3ZXN0/ZXJuL2hlYWx0aGJl/YXQvaW1hZ2VzL2hl/YWx0aHktdGlwcy9u/dXRyaXRpb24vbm0t/a2V0by1kaWV0X2Zl/YXR1cmUuanBnP2xh/PWVuJmg9NzIwJnc9/MTI4MCZoYXNoPUUw/MkZCRkJDNEJFQzk2/RjMzMEMzRUREOTlF/RTIxMEMw', // Low-carb meal with zucchini noodles
      key_points: ['Low carbs', 'High protein', 'Fiber-rich'],
      goal: 'weight-loss',
      restriction: 'low-carb',
    },
    {
      id: 9,
      title: 'Low Fat Diet',
      description: 'Low-fat meals for heart health and weight management',
      image: 'https://imgs.search.brave.com/ZkOlSnfPFKcKhD2mLirHCvrXwToN06GkJ2Aqe-JdDBc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWNoaWNhZ29tZWRp/Y2luZS5vcmcvX25l/eHQvaW1hZ2U_dXJs/PWh0dHBzOi8vZWRn/ZS5zaXRlY29yZWNs/b3VkLmlvL3VuaWNo/aWNhZ29tYy04MW5i/cW5iMy9tZWRpYS9p/bWFnZXMvdWNtYy9m/b3JlZnJvbnQvY2hh/bm5lbC1wYWdlcy9n/YXN0cm9lbnRlcm9s/b2d5L2Z1bGwtZmF0/LXZzLWxvdy1mYXQt/ODMyLXVuaXZlcnNh/bC5qcGc_c2NfbGFu/Zz1lbiZ3PTM4NDAm/cT03NQ', // Low-fat meal with grilled chicken
      key_points: ['Low fat', 'High protein', 'Nutrient-dense'],
      goal: 'weight-loss',
      restriction: 'low-fat',
    },
  ];

  const handlePreferencesSubmit = (preferences) => {
    setUserPreferences(preferences);
  };

  // Add Location-Based Diet dynamically if location is provided
  const location = userPreferences?.location || 'Unknown';
  const locationBasedDiet = location !== 'Unknown' && location !== '' ? {
    id: baseDietCategories.length + 1,
    title: `Location-Based Diet for ${location}`,
    description: `Traditional meals inspired by ${location} cuisine`,
    image: 'https://images.unsplash.com/photo-1606499991749-daf34d50451b', // Generic image for location-based diet
    key_points: ['Local ingredients', 'Cultural flavors', 'Seasonal produce'],
    goal: 'any',
    restriction: 'none',
  } : null;

  // Combine base categories with location-based diet (if applicable)
  const dietCategories = locationBasedDiet
    ? [...baseDietCategories, locationBasedDiet]
    : baseDietCategories;

  // Filter categories based on user preferences
  const filteredCategories = userPreferences
    ? dietCategories.filter((category) => {
        const matchesGoal =
          category.goal === userPreferences.goal || category.goal === 'any';
        const matchesRestriction =
          userPreferences.restriction === ''
            ? true
            : category.restriction === userPreferences.restriction;
        return matchesGoal && matchesRestriction;
      })
    : dietCategories;

  return (
    <div className="diet-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Health with Personalized Diet Plans</h1>
          <p className="hero-tagline">
            Discover meal plans tailored to your fitness goals and start your journey to a healthier you today.
          </p>
          <button
            className="cta-button"
            onClick={() => document.getElementById('preferences-form').scrollIntoView({ behavior: 'smooth' })}
            aria-label="Get Started with Your Diet Plan"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Preferences Form Section */}
      <section id="preferences-form" className="preferences-section">
        <h2 className="section-title">Tell Us About Your Goals</h2>
        <DietaryPreferencesForm onSubmit={handlePreferencesSubmit} />
      </section>

      {/* Diet Plans Section */}
      <section >
        <h2 className="section-title">Explore Your Diet Plans</h2>
        <div className="diet-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="diet-card">
              <div className="diet-image">
                <img src={category.image} alt={category.title} loading="lazy" />
              </div>
              <div className="diet-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="key-points">
                  <h4>Key Features:</h4>
                  <ul>
                    {category.key_points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className="view-diet-btn"
                  onClick={() =>
                    navigate(`/diet/${category.title.toLowerCase().replace(/\s+/g, '-')}`, {
                      state: { location: userPreferences?.location || '' },
                    })
                  }
                  aria-label={`View ${category.title} Plan`}
                >
                  View Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="section-title">Take Control of Your Nutrition</h2>
        <div className="action-buttons">
          <button
            className="view-diet-btn food-log-btn"
            onClick={() => navigate('/food-log')}
            aria-label="Go to Food Log"
          >
            Track Your Food Log
          </button>
          <button
            className="view-diet-btn meal-notifications-btn"
            onClick={() => navigate('/meal-notifications')}
            aria-label="Set Meal Notifications"
          >
            Set Meal Reminders
          </button>
          <button
            className="view-diet-btn recipes-btn"
            onClick={() => navigate('/recipes')}
            aria-label="Explore Recipes"
          >
            Explore Recipes
          </button>
          <button
            className="view-diet-btn diet-report-btn"
            onClick={() => navigate('/diet-report')}
            aria-label="View Weekly Report"
          >
            View Weekly Report
          </button>
          <button
            className="view-diet-btn community-chat-btn"
            onClick={() => navigate('/community-chat')}
            aria-label="Join Community Chat"
          >
            Join Community Chat
          </button>
        </div>
      </section>
    </div>
  );
};

export default Diet;