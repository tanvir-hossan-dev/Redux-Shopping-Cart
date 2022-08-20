import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducers from "./Reducers";

const Store = createStore(Reducers, composeWithDevTools(applyMiddleware()));

export default Store;
