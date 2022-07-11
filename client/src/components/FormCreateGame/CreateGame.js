import './CreateGame.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';



function CreateGame(){

    function createPost (e, name, released, rating, platforms, desc, genres){

        e.preventDefault()

        axios.post('http://localhost:3001/videogames',
            {
                name: name,
                genres: [genres],
                released: released,
                rating: rating,
                platforms: platforms,
                description: desc
            }
        )

        alert("Felicidades, creaste un juego!")

    }

    return(
        <div className="parent">
            <div>
                <NavBar activar={false} searchBar={false} games={true}/>
            </div>
            <div className="containerForm">
                
                <form>

                    <input className="inputText" type="text" id="name" name="full-name" placeholder="Name.."/>
                    <input className="inputText" type="text" id="released" name="released" placeholder="Released.."/>
                    <input className="inputText" type="text" id="rating" name="rating" placeholder="Rating.."/>
                    <input className="inputText" type="text" id="platforms" name="platforms" placeholder="Platforms.."/>
                    <input className="inputText" type="text" id="description" name="description" placeholder="Description.."/>
                    <label for="genres" className="dropdown1" >Genre</label>
                    <select id="genres" className="dropdown2">
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="RPG">RPG</option>
                        <option value="Shooter">Shooter</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Indie">Indie</option>
                        <option value="Platformer">Platformer</option>
                        <option value="Massively multiplayer">Massively Multiplayer</option>
                        <option value="Sports">Sports</option>
                        <option value="Racing">Racing</option>
                        <option value="Simulation">Simulation</option>
                        <option value="Fighting">Fighting</option>  
                        <option value="Arcade">Arcade</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Casual">Casual</option>
                        <option value="Family">Family</option>
                    </select>

                    <button onClick={(e) => createPost(
                        e,
                        document.getElementById("name").value,
                        document.getElementById("released").value,
                        document.getElementById("rating").value,
                        document.getElementById("platforms").value,
                        document.getElementById("description").value,
                        document.getElementById("genres").value
                    )} className="inputForm" type="submit">Create</button>

                </form>
            </div>
        </div>
        
    )

};


export default CreateGame;

