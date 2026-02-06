export const HistoryItem = ({ item }) => {
  return (
    <article className="history-item">
      <div className="history-item__row">
        <span className="history-item__label">ID</span>
        <span className="history-item__value">{item.id}</span>
      </div>
      <div className="history-item__row">
        <span className="history-item__label">Type</span>
        <span className="history-item__value">{item.type}</span>
      </div>
      <div className="history-item__row">
        <span className="history-item__label">Amount</span>
        <span className="history-item__value">{item.amount}</span>
      </div>
      <div className="history-item__row">
        <span className="history-item__label">Balance</span>
        <span className="history-item__value">{item.balance}</span>
      </div>
      <div className="history-item__row">
        <span className="history-item__label">Date</span>
        <span className="history-item__value">{item.date}</span>
      </div>
    </article>
  );
};