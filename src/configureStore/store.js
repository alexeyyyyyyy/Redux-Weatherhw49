import {accountReducer} from "../reducer/accountReducer.js";
import {applyMiddleware, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src";

const initialState = {
    quote: "Weather is ok"
}

export const store = legacy_createStore(accountReducer,
    initialState,applyMiddleware(thunk,logger));