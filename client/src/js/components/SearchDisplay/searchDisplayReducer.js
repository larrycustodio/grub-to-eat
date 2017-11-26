import { types } from "./searchDisplayActions";

const defaultState = {
  searchLocation: ''
};

export default function searchDisplayReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case "UPDATE_SEARCH_LOCATION": {
      return {
        ...state,
        searchLocation: payload.location
      }
    }
    default: {
      return state;
    }
  }
}
