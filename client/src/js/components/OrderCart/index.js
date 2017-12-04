import { connect } from "react-redux";
import OrderCart from "./OrderCart";

function mapStoreToProps(store) {
  return {
    orderCart: store.orderCart
  }
}

export default connect(mapStoreToProps)(OrderCart);