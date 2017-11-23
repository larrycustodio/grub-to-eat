import { types } from "./searchResultsActions";

const defaultState = {
    restaurantList: [
        {'restaurantName': 'Chronic Tacos'},
        {'restaurantName': 'Lucha Libre Taco Shop'},
        {'restaurantName': 'Lolita\'s Taco Shop'},
        {'restaurantName': 'Habaneros'},
        {'restaurantName': 'Filling Mexican Grill'},
        {'restaurantName': 'Some other restaurant'},        
    ],
};

export default function LoginReducer(state = defaultState, action) {
 return defaultState; 
}
