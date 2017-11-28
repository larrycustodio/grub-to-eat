import axios from 'axios';

export const types = {
  POST_CUSTOMER: 'POST_CUSTOMER',
  POST_RESTAURANT: 'POST_RESTAURANT',
  FETCH_CUSTOMER: 'FETCH_CUSTOMER',
  FETCH_RESTAURANT: 'FETCH_RESTAURANT'
};
export function postCustomer(customerInfo) {
  const { username, email, password } = customerInfo;
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
export function getCustomer(customerInfo) {
  const { username, password } = customerInfo;

  return {
    type: types.FETCH_CUSTOMER,
    payload: axios
      .post('https://grubtoeat.herokuapp.com/api/Customers/login', {
        username,
        password
      })
      .then(res => {
        console.log(res.data);
        return { userID: res.data.id };
      })
  };
}
export function postRestaurant(customerInfo) {
  const { username, email, password } = customerInfo;
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
