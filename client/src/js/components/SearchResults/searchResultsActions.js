import axios from 'axios';

export const getRestaurantList = searchParams => {
    return {
        type: 'GET_RESTAURANTS',
        payload: axios.get('https://grubtoeat.herokuapp.com/api/Restaurants')
        .then(success=>{
            return success.data;
        })
        .catch(err => {
            return err;
        })
    };
}