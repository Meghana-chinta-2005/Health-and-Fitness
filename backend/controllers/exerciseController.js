const Exercise = require('../models/Exercise');

exports.addExercise = async (req, res) => {
    try {
        const exercise = new Exercise({
            user: req.user,
            ...req.body
        });
        await exercise.save();
        res.status(201).json(exercise);
    } catch (error) {
        res.status(500).json({ message: 'Error saving exercise', error: error.message });
    }
};

exports.getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find({ user: req.user }).sort({ createdAt: -1 });
        res.json(exercises);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching exercises', error: error.message });
    }
};

exports.deleteExercise = async (req, res) => {
    try {
        const { id } = req.params;
        await Exercise.findOneAndDelete({ _id: id, user: req.user });
        res.json({ message: 'Exercise deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting exercise', error: error.message });
    }
};
