import './DataVideogame.css'
import Tarjeta from '../Tarjeta/Tarjeta'
import NavBar from '../NavBar/NavBar'
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function DataGame(props) {

    const [videogame, setVideogame] = useState([])
    const {game_id} = useParams();

    useEffect( async () => {  
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:3001/videogames/' + game_id)
        const videogames = await data.json()
        setVideogame(videogames)
    }

    return(
        <div className="game-container">
            <div>
                <NavBar searchBar={false} activar={false} games={true}/>
            </div>
            <div className="fila-container">
                <Tarjeta 
                    name={videogame.name} 
                    genres={videogame.genres} 
                    image={videogame.image}
                    released={videogame.released}
                    rating={videogame.rating}
                    platforms={videogame.platforms}
                    description={videogame.description}
                />
            </div>
            
        </div>
    )
};


export default DataGame;



