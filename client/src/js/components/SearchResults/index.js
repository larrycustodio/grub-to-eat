import { connect } from "react-redux";
import SearchResults from "./SearchResults";

function mapStoreToProps(store) {
  return {
    restaurantList: store.searchResults,
    searchInput: store.searchDisplay
  };
}

export default connect(mapStoreToProps)(SearchResults);