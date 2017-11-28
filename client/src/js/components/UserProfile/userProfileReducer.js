import { types } from "./userProfileActions";

const defaultState = {
    email: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    state: "",
    zipcode: "",
    city: "",
    phone: "",
    username: "",
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