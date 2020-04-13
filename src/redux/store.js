import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

export const initialState = {};

export default createStore(rootReducer, initialState);
