import axios from "axios";

export const types = {
  GET_RESTAURANT_INFORMATION: "GET_RESTAURANT_INFORMATION",
  UPDATE_RESTAURANT_INFORMATION: "UPDATE_RESTAURANT_INFORMATION"
};
// Sets payload to up-to-date restaurant information
export const getRestaurantInformation = restaurantId => {
  console.log(`getRestaurantInfo ${restaurantId}`);
  return {
    type: types.GET_RESTAURANT_INFORMATION,
    payload: axios
      .get(`https://grubtoeat.herokuapp.com/api/Restaurants/${restaurantId}`)
      .then(res => {
        return res.data;
      })
      .catch(console.error)
  };
};
// Sets payload to return edited restaurant information
export const updateRestaurantInformation = (inputBody, restaurantId) => {
  const updateURL = encodeURI(
    `https://grubtoeat.herokuapp.com/api/Restaurants/update?where={"id":"${
      restaurantId
    }"}`
  ).replace(/%22:/g, "%22%3A");
  return {
    type: types.UPDATE_RESTAURANT_INFORMATION,
    payload: axios
      .post(updateURL, inputBody)
      .then(res => {
        if (res.status == 200) getRestaurantInformation(restaurantId);
        alert("Restaurant information saved!");
      })
      .catch(console.error)
  };
};
