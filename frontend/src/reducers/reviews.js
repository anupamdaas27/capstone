import  {  GET_REVIEWS } from '../actionCreators';

const initialState = {
    reviews: []
}

export default function reviews(state = [], action){
    
    switch(action.type){
        case GET_REVIEWS:
            return {...state, reviews: action.data}           
        default:
            return state;
    }
}