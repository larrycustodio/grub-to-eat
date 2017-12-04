import { connect } from "react-redux";
import MenuOrderSelection from './MenuOrderSelection';

function mapStoreToProps(store) {
  return {
    restaurantMenu: store.restaurantMenu,
    menuOrderSelection: store.menuOrderSelection
  };
}

export default connect(mapStoreToProps)(MenuOrderSelection);
