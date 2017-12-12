import { types } from './menuItemsActions';

const defaultState = {
  menuList: [],
  menuItemList: [],
  isRestaurantIdValid: false,

};

export default function menuItemsReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {

    case types.VERIFY_RESTAURANT_ID + '_FULFILLED': {
      return {
        ...state,
        isRestaurantIdValid: payload.isValid,
        restaurantId: payload.restaurantId
      }
    }

    case types.GET_MENU + '_FULFILLED': {
      return {
        ...state,
        menuList: payload
      }
    }

    case types.POST_ITEM + '_FULFILLED': {
      if (payload) {
        return {
          ...state,
          menuItemList: [...state.menuItemList, payload]
        };
      }
    }

    case types.GET_ITEM + '_FULFILLED': {
      if (payload) {
        return {
          ...state,
          menuItemList: [...state.menuItemList, ...payload]
        };
      }
    }
   
    case types.PUT_ITEM + '_PENDING': {
      return state;
    }
    
    case types.PUT_ITEM + '_FULFILLED': {
      if (payload) {
        return {
          ...state,
          menu: payload.item
        };
      }
    }
    
    case types.DELETE_ITEM + '_FULFILLED': {
      console.log(payload);
      if (payload.count == 1) {
        return {
          ...state,
          menuItemList: state.menuItemList.filter(menuItem => menuItem.id !== payload.id)
        };
      }
    }
    
    default: {
      return state;
    }
  }

  return defaultState;
}
