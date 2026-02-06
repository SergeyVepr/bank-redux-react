import { useSelector } from "react-redux";
import { HistoryItem } from "./HistoryItem.jsx";

const HistoryOfTransaction = () => {
  const historyOfTransaction = useSelector((store) => [
    ...store.balance.history,
  ]);

  return (
    <section className="history-wrapper">
      <h2 className="history-title">Transaction History</h2>

      {historyOfTransaction.length === 0 ? (
        <p className="history-empty">No transactions yet</p>
      ) : (
        <div className="historyContainer">
          {historyOfTransaction.map((item) => (
            <HistoryItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HistoryOfTransaction;