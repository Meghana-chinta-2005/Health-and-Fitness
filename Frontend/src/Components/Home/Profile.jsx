import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [userId] = useState(localStorage.getItem("userId") || "");
  const [healthData, setHealthData] = useState({
    height: "",
    weight: "",
    medicalConditions: [],
    fitnessGoals: [],
    exerciseFrequency: "",
    gender: "",
    age: "",
    activityLevel: "",
    alcohol: "",
    smoke: "",
    experienceLevel: "",
    medications: [],
    allergies: [],
  });
  const [bmi, setBmi] = useState("");
  const [dietRecommendation, setDietRecommendation] = useState("");
  const [exerciseRecommendation, setExerciseRecommendation] = useState("");

  // Calculate age from DOB
  const calculateAge = (dob) => {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date("2025-04-03"); // Current date as per system
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Fetch health form data on mount
  useEffect(() => {
    const fetchHealthData = async () => {
      const token = localStorage.getItem("token");
      if (!token || !userId) {
        alert("Please log in to view your profile!");
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/health_form/health_form/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        console.log("Health form response:", JSON.stringify(data, null, 2));

        // Handle string-to-array conversion for allergies and medications
        const allergies = data.allergies
          ? Array.isArray(data.allergies)
            ? data.allergies
            : [data.allergies]
          : [];
        const medications = data.medications
          ? Array.isArray(data.medications)
            ? data.medications
            : [data.medications]
          : ["none"];

        setHealthData({
          height: data.height || "",
          weight: data.weight || "",
          medicalConditions: data.medicalConditions || [],
          fitnessGoals: data.fitnessGoals || [],
          exerciseFrequency: data.exerciseFrequency || "",
          gender: data.gender || "",
          age: calculateAge(data.dob).toString() || "",
          activityLevel: data.activityLevel || "",
          alcohol: data.alcohol || "",
          smoke: data.smoke || "",
          experienceLevel: data.experienceLevel || "",
          medications,
          allergies,
        });
        calculateBMI(data.weight, data.height);
        if (data.height && data.weight && !isNaN(data.height) && !isNaN(data.weight)) {
          fetchPredictions({ ...data, user_id: userId });
        } else {
          console.warn("Skipping predictions: Invalid or missing height/weight");
        }
      } catch (error) {
        console.error("Error fetching health data:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
        });
        if (error.response?.status === 401) {
          alert("Session expired. Please log in again.");
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          navigate("/login");
        } else if (error.response?.status === 404) {
          alert("Health form not found. Please complete the form first.");
          navigate("/healthform");
        } else {
          alert("Failed to load profile data.");
        }
      }
    };

    fetchHealthData();
  }, [userId, navigate]);

  // Calculate BMI
  const calculateBMI = (weight, height) => {
    if (weight && height && !isNaN(weight) && !isNaN(height)) {
      const heightNum = parseFloat(height);
      // Assume height < 10 is in feet, convert to inches
      const heightInInches = heightNum < 10 ? heightNum * 12 : heightNum;
      const heightInMeters = heightInInches * 0.0254; // Convert inches to meters
      const weightInKg = parseFloat(weight);
      const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      localStorage.setItem("bmi", bmiValue);
      return bmiValue;
    }
    setBmi("");
    return "";
  };

  // Fetch diet and exercise predictions
  // Fetch diet and exercise predictions
  const fetchPredictions = async (data) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No authentication token found. Please log in.");
      navigate("/login");
      return;
    }

    if (!data.weight || !data.height || isNaN(data.weight) || isNaN(data.height)) {
      console.warn("Cannot fetch predictions: Invalid or missing weight/height");
      return;
    }

    const allergies = data.allergies
      ? Array.isArray(data.allergies)
        ? data.allergies.map((a) => a.toLowerCase())
        : [data.allergies.toLowerCase()]
      : ["none"];
    const medications = data.medications
      ? Array.isArray(data.medications)
        ? data.medications.map((m) => m.toLowerCase())
        : [data.medications.toLowerCase()]
      : ["none"];

    const exerciseFreqMap = {
      daily: 7,
      weekly: 1,
      biweekly: 0.5,
      monthly: 0.25,
    };
    const exerciseFreq =
      exerciseFreqMap[data.exerciseFrequency?.toLowerCase()] ||
      parseInt(data.exerciseFrequency) ||
      3;

    const heightNum = parseFloat(data.height);
    const heightInInches = heightNum < 10 ? heightNum * 12 : heightNum;
    const heightInCm = Math.round(heightInInches * 2.54);

    const predictionData = {
      gender: (data.gender || "male").toLowerCase(),
      age: parseInt(calculateAge(data.dob)) || 30,
      weight: parseFloat(data.weight) || 70,
      height: heightInCm,
      activity_level: (data.activityLevel || "moderate").toLowerCase(),
      health_conditions:
        data.medicalConditions?.length > 0
          ? data.medicalConditions.map((c) => c.toLowerCase())
          : ["none"],
      alcohol: (data.alcohol || "no").toLowerCase(),
      smoke: (data.smoke || "no").toLowerCase(),
      exerciseFrequency: exerciseFreq,
      fitnessGoals:
        data.fitnessGoals?.length > 0
          ? data.fitnessGoals[0].toLowerCase().replace("gain", "_gain")
          : "general_fitness",
      experienceLevel: (data.experienceLevel || "beginner").toLowerCase(),
      medications,
      allergies,
      BMI: parseFloat(calculateBMI(data.weight, data.height)) || 25,
      medicalConditions:
        data.medicalConditions?.length > 0
          ? data.medicalConditions.map((c) => c.toLowerCase())
          : null,
    };

    console.log("Sending predictionData:", JSON.stringify(predictionData, null, 2));

    try {
      console.log("Calling /predict/diet...");
      const dietResponse = await axios.post(
        "http://localhost:5000/predict/diet",
        predictionData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Diet response:", dietResponse.data);
      setDietRecommendation(dietResponse.data.recommended_diet); // Set diet recommendation

      console.log("Calling /predict/exercise...");
      const exerciseResponse = await axios.post(
        "http://localhost:5000/predict/exercise",
        predictionData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Exercise response:", exerciseResponse.data);
      setExerciseRecommendation(exerciseResponse.data.recommended_exercise); // Set exercise recommendation
    } catch (error) {
      console.error("Error fetching predictions:", error);
      if (error.response) {
        console.log("Full error response:", JSON.stringify(error.response.data, null, 2));
      }
      alert(`Failed to fetch recommendations: ${error.message}`);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHealthData((prev) => {
      const updatedData = { ...prev, [name]: value };
      calculateBMI(
        name === "weight" ? value : updatedData.weight,
        name === "height" ? value : updatedData.height
      );
      if (
        (name === "weight" || name === "height") &&
        updatedData.weight &&
        updatedData.height &&
        !isNaN(updatedData.weight) &&
        !isNaN(updatedData.height)
      ) {
        fetchPredictions({ ...updatedData, user_id: userId });
      }
      return updatedData;
    });
  };

  // Save updated health data to backend
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found. Please log in.");
        navigate("/login");
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/health_form/health_form/",
        { ...healthData, user_id: userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        alert("Profile updated successfully!");
        if (
          healthData.weight &&
          healthData.height &&
          !isNaN(healthData.weight) &&
          !isNaN(healthData.height)
        ) {
          fetchPredictions({ ...healthData, user_id: userId });
        }
      }
    } catch (error) {
      console.error("Error saving health data:", error.response?.data || error.message);
      alert(error.response?.data?.detail || "Failed to save changes.");
    }
  };

  const handleBack = () => {
    navigate("/"); // Back to home
  };

  const handleHealthFormClick = () => {
    navigate("/healthform"); // Go to health form
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Fitness Tracker</h1>
        <p className="profile-subtitle">Track your BMI and health achievements</p>
      </div>

      <div className="profile-card">
        <div className="profile-info">
          <div className="info-group">
            <label>Height (inches)</label>
            <input
              type="number"
              name="height"
              value={healthData.height}
              onChange={handleChange}
              placeholder="Enter height in inches"
            />
          </div>

          <div className="info-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={healthData.weight}
              onChange={handleChange}
              placeholder="Enter weight in kg"
            />
          </div>

          {bmi && (
            <div className="info-group">
              <label>BMI</label>
              <div className="bmi-display">{bmi}</div>
            </div>
          )}

          {dietRecommendation && (
            <div className="info-group">
              <label>Recommended Diet</label>
              <div className="readonly-display">{dietRecommendation}</div>
            </div>
          )}

          {exerciseRecommendation && (
            <div className="info-group">
              <label>Recommended Exercise</label>
              <div className="readonly-display">{exerciseRecommendation}</div>
            </div>
          )}

          <div className="info-group">
            <label>Medical Conditions</label>
            <div className="readonly-display">
              {healthData.medicalConditions.length > 0
                ? healthData.medicalConditions.join(", ")
                : "None"}
            </div>
          </div>

          <div className="info-group">
            <label>Fitness Goals</label>
            <div className="readonly-display">
              {healthData.fitnessGoals.length > 0
                ? healthData.fitnessGoals.join(", ")
                : "None"}
            </div>
          </div>

          <div className="info-group">
            <label>Exercise Frequency</label>
            <div className="readonly-display">
              {healthData.exerciseFrequency || "Not specified"}
            </div>
          </div>
        </div>

        <div className="button-group">
          <button className="save-button" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
      <button className="back-button" onClick={handleBack}>
        Back to Home
      </button>

      <button className="health-form-button" onClick={handleHealthFormClick}>
        Update Health Form
      </button>
    </div>
  );
};

export default Profile;