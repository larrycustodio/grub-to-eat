export const types = {
    GET_USER_INFORMATION: 'GET_USER_INFORMATION',
    UPDATE_USER_INFORMATION: 'UPDATE_USER_INFORMATION'
};
import axios from 'axios';

export const getUserInformation = (userID) => {
    console.log(userID);
    return {
        type: types.GET_USER_INFORMATION,
        payload: axios.get(`https://grubtoeat.herokuapp.com/api/Customers/${userID}`)
        .then(res=>{
            return res.data;
        })
        .catch(console.error)
    };
}
export const updateUserInformation = (inputBody) => {
    return {
        type: types.UPDATE_SEARCH_LOCATION,
        payload: {
            input: inputBody
        }
    }
}
