import axios from 'axios';

export const getRestaurantList = searchParams => {
    return {
        type: 'GET_RESTAURANTS',
        payload: axios.get(`https://grubtoeat.herokuapp.com/api/restaurants`)
        .then(success=>{
            console.log(success.data);
            return success.data;
        })
        .catch(err => {
            return err;
        })
    };
}