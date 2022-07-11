import "./Tarjeta.css";


function Tarjeta(props){

    let gameGenres;
    let miLinck;

    if(props.genres){
        gameGenres = props.genres.join(" - ")
    }

    if(props.id){
        miLinck = "/home/"+props.id 
    }
    else{
        miLinck = "/home"
    }


    return (
        <div className="card-container">
            <a href= {miLinck} style={{textDecoration: 'none'}}>
                <div className="card">
                    <img src={props.image} alt="Avatar" className="img-game"></img>
                    <div className="info-card">
                        <h4><b>Name: {props.name}</b></h4> 
                        {props.released !== undefined &&
                            <p>Released: {props.released}</p>
                        }
                        {props.rating !== undefined &&
                            <p>Rating: {props.rating}</p>
                        }
                        {props.platforms !== undefined &&
                            <p>Platforms: {props.platforms}</p>
                        }
                        {props.description !== undefined &&
                            <p>Description: {props.description}</p>
                        }
                        {props.genres !== undefined &&
                            <p>Genres: {gameGenres}</p>
                        }
                        
                    </div>
                </div>
            </a>

        </div>
    )
};


export default Tarjeta;




