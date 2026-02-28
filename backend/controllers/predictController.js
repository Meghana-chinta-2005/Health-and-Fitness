exports.predictDiet = async (req, res) => {
    try {
        const data = req.body;

        // Simple mock logic for diet prediction
        let recommendation = "Balanced diet with high protein and vegetables.";
        if (data.fitnessGoals?.includes("weight_loss")) {
            recommendation = "Caloric deficit diet, rich in fiber and lean proteins.";
        } else if (data.fitnessGoals?.includes("muscle_gain")) {
            recommendation = "High protein, caloric surplus diet with complex carbohydrates.";
        }

        res.status(200).json({ recommended_diet: recommendation });
    } catch (error) {
        console.error("Predict Diet Error:", error);
        res.status(500).json({ detail: "Server Error predicting diet" });
    }
};

exports.predictExercise = async (req, res) => {
    try {
        const data = req.body;

        // Simple mock logic for exercise prediction
        let recommendation = "Mix of cardio and moderate strength training.";
        if (data.fitnessGoals?.includes("weight_loss")) {
            recommendation = "High-Intensity Interval Training (HIIT) and daily cardio.";
        } else if (data.fitnessGoals?.includes("muscle_gain")) {
            recommendation = "Heavy weightlifting 4-5 times a week focusing on progressive overload.";
        }

        res.status(200).json({ recommended_exercise: recommendation });
    } catch (error) {
        console.error("Predict Exercise Error:", error);
        res.status(500).json({ detail: "Server Error predicting exercise" });
    }
};
