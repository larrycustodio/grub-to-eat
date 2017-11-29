import { connect } from 'react-redux';
import RestaurantProfile from './RestaurantProfile';

function mapStoreToProps(store) {
  return {
    restaurantInfo: store.restaurantProfile
  };
}

export default connect(mapStoreToProps)(RestaurantProfile);
