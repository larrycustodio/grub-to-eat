import { types } from "./searchResultsActions";

const defaultState = {
    restaurantList: [
        { restaurantName: 'Fillers' },
        { restaurantName: 'Taco Shop' }
    ],
    isLoaded: false
};

export default function searchResultsReducer(state = defaultState, action) {
    console.log(state);
    const { type, payload } = action;
    
    switch (type) {
        case 'GET_RESTAURANTS': {
            console.log('working reducers...')
            return {
            }
        }
        case 'GET_RESTAURANTS_SUCCESS': {
            console.log('success reducer!');
            return {
            }
        }
        case 'GET_RESTAURANTS_REJECTED': {
            console.log('issue occured on reducer :(');
            return {
            }
        }
        default:
            return state;
    }
}
