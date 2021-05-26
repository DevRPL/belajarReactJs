const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    status: '',
    value: 0, 
    qty: 22
}

// REDUCER

const rootReducer = (state = initialState, action) => {
    if(action.value > 0) {
        if (action.type === 'NEW') {
            return {
                ...state,
                status: 'PROCESS',
                qty: state.qty + action.value,
                value: action.value
            }
        } else if(action.type === 'PROCESS') {
            return {
                ...state,
                status: 'DONE',
                qty: state.qty + action.value,
                value: action.value
            }
        } 
    }

    return state;   
}

// STORE

const store = createStore(rootReducer);

// SUBSCRIPTION

store.subscribe(() => { 
    console.log("store change", store.getState())
})

// DISPATCHING

store.dispatch({type: 'NEW', value:1})



console.log(store.getState())