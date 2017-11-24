import { types } from "./searchDisplayActions";

const defaultState = {
  selectedLocation: ""
};

export default function LoginReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.UPDATE_LOCATION: {
      return {
        ...state,
        selectedLocation: payload.location
      };
    }
    default: {
      return state;
    }
  }
}
