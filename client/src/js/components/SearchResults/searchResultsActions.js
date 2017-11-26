import axios from 'axios';

export const getRestaurantList = searchParams => {
    axios.get(`https://grubtoeat.herokuapp.com/api/restaurants`)
    .then(res => {
        return {
            type: 'GET_RESTAURANTS_SUCCESS',
            payload: res.data
        }
    })
    .catch(err => {
        return {
            type: 'GET_RESTAURANTS_REJECTED',
            payload: err
        }
    })
    return {
        type: 'GET_RESTAURANTS',
        payload: {
            isLoaded: false
        }
    }
}