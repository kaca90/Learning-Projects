import ExpensesList from "./Expenses_List/ExpensesList";
import IncomeList from "./Income_List/IncomeList";

const TransactionList = () => {
  return (
    <div className="transaction-list">
      <IncomeList />
      <ExpensesList />
    </div>
  );
};

export default TransactionList;
