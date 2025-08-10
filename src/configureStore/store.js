
import {accountReducer} from "../reducers/accountReducer.js";
import {applyMiddleware, legacy_createStore} from "redux";
import {loggerEnhancer} from "../enhancers/loggerEnhancer.js";
import {thunkEnhancer} from "../enhancers/thunkEnhancer.js";

const initialState = {
    balance: 0,
    quote: "Winter is coming..."
}

export const store =
    legacy_createStore(
        accountReducer,
        initialState,
        applyMiddleware(thunkEnhancer,loggerEnhancer)
    );