import { types } from './OrderCartActions'; 
const defaultState = {
    activeOrder: {
        current: false,
        menuItems: [],
        subTotal: 0,
        total: 0,
        id: ''
    }
}

export default function orderCartReducer(state = defaultState, action){
    const { type, payload } = action;
    switch(type){
        case types.ADD_MENU_ITEM_TO_CART: {
            const addedSubTotal = parseFloat((parseFloat(state.activeOrder.subTotal) + parseFloat(payload.price)).toFixed(2));
            const addedTotal = parseFloat((addedSubTotal * 1.075).toFixed(2));
            return {
                ...state,
                activeOrder: {
                    ...state.activeOrder,
                    menuItems: [...state.activeOrder.menuItems, payload],
                    subTotal: addedSubTotal,
                    total: addedTotal
                }
            }
        };
        default: {
            return state;
        }
    }
    return defaultState;
}