const { Router } = require('express');
const { getAllVideogames, addVideogame, getVideogameById } = require('../controllers/videogames');
const router = Router();

router.get('/', getAllVideogames);
router.post('/', addVideogame);
router.get('/:id', getVideogameById); 


module.exports = router;
