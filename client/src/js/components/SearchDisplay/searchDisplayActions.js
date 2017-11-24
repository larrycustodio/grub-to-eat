import axios from "axios";

export const types = {
  UPDATE_LOCATION: "UPDATE_LOCATION"
};

export function updateLocation(location) {
  return {
    type: types.UPDATE_LOCATION,
    payload: {
      location: location
    }
  };
}
