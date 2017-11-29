export const types = {
    GET_USER_INFORMATION: 'GET_USER_INFORMATION',
    UPDATE_USER_INFORMATION: 'UPDATE_USER_INFORMATION'
};
import axios from 'axios';

//Sets payload to up-to-date user information 
export const getUserInformation = (userId) => {
    return {
        type: types.GET_USER_INFORMATION,
        payload: axios.get(`https://grubtoeat.herokuapp.com/api/Customers/${userId}`)
        .then(res => {
            return res.data;
        })
        .catch(console.error)
    };
}
//Sets payload to return edited user information
export const updateUserInformation = (inputBody, userId) => {
    const updateURL = encodeURI(`https://grubtoeat.herokuapp.com/api/Customers/update?where={"id":"${userId}"}`).replace(/%22:/g,'%22%3A');;
    return {
        type: types.UPDATE_USER_INFORMATION,
        payload: axios.post(updateURL,inputBody)
        .then(res => {
            if(res.status == 200){
                getUserInformation(userId);
                alert('User information saved!');
            } else {
                alert('Oops, something went wrong! :( \n Refresh the page and try again!');
            }
        })
        .catch(console.error)
    }
}
