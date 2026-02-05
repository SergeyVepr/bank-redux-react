import {useSelector} from "react-redux";


const HistoryOfTransaction = () => {
    const historyOfTransaction = useSelector(store => [...store.balance.history]);

    return (
        <div className={'text-white historyContainer'}>
            <div className={'text-center text-white'}>

            </div>
            {historyOfTransaction.map((item) => (
                <p key={item.id}>
                    <p>id: {item.id}</p>
                    <p> type: {item.type}</p>
                    <p>sum: {item.amount}</p>
                    <p>balance: {item.balance}</p>
                    <p>date: {item.date}</p>
                </p>
            ))}
        </div>
    )
}

export default HistoryOfTransaction