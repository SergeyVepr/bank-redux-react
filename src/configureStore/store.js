
import {accountReducer} from "../reducers/accountReducer.js";
import {applyMiddleware, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import logger from "redux-logger";

const initialState = {
    balance: 0,
    quote: "Winter is coming..."
}

export const store =
    legacy_createStore(
        accountReducer,
        initialState,
        applyMiddleware(thunk,logger),
    );