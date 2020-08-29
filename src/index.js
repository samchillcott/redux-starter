import store from "./store";
import {bugAdded} from './actions';

store.subscribe(() => {
	console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));

store.dispatch({
	type: actions.BUG_REMOVED,
	payload: {
		id: 1,
	},
});

console.log(store.getState());
