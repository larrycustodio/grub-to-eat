import { combineReducers } from 'redux';

import loginReducer from './components/Login/loginReducer';
import restaurantMenuReducer from './components/RestaurantMenu/restaurantMenuReducer';
import searchDisplayReducer from './components/SearchDisplay/searchDisplayReducer';
import searchResultsReducer from './components/SearchResults/searchResultsReducer';
import restaurantProfileReducer from './components/RestaurantProfile/restaurantProfileReducer';
import userProfileReducer from './components/UserProfile/userProfileReducer';
import menuItems from './components/MenuItems/MenuItemsReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  restaurantMenu: restaurantMenuReducer,
  menuItems: menuItems,
  searchDisplay: searchDisplayReducer,
  searchResults: searchResultsReducer,
  restaurantProfile: restaurantProfileReducer,
  userProfile: userProfileReducer
});

export default rootReducer;
