import { types } from "./searchResultsActions";

const defaultState = {
    list: [],
    isLoaded: false
};

export default function searchResultsReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_RESTAURANTS_PENDING': {
            return Object.assign({},state);
        }
        case 'GET_RESTAURANTS_FULFILLED': {
            return Object.assign({},{list: payload},{isLoaded:true});
        }
        default: {
            return state;
        }
    }
    return state;
}
