import axios from 'axios';

export const types = {
  POST_CUSTOMER: 'POST_CUSTOMER',
  POST_RESTAURANT: 'POST_RESTAURANT'
};
export function postCustomer(customerInfo) {
  const { username, email, password } = customerInfo;
  console.log({ username, email, password });
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
export function postRestaurant(customerInfo) {
  const { username, email, password } = customerInfo;
  console.log({ username, email, password });
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
