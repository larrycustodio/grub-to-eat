import axios from "axios";

export const types = {
  ADD_MENU_ITEM_TO_CART: 'ADD_MENU_ITEM_TO_CART'
};

export const addItemToCart = menuItem => {
  return {
    type: types.ADD_MENU_ITEM_TO_CART,
    payload: menuItem
  };
};