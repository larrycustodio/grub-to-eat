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
      .post(
        'https://grubtoeat.herokuapp.com/api/Customers',
        JSON.stringify({
          username,
          email,
          password
        })
      )
      .then(res => {
        console.log(res.data);
        return {
          user: res.data
        };
      })
      .catch(err => console.log(err))
  };
}
