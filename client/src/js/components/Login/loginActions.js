import axios from 'axios';

export const types = {
  POST_CUSTOMER: 'POST_CUSTOMER',
  POST_RESTAURANT: 'POST_RESTAURANT',
  FETCH_CUSTOMER: 'FETCH_CUSTOMER',
  FETCH_RESTAURANT: 'FETCH_RESTAURANT',
  GET_CUSTOMER: 'GET_CUSTOMER',
  GET_RESTAURANT: 'GET_RESTAURANT'
};
export function postCustomer(customerInfo) {
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zip,
    userType
  } = customerInfo;
  return {
    type: types.POST_CUSTOMER,
    payload: axios
      .post('https://grubtoeat.herokuapp.com/api/Customers', {
        username,
        email,
        password
      })
      .then(res => {
        return {
          user: res.data
        };
      })
      .catch(err => console.log(err))
  };
}
export function fetchCustomer(customerInfo) {
  const { username, password, userType } = customerInfo;

  return {
    type: types.FETCH_CUSTOMER,
    payload: axios
      .post('https://grubtoeat.herokuapp.com/api/Customers/login', {
        username,
        password
      })
      .then(res => {
        let userID = res.data.userId;
        if (res.status === 200) {
          document.cookie = `token=${res.data.userId};id=${res.data.id}`;
          return axios
            .get(`https://grubtoeat.herokuapp.com/api/Customers/${userID}`)
            .then(res => {
              console.log(res.data);
              return {
                user: res.data
              };
            });
        }
      })
  };
}
export function postRestaurant(customerInfo) {
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zip,
    userType
  } = customerInfo;
  return {
    type: types.POST_RESTAURANT,
    payload: axios
      .post('https://grubtoeat.herokuapp.com/api/Restaurants', {
        username,
        email,
        password
      })
      .then(res => {
        return {
          user: res.data
        };
      })
      .catch(err => console.log(err))
  };
}
export function fetchRestaurant(customerInfo) {
  const { username, password, userType } = customerInfo;

  return {
    type: types.FETCH_RESTAURANT,
    payload: axios
      .post('https://grubtoeat.herokuapp.com/api/Restaurants/login', {
        username,
        password
      })
      .then(res => {
        let userID = res.data.userId;
        if (res.status === 200) {
          document.cookie = `token=${res.data.id};id=${res.data.id};`;
          return axios
            .get(`https://grubtoeat.herokuapp.com/api/Restaurants/${userID}`)
            .then(res => {
              console.log(res.data);
              return {
                user: res.data
              };
            });
        }
      })
  };
}
