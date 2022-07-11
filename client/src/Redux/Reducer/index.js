import {
    GET_ALL_GAMES,
    GET_GAME,
    ORDER_OPTION,
    FILTER_GAME,
    SET_PAGE
}from '../Actions/index.js';


const initialState ={
    videogames: [],
    page: 1
};

export default function reducer (state = initialState, { type, payload }) {
    switch (type) {
        
        case GET_ALL_GAMES:
            return {
                ...state,
                videogames: payload
            }
        case GET_GAME: 
            return {
                ... state,
                videogames: payload
            }
        case ORDER_OPTION:
            return{
                ... state,
                videogames: payload 
            }
        case FILTER_GAME:
            return{
                ... state,
                videogames: payload 
            }
        case SET_PAGE:
            return{
                ...state,
                page: payload
            }
        default:
            return state
    }
};

