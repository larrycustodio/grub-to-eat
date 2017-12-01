const defaultState = {
    
}

export default function orderCartReducer(state = defaultState, action){
    const { type, payload } = action;
    switch(type){
        default: {
            return state;
        }
    }
    return defaultState;
}