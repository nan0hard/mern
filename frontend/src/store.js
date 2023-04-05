import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	productDetailsReducer,
	productReducer,
} from "./redux/reducers/productReducer.js";

const reducer = combineReducers({
	products: productReducer,
	productDetails: productDetailsReducer,
});

let initalState = {};

const mdiddleware = [thunk];

const store = createStore(
	reducer,
	initalState,
	composeWithDevTools(applyMiddleware(...mdiddleware))
);

export default store;
