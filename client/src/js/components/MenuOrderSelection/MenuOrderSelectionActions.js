import axios from "axios";

export const types = {
    CRUD_ORDER_ACTION: "CRUD_ORDER_ACTION"
};

export const menuOrderAction = input => {
    return {
        type: types.CRUD_ORDER_ACTION,
        payload: {
        }
    };
};