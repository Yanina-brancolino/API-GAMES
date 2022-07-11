import axios from 'axios';

export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_GAME = "GET_GAME";
export const ORDER_OPTION = "ORDER_OPTION";
export const FILTER_GAME ="FILTER_GAME";
export const SET_PAGE = "SET_PAGE"



//Me tarigo todos los juegos.
export const getVideoGames = () => {
    return (dispatch)=>{

        axios.get('http://localhost:3001/videogames')
        .then(result =>{
            return dispatch({
                type: GET_ALL_GAMES,
                payload: result.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })

    }
};

export const setPage = (page)=>{
    return{
        type: SET_PAGE,
        payload: page
    }
}


//Me traigo 1 juego, search.
export const getGame = (name) => {

    return (dispatch)=>{

        axios.get('http://localhost:3001/videogames?name='+name)
        .then(result => {            
            return dispatch({
                type: GET_GAME,
                payload: result.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
};

//Ordenamiento alfábetico y por rating.
export const orderOption = (option) => async (dispatch) => {

    let array = await axios.get('http://localhost:3001/videogames');
    array = array.data

    if(option === 'A-Z') {
        const one = array.sort((a, b) => {

          const first = a.name;
          const last = b.name;

            if(first < last ){
                return -1;
            } 
            else if(first > last) {
                return 1;
            } 
            else {
                return 0;
            }
        })

        dispatch({
            type: ORDER_OPTION,
            payload:[...one]
        })
    }

    if(option === 'Z-A') {

        const two = array.sort((a, b) => {

          const first = a.name;
          const last = b.name;

            if(first > last ){
              return -1;
            } 
            if(first < last) {
              return 1;
            } 
            else {
              return 0;
            }
        }) 

        dispatch({
            type: ORDER_OPTION,
            payload:[...two]
        }) 
    }

    if(option === 'Rating +'){

        console.log('aaa')

        const rating = array.sort( (a,b) => parseFloat(b.rating) - parseFloat(a.rating) )

        console.log(rating)

        dispatch({
            type: ORDER_OPTION,
            payload:[...rating]
        }) 
    }
      
    if(option === 'Rating -'){

        const rating = array.sort((a,b) => a.rating - b.rating)

        dispatch({
            type: ORDER_OPTION, 
            payload:[...rating]
        }) 
    }

};

//Filtrado por api y base de datos.
export const filterSource = (source) => async (dispatch) => {
    
    let result = await axios.get('http://localhost:3001/videogames');

    if(source === 'Existente') {

        result = result.data.filter(function(e){
            return e.source === "API"
        });

    }
    else {
        result = result.data.filter(function(e){
            return e.source === "DB"
        });
      
    }

    dispatch({
        type: FILTER_GAME, 
        payload: result
    })
};


//Filtrado por genres.
export const filterGenres = (genre) => async (dispatch) => {  

    let result = await axios.get('http://localhost:3001/videogames');

    result = result.data.filter(function(e){
        return e.genres.includes(genre)
    });

    dispatch({
        type: FILTER_GAME, 
        payload: result
    })
}