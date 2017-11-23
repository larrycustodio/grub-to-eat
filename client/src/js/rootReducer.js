import { combineReducers } from "redux";

import loginReducer from "./components/Login/loginReducer";
import restaurantMenuReducer from "./components/RestaurantMenu/restaurantMenuReducer";
import searchDisplayReducer from "./components/SearchDisplay/searchDisplayReducer";
import searchResultsReducer from "./components/SearchResults/searchResultsReducer";
import topNavReducer from "./components/TopNav/topNavReducer";


const rootReducer = combineReducers({
  login: loginReducer,
  restaurantMenu: restaurantMenuReducer,
  searchDisplay: searchDisplayReducer,
  searchResults: searchResultsReducer,
  topNav: topNavReducer
});

export default rootReducer;
