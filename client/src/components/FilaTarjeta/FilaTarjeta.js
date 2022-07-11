import './FilaTarjeta.css';
import Tarjeta from "../Tarjeta/Tarjeta";

function FilaTarjeta(props) {
    
    let tarjetas = []
    for(let i=0; i < props.videogame.length; i++){
        tarjetas.push(
            <Tarjeta 
                name={props.videogame[i].name} 
                genres={props.videogame[i].genres} 
                image={props.videogame[i].image}
                id={props.videogame[i].id}
                rating={props.videogame[i].rating}
            />
        )
    }

    return(
        <div className="fila-container">
            {tarjetas}
        </div>
    )

};
 
export default FilaTarjeta;



