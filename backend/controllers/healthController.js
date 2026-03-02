const HealthForm = require("../models/HealthForm");

exports.saveHealthForm = async (req, res) => {
    try {
        const user_id = req.user; // From authMiddleware

        // Attempt to update if exists, otherwise create new
        const form = await HealthForm.findOneAndUpdate(
            { user_id },
            { $set: { ...req.body, user_id } },
            { new: true, upsert: true }
        );

        res.status(200).json(form);
    } catch (error) {
        console.error("HealthForm Save Error:", error);
        res.status(500).json({ detail: "Server Error saving health form" });
    }
};

exports.getHealthForm = async (req, res) => {
    try {
        const user_id = req.user; // From authMiddleware
        const form = await HealthForm.findOne({ user_id });

        if (!form) return res.status(404).json({ detail: "Health form not found" });

        res.status(200).json(form);
    } catch (error) {
        console.error("HealthForm Get Error:", error);
        res.status(500).json({ detail: "Server Error fetching health form" });
    }
};
