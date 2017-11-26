import { types } from "./searchResultsActions";

const defaultState = {
    list: [
        { restaurantName: 'Fillers' },
        { restaurantName: 'Taco Shop' },
        { restaurantName: 'Echo' },
        { restaurantName: 'Restaurant Blanks' },
        { restaurantName: 'Some other Place' },
    ],
    isLoaded: false
};

export default function searchResultsReducer(state = defaultState, action) {
    // const { type, payload } = action;
    // switch (type) {
    //     case 'GET_RESTAURANTS': {
    //         console.log(payload);
    //     }
    //     default:
    //         return state;
    // }
    return state;
}
