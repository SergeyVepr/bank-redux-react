import './App.css'
import Balance from "./components/Balance.jsx";
import Operation from "./components/Operation.jsx";
import {useState} from "react";

function App() {

    const [balance, setBalance] = useState(0);

    const withdraw = (sum) =>
        setBalance(prev => prev >= sum ? prev - sum : prev);

    const deposit = (sum) =>
        setBalance(prev => prev + sum);


    return (
        <div>
            <Balance balance={balance} />
            <Operation deposit={deposit} withdaw={withdraw} />
        </div>
    )
}

export default App
