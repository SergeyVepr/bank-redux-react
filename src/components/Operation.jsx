import {useState} from "react";
import {deposit, withdraw} from "../actions/accountAction.js";
import {useDispatch} from "react-redux";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();



    return (
        <>
            <div>
                <button className={' text-white duration-700 hover:border-b hover:text-amber-400 mr-10'}
                        onClick={() => dispatch(withdraw(sum))}>Withdraw
                </button>
                <input
                    className=" pr-10 pl-10 border-r-4 text-center border-b text-white no-spinner border-2 border-amber-950"
                    type="number"
                    onChange={e => setSum(+e.target.value)}
                    value={sum}/>
                <button className={'ml-10 text-white duration-700 hover:border-b hover:text-amber-400'}
                        onClick={() => dispatch(deposit(sum))}>Deposit
                </button>
            </div>
            <div>
                {/*<button*/}
                {/*    className={'mr-10 text-white duration-700 hover:border-b hover:text-amber-400 pt-5 '}*/}
                {/*    onClick={fetchQuote}*/}
                {/*>Get new Message</button>*/}
            </div>
        </>

    )
}
export default Operation