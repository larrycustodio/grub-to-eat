import { connect } from 'react-redux';
import RestaurantProfile from './RestaurantProfile';

function mapStoreToProps(store) {
  return {
    restaurantProfile: store.restaurantProfile
  };
}

export default connect(mapStoreToProps)(RestaurantProfile);