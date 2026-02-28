import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/LoginForm/LoginForm";
import Dashboard from "./Components/Home/Arena";
import ResetPassword from "./Components/ResetPasswordForm/ResetPassword";
import ForgotPassword from "./Components/ResetPasswordForm/ForgotPassword";
import Exercise from "./Components/Exercise/Exercise";
import FlexibilityPage from "./Components/Exercise/FlexibilityPage";
import StrengthPage from "./Components/Exercise/StrengthPage";
import Tracking from "./Components/Tracking/Tracking";
import Water from "./Components/Tracking/Water";
import Sleep from "./Components/Tracking/Sleep";
import Calories from "./Components/Tracking/Calories";
import Cardio from "./Components/Exercise/Cardio";
import Back from "./Components/Exercise/Back";
import Chest from "./Components/Exercise/Chest";
import Diet from './Components/Diet/Diet';
import Triceps from './Components/Exercise/Triceps';
import Biceps from './Components/Exercise/Biceps';
import Legs from './Components/Exercise/Legs';
import Forearms from './Components/Exercise/Forearms';
import Profile from './Components/Home/Profile';
import Arena from "./Components/Home/Arena";
import HealthForm from "./Components/LoginForm/HealthForm";
import DietPlan from "./Components/Diet/DietPlan";
import FoodLog from "./Components/Diet/FoodLog";
import MealNotifications from "./Components/Diet/MealNotifications";
import Recipes from "./Components/Diet/Recipes";
import DietReport from './Components/Diet/DietReport';
import CommunityChat from './Components/Diet/CommunityChat';
import GuidanceSystem from './Components/Guidance/guidance';
import VideoTutorials from './Components/Guidance/VideoTutorials';
import Beginner from './Components/Guidance/Beginner';
import Powerlifting from './Components/Guidance/Powerlifting';
import Yoga from './Components/Guidance/Yoga';
import Strength from './Components/Guidance/Strength';
import ProgressTracking from './Components/Guidance/ProgressTracking';
import Calorify from './Components/Guidance/Calorify';
import Running from './Components/Exercise/Running';
import Swimming from './Components/Exercise/Swimming';
import HIIT from "./Components/Exercise/HIIT";
import JumpRope from "./Components/Exercise/JumpRope";
import StairClimbing from "./Components/Exercise/StairClimbing";
import Yogas from './Components/Exercise/Yogas';
import DynamicStretching from "./Components/Exercise/DynamicStretching";
import StaticStretching from './Components/Exercise/StaticStretching';
import Pilates from './Components/Exercise/Pilates';
import MobilityTraining from './Components/Exercise/MobilityTraining';
import PNFStretching from './Components/Exercise/PNFStretching';
import Cycling from "./Components/Exercise/cycling";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/healthform" element={<HealthForm />} />

          {/* Guidance System Routes */}
          <Route path="/guidance" element={<GuidanceSystem />} />
          <Route path="/guidance/video-tutorials" element={<VideoTutorials />} />
          <Route path="/guidance/video-tutorials/beginner" element={<Beginner />} />
          <Route path="/guidance/video-tutorials/powerlifting" element={<Powerlifting />} />
          <Route path="/guidance/video-tutorials/yoga" element={<Yoga />} />
          <Route path="/guidance/video-tutorials/strength" element={<Strength />} />
          <Route path="/guidance/progress" element={<ProgressTracking />} />
          <Route path="/guidance/calorify" element={<Calorify />} />

          {/* Diet Routes */}
          <Route path="/diet" element={<Diet />} />
          <Route path="/diet/:dietId" element={<DietPlan />} />
          <Route path="/food-log" element={<FoodLog />} />
          <Route path="/meal-notifications" element={<MealNotifications />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/diet-report" element={<DietReport />} />
          <Route path="/community-chat" element={<CommunityChat />} />

          {/* Exercise Routes */}
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/exercise/strength" element={<StrengthPage />} />
          <Route path="/exercise/cardio" element={<Cardio />} />
          <Route path="/exercise/flexibility" element={<FlexibilityPage />} />
          <Route path="/exercise/strength/back" element={<Back />} />
          <Route path="/exercise/strength/chest" element={<Chest />} />
          <Route path="/exercise/strength/triceps" element={<Triceps />} />
          <Route path="/exercise/strength/biceps" element={<Biceps />} />
          <Route path="/exercise/strength/legs" element={<Legs />} />
          <Route path="/exercise/strength/forearms" element={<Forearms />} />



          {/* Cardio Routes */}
          <Route path="/exercise/cardio/running" element={<Running />} />
          <Route path="/exercise/cardio/cycling" element={<Cycling />} />
          <Route path="/exercise/cardio/swimming" element={<Swimming />} />
          <Route path="/exercise/cardio/hiit" element={<HIIT />} />
          <Route path="/exercise/cardio/jump-rope" element={<JumpRope />} />
          <Route path="/exercise/cardio/stair-climbing" element={<StairClimbing />} />


          {/* Flexibility Routes */}
          <Route path="/exercise/flexibility/yogas" element={<Yogas />} /> // Update path from yoga to yogas
          <Route path="/exercise/flexibility/dynamic-stretching" element={<DynamicStretching />} /> // Update path from dynamic-stretching to dynamicstretching
          <Route path="/exercise/flexibility/static-stretching" element={<StaticStretching />} />
          <Route path="/exercise/flexibility/pilates" element={<Pilates />} />
          <Route path="/exercise/flexibility/mobility-training" element={<MobilityTraining />} />
          <Route path="/exercise/flexibility/pnf-stretching" element={<PNFStretching />} />
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />

          <Route path="/tracking" element={<Tracking />} />
          <Route path="/tracking/water" element={<Water />} />

          <Route path="/tracking/sleep" element={<Sleep />} />
          <Route path="/tracking/calories" element={<Calories />} />

          {/* 404 Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
