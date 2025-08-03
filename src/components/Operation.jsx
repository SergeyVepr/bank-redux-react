import {useState} from "react";
import {store} from "../configureStore/store.js";
import {deposit, withdraw} from "../actions/accountAction.js";

const Operation = () => {
    const [sum, setSum] = useState(0);

    const dispatch = store.dispatch;

    return (
        <div>
            <button onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
            <input
                type="number"
                onChange={e => setSum(+e.target.value)}
                value={sum}/>
            <button onClick={() => dispatch(deposit(sum))}>Deposit</button>
        </div>
    )
}
export default Operation