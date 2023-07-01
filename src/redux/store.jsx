import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reducers/userReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({ userReducer });

export const store = createStore(rootReducer, applyMiddleware(logger));
