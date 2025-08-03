import {useState} from "react";

const Operation = ({withdraw, deposit}) => {
    const [sum, setSum] = useState();

    return (
        <div>
            <button onClick={() => withdraw(sum)}>Withdraw</button>
            <input
                type="number"
                onChange={e => setSum(+e.target.value)}
                value={sum}/>
            <button onClick={() => deposit(sum)}>Deposit</button>
        </div>
    )
}
export default Operation