import { types } from "./restaurantMenuActions";

const defaultState = {
    //Data structure for restaurant menu
    restaurantInfo : {
        restaurantName: 'Loading...',
        description: 'Loading...',
        id: 'Loading...'
    },
    menu: [
        {
            name: 'Loading menu...',
            items: []
        }
    ],
    isRestaurantLoaded: false,
    isMenuLoaded: false
};

export default function RestaurantMenuReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch(type){
        // Getting restaurant profile metadata fulfilled
        case types.GET_RESTAURANT_INFO + '_FULFILLED': {
            return {
                ...state,
                restaurantInfo: payload,
                isRestaurantLoaded: true
            }
        }
        //Getting restaurant menu metadata fulfilled
        case types.GET_RESTAURANT_MENU + '_FULFILLED': {
            // Modifies menu reducer 
            const modifiedPayload = payload.map(menu => {
                const {name, id}  = menu;
                return {name, id, items:[]}
            });
            return {
                ...state,
                menu: modifiedPayload,
                isMenuLoaded: true
            }
        }
        //Pushes menu items to the appropriate menu item
        case types.GET_MENU_ITEMS + '_FULFILLED': {
            // Find in which menu will be menu items will be added  
            const menuListIndex = state.menu.findIndex(menuList => menuList.id == payload[0].menuId);
            if (menuListIndex == -1) return state;
            state.menu[menuListIndex].items = payload;
            return {
                ...state
            }
        }
        //On default
        default: {
            return state;
        }
    }
    return defaultState;
}
