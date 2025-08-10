import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchQuote} from "../actions/queteAction.js";

const Balance = () => {
    const balance = useSelector(store => store.balance);
    const quote = useSelector(store => store.quote);
    const dispatch = useDispatch();

    useEffect(() => {

        const interval = setInterval(() => {
            dispatch(fetchQuote());
        }, 5000)

        return () => clearInterval(interval)

    },[] )


    return (
        <div className="text-center text-uppercase">
            <h1 className={'text-[gold] font-bold text-8xl'}>Iron Bank of Braavos</h1>
            <p className={'text-white text-2xl p-10 h-50 w-10em'}>{quote}</p>
            <h2
                style={{backgroundColor: 'rgba(0, 0, 0, 0.5) ' , borderRadius: '25px' }}
                className={'text-[firebrick] text-5xl p-5 m-5'}>Balance = {balance}</h2>
        </div>
    )
}

export default Balance