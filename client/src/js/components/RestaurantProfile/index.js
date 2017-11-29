import { connect } from 'react-redux';
import RestaurantProfile from './RestaurantProfile';

function mapStoreToProps(store) {
 return {
  restaurantInfo: store.restaurantProfile.restaurantInfo
 }
}

export default connect(mapStoreToProps)(RestaurantProfile);