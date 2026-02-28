import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './DietPlan.css';

const DietPlan = () => {
  const { dietId } = useParams();
  const { state } = useLocation();
  const location = state?.location || 'Unknown';

  // State to manage which meal section is expanded
  const [expandedMeals, setExpandedMeals] = useState({});

  // Toggle the expanded state of a meal section
  const toggleMeal = (mealTime) => {
    setExpandedMeals((prev) => ({
      ...prev,
      [mealTime]: !prev[mealTime],
    }));
  };

  const mealPlans = {
    'weight-loss-diet': {
      title: 'Weight Loss Diet',
      meals: [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Oatmeal with Berries and Chia Seeds',
              image: 'https://www.yummytoddlerfood.com/wp-content/uploads/2022/03/chia-seed-oatmeal-in-bowl-with-berries.jpg',
              description: 'A fiber-rich breakfast to keep you full longer.',
              recipe: 'Cook oats with milk or water, top with berries and chia seeds.',
            },
            {
              name: 'Green Smoothie',
              image: 'https://simplegreensmoothies.com/wp-content/uploads/best-green-smoothie-recipe-simple-featured.jpg',
              description: 'A nutrient-packed drink to start your day.',
              recipe: 'Blend spinach, banana, almond milk, and flaxseeds.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Grilled Chicken Salad',
              image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Grilled-Chicken-Salad-min.jpg',
              description: 'A protein-packed, low-carb meal.',
              recipe: 'Grill chicken, toss with mixed greens, olive oil, and balsamic vinegar.',
            },
            {
              name: 'Quinoa and Veggie Bowl',
              image: 'https://dishingouthealth.com/wp-content/uploads/2023/06/VeggieQuinoaBowls_Update_Square.jpg',
              description: 'A nutritious and satisfying meal.',
              recipe: 'Cook quinoa, add sautéed veggies, and season with herbs.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Steamed Vegetables with Baked Salmon',
              image: 'https://www.healthyfood.com/wp-content/uploads/2016/09/Baked-salmon-with-roasted-veges.jpg',
              description: 'A light yet filling meal.',
              recipe: 'Bake salmon with lemon and herbs, serve with steamed veggies.',
            },
            {
              name: 'Lentil Soup',
              image: 'https://thegreekfoodie.com/wp-content/uploads/2021/01/Greek_lentil_soup_SQ-500x375.jpg',
              description: 'A warm and hearty dish.',
              recipe: 'Cook lentils with tomatoes, garlic, and spices for a comforting meal.',
            },
          ],
        },
      ],
      supplements: ['Whey protein', 'Creatine', 'BCAAs'],
    },
    'maintenance-diet': {
      title: 'Maintenance Diet',
      meals: [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Greek Yogurt with Honey and Nuts',
              image: 'https://www.mygreekdish.com/wp-content/uploads/2014/09/Greek-Yogurt-drizzled-with-Honey-and-Walnuts-Yiaourti-me-meli.jpg',
              description: 'A balanced meal with protein and healthy fats.',
              recipe: 'Mix Greek yogurt with honey and a handful of nuts.',
            },
            {
              name: 'Whole Wheat Toast with Peanut Butter',
              image: 'https://miro.medium.com/v2/resize:fit:2000/1*uqYtbD2Tuw58LgV0ceHJpQ.jpeg',
              description: 'A simple and energy-boosting breakfast.',
              recipe: 'Spread peanut butter on whole wheat toast, add banana slices.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Grilled Chicken Wrap',
              image: 'https://theflavoursofkitchen.com/wp-content/uploads/2022/01/Grilled-Chicken-Wrap-2-scaled.jpg',
              description: 'A protein-rich and satisfying meal.',
              recipe: 'Wrap grilled chicken, lettuce, and tomatoes in a whole wheat tortilla.',
            },
            {
              name: 'Brown Rice and Stir-Fried Vegetables',
              image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/stirfryvege_5809-b719615.jpg',
              description: 'A balanced meal with fiber and essential nutrients.',
              recipe: 'Cook brown rice, stir-fry veggies with olive oil and soy sauce.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Baked Chicken with Roasted Vegetables',
              image: 'https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2022/01/Whole-Roasted-Chicken-crop-27-300x450.jpg',
              description: 'A hearty and nutritious meal.',
              recipe: 'Bake chicken breast with herbs, serve with roasted vegetables.',
            },
            {
              name: 'Vegetable Soup with Whole Grain Bread',
              image: 'https://www.budgetbytes.com/wp-content/uploads/2019/12/Vegetable-Barley-Soup-finished.jpg',
              description: 'A light yet filling dinner option.',
              recipe: 'Cook assorted vegetables with broth, serve with whole grain bread.',
            },
          ],
        },
      ],
      supplements: ['Multivitamin', 'Vitamin D', 'Probiotics'],
    },
    'vegetarian-diet': {
      title: 'Vegetarian Diet',
      meals: [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Avocado Toast with Seeds',
              image: 'https://www.eatingbirdfood.com/wp-content/uploads/2017/06/avocado-hummus-toast-hemp-seeds-5.jpg',
              description: 'A nutrient-dense start to your day.',
              recipe: 'Mash avocado on whole wheat toast, sprinkle chia and flaxseeds.',
            },
            {
              name: 'Banana Almond Smoothie',
              image: 'https://www.eatingbirdfood.com/wp-content/uploads/2023/02/banana-almond-butter-smoothie-hero.jpg',
              description: 'A protein-rich and energy-boosting smoothie.',
              recipe: 'Blend banana, almond milk, almonds, and honey for a creamy smoothie.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Chickpea Salad Bowl',
              image: 'https://frommybowl.com/wp-content/uploads/2021/08/Mediterranean_Chickpea_Salad_Vegan_GlutenFree_FromMyBowl-6-scaled.jpg',
              description: 'A high-protein and fiber-rich meal.',
              recipe: 'Mix boiled chickpeas, cucumbers, tomatoes, and lemon dressing.',
            },
            {
              name: 'Paneer Stir Fry with Brown Rice',
              image: 'https://www.foodnwellness.com/wp-content/uploads/2023/05/IMG_1447-scaled.jpg',
              description: 'A balanced meal with protein and whole grains.',
              recipe: 'Sauté paneer with bell peppers and onions, serve with brown rice.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Lentil Soup with Whole Grain Bread',
              image: 'https://jackslobodian.com/wp-content/uploads/2019/11/Puy-Lentil-Soup-1024x681.jpg',
              description: 'A light yet protein-rich dinner.',
              recipe: 'Cook lentils with tomatoes, garlic, and spices, serve with whole grain bread.',
            },
            {
              name: 'Grilled Vegetables with Hummus',
              image: 'https://heartbeetkitchen.com/foodblog/wp-content/uploads/2019/09/hummus-veg-platter.jpg',
              description: 'A flavorful and fiber-rich meal.',
              recipe: 'Grill assorted vegetables and serve with hummus dip.',
            },
          ],
        },
      ],
      supplements: ['Vitamin B12', 'Iron', 'Plant-based protein powder'],
    },
    'mediterranean-diet': {
      title: 'Mediterranean Diet',
      meals: [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Greek Yogurt with Honey and Nuts',
              image: 'https://damnspicy.com/wp-content/uploads/2020/10/greek-yogurt-with-walnuts-and-honey-recipe-2_-500x375.jpg',
              description: 'A protein-rich, probiotic-packed start to the day.',
              recipe: 'Mix Greek yogurt with honey, walnuts, and a sprinkle of cinnamon.',
            },
            {
              name: 'Tomato and Avocado Toast',
              image: 'https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/12/tomato-avocado-toast.jpg',
              description: 'A fiber-rich and heart-healthy meal.',
              recipe: 'Top whole-grain toast with mashed avocado, cherry tomatoes, and olive oil.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Mediterranean Quinoa Salad',
              image: 'https://www.themediterraneandish.com/wp-content/uploads/2024/01/TMD-Quinoa-Salad-17.jpg',
              description: 'A refreshing, nutrient-dense meal with healthy fats.',
              recipe: 'Mix cooked quinoa, cucumbers, tomatoes, olives, feta cheese, and lemon dressing.',
            },
            {
              name: 'Grilled Salmon with Roasted Vegetables',
              image: 'https://www.eatingwell.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
              description: 'A protein-packed meal rich in omega-3.',
              recipe: 'Grill salmon with lemon and herbs, serve with roasted zucchini and bell peppers.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Lentil and Spinach Stew',
              image: 'https://toriavey.com/images/2016/12/Lentil-Spinach-Soup-with-Lemon-1.jpg',
              description: 'A warm, hearty dish packed with plant-based protein.',
              recipe: 'Cook lentils with tomatoes, garlic, and spinach in a vegetable broth.',
            },
            {
              name: 'Stuffed Bell Peppers',
              image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/08/stuffed-bell-peppers.jpg',
              description: 'A flavorful dish loaded with fiber and nutrients.',
              recipe: 'Stuff bell peppers with a mix of brown rice, chickpeas, herbs, and olive oil.',
            },
          ],
        },
      ],
      supplements: ['Olive oil', 'Omega-3', 'Vitamin D'],
    },
    'paleo-diet': {
      title: 'Paleo Diet',
      meals: [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Scrambled Eggs with Spinach and Avocado',
              image: 'https://www.platingsandpairings.com/wp-content/uploads/2023/03/spinach-scrambled-eggs-recipe-8-480x270.jpg',
              description: 'A protein-packed and nutrient-dense breakfast.',
              recipe: 'Scramble eggs in coconut oil, add sautéed spinach, and serve with avocado slices.',
            },
            {
              name: 'Banana and Almond Butter Bowl',
              image: 'https://simple-veganista.com/wp-content/uploads/2017/02/Chocolate-Almond-Butter-Smoothie-Bowl-3-1.jpg',
              description: 'A naturally sweet and energy-boosting meal.',
              recipe: 'Slice bananas, drizzle with almond butter, and sprinkle with shredded coconut.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Grilled Chicken with Roasted Sweet Potatoes',
              image: 'https://www.butterandbaggage.com/wp-content/uploads/2022/06/Chicken-and-Sweet-Potatoes-7.jpg',
              description: 'A balanced meal with clean protein and complex carbs.',
              recipe: 'Grill chicken with olive oil and herbs, serve with roasted sweet potatoes.',
            },
            {
              name: 'Avocado Tuna Salad',
              image: 'https://goodnessavenue.com/wp-content/uploads/2023/12/avocado-tuna-egg-salad-2.jpg',
              description: 'A light yet filling protein-packed dish.',
              recipe: 'Mix canned tuna with mashed avocado, diced cucumbers, and lemon juice.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Baked Salmon with Garlic Asparagus',
              image: 'https://paleogrubs.com/wp-content/uploads/2018/02/5-salmon-recipe.jpg',
              description: 'A rich source of omega-3 and antioxidants.',
              recipe: 'Bake salmon with garlic and lemon, serve with sautéed asparagus.',
            },
            {
              name: 'Beef Stir-Fry with Cauliflower Rice',
              image: 'https://againstallgrain.com/wp-content/uploads/2016/08/IMG_9839.jpg',
              description: 'A grain-free alternative with bold flavors.',
              recipe: 'Sauté beef with bell peppers and mushrooms, serve over cauliflower rice.',
            },
          ],
        },
      ],
      supplements: ['Collagen', 'Magnesium', 'Fish oil'],
    },
    'keto-diet': {
      title: 'Keto Diet',
      meals: [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Keto Scrambled Eggs with Cheese & Avocado',
              image: 'https://ketodietapp.com/Blog/lchf-soc/fluffy-scrambled-eggs-with-cottage-cheese-69477C58.jpg',
              description: 'A high-fat, low-carb breakfast to keep you in ketosis.',
              recipe: 'Scramble eggs with butter, add shredded cheese, and serve with avocado slices.',
            },
            {
              name: 'Chia Seed Pudding with Coconut Milk',
              image: 'https://www.wellplated.com/wp-content/uploads/2020/04/Coconut-Chia-Pudding-Best-Recipe.jpg',
              description: 'A creamy and fiber-rich keto-friendly option.',
              recipe: 'Mix chia seeds with coconut milk, refrigerate overnight, and top with nuts.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Grilled Chicken with Creamy Spinach',
              image: 'https://www.eatwell101.com/wp-content/uploads/2018/05/Chicken-with-Spinach-in-Creamy-Parmesan-Sauce-1.jpg',
              description: 'A protein-rich, high-fat meal with minimal carbs.',
              recipe: 'Grill chicken with olive oil and spices, serve with sautéed spinach in cream.',
            },
            {
              name: 'Avocado & Tuna Salad',
              image: 'https://cdn.apartmenttherapy.info/image/upload/v1626038590/k/Photo/Recipes/2021-07-Avocado-Tuna-Salad/2021-07-07_ATK4841.jpg',
              description: 'A nutritious, no-carb meal perfect for keto.',
              recipe: 'Mix tuna with mashed avocado, lemon juice, and olive oil.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Baked Salmon with Garlic Butter',
              image: 'https://www.inspiredtaste.net/wp-content/uploads/2018/09/Easy-Oven-Baked-Salmon-Recipe-2-1200.jpg',
              description: 'A perfect balance of healthy fats and protein.',
              recipe: 'Bake salmon with garlic butter and serve with sautéed zucchini.',
            },
            {
              name: 'Beef & Broccoli Stir-Fry',
              image: 'https://vjcooks.com/wp-content/uploads/2024/08/VJ_Cooks_Beef__Broccoli_Stir_Fry-1.jpg',
              description: 'A classic keto-friendly Asian-inspired dish.',
              recipe: 'Stir-fry beef with broccoli in coconut oil and soy sauce.',
            },
          ],
        },
      ],
      supplements: ['Electrolytes', 'MCT oil', 'Magnesium'],
    },
    'low-carb-diet': {
      title: 'Low Carb Diet',
      meals: [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Egg Omelette with Spinach & Cheese',
              image: 'https://www.sweetashoney.co/wp-content/uploads/Spinach-Omelette-10-scaled.jpg',
              description: 'A protein-packed omelette with spinach and cheese.',
              recipe: 'Beat eggs, mix with spinach and cheese, cook on a pan till golden.',
            },
            {
              name: 'Chia Seed Pudding',
              image: 'https://www.sharmispassions.com/wp-content/uploads/2017/10/chia-pudding3-500x500.jpg',
              description: 'A fiber-rich pudding with coconut milk and nuts.',
              recipe: 'Mix chia seeds with coconut milk, refrigerate overnight, top with nuts.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Grilled Chicken with Avocado Salad',
              image: 'https://theyummydelights.com/wp-content/uploads/2021/05/grilled-chicken-salad-1.jpg',
              description: 'A high-protein meal with healthy fats.',
              recipe: 'Grill chicken with spices, serve with avocado and leafy greens.',
            },
            {
              name: 'Cauliflower Fried Rice',
              image: 'https://www.kitchensanctuary.com/wp-content/uploads/2020/09/Cauliflower-Egg-Fried-Rice-square-FS-14.jpg',
              description: 'A low-carb alternative to traditional fried rice.',
              recipe: 'Sauté riced cauliflower with veggies, soy sauce, and scrambled eggs.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Zucchini Noodles with Pesto',
              image: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2013/08/Zucchini-Noodles-with-Pesto-7-500x427.jpg',
              description: 'A light and delicious pasta alternative.',
              recipe: 'Spiralize zucchini, toss with homemade pesto, serve with Parmesan.',
            },
            {
              name: 'Grilled Salmon with Asparagus',
              image: 'https://www.somewhatsimple.com/wp-content/uploads/2020/05/grilled_salmon_asparagus_1.jpg',
              description: 'A nutritious, Omega-3 rich meal.',
              recipe: 'Grill salmon with lemon and herbs, serve with sautéed asparagus.',
            },
          ],
        },
      ],
      supplements: ['Fiber', 'Omega-3', 'Vitamin D'],
    },
    'low-fat-diet': {
      title: 'Low Fat Diet',
      meals: [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Veggie Omelette with Cheese',
              image: 'https://heavenlyhomecooking.com/wp-content/uploads/2021/04/Vegetable-Omelette-Recipe-Featured-1-500x375.jpg',
              description: 'A protein-rich breakfast with healthy fats.',
              recipe: 'Whisk eggs, add chopped bell peppers and spinach, cook with minimal butter, top with cheese.',
            },
            {
              name: 'Greek Yogurt with Nuts & Berries',
              image: 'https://afoodcentriclife.com/wp-content/uploads/2012/06/greek-yogurt-parfaits-square-crop-single-parfait-1938.jpg',
              description: 'A creamy, low-fat, nutrient-dense option.',
              recipe: 'Mix low-fat Greek yogurt with a few almonds and berries.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Grilled Chicken with Roasted Brussels Sprouts',
              image: 'https://juliasalbum.com/wp-content/uploads/2021/09/lemon-garlic-butter-chicken-with-brussels-sprouts.jpg',
              description: 'A balanced meal with protein and fiber.',
              recipe: 'Grill chicken breast without skin, serve with roasted Brussels sprouts.',
            },
            {
              name: 'Shrimp & Avocado Salad',
              image: 'https://pinchofyum.com/wp-content/uploads/Shrimp-Avocado-Salad-with-Miso-Dressing-1.jpg',
              description: 'A light yet filling meal with minimal healthy fats.',
              recipe: 'Toss cooked shrimp with small amount of avocado, lettuce, and lemon juice.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Salmon with Sautéed Spinach',
              image: 'https://i.ytimg.com/vi/jC9nHPMd6Ek/hqdefault.jpg',
              description: 'A high-protein, low-fat dinner option.',
              recipe: 'Bake salmon with herbs, serve with spinach sautéed in minimal oil.',
            },
            {
              name: 'Turkey & Cauliflower Rice Stir-Fry',
              image: 'https://chelseajyoung.com/wp-content/uploads/2016/12/Beef-w-Broccoli.jpg',
              description: 'A low-fat twist on a classic dish.',
              recipe: 'Stir-fry lean turkey with garlic, ginger, and cauliflower rice.',
            },
          ],
        },
      ],
      supplements: ['Vitamin C', 'Calcium', 'Probiotics'],
    },
    'location-based-diet': {
      title: `Location-Based Diet for ${location}`,
      meals: location === 'South Indian' ? [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Idli with Sambar and Coconut Chutney',
              image: 'https://img-global.cpcdn.com/recipes/3ad5b61d118fd588/400x400cq70/photo.jpg',
              description: 'A light and nutritious fermented rice-lentil dish.',
              recipe: 'Steam fermented rice and urad dal batter; serve with sambar and coconut chutney.',
            },
            {
              name: 'Upma with Vegetables',
              image: 'https://www.butteredveg.com/wp-content/uploads/2023/01/Breakfast-Semolina-Veg-Upma-1200-10-2.jpg',
              description: 'A savory semolina dish packed with vegetables.',
              recipe: 'Roast semolina, cook with veggies, temper with mustard seeds and curry leaves.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Rice with Rasam, Vegetable Curry, and Papad',
              image: 'https://myfoodstory.com/wp-content/uploads/2022/02/Jesses-Rasam-Recipe-Tomato-Rasam-1-1.jpg',
              description: 'A comforting meal with tangy rasam, vegetables, and crispy papad.',
              recipe: 'Cook rice, prepare tamarind-based rasam, and serve with mixed vegetable curry.',
            },
            {
              name: 'Sambar Rice with Curd',
              image: 'https://i.ytimg.com/vi/BNFotbO-AsU/mqdefault.jpg',
              description: 'A wholesome meal with lentil-based sambar and rice.',
              recipe: 'Cook rice, mix with sambar, and serve with curd on the side.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Dosa with Tomato Chutney',
              image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm0LP8_Qv1XLQXSd7O02FJwQINdw39xQiXHfoIR_azRhKjlbTybitzHmN69dNtU-U8vgWGpBsau5mCodFgXSSYZxc0D65Y8CsVq_Tt-LjL9u4EPJh-2-V-tn5TECiA0c9uqJprIE1o904/s1600/Tomato-garlic-chutney-recipe.jpg',
              description: 'A crispy fermented crepe with a spicy chutney.',
              recipe: 'Prepare dosa batter, spread on a pan, cook till golden, serve with chutney.',
            },
            {
              name: 'Ragi Mudde with Sambar',
              image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/ragi-mudde-recipe.jpg',
              description: 'A traditional nutritious millet dish.',
              recipe: 'Cook ragi flour with water to form balls, serve with sambar.',
            },
          ],
        },
      ] : location === 'North Indian' ? [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Paratha with Curd and Pickle',
              image: 'https://ayummyaffair.com/wp-content/uploads/2024/07/Dal-Stuffed-Parantha-with-Curd-Pickle.webp',
              description: 'A whole wheat stuffed flatbread with probiotic-rich curd.',
              recipe: 'Stuff whole wheat dough with spiced potatoes, roll, cook, and serve with curd.',
            },
            {
              name: 'Besan Chilla',
              image: 'https://pipingpotcurry.com/wp-content/uploads/2022/11/Besan-Chilla-Recipe-Piping-Pot-Curry-2.jpg',
              description: 'A gram flour pancake rich in protein.',
              recipe: 'Mix besan with water, spices, and veggies, pan-fry till golden.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Rajma with Rice and Salad',
              image: 'https://sukhis.com/app/uploads/2020/06/Newsletter_rajma-Masla.jpg',
              description: 'A high-protein kidney bean curry with fragrant basmati rice.',
              recipe: 'Pressure cook rajma with onions, tomatoes, and spices; serve with rice.',
            },
            {
              name: 'Chole with Roti',
              image: 'https://polkapuffs.wordpress.com/wp-content/uploads/2015/10/image34.jpg',
              description: 'A spiced chickpea curry served with whole wheat roti.',
              recipe: 'Cook chickpeas with tomatoes, onions, and aromatic spices.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Dal with Roti and Sabzi',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/A_thali_with_daal_roti_bhindi_ki_sabzi_and_mango_pickle.jpg/2560px-A_thali_with_daal_roti_bhindi_ki_sabzi_and_mango_pickle.jpg',
              description: 'A simple yet fulfilling meal with lentils and vegetables.',
              recipe: 'Prepare dal with turmeric, tomatoes, and ghee; serve with roti.',
            },
            {
              name: 'Baingan Bharta with Roti',
              image: 'https://pipingpotcurry.com/wp-content/uploads/2022/11/Baingan-Bharta-Recipe-Piping-Pot-Curry.-.jpg',
              description: 'Smoky mashed eggplant with Indian spices.',
              recipe: 'Roast eggplant, mash, and cook with onions, tomatoes, and spices.',
            },
          ],
        },
      ] : location === 'East Indian' ? [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Chirer Pulao with Banana',
              image: 'https://img-global.cpcdn.com/recipes/3b94e82346d79313/1200x630cq70/photo.jpg',
              description: 'A light and nutritious flattened rice dish.',
              recipe: 'Cook flattened rice with vegetables and spices; serve with banana.',
            },
            {
              name: 'Luchi with Aloo Tarkari',
              image: 'https://kitchenofdebjani.com/wp-content/uploads/2018/02/Sada-Aloo-Chorchori-luchi.jpg',
              description: 'Fluffy fried bread served with potato curry.',
              recipe: 'Make a soft dough, deep-fry, and serve with spiced potatoes.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Machher Jhol with Rice and Veggies',
              image: 'https://dashofturmeric.in/wp-content/uploads/2021/05/DoT-Shorshe-Posto-Macher-Jhol-1.jpg',
              description: 'A classic Bengali fish curry with steamed rice.',
              recipe: 'Cook fish with mustard, turmeric, and potatoes; serve with rice.',
            },
            {
              name: 'Dalma with Rice',
              image: 'https://d1uz88p17r663j.cloudfront.net/original/d40be7ac794899f21dc625d07753feb3_Dalma_-_Plating.jpg',
              description: 'A wholesome lentil dish with vegetables.',
              recipe: 'Cook dal with pumpkin, potatoes, and tempered spices.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Aloo Posto with Roti',
              image: 'https://mygoodfoodworld.com/wp-content/uploads/2023/10/aloo-beans-posto_main.jpg',
              description: 'A simple yet flavorful poppy seed potato curry.',
              recipe: 'Cook potatoes with ground poppy seeds, mustard oil, and spices.',
            },
            {
              name: 'Shukto with Rice',
              image: 'https://kitchenofdebjani.com/wp-content/uploads/2022/08/Bengali-Shukto-Recipe-Debjanir-Rannaghar.jpg',
              description: 'A mildly bitter Bengali vegetable stew.',
              recipe: 'Cook mixed vegetables with mustard paste and milk.',
            },
          ],
        },
      ] : location === 'West Indian' ? [
        {
          time: 'Breakfast',
          options: [
            {
              name: 'Poha with Peanuts',
              image: 'https://aahaaramonline.com/wp-content/uploads/2014/12/north-indian-style-poha-with-fried-potatoes-and-peanuts.jpg',
              description: 'A light and flavorful flattened rice dish.',
              recipe: 'Sauté poha with turmeric, peanuts, and mustard seeds.',
            },
            {
              name: 'Thepla with Pickle',
              image: 'https://somethingiscooking.com/wp-content/uploads/2017/01/MethiThepla3.jpg',
              description: 'A spiced flatbread popular in Gujarat.',
              recipe: 'Knead whole wheat flour with spices, roll thin, cook on a griddle.',
            },
          ],
        },
        {
          time: 'Lunch',
          options: [
            {
              name: 'Dal Dhokli with Salad',
              image: 'https://foodsandflavorsbyshilpi.com/wp-content/uploads/2014/12/FB-Thumnails-website-old-86.jpg',
              description: 'A hearty one-pot meal with lentils and wheat dumplings.',
              recipe: 'Cook dal with wheat dough pieces, temper with mustard seeds and curry leaves.',
            },
            {
              name: 'Misal Pav',
              image: 'https://rakskitchen.net/wp-content/uploads/2021/02/misal-pav.jpg',
              description: 'A spicy sprout curry served with bread.',
              recipe: 'Cook sprouted lentils with spices, serve with pav and onions.',
            },
          ],
        },
        {
          time: 'Dinner',
          options: [
            {
              name: 'Bhakri with Sabzi',
              image: 'https://www.nehascookbook.com/wp-content/uploads/2022/09/Junka-jowar-bhakri-WS.jpg',
              description: 'A rustic whole grain flatbread with vegetable curry.',
              recipe: 'Make dough from jowar/bajra flour, roll thick, cook on fire.',
            },
            {
              name: 'Gujarati Kadhi with Khichdi',
              image: 'https://ministryofcurry.com/wp-content/uploads/2017/11/IMG_4413.jpg',
              description: 'A sweet-sour yogurt curry served with a lentil-rice mix.',
              recipe: 'Whisk yogurt with gram flour, cook with spices; serve with khichdi.',
            },
          ],
        },
      ] : [],
      supplements: ['Local herbs', 'Regional spices', 'Seasonal fruits'],
    },
  };

  const plan = mealPlans[dietId] || { 
    title: 'Diet Not Found', 
    meals: [], 
    supplements: [] 
  };

  return (
    <div className="diet-page">
      <h1 className="section-title">{plan.title}</h1>
      <p className="diet-intro">Here’s your personalized meal plan for the day.</p>
      
      {plan.meals.length === 0 ? (
        <div className="no-plan">
          <p>No meal plan found for this diet. Please select a different diet or check your location settings.</p>
        </div>
      ) : (
        <div >
          <div className="diet-grid">
            {plan.meals.map((meal, index) => (
              <div key={index} className="diet-card" data-diet-type={meal.time}>
                <div className="diet-content">
                  <h3 
                    onClick={() => toggleMeal(meal.time)} 
                    style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    {meal.time}
                    <span>{expandedMeals[meal.time] ? '▲' : '▼'}</span>
                  </h3>
                  {expandedMeals[meal.time] && (
                    <div className="meal-options">
                      {meal.options.map((option, optIndex) => (
                        <div key={optIndex} className="meal-option">
                          <div className="diet-image">
                            <img 
                              src={option.image} 
                              alt={option.name}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/150'; // Fallback image
                              }}
                            />
                          </div>
                          <h4>{option.name}</h4>
                          <p>{option.description}</p>
                          <div className="key-points">
                            <h4>Recipe</h4>
                            <p>{option.recipe}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {plan.supplements.length > 0 && (
        <div className="supplements-section">
          <h2 className="section-title">Recommended Supplements</h2>
          <div className="key-points">
            <ul>
              {plan.supplements.map((supplement, index) => (
                <li key={index}>{supplement}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

// Error Boundary Wrapper
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong with the diet plan.</h1>;
    }
    return this.props.children;
  }
}

const WrappedDietPlan = () => (
  <ErrorBoundary>
    <DietPlan />
  </ErrorBoundary>
);

export default DietPlan;