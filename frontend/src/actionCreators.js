import React from 'react';
import axios from 'axios';

export const GET_USERS = "GET_USERS";
export const GET_REVIEWS = "GET_REVIEWS";

export const ADD_SUBMISSION = "ADD_SUBMISSION";

export function handleUsers(data){
    return {
        type: GET_USERS ,
        data
    }
}

export function handleReviews(data){
    return {
        type: GET_REVIEWS ,
        data
    }
}
export function handleAddSubmission(data){
    return {
        type: ADD_SUBMISSION ,
        data
    }
}

export function getUsers(){
    
    return dispatch => {
        return fetch("http://localhost:3240/api/users")
        .then(res => res.json())
        .then(data => dispatch(handleUsers(data)))
        .catch(err => console.log(err))
    }
}

export function getReviews(){
    
    return dispatch => {
        return fetch("http://localhost:3240/api/reviews")
        .then(res => res.json())
        .then(data => dispatch(handleReviews(data)))
        .catch(err => console.log(err))
    }
}

export function addSubmission(submission){ 
    debugger   
    return dispatch => {
        return axios.post('http://localhost:3240/api/submission',submission)
        .then(res=>console.log(res))
        .then(data => dispatch(handleAddSubmission(data)))
        .catch(err => console.log(err));
    };
}

