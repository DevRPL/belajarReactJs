import ActionType from "./GlobalActionType";

const globalState = {
	total: 0
}

const rootReducer = (state = globalState, action) => {
	const totalOrder = state.total;
	if (action.type === ActionType.PLUSORDER) {
		return {
			...state,
			total: totalOrder + 1
		}
	} else if (action.type === ActionType.MINUSORDER) {
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


export default rootReducer;