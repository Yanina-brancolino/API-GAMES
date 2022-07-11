import './NavBar.css'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { getGame, orderOption, filterGenres, filterSource } from '../../Redux/Actions/index';
import Dropdown from "../Dropdown/Dropdown";



function NavBar(props){

    const dispatch = useDispatch()
    const [name, setname] = useState("")

    async function handleClick(e) {
        e.preventDefault();

        dispatch(getGame(name))
    }

    function handleInputChange(e) {
        e.preventDefault();
        setname(e.target.value)
    }
    


    
    return (
        <div className="topnav">
            {props.activar &&

                <div>
                    <a className="active" href="/home">Home</a>
                    <a href="/create">Create Video Game</a>
                </div>
            }
            
            {props.games && 
                <a href="/home">Games</a>   
            }

            {props.filters &&
                <div>

                    <Dropdown 
                        action={filterGenres}
                        content={[
                            "Action", "Adventure", "RPG", "Shooter", "Puzzle", "Indie", "Platformer", 
                            "Massively Multiplayer","Sports","Racing","Simulation","Arcade","Strategy",
                            "Fighting","Casual","Family"]
                        } 
                        name={"Filtro Genero"}
                    />
                    <Dropdown action={filterSource} content={['Existente', 'Creado']} name={"Filtro Origen"}/>
                    <Dropdown action={orderOption} content={['A-Z', 'Z-A', 'Rating +', 'Rating -']} name={"Ordenar"}/>
                </div>
            }
            


            {props.searchBar &&

                <div className="search-container">
                    <form>
                        <input type="text" placeholder="Search one Video Game.." name="search-box" onChange={(e) => handleInputChange(e)}/>
                        <button onClick={(e) => handleClick(e)} type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
                
            }    
        </div>


    );

}


export default NavBar;



  
