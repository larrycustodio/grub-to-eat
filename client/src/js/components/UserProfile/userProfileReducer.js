import { types } from "./userProfileActions";

const defaultState = {
    email: "Enter E-Mail",
    firstName: "Enter Your First Name",
    lastName: "Enter Your Last Name",
    address1: "Enter Address 1",
    address2: "Enter Address 2",
    state: "Enter State",
    zipcode: "Enter Zip Code",
    city: "Enter City",
    phone: "Enter Mobile",
    username: "Enter Username Log In"
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