import moment from "moment";
import { useContext } from "react";
import { BudgetAppContext } from "../../context/BudgetAppContext";

const Header = () => {
  // month and year
  let momentMonthName = moment().format("MMMM");
  let momentYearName = moment().format("YYYY");

  // context
  const {
    transactionList,
    positiveAmountsTotal,
    negativeAmountsTotal,
    expensesPercentTotal,
  } = useContext(BudgetAppContext);

  // current balance
  const amounts = transactionList.map((transactions) => transactions.amount);
  const initialValue = 0;
  const total = amounts.reduce(
    (previousValue, currentValue) => (previousValue += currentValue),
    initialValue
  );
  // sign
  const sign = total <= 0 ? "" : "+";

  return (
    <header className="header">
      <div className="header__container">
        {/* month and year */}
        <h2>
          Available Budget in{" "}
          <span>
            {momentMonthName}&nbsp;{momentYearName}
          </span>
          :
        </h2>

        {/* current balance */}
        <div className="header__current-balance">
          <p>
            {sign}
            {total.toLocaleString("en", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        {/* income */}
        <div className="header__income">
          <span className="income-text">INCOME</span>
          <span className="income-amount">
            {sign}
            {positiveAmountsTotal.toLocaleString("en", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>

        {/* expenses */}
        <div className="header__expenses">
          <span className="expenses-text">EXPENSES</span>
          <span className="expenses-amount">
            {negativeAmountsTotal.toLocaleString("en", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>{" "}
          <span className="expenses-percent">{expensesPercentTotal}%</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
