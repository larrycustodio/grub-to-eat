import { types } from './MenuItemsActions';

const defaultState = {
  menuList: [],
  menuItemList: [
    {id: '12123', category: 'Drinks', name: 'Juice', price: 3.40, prepTime: '30'},    
  ],
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

    case types.POST_ITEM + '_PENDING': {
      return state;
    }
    
    case types.POST_ITEM + '_FULFILLED': {
      if (payload) {
        return {
          ...state,
          menu: payload.menu
        };
      }
    }
   
    case types.GET_ITEM + '_PENDING': {
      return state;
    }
    
    case types.GET_ITEM + '_FULFILLED': {
      if (payload) {
        return {
          ...state,
          menu: [...state.menu, payload]
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
      if (payload) {
        return {
          ...state,
          menus: state.menu.filter(menu => menu.id !== payload.menuId)
        };
      }
    }
    
    default: {
      return state;
    }
  }

  return defaultState;
}
