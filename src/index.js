import store from "./store";
import * as actions from "./actionTypes";

store.subscribe(() => {
	console.log("Store changed!", store.getState());
});

store.dispatch({
	type: actions.BUG_ADDED,
	payload: {
		description: "bug1",
	},
});

store.dispatch({
	type: actions.BUG_REMOVED,
	payload: {
		id: 1,
	},
});

console.log(store.getState());
