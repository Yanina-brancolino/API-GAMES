const { Router } = require('express');
const { getAllGenres, addGenre} = require('../controllers/genres');
const router = Router();


router.get('/', getAllGenres);
router.post('/', addGenre);


module.exports = router;