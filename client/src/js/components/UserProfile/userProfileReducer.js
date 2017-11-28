import { types } from "./userProfileActions";

const defaultState = {
    email: "Searching...",
    firstName: "Searching...",
    lastName: "Searching...",
    address1: "Searching...",
    address2: "Searching...",
    state: "Searching...",
    zipcode: "Searching...",
    city: "Searching...",
    phone: "Searching...",
    username: "Searching..."
}

export default function userProfileReducer(state = defaultState, { type, payload }){
    switch(type) {
        case 'GET_USER_INFORMATION':
            return {
                ...state,
                payload
            };
        case 'GET_USER_INFORMATION_FULFILLED':
            return {
                ...payload
            }
        default:
            return state;
    }
    return defaultState;    
}