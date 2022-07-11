import "./Home.css";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import FilaTarjeta from "../FilaTarjeta/FilaTarjeta";
import React, {useEffect } from 'react';
import { getVideoGames } from '../../Redux/Actions/index';
import { useSelector, useDispatch } from "react-redux";


function Home() {
    const VIDEOGAMES_PER_PAGE = 15
    const dispatch = useDispatch()
    const { videogames, page } = useSelector(state => state)

    useEffect( async () => {
        dispatch(getVideoGames({}))
    }, [dispatch])


    let pageVideogames = []
    if (page === 1) pageVideogames = videogames.slice(0 , VIDEOGAMES_PER_PAGE)
    else  pageVideogames = videogames.slice((page - 1) * VIDEOGAMES_PER_PAGE, page * VIDEOGAMES_PER_PAGE)


    let cont = 1
    let fila = []

    if(pageVideogames.length === 1){
        fila.push(<FilaTarjeta videogame={[pageVideogames[0]]}/>)
    }
    else if(pageVideogames.length === 2){
        fila.push(<FilaTarjeta videogame={[ pageVideogames[0], pageVideogames[1] ]}/>)
    }
    else {
        for(let i=0; i<pageVideogames.length; i++){
            if(cont === 3){
                fila.push(<FilaTarjeta videogame={[ pageVideogames[i-2], pageVideogames[i-1], pageVideogames[i] ]}/>)
                cont = 1
                continue
            }
            cont++
        }
        
    }

    return (
        <div id="parent" className="parent">
            <div>
                <NavBar searchBar={true} filters={true} activar={true} games={false} videogame={videogames}/>
            </div>

            {fila}

            <Pagination/>

        </div>

    )

};

export default Home;



