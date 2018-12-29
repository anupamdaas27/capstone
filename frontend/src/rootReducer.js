import  {  GET_USERS , GET_REVIEWS } from './actionCreators';

const initialState = {
    users : [],
    reviews: []
}

export default function rootReducer (state = initialState, action){
    
    switch(action.type){
        case GET_USERS:
            return {...state, users: action.data}
        
        case GET_REVIEWS:
            return {...state, reviews: action.data}
           
        default:
            return state;
    }
}