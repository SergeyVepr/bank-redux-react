import {DEPOSIT, WITHDRAW} from "../actions/accountAction.js";

export const accountReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case DEPOSIT:
            return {...state, balance: state.balance + action.payload};
        case WITHDRAW:
            return {...state, balance: state.balance >= action.payload ? state.balance - action.payload : state.balance}
        default:
           return state;
    }
}