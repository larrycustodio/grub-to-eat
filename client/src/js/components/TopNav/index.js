import TopNav from "./TopNav";
import { connect } from "react-redux";

function mapStoreToProps(store) {
  return {
    userProfile: store.userProfile,
    restaurantProfile: store.restaurantProfile
  };
}

export default connect(mapStoreToProps)(TopNav);