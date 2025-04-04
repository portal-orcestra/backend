const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const { isDirector } = require('../middlewares/roleMiddleware');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/profile', auth, userController.getProfile);
router.put('/promote/:userId', auth, isDirector, userController.promoteToDirector);

module.exports = router;