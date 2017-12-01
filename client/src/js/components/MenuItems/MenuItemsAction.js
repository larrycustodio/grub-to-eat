import axios from 'axios';
export const types = {
  POST_ITEM: 'POST_ITEM',
  GET_ITEM: 'GET_ITEM',
  PUT_ITEM: 'PUT_ITEM',
  DELETE_ITEM: 'DELETE_ITEM'
};

export function postItem(menu) {
  const { name, description, price, prepTime, category } = menu;

  const menuId = '5a2080cd7e6b9d000488d0a1';
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
        {
          menu: res.data;
        }
      })
      .catch(err => console.log(err))
  };
}
export function getItem() {
  const menuId = '5a2080cd7e6b9d000488d0a1';

  return {
    type: types.GET_ITEM,
    payload: axios
      .get(`https://grubtoeat.herokuapp.com/api/Menus/${menuId}/menuItems`)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err))
  };
}
export function updateItem(itemId, updatedState) {
  const updateURL = encodeURI(
    `https://grubtoeat.herokuapp.com/api/MenuItems/update?where={"id":"${
      itemId
    }"}`
  ).replace(/%22:/g, '%22%3A');
  return {
    type: types.PUT_ITEM,
    payload: axios
      .put(updateURL, updatedState)
      .then(res.status === 200 ? getItem(itemId) : null)
      .catch(err => console.log(err))
  };
}
export function deleteItem(itemId) {
  return {
    type: types.DELETE_ITEM,
    payload: axios
      .delete(`https://grubtoeat.herokuapp.com/api/MenuItems/${itemId}`)
      .then(res => {
        console.log(res);
        return {
          menu: itemId
        };
      })
      .catch(err => console.log(err))
  };
}
