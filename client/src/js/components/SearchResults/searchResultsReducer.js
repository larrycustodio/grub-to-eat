import { types } from "./searchResultsActions";

const defaultState = {
    restaurantList: [
        {'restaurantName': 'Chronic Tacos'},
        {'restaurantName': 'Lucha Libre Taco Shop'},
        {'restaurantName': 'Lolita\'s Taco Shop'},
        {'restaurantName': 'Habaneros Taco Shop'},
        {'restaurantName': 'Filling Mexican Grill'},
        {'restaurantName': 'Questionable Fish Grill'},  
        {'restaurantName': 'Donuts & Other Places'},        
        {'restaurantName': 'Mystery Pie Shop'},        
        {'restaurantName': 'Dorsia'},        
        {'restaurantName': 'Broadway & Second'},        
        {'restaurantName': 'Rude Boy\'s Grill Place'},        
        
    ],
};

export default function LoginReducer(state = defaultState, action) {
 return defaultState; 
}
