const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const auth = require('../middlewares/authMiddleware');
const { isDirector } = require('../middlewares/roleMiddleware');

router.get('/', pageController.getAllPages);
router.get('/:slug', pageController.getPageBySlug);

router.post('/', auth, isDirector, pageController.createPage);
router.put('/:slug', auth, isDirector, pageController.updatePage);
router.delete('/:slug', auth, isDirector, pageController.deletePage);

module.exports = router;