import { connect } from "react-redux";
import SearchDisplay from "./SearchDisplay";

function mapStoreToProps(store) {
  return {
    selectedLocation: store.searchDisplay.selectedLocation
  };
}

export default connect(mapStoreToProps)(SearchDisplay);
