const HealthForm = require("../models/HealthForm");

exports.saveHealthForm = async (req, res) => {
    try {
        const { user_id } = req.body;

        // Attempt to update if exists, otherwise create new
        const form = await HealthForm.findOneAndUpdate(
            { user_id },
            { $set: req.body },
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
        const { userId } = req.params;
        const form = await HealthForm.findOne({ user_id: userId });

        if (!form) return res.status(404).json({ detail: "Not found" });

        res.status(200).json(form);
    } catch (error) {
        console.error("HealthForm Get Error:", error);
        res.status(500).json({ detail: "Server Error fetching health form" });
    }
};
