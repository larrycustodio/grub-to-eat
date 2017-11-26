import axios from 'axios';

export const getRestaurantList = searchParams => {
    console.log( searchParams );
    return {
        type: 'GET_RESTAURANTS',
        payload: axios.get(`${'http://localhost:5000/api/yelp/' + searchParams }`)
        .then(success=>{
            return success.data;
        })
        .catch(err => {
            return err;
        })
    };
}