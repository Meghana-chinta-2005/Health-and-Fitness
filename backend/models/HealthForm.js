const mongoose = require("mongoose");

const healthFormSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: String,
    email: String,
    phone: String,
    emergencyContactName: String,
    emergencyContactNumber: String,
    dob: Date,
    gender: String,
    height: String,
    weight: String,
    medicalConditions: [String],
    medications: [String],
    allergies: [String],
    smoke: String,
    alcohol: String,
    exerciseFrequency: String,
    fitnessGoals: [String],
    activityLevel: String,
    experienceLevel: String
}, { timestamps: true });

module.exports = mongoose.model("HealthForm", healthFormSchema);
