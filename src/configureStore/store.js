import {createStore} from "../redux/createStore.js";
import {accountReducer} from "../reducers/accountReducer.js";

const initialState = {
    balance: 0,
}

export const store = createStore(accountReducer, initialState);