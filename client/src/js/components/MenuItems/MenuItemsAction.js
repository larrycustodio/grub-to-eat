import axios from 'axios';
export const types = {
  POST_ITEM: 'POST_ITEM',
  GET_ITEM: 'POST_ITEM',
  PUT_ITEM: 'PUT_ITEM',
  DELETE_ITEM: 'DELETE_ITEM'
};

export function postItem(menu) {
  const { name, description, price, prepTime, category } = menu;
  const restId = document.cookie.substring(
    document.cookie.indexOf('restaurantID=') + 13
  );
  const menuId = '5a2080cd7e6b9d000488d0a1';

  console.log(restId);
  return {
    type: types.POST_ITEM,
    payload: axios
      .post(`https://grubtoeat.herokuapp.com/api/Menus/${menuId}/menuItems`, {
        name,
        description,
        price,
        prepTime,
        category
      })
      .then(res => {
        return axios
          .get(`https://grubtoeat.herokuapp.com/api/Menus/${menuId}/menuItems`)
          .then(response => {
            return {
              menu: response.data
            };
          });
      })
      .catch(err => console.log(err))
  };
}
export function getItem(menu) {
  const { name, description, price, prepTime, category } = menu;
  const restId = document.cookie.substring(
    document.cookie.indexOf('restaurantID=') + 13
  );
  const menuId = '5a2080cd7e6b9d000488d0a1';

  console.log(restId);
  return {
    type: types.POST_ITEM,
    payload: axios
      .get(`https://grubtoeat.herokuapp.com/api/Menus/${menuId}/menuItems`, {
        name,
        description,
        price,
        prepTime,
        category
      })
      .then(res => {
        return axios
          .get(`https://grubtoeat.herokuapp.com/api/Menus/${menuId}/menuItems`)
          .then(response => {
            return {
              menu: response.data
            };
          });
      })
      .catch(err => console.log(err))
  };
}
