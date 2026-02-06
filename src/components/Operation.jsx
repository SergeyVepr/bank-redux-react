import { useState } from "react";
import { deposit, withdraw } from "../features/account/balanceSlice.js";
import { useDispatch } from "react-redux";

const Operation = () => {
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setSum(Number.isNaN(value) ? 0 : value);
  };

  const handleWithdraw = () => {
    if (!sum) return;
    dispatch(withdraw(sum));
    setSum(0);
  };

  const handleDeposit = () => {
    if (!sum) return;
    dispatch(deposit(sum));
    setSum(0);
  };

  return (
    <section className="operation-card">
      <h2 className="operation-title">Account Operations</h2>
      <p className="operation-subtitle">
        Enter an amount and choose what you want to do with your balance.
      </p>

      <div className="operation-controls">
        <button
          type="button"
          className="operation-button operation-button--withdraw"
          onClick={handleWithdraw}
        >
          Withdraw
        </button>

        <input
          className="operation-input"
          type="number"
          min="0"
          onChange={handleChange}
          value={sum}
        />

        <button
          type="button"
          className="operation-button operation-button--deposit"
          onClick={handleDeposit}
        >
          Deposit
        </button>
      </div>
    </section>
  );
};

export default Operation;