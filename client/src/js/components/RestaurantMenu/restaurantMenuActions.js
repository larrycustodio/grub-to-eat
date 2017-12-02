import axios from "axios";

export const types = {
  GET_RESTAURANT_INFO: "GET_RESTAURANT_INFO",
  GET_RESTAURANT_MENU: "GET_RESTAURANT_MENU",
  GET_MENU_ITEMS: "GET_MENU_ITEMS"
};

// Sets payload to up-to-date restaurant information
export const getRestaurantInfo = restaurantId => {
  return {
    type: types.GET_RESTAURANT_INFO,
    payload: axios.get(`https://grubtoeat.herokuapp.com/api/Restaurants/${restaurantId}`)
      .then(res => {
          const { restaurantName, id, description, featuredImage } = res.data;
          return { restaurantName, id, description, featuredImage };
      })
      .catch(console.error)
  };
};

// Sets payload to get menu information
export const getRestaurantMenu = restaurantId => {
    return {
        type: types.GET_RESTAURANT_MENU,
        payload: axios.get(`https://grubtoeat.herokuapp.com/api/Restaurants/${restaurantId}/Menus`)
            .then(res => {
                // Dispatch the action for grabbing the menu items for each menu category
                return res.data;
            })
            .catch(console.error)
    }
}

//Sets payload to get menu items
export const getRestaurantMenuItems = menuId => {
    return {
        type: types.GET_MENU_ITEMS,
        payload: axios.get(`https://grubtoeat.herokuapp.com/api/Menus/${menuId}/menuItems`)
        .then(res => {
            return res.data;
        })
        .catch(console.error)
    }
}