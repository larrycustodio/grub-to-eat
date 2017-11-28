export const types = {
    GET_USER_INFORMATION: 'GET_USER_INFORMATION',
    UPDATE_USER_INFORMATION: 'UPDATE_USER_INFORMATION'
};

export const getUserInformation = (userID) => {
    return {
        type: types.GET_USER_INFORMATION,
        payload: axios.get('http://grubtoeat.herokuapp.com/api/Customers/5a1cf90b6741240004049661')
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
