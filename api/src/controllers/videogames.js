const { Videogame, Genre } = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;




async function getAllVideogames(req, res){
    let name = req.query.name;

    if (name){
        try {

            var lower = name.toLowerCase();
            const dataBase = await Videogame.findAll({
                where:{
                    name: {
                        [Op.like]: `%${lower}%`
                    }
                },
                include: [Genre]
            });

            if (dataBase) {

                const gameDb = dataBase.reverse().map(result => {

                    let genre = result.genres.map(el => el.name);
    
                    return {
                        name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
                        image: result.image,
                        id: result.id,
                        source: result.source,
                        genres: genre,
                        rating: result.rating
                    }
    
                });

                return res.json(gameDb);

            }
            return res.status(404).send({error: "Videogame not found :("});
        }

        catch (error) {
            return res.status(400).send({error: "something went wrong :("});
        };
    }

    else {
        try {

            var dataBase = await Videogame.findAll({
                include: [Genre]
            });

            const gameDb = dataBase.reverse().map(result => {

                let genre = result.genres.map(el => el.name);

                return {
                    name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
                    image: result.image,
                    id: result.id,
                    source: result.source,
                    genres: genre,
                    rating: result.rating
                }

            });

            return res.json(gameDb);  
        }
        
        catch(error) {
            return res.send('ERROR');
        };
    };
};



async function addVideogame(req, res) {
    
    let data = { ...req.body}; 

    if (!req.body.name) return res.status(400).send('Name is required');

    try {

        const createdGame = await Videogame.create({
            name: data.name,
            released: data.released,
            rating: data.rating,
            platforms: data.platforms,
            description: data.description,
            source: "DB",
            image:'https://elvortex.com/wp-content/uploads/2020/06/Antisistemas-1068x601.jpg'
        });

        for(let i = 0; i < data.genres.length; i++) {

            let gameGenre = await Genre.findOne({
                where: {
                    name: data.genres[i]
                },
            })

            if (!gameGenre) {
                gameGenre = await Genre.create({
                    name: data.genres[i]
                })
            }

            await createdGame.setGenres([gameGenre]);    
        }
           
        return res.json({message: 'Videogame created succesfully', Videogame: createdGame});

    }

    catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
};



async function getVideogameById(req, res) {
    let id = req.params.id;

    if (!id) {
        return res.status(400).send({message: 'Params id not found'})
    }


    try {

        const dataBase = await Videogame.findOne({
            where:{
                id: id,
            },
            include: [Genre] 
        });

        if (!dataBase) {
            return res.status(404).send({message: 'Videogame not found'})
        }

        let genre = dataBase.genres.map(el => el.name);
        var finalVideogame ={
            name : dataBase.name.charAt(0).toUpperCase() + dataBase.name.slice(1),
            id: dataBase.id,
            image: dataBase.image,
            genres: genre,
            released: dataBase.released,
            rating: dataBase.rating,
            platforms: dataBase.platforms,
            description: dataBase.description,
            source: dataBase.source,
        } 

        return res.json(finalVideogame);
    }

    catch (error) {
        return res.status(404).send({message: 'Bad Request'});
    }
     
};


module.exports = {
    getAllVideogames,
    addVideogame,
    getVideogameById
};