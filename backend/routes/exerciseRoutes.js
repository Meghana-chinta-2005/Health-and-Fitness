const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { addExercise, getExercises, deleteExercise } = require('../controllers/exerciseController');

router.post('/', auth, addExercise);
router.get('/', auth, getExercises);
router.delete('/:id', auth, deleteExercise);

module.exports = router;
