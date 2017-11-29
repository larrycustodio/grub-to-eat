import { connect } from 'react-redux';
import RestaurantProfile from './RestaurantProfile';

function mapStoreToProps(store) {
<<<<<<< HEAD
 return {
  restaurantInfo: store.restaurantProfile.restaurantInfo
 }
=======
  return {
    restaurantInfo: store.restaurantProfile
  };
>>>>>>> development
}

export default connect(mapStoreToProps)(RestaurantProfile);
