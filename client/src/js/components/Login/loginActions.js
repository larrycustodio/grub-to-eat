import axios from 'axios';

export const types = {
  POST_CUSTOMER: 'POST_CUSTOMER',
  POST_RESTAURANT: 'POST_RESTAURANT',
  FETCH_CUSTOMER: 'FETCH_CUSTOMER',
  FETCH_RESTAURANT: 'FETCH_RESTAURANT',
  GET_CUSTOMER: 'GET_CUSTOMER',
  GET_RESTAURANT: 'GET_RESTAURANT'
};
// Customer Signup Actions
export function postCustomer(customerInfo) {
  const { username, email, password, userType } = customerInfo;
  return {
    type: types.POST_CUSTOMER,
    payload: axios
      .post('https://grubtoeat.herokuapp.com/api/Customers', {
        username,
        email,
        password,
        userType
      })
      .then(res => {
        return {
          user: res.data
        };
      })
      .catch(err => console.log(err))
  };
}
// Customer Login Actions
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
        const { id, userId, ttl } = res.data;
        if (res.status === 200) {
          document.cookie = `token=${id}; max-age=${ttl}`;
          document.cookie = `customerID=${userId}; max-age=${ttl}`;
          return axios
            .get(`https://grubtoeat.herokuapp.com/api/Customers/${ userId }`)
            .then(res => {
              window.location.href = '/#';              
              return {
                user: res.data
              };
            });
        }
      })
  };
}
// Restaurant Owner Signup Action
export function postRestaurant(customerInfo) {
  const { username, email, password, userType } = customerInfo;
  return {
    type: types.POST_RESTAURANT,
    payload: axios
      .post('https://grubtoeat.herokuapp.com/api/Restaurants', {
        username,
        email,
        password,
        userType
      })
      .then(res => {
        return {
          user: res.data
        };
      })
      .catch(err => console.log(err))
  };
}
// Restaurant Owner Login Action
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
        const { id, userId, ttl } = res.data;
        if (res.status === 200) {
          document.cookie = `token=${id}; max-age=${ttl}`;
          document.cookie = `restaurantID=${userId}; max-age=${ttl}`;
          return axios
            .get(`https://grubtoeat.herokuapp.com/api/Restaurants/${userId}`)
            .then(res => {
              window.location.href = '/#';
              return {
                user: res.data
              };
            });
        }
      })
  };
}
