import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const globalState = {
	total: 0
}

const rootReducer = (state = globalState, action) => {
	const totalOrder = state.total;
	if (action.type === 'Plus_Order') {
		return {
			...state,
			total: totalOrder + 1
		}
	} else if (action.type === 'Minus_Order') {
		let total = 0;
		if (state.total > 0) {
			total = totalOrder - 1;
		}
		return {
			...state,
			total: total
		}
	} 
	return state;
}

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
	  <Provider store={store}>
		<App />
	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
