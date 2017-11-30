export const types = {
  POST_ITEM: 'POST_ITEM',
  GET_ITEM: 'POST_ITEM',
  PUT_ITEM: 'PUT_ITEM',
  DELETE_ITEM: 'DELETE_ITEM'
};

export function postItem(menu) {
  const { name } = menu;
  const restId = document.cookie.substring(
    document.cookie.indexOf('restaurantID=') + 13
  );
  const menuId = number;

  console.log(restId);
  return {
    type: types.POST_ITEM,
    payload: axios
      .post(`https://grubtoeat.herokuapp.com/api/Menus/${menuId}`, {
        name
      })
      .then(res => {
        return {
          menu: res.data
        };
      })
      .catch(err => console.log(err))
  };
}
