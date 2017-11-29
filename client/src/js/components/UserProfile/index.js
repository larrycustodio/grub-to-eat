import { connect } from "react-redux";
import UserProfile from "./UserProfile";

function mapStoreToProps(store) {
  return {
    userInfo: store.userProfile
  };
}

export default connect(mapStoreToProps)(UserProfile);