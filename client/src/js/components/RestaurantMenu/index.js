import { connect } from "react-redux";
import RestaurantMenu from "./RestaurantMenu";

function mapStoreToProps(store) {
  return {
    restaurantMenu: store.restaurantMenu
  };
}

export default connect(mapStoreToProps)(RestaurantMenu);
