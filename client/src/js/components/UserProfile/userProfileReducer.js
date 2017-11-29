import { types } from "./userProfileActions";

const defaultState = {
    email: "Loading...",
    firstName: "Loading...",
    lastName: "Loading...",
    address1: "Loading...",
    address2: "Loading...",
    state: "Loading...",
    zipcode: "Loading...",
    city: "Loading...",
    phone: "Loading...",
    username: "Loading...",
}

export default function userProfileReducer(state = defaultState, { type, payload }){
    switch(type) {
        case types.GET_USER_INFORMATION:
            return {
                ...state,
                payload
            };
        case types.GET_USER_INFORMATION + '_FULFILLED':
            return {
                ...payload
            }
        default:
            return state;
    }
    return defaultState;
}