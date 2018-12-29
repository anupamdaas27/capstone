import { combineReducers } from 'redux';
import  users  from './users';
import  reviews  from './reviews';

export default combineReducers({
    users,
    reviews
});

