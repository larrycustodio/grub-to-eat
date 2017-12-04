import TopNav from "./TopNav";
import { connect } from "react-redux";

function mapStoreToProps(store) {
  return {
    orderCart: store.orderCart
  };
}

export default connect(mapStoreToProps)(TopNav);