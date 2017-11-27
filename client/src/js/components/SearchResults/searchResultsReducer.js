import { types } from "./searchResultsActions";

const defaultState = {
    list: [],
    isLoaded: false
};

export default function searchResultsReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_RESTAURANTS_PENDING': {
            return {
                list: [],
                isLoaded: false
            };
        }
        case 'GET_RESTAURANTS_FULFILLED': {
            return {
                list: payload,
                isLoaded: true
            };
        }
        default: {
            return state;
        }
    }
    return state;
}
