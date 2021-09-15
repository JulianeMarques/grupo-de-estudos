import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  localStorage.tasks = JSON.stringify(store.getState().todo.tasks)
})

export default store;