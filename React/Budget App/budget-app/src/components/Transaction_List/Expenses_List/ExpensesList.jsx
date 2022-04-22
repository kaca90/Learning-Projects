import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { BudgetAppContext } from "../../../context/BudgetAppContext";

const ExpensesList = () => {
  // context
  const { positiveAmountsTotal, negativeArrObj, deleteTransaction } =
    useContext(BudgetAppContext);

  return (
    <div className="expenses-list">
      <h4>EXPENSES</h4>
      <ul>
        {negativeArrObj.map((trans) => {
          const { id, text, amount } = trans;
          // sign
          const sign = amount <= 0 ? "" : "+";
          // expenses percent
          const expensesPercent =
            positiveAmountsTotal > 0
              ? Math.abs(
                  (parseFloat(amount) / parseFloat(positiveAmountsTotal)) * 100
                ).toFixed(0)
              : "";

          return (
            <li key={id}>
              <span className="expenses-list__text">{text}</span>
              <button
                className="delete-btn"
                onClick={(e) => deleteTransaction(e, trans)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <span className="expenses-list__percent">{expensesPercent}%</span>
              <span className="expenses-list__amount">
                {sign}
                {amount.toLocaleString("en", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpensesList;
