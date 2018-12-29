import  {  GET_USERS  } from '../actionCreators';

const initialState = {
    users : []
}

export default function users(state = [], action){
    debugger
    switch(action.type){
        case GET_USERS:
            return {...state, users: action.data}
        default:
            return state;
    }
}