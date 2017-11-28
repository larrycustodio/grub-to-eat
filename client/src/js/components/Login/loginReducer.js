import { types } from './loginActions';

const defaultState = {
  customerInfo: [],
  user: ''
};

export default function LoginReducer(state = defaultState, action) {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case types.POST_CUSTOMER + '_FULFILLED': {
      if (payload) {
        return {
          ...state,
          customerInfo: payload.user
        };
      }
    }
    case types.POST_CUSTOMER + '_PENDING': {
      return state;
    }
    case types.POST_RESTAURANT + '_FULFILLED': {
      if (payload) {
        return {
          ...state,
          customerInfo: payload.user
        };
      }
    }
    case types.POST_RESTAURANT + '_PENDING': {
      return state;
    }

    case types.FETCH_CUSTOMER + '_FULFILLED': {
      if (payload) {
        console.log(payload);
        return {
          ...state,
          user: payload.user
        };
      }
    }
    case types.FETCH_CUSTOMER + '_PENDING': {
      return state;
    }
  }
  return defaultState;
}
