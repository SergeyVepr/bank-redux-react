import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
    history: []
};

const balanceSlice = createSlice({
    name: "balance",
    initialState: initialState,
    reducers: {
        history: (state, action) => state + action.payload,
        deposit: (state, action) => {
            const amount = action.payload;

            state.balance += amount;
            state.history.push({
                id: state.history.length,
                type: 'deposit',
                amount,
                balance: state.balance,
                date: new Date().toDateString().slice(4, 13) + ' ' + new Date().toLocaleTimeString().slice(0, 5)
            });
        },
        withdraw: (state, action) => {
            const amount = action.payload;

            if(state.balance - amount < 0) return;

            state.balance -= amount;
            state.history.push({
                id: state.history.length,
                type: 'withdraw',
                amount,
                balance: state.balance,
                date: new Date().toDateString().slice(4, 13) + ' ' + new Date().toLocaleTimeString().slice(0, 5)
            });


        },
    }
})

export const {deposit, withdraw, history} = balanceSlice.actions;
export default balanceSlice.reducer;