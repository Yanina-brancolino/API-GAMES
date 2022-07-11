const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const VideogameRoutes = require('./Videogames');
const GenreRoutes = require('./Genres');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/Videogames', VideogameRoutes);
router.use('/Genres', GenreRoutes);


module.exports = router;
