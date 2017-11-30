import { types } from './menuActions';

const defaultState = {
  menu: []
};

export default function MenuItemsReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.POST_ITEM + '_FULFILLED': {
      if (payload) {
        return {
          ...state,
          menu: payload.item
        };
      }
    }
    case types.POST_ITEM + '_PENDING': {
      return state;
    }
    case types.GET_ITEM + '_FULFILLED': {
      if (payload) {
        return {
          ...state,
          menuItem: payload.item
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
          user: payload.item
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
          user: payload.item
        };
      }
    }
    case types.DELETE_ITEM + '_PENDING': {
      return state;
    }
  }

  return defaultState;
}
