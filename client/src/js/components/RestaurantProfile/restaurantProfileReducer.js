import { types } from "./restaurantProfileActions";

const defaultState = {
  email: "Loading...",
  firstName: "Loading...",
  lastName: "Loading...",
  restaurantName: "Loading...",
  address1: "Loading...",
  address2: "Loading...",
  state: "Loading...",
  zipcode: "Loading...",
  city: "Loading...",
  phone: "Loading...",
  featuredImage: "Loading...",
  description: "Loading...",
  category: "Loading...",
  hours: "Loading...",
  username: "Loading...",
  menus: []
};

export default function restaurantProfileReducer(
  state = defaultState,
  { type, payload }
) {
  switch (type) {
    case types.GET_RESTAURANT_INFORMATION:
      return {
        ...state,
        payload
      };
    case types.GET_RESTAURANT_INFORMATION + "_FULFILLED":
      return {
        ...payload
      };
    case types.REMOVE_MENU + "_FULFILLED":
      return {
        ...state,
        menus: state.menus.filter(menu => menu.id !== payload.menuId)
      };
    case types.GET_MENUS + "_FULFILLED":
      return {
        ...state,
        menus: payload.menus
      };
    case types.ADD_MENU + "_FULFILLED":
      return {
        ...state,
        menus: payload.menus
      }
    default:
      return state;
  }
  return defaultState;
}
