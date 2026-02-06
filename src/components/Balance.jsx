import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchQuote } from "../features/api/queteAction.js";

const Balance = () => {
  const balance = useSelector((store) => store.balance.balance);
  const quote = useSelector((store) => store.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchQuote());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <section className="history-item" style={{ marginBottom: "1.5rem" }}>
      <div className="history-item__row">
        <span className="history-item__label">Bank</span>
        <span className="history-item__value">Iron Bank of Braavos</span>
      </div>
      <div className="history-item__row">
        <span className="history-item__label">Quote</span>
        <span className="history-item__value">{quote}</span>
      </div>
      <div className="history-item__row">
        <span className="history-item__label">Current balance</span>
        <span className="history-item__value">{balance}</span>
      </div>
    </section>
  );
};

export default Balance;