import { types } from './MenuItemsAction';

const defaultState = {
  menu: []
};

export default function menuItemsReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.POST_ITEM + '_FULFILLED': {
      if (payload) {
        return {
          ...state,
          menu: payload.menu
        };
      }
    }
    case types.POST_ITEM + '_PENDING': {
      return state;
    }
    case types.GET_ITEM + '_FULFILLED': {
      if (payload) {
        console.log(payload);
        return {
          ...state,
          menu: [...state.menu, payload]
        };
      }
    }
    case types.GET_ITEM + '_PENDING': {
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
    case types.PUT_ITEM + '_PENDING': {
      return state;
    }

    case types.DELETE_ITEM + '_FULFILLED': {
      if (payload) {
        return {
          ...state,
          menus: state.menu.filter(menu => menu.id !== payload.menuId)
        };
      }
    }
    case types.DELETE_ITEM + '_PENDING': {
      return state;
    }
  }

  return defaultState;
}
