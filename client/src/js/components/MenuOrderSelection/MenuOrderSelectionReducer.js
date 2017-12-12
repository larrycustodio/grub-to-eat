import { types } from "./menuOrderSelectionActions";

const defaultState = {
    
}

export default function menuOrderSelectionReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        default: {
            return state;
        }
    }
    return state;
}