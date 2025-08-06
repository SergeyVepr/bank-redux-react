
import {accountReducer} from "../reducers/accountReducer.js";
import {legacy_createStore} from "redux";

const initialState = {
    balance: 0,
}

export const store = legacy_createStore(accountReducer, initialState);