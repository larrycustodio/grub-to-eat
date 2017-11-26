import axios from 'axios';

export const getRestaurantList = searchParams => {
    console.log( searchParams );
    return {
        type: 'GET_RESTAURANTS',
        payload: axios.get(`https://grubtoeat.herokuapp.com/api/restaurants`)
        .then(success=>{
            return success.data;
        })
        .catch(err => {
            return err;
        })
    };
}