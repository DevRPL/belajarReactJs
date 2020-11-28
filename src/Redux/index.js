const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    value: 0, 
    age: 22
}

// REDUCER

const rootReducer = (state = initialState, action) => {
    return state;
}

// STORE

const store = createStore(rootReducer);

console.log(store.getState())