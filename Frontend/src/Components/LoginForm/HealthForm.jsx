import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HealthForm.css"; // Assuming this is your CSS file

const HealthForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userId, setUserId] = useState("");
  const [step, setStep] = useState(1); // Track the current step

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedToken = localStorage.getItem("token");

    if (!storedUserId || !storedToken) {
      alert("Please log in to continue!");
      navigate("/login");
    } else {
      setUserId(storedUserId);
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        user_id: String(userId),
        medicalConditions: data.medicalConditions
          ? data.medicalConditions.split(",").map((item) => item.trim())
          : [],
        fitnessGoals: data.fitnessGoals || [],
      };
      const token = localStorage.getItem("token");
      console.log("Submitting with Token:", token);
      console.log("Authorization Header:", `Bearer ${token}`);
      console.log("Form Data:", formData);

      const response = await axios.post(
        "http://localhost:5000/health_form/health_form/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", response.data);
      if (response.status === 200) {
        alert("Health form submitted successfully!");
        navigate("/profile"); // Redirect to profile after successful submission
      }
    } catch (error) {
      console.error("Submission Error:", error.response?.data || error.message);
      const errorDetail = error.response?.data?.detail || "Error submitting health form. Please try again.";
      if (error.response?.status === 401 && errorDetail.includes("token expired")) {
        alert("Your session has expired. Please log in again.");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/login"); // Redirect to login if token is expired
      } else {
        alert(errorDetail);
      }
    }
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      navigate("/profile");
    }
  };
  const handleBackClick = () => {
    navigate('/profile');
  };

  const totalSteps = 4; // 16 fields divided into groups of 4

  return (
    <div id="health-form-container-unique">
      <h1 id="health-form-title-unique">Health Assessment Form</h1>
      <form id="health-form-unique" onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Personal Information (First 4 fields) */}
        {step === 1 && (
          <>
            <div id="form-group-name-unique">
              <label htmlFor="name-input-unique">Name *</label>
              <input
                id="name-input-unique"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your full name"
              />
              {errors.name && <span id="error-name-unique">{errors.name.message}</span>}
            </div>

            <div id="form-group-email-unique">
              <label htmlFor="email-input-unique">Email *</label>
              <input
                id="email-input-unique"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Enter your email"
              />
              {errors.email && <span id="error-email-unique">{errors.email.message}</span>}
            </div>

            <div id="form-group-phone-unique">
              <label htmlFor="phone-input-unique">Phone *</label>
              <input
                id="phone-input-unique"
                {...register("phone", { required: "Phone number is required" })}
                placeholder="Enter your phone number"
              />
              {errors.phone && <span id="error-phone-unique">{errors.phone.message}</span>}
            </div>

            <div id="form-group-emergency-name-unique">
              <label htmlFor="emergency-name-input-unique">Emergency Contact Name *</label>
              <input
                id="emergency-name-input-unique"
                {...register("emergencyContactName", {
                  required: "Emergency contact name is required",
                })}
                placeholder="Enter emergency contact name"
              />
              {errors.emergencyContactName && (
                <span id="error-emergency-name-unique">{errors.emergencyContactName.message}</span>
              )}
            </div>
          </>
        )}

        {/* Step 2: More Personal Information (Next 4 fields) */}
        {step === 2 && (
          <>
            <div id="form-group-emergency-number-unique">
              <label htmlFor="emergency-number-input-unique">Emergency Contact Number *</label>
              <input
                id="emergency-number-input-unique"
                {...register("emergencyContactNumber", {
                  required: "Emergency contact number is required",
                })}
                placeholder="Enter emergency contact number"
              />
              {errors.emergencyContactNumber && (
                <span id="error-emergency-number-unique">{errors.emergencyContactNumber.message}</span>
              )}
            </div>

            <div id="form-group-dob-unique">
              <label htmlFor="dob-input-unique">Date of Birth *</label>
              <input
                id="dob-input-unique"
                type="date"
                {...register("dob", { required: "Date of birth is required" })}
              />
              {errors.dob && <span id="error-dob-unique">{errors.dob.message}</span>}
            </div>

            <div id="form-group-gender-unique">
              <label htmlFor="gender-select-unique">Gender *</label>
              <select
                id="gender-select-unique"
                {...register("gender", { required: "Gender is required" })}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span id="error-gender-unique">{errors.gender.message}</span>}
            </div>

            <div id="form-group-height-unique">
              <label htmlFor="height-input-unique">Height (in inches) *</label>
              <input
                id="height-input-unique"
                {...register("height", { required: "Height is required" })}
                placeholder="Enter your height"
              />
              {errors.height && <span id="error-height-unique">{errors.height.message}</span>}
            </div>
          </>
        )}

        {/* Step 3: Health Information (Next 4 fields) */}
        {step === 3 && (
          <>
            <div id="form-group-weight-unique">
              <label htmlFor="weight-input-unique">Weight (in kg's) *</label>
              <input
                id="weight-input-unique"
                {...register("weight", { required: "Weight is required" })}
                placeholder="Enter your weight"
              />
              {errors.weight && <span id="error-weight-unique">{errors.weight.message}</span>}
            </div>

            <div id="form-group-medical-unique">
              <label htmlFor="medical-textarea-unique">Medical Conditions (comma-separated)</label>
              <textarea
                id="medical-textarea-unique"
                {...register("medicalConditions")}
                placeholder="e.g., asthma, diabetes"
              />
            </div>

            <div id="form-group-medications-unique">
              <label htmlFor="medications-textarea-unique">Medications</label>
              <textarea
                id="medical-textarea-unique"
                {...register("medications")}
                placeholder="List any current medications"
              />
            </div>

            <div id="form-group-allergies-unique">
              <label htmlFor="allergies-textarea-unique">Allergies</label>
              <textarea
                id="allergies-textarea-unique"
                {...register("allergies")}
                placeholder="List any allergies"
              />
            </div>
          </>
        )}

        {/* Step 4: Lifestyle Information (Last 4 fields) */}
        {step === 4 && (
          <>
            <div id="form-group-smoke-unique">
              <label htmlFor="smoke-select-unique">Do you smoke? *</label>
              <select
                id="smoke-select-unique"
                {...register("smoke", { required: "This field is required" })}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.smoke && <span id="error-smoke-unique">{errors.smoke.message}</span>}
            </div>

            <div id="form-group-alcohol-unique">
              <label htmlFor="alcohol-select-unique">Do you consume alcohol? *</label>
              <select
                id="alcohol-select-unique"
                {...register("alcohol", { required: "This field is required" })}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.alcohol && <span id="error-alcohol-unique">{errors.alcohol.message}</span>}
            </div>

            <div id="form-group-exercise-unique">
              <label htmlFor="exercise-select-unique">Exercise Frequency *</label>
              <select
                id="exercise-select-unique"
                {...register("exerciseFrequency", { required: "This field is required" })}
              >
                <option value="">Select frequency</option>
                <option value="never">Never</option>
                <option value="rarely">Rarely</option>
                <option value="weekly">Weekly</option>
                <option value="daily">Daily</option>
              </select>
              {errors.exerciseFrequency && (
                <span id="error-exercise-unique">{errors.exerciseFrequency.message}</span>
              )}
            </div>

            <div id="form-group-goals-unique">
              <label htmlFor="goals-select-unique">Fitness Goals (select multiple)</label>
              <select
                id="goals-select-unique"
                multiple
                {...register("fitnessGoals")}
              >
                <option value="weightLoss">Weight Loss</option>
                <option value="muscleGain">Muscle Gain</option>
                <option value="endurance">Endurance</option>
                <option value="flexibility">Flexibility</option>
              </select>
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div id="button-group-unique">
          {step > 1 && (
            <button type="button" id="prev-button-unique" onClick={handleBack}>
              Previous
            </button>
          )}
          {step < totalSteps ? (
            <button type="button" id="next-button-unique" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button type="submit" id="submit-button-unique">
              Submit
            </button>
          )}
          <button type="button" id="back-button-unique" onClick={handleBackClick}>
            Back to Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default HealthForm;