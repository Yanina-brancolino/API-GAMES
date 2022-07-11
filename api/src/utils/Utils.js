const axios = require("axios");
const { Videogame, Genre } = require("../db");




let next = 'https://api.rawg.io/api/games?key=7545716f75dc4282b228589a7ce1917a';


let misVideogames = [];



async function ObtenerData(){

    let cont = 0
   
    while (cont <= 5) {
        
        let resultado = await axios.get(next);
        
        resultado = resultado.data

        for (let i = 0; i < resultado.results.length; i++) {

            let game = {
                name: resultado.results[i].name,
                image: resultado.results[i].background_image,
                released: resultado.results[i].released,
                rating: resultado.results[i].rating,
                genres: resultado.results[i].genres.map(function(x){
                    return x.name
                }),
                platforms: resultado.results[i].platforms.map(function(x){
                    return x.platform.name
                }).join(),
            }
        
            game.description = await obtenerDescripcion(
                'https://api.rawg.io/api/games/' + 
                resultado.results[i].id + 
                '?key=7545716f75dc4282b228589a7ce1917a'
            ),

            game.source = "API",
           

            console.log(resultado.results[i].id)
            console.log(game)

            misVideogames.push(game)

        }
        
        for(let f = 0; f < misVideogames.length; f++){

            const createdGame = await Videogame.create({
                name: misVideogames[f].name.toLowerCase(),
                image: misVideogames[f].image,
                released: misVideogames[f].released,
                rating: misVideogames[f].rating,
                platforms: misVideogames[f].platforms,
                description: misVideogames[f].description,
                source: misVideogames[f].source
            })


            for (let e = 0; e < misVideogames[f].genres.length; e++) {
            
                let gameGenre = await Genre.findOne({
                    where:{
                        name: misVideogames[f].genres[e]
                    }
                })
            
                if (!gameGenre){

                    gameGenre = await Genre.create({
                        name: misVideogames[f].genres[e]
                    })      
                }

                await createdGame.addGenres([gameGenre]);

            }

        }


        next = resultado.next
        cont++
        misVideogames = []

    }
  

};

async function obtenerDescripcion(myUrl){

    let resultado = await axios.get(myUrl)
    resultado = resultado.data
    // en la descripcion que seria un texto largo, aparecian <p> </p> y para eliminarlas utilice el metodo replacerAll()
    // que elimina todas las repetidas iguales a la indicada de todo el texto ensi.
    resultado.description = resultado.description.replaceAll("<p>","")
    resultado.description = resultado.description.replaceAll("</p>","")

    return resultado.description
};





module.exports = {
    ObtenerData
};