import { types } from "./userProfileActions";

const defaultState = {
    email: "n/a",
    firstName: "n/a",
    lastName: "n/a",
    address1: "n/a",
    address2: "n/a",
    state: "n/a",
    zipcode: "n/a",
    city: "n/a",
    phone: "n/a",
    username: "n/a"
}

export default function userProfileReducer(state = defaultState, { type, payload }){
    switch(type) {
        case 'GET_USER_INFORMATION':
            return {
                ...state,
                payload
            }
        default:
            return state;
    }
    return defaultState;    
}