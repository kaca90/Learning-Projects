import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { BudgetAppContext } from "../../../context/BudgetAppContext";

const IncomeList = () => {
  // context
  const { positiveArrObj, deleteTransaction } = useContext(BudgetAppContext);

  return (
    <div className="income-list">
      <h4>INCOME</h4>
      <ul>
        {positiveArrObj.map((trans) => {
          const { id, text, amount } = trans;
          // sign
          const sign = trans.amount <= 0 ? "" : "+";

          return (
            <li key={id}>
              <span className="income-list__text">{text}</span>
              <button
                className="delete-btn"
                onClick={(e) => deleteTransaction(e, trans)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <span className="income-list__amount">
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

export default IncomeList;
