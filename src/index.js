import store from "./store";

store.dispatch({
	type: "bugAdded",
	payload: {
		description: "bug1",
	},
});

console.log(store.getState());
