import React, { useState } from 'react';
import './Recipes.css';

const Recipes = () => {
  const [selectedType, setSelectedType] = useState(''); // Track Pre/Post-Workout selection
  const [filter, setFilter] = useState(''); // Track dietary filter
  const [expandedMeals, setExpandedMeals] = useState({}); // Track expanded meal sections
  const [activeMealTime, setActiveMealTime] = useState('Breakfast'); // Track active meal time tab

  // Toggle the expanded state of a meal section
  const toggleMeal = (mealTime) => {
    setExpandedMeals((prev) => ({
      ...prev,
      [mealTime]: !prev[mealTime],
    }));
  };

  const recipes = [
    {
      id: 1,
      title: 'Grilled Chicken Salad',
      description: 'A light and healthy salad with grilled chicken, perfect for post-workout recovery.',
      image: 'https://www.chicken.ca/wp-content/uploads/2020/09/Summer-Grilled-Chicken-Cobb-Salad-57.jpg',
      ingredients: [
        '1 boneless, skinless chicken breast',
        '2 cups mixed greens (lettuce, spinach, arugula, etc.)',
        '1 tbsp olive oil',
        '1 tbsp lemon juice',
        'Salt and pepper to taste',
      ],
      instructions: [
        'Preheat the grill to medium-high heat.',
        'Rub the chicken breast with olive oil and season with salt and pepper.',
        'Place the chicken on the grill and cook for 6-7 minutes on each side, or until fully cooked (internal temperature should reach 165°F / 75°C).',
        'Remove the chicken from the grill and let it rest for a few minutes before slicing it into strips.',
        'In a large bowl, toss the mixed greens with olive oil and lemon juice until evenly coated.',
        'Top the greens with the sliced grilled chicken.',
        'Serve immediately for a fresh and nutritious post-workout meal.',
      ],
      dietary: ['weight-loss', 'gluten-free'],
      type: 'post-workout',
      mealTime: 'Lunch',
    },
    {
      id: 2,
      title: 'Lentil Curry',
      description: 'A hearty vegetarian curry with lentils, ideal for a balanced post-workout meal.',
      image: 'https://boulderlocavore.com/wp-content/uploads/2022/02/red-lentil-curry-with-spoon-boulderlocavore.com_.jpg',
      ingredients: [
        '1 cup lentils (red or green)',
        '1 can (400ml) coconut milk',
        '1 tbsp curry powder',
        '1 tsp turmeric',
        '1 tsp cumin',
        '1 small onion, chopped',
        '2 cloves garlic, minced',
        '1 tbsp olive oil',
        '2 cups cooked brown rice',
        'Salt to taste',
      ],
      instructions: [
        'Rinse lentils under cold running water until the water runs clear.',
        'In a large pot, heat olive oil over medium heat.',
        'Add chopped onions and minced garlic, and sauté until softened.',
        'Stir in curry powder, turmeric, and cumin, cooking until fragrant (about 1 minute).',
        'Add lentils and coconut milk to the pot, stirring well to combine.',
        'Bring to a boil, then reduce heat and let simmer for 20 minutes, or until lentils are tender.',
        'Meanwhile, cook brown rice separately as per package instructions.',
        'Season lentil curry with salt to taste.',
        'Serve the lentil curry over warm brown rice and enjoy!',
      ],
      dietary: ['vegetarian', 'vegan'],
      type: 'post-workout',
      mealTime: 'Dinner',
    },
    {
      id: 3,
      title: 'Beef Stir-Fry',
      description: 'A protein-packed stir-fry for muscle gain after an intense workout.',
      image: 'https://www.tablefortwoblog.com/wp-content/uploads/2022/03/beef-stir-fry-recipe-photo-tablefortwoblog-4-scaled.jpg',
      ingredients: [
        '200g beef strips',
        '1 tbsp olive oil',
        '1 red bell pepper, sliced',
        '1 yellow bell pepper, sliced',
        '2 tbsp soy sauce (low sodium)',
        '1 clove garlic, minced',
        '1/2 tsp black pepper',
        '2 cups cooked brown rice',
      ],
      instructions: [
        'Heat a large pan or wok over high heat and add olive oil.',
        'Add minced garlic and stir-fry for a few seconds until fragrant.',
        'Add beef strips and cook for 3-4 minutes until browned.',
        'Toss in sliced bell peppers and stir-fry for another 2 minutes.',
        'Pour in soy sauce and season with black pepper, stirring well.',
        'Cook for 1 more minute until everything is well coated and heated through.',
        'Serve hot over cooked brown rice and enjoy!',
      ],
      dietary: ['muscle-gain'],
      type: 'post-workout',
      mealTime: 'Dinner',
    },
    {
      id: 4,
      title: 'Quinoa Power Bowl',
      description: 'A nutrient-dense quinoa bowl packed with proteins and vitamins to aid muscle recovery.',
      image: 'https://www.kathysvegankitchen.com/wp-content/uploads/2022/03/Quinoa-bowl-bowl-recipe-1024x1013.jpg',
      ingredients: [
        '1 cup quinoa',
        '1 cup black beans (cooked or canned, rinsed)',
        '1 avocado, diced',
        '1 cup cherry tomatoes, halved',
        '1 tbsp lime juice',
        '1 tbsp olive oil',
        '1/2 tsp salt',
        '1/4 tsp black pepper',
        'Fresh cilantro (optional, for garnish)',
      ],
      instructions: [
        'Rinse quinoa under cold water and cook according to package instructions.',
        'Once cooked, let quinoa cool slightly and transfer to a mixing bowl.',
        'Add black beans, diced avocado, and cherry tomatoes to the quinoa.',
        'Drizzle with lime juice and olive oil, then season with salt and black pepper.',
        'Toss everything together gently to combine.',
        'Garnish with fresh cilantro if desired and serve immediately.',
      ],
      dietary: ['vegan', 'gluten-free'],
      type: 'post-workout',
      mealTime: 'Lunch',
    },
    {
      id: 5,
      title: 'Cottage Cheese and Berries',
      description: 'A high-protein, low-fat meal that helps with muscle recovery and replenishing glycogen.',
      image: 'https://cheeseknees.com/wp-content/uploads/2022/11/Cottage-Cheese-Bowls-sq.jpg',
      ingredients: [
        '1 cup cottage cheese (low-fat or full-fat as preferred)',
        '1/2 cup mixed berries (strawberries, blueberries, raspberries, blackberries)',
        '1 tsp honey (optional, for natural sweetness)',
        '1 tsp chia seeds (for extra fiber and omega-3s)',
        '1 tbsp crushed nuts (optional, for added crunch)',
      ],
      instructions: [
        'Spoon cottage cheese into a serving bowl.',
        'Top with mixed berries, distributing them evenly.',
        'Drizzle honey over the top for natural sweetness.',
        'Sprinkle chia seeds for added texture and nutrients.',
        'Add crushed nuts if desired for an extra crunch.',
        'Serve immediately and enjoy!',
      ],
      dietary: ['vegetarian', 'high-protein'],
      type: 'post-workout',
      mealTime: 'Breakfast',
    },
    {
      id: 6,
      title: 'Banana Oat Smoothie',
      description: 'A quick and energizing smoothie to fuel your workout.',
      image: 'https://www.recipefunnel.com/images/recipe/banana-oats-smoothie-1599460497538.webp',
      ingredients: [
        '1 ripe banana',
        '1/2 cup rolled oats',
        '1 cup almond milk (or any preferred milk)',
        '1 tbsp peanut butter',
        '1/2 tsp cinnamon (optional, for extra flavor)',
        '1/2 tsp vanilla extract (optional, for a natural sweetness)',
        'Ice cubes (optional, for a chilled smoothie)',
      ],
      instructions: [
        'Peel the banana and slice it into chunks.',
        'Add the banana, oats, almond milk, and peanut butter to a blender.',
        'For extra flavor, add cinnamon and vanilla extract if desired.',
        'Blend on high speed until smooth and creamy.',
        'If you prefer a chilled smoothie, add ice cubes and blend again.',
        'Pour into a glass and serve immediately.',
      ],
      dietary: ['vegetarian', 'gluten-free'],
      type: 'pre-workout',
      mealTime: 'Breakfast',
    },
    {
      id: 7,
      title: 'Whole Grain Toast with Avocado',
      description: 'A light and nutritious pre-workout snack to boost your energy.',
      image: 'https://www.eatingwell.com/thmb/nKFXLVvBA7Ojq7Dd9xs9ieuuRj8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EatingWell-April-Avocado-Toast-Beauty-Angle-1x1-5dbdcb43cc6a43d588a620fdb9a42bf4.jpg',
      ingredients: [
        '1 slice whole grain bread',
        '1/2 ripe avocado',
        '1 tsp lemon juice',
        'A pinch of salt',
        'A pinch of black pepper (optional, for extra flavor)',
        'Red chili flakes (optional, for a spicy kick)',
      ],
      instructions: [
        'Toast the whole grain bread until crispy and golden brown.',
        'In a small bowl, mash the avocado with lemon juice and salt until smooth.',
        'Spread the mashed avocado evenly over the toasted bread.',
        'For extra flavor, sprinkle black pepper or red chili flakes on top if desired.',
        'Serve immediately and enjoy!',
      ],
      dietary: ['vegetarian', 'vegan'],
      type: 'pre-workout',
      mealTime: 'Breakfast',
    },
    {
      id: 8,
      title: 'Greek Yogurt with Nuts',
      description: 'A protein-packed snack with healthy fats to keep you energized.',
      image: 'https://www.mygreekdish.com/wp-content/uploads/2014/09/Greek-Yogurt-drizzled-with-Honey-and-Walnuts-Yiaourti-me-meli.jpg',
      ingredients: [
        '1 cup Greek yogurt (plain, unsweetened)',
        '2 tbsp almonds (chopped or whole)',
        '2 tbsp walnuts (chopped or whole)',
        '1 tsp honey (optional, for sweetness)',
        'A pinch of cinnamon (optional, for extra flavor)',
      ],
      instructions: [
        'Scoop Greek yogurt into a bowl.',
        'Add almonds and walnuts, either whole or chopped.',
        'Drizzle honey over the yogurt and nuts for natural sweetness.',
        'For an extra boost of flavor, sprinkle a pinch of cinnamon on top.',
        'Mix well and enjoy as a pre-workout snack!',
      ],
      dietary: ['high-protein', 'gluten-free'],
      type: 'pre-workout',
      mealTime: 'Breakfast',
    },
    {
      id: 9,
      title: 'Egg White Omelette',
      description: 'A light yet protein-rich omelette for sustained energy.',
      image: 'https://www.simplyquinoa.com/wp-content/uploads/2023/03/egg-white-omelet-2.jpg',
      ingredients: [
        '4 egg whites',
        '1/2 cup spinach (chopped)',
        '1/4 cup bell peppers (diced, any color)',
        '1/4 tsp salt',
        '1/4 tsp black pepper',
        '1 tsp olive oil or cooking spray',
      ],
      instructions: [
        'Whisk the egg whites in a bowl until slightly frothy.',
        'Heat a non-stick pan over medium heat and add olive oil or cooking spray.',
        'Sauté the chopped spinach and diced bell peppers for about 1-2 minutes until slightly softened.',
        'Pour the whisked egg whites over the vegetables and cook for 2-3 minutes until the edges start to set.',
        'Gently fold the omelette in half and cook for another minute until fully set.',
        'Season with salt and black pepper, then serve warm.',
      ],
      dietary: ['high-protein', 'vegetarian'],
      type: 'pre-workout',
      mealTime: 'Breakfast',
    },
    {
      id: 10,
      title: 'Peanut Butter Banana Toast',
      description: 'A perfect balance of protein and carbs for pre-workout fuel.',
      image: 'https://www.balancenutrition.in/images/receipe-img/1529480318_large.jpg',
      ingredients: [
        '1 slice whole grain bread',
        '2 tbsp peanut butter (natural, unsweetened)',
        '1/2 banana (sliced)',
        '1 tsp chia seeds',
      ],
      instructions: [
        'Toast the whole grain bread until golden and crispy.',
        'Spread peanut butter evenly over the toast.',
        'Top with banana slices and sprinkle chia seeds on top.',
        'Serve immediately for a delicious and energizing pre-workout snack.',
      ],
      dietary: ['vegetarian', 'gluten-free'],
      type: 'pre-workout',
      mealTime: 'Breakfast',
    },
  ];

  // Filter recipes based on selected type and dietary preference
  const filteredRecipes = selectedType
    ? recipes
        .filter((recipe) => recipe.type === selectedType)
        .filter((recipe) => (filter ? recipe.dietary.includes(filter) : true))
    : [];

  // Group recipes by meal time (Breakfast, Lunch, Dinner)
  const groupedRecipes = filteredRecipes.reduce((acc, recipe) => {
    if (!acc[recipe.mealTime]) {
      acc[recipe.mealTime] = [];
    }
    acc[recipe.mealTime].push(recipe);
    return acc;
  }, {});

  // Available meal times for tabs
  const mealTimes = ['Breakfast', 'Lunch', 'Dinner'];

  return (
    <div className="recipes-page">
      {!selectedType ? (
        // Choice Screen for Pre/Post-Workout
        <section className="choice-section">
          <div className="choice-content">
            <h1>Choose Your Meal Timing</h1>
            <p className="choice-tagline">
              Are you looking for a meal to fuel your workout or to recover afterward?
            </p>
            <div className="choice-buttons">
              <button
                className="choice-btn pre-workout-btn"
                onClick={() => setSelectedType('pre-workout')}
                aria-label="Select Pre-Workout Recipes"
              >
                <div className="choice-image">
                  <img
                    src="https://imgs.search.brave.com/FG1pM1LR-WZmQcmT9l74evw9DKSlP4JH6C9FHyfMpW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnVsay5jb20vdWsv/dGhlLWNvcmUvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDcv/aW1hZ2UtMi0xLTEw/MTJ4Njc0LmpwZw"
                    alt="Pre-Workout Meal"
                  />
                </div>
                <span>Pre-Workout</span>
              </button>
              <button
                className="choice-btn post-workout-btn"
                onClick={() => setSelectedType('post-workout')}
                aria-label="Select Post-Workout Recipes"
              >
                <div className="choice-image">
                  <img
                    src="https://imgs.search.brave.com/3nyjDVBotVVflwdGsgvVZxIa2xMu0ztfsVoO3m2Tz98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyNC8wNy9DaGlj/a2VuLWxlZWstYW5k/LWJyb3duLXJpY2Ut/c3Rpci1mcnktOWYz/MzdmYS5qcGc_cXVh/bGl0eT05MCZmaXQ9/NzAwLDM1MA"
                    alt="Post-Workout Meal"
                  />
                </div>
                <span>Post-Workout</span>
              </button>
            </div>
          </div>
        </section>
      ) : (
        // Recipes List After Selection
        <>
          {/* Filter Section */}
          <section className="filter-section">
            <h2 className="section-title">
              {selectedType === 'pre-workout' ? 'Pre-Workout Recipes' : 'Post-Workout Recipes'}
            </h2>
            <div className="filter-container">
              <label htmlFor="dietary-filter">Filter by Dietary Need:</label>
              <select
                id="dietary-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filter recipes by dietary need"
              >
                <option value="">All Recipes</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-Free</option>
                <option value="high-protein">High Protein</option>
              </select>
            </div>
            <button
              className="back-btn"
              onClick={() => setSelectedType('')}
              aria-label="Go back to meal timing selection"
            >
              Change Meal Timing
            </button>
          </section>

          {/* Recipes Section with Meal Time Tabs */}
          <section className="recipes-section">
            <h2 className="section-title">
              Your {selectedType === 'pre-workout' ? 'Pre-Workout' : 'Post-Workout'} Meal Plan
            </h2>
            {/* Meal Time Tabs */}
            <div className="meal-time-tabs">
              {mealTimes.map((mealTime) => (
                <button
                  key={mealTime}
                  className={`meal-time-tab ${activeMealTime === mealTime ? 'active' : ''}`}
                  onClick={() => setActiveMealTime(mealTime)}
                >
                  {mealTime}
                </button>
              ))}
            </div>
            {Object.keys(groupedRecipes).length > 0 ? (
              <div className="recipes-grid">
                {Object.entries(groupedRecipes)
                  .filter(([mealTime]) => mealTime === activeMealTime)
                  .map(([mealTime, mealRecipes]) => (
                    <div key={mealTime} className="diet-card" data-diet-type={mealTime}>
                      <div className="diet-content">
                        <h3
                          onClick={() => toggleMeal(mealTime)}
                          style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          {mealTime}
                          <span>{expandedMeals[mealTime] ? '▲' : '▼'}</span>
                        </h3>
                        {expandedMeals[mealTime] && (
                          <div className="meal-options">
                            {mealRecipes.map((recipe) => (
                              <div key={recipe.id} className="meal-option">
                                <div className="diet-image">
                                  <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = 'https://via.placeholder.com/150';
                                    }}
                                    loading="lazy"
                                  />
                                </div>
                                <h4>{recipe.title}</h4>
                                <p>{recipe.description}</p>
                                <div className="key-points">
                                  <h4>Ingredients:</h4>
                                  <ul>
                                    {recipe.ingredients.map((ingredient, index) => (
                                      <li key={index}>{ingredient}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="key-points">
                                  <h4>Instructions:</h4>
                                  <ol>
                                    {recipe.instructions.map((step, index) => (
                                      <li key={index}>{step}</li>
                                    ))}
                                  </ol>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="no-recipes">
                No recipes found for this category. Try adjusting your filter.
              </p>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default Recipes;