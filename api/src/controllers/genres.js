const { Genre, Videogame } = require('../db.js');


async function getAllGenres (req, res) {

    try {

        var gameGenres = await Genre.findAll();

        var nameGenres = gameGenres.map(el => el.name)

        return res.json(nameGenres);  
    }
    
    catch(error) {
        return res.send('ERROR');
    };

}

async function addGenre (req, res) {

    let data = { ...req.body}; 

    try {
        const newGenre = await Genre.create({
            name: data.name
        })
        return res.send(newGenre)
    }

    catch(error) {
        return res.send('ERROR');
    };
}


module.exports = {
  getAllGenres,
  addGenre
};