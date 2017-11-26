import { connect } from "react-redux";
import SearchResults from "./SearchResults";

function mapStoreToProps(store) {
  return {
    restaurantList: store.searchResults
  };
}

export default connect(mapStoreToProps)(SearchResults);