import React, { createContext, useEffect, useState } from "react";
import { transactions } from "../data";

// create context
export const BudgetAppContext = createContext();

// provider
export const BudgetAppProvider = ({ children }) => {
  const [transactionList, setTransactionList] = useState(transactions);
  const initialValue = 0;

  // get localStorage
  useEffect(() => {
    // list of objects or empty string
    const incomes = JSON.parse(localStorage.getItem("listOfIncome"), "");
    const expenses = JSON.parse(localStorage.getItem("listOfExpenses"), "");

    if (
      (incomes != null && incomes != "") ||
      (expenses != null && expenses != "")
    ) {
      setTransactionList(incomes.concat(expenses));
    }
  }, []);

  // set localStorage
  useEffect(() => {
    localStorage.setItem("listOfIncome", JSON.stringify(positiveArrObj));
    localStorage.setItem("listOfExpenses", JSON.stringify(negativeArrObj));
  }, [transactionList]);

  // income
  const positiveArrObj = transactionList.filter((elem) => elem.amount > 0);
  const positiveAmounts = positiveArrObj.map(
    (transactions) => transactions.amount
  );
  const positiveAmountsTotal = positiveAmounts.reduce(
    (previousValue, currentValue) => (previousValue += currentValue),
    initialValue
  );

  // expenses
  const negativeArrObj = transactionList.filter((elem) => elem.amount < 0);
  const negativeAmounts = negativeArrObj.map(
    (transactions) => transactions.amount
  );
  const negativeAmountsTotal = negativeAmounts.reduce(
    (previousValue, currentValue) => (previousValue += currentValue),
    initialValue
  );

  // expenses percent total
  const expensesPercentTotal =
    positiveAmountsTotal > 0
      ? Math.abs(
          (parseFloat(negativeAmountsTotal) /
            parseFloat(positiveAmountsTotal)) *
            100
        ).toFixed(0)
      : "";

  // delete transaction
  const deleteTransaction = (e, trans) => {
    e.preventDefault();
    setTransactionList(
      transactionList.filter((transaction) => transaction.id !== trans.id)
    );
  };

  return (
    <BudgetAppContext.Provider
      value={{
        transactionList,
        setTransactionList,
        positiveArrObj,
        positiveAmounts,
        positiveAmountsTotal,
        negativeArrObj,
        negativeAmounts,
        negativeAmountsTotal,
        expensesPercentTotal,
        deleteTransaction,
      }}
    >
      {children}
    </BudgetAppContext.Provider>
  );
};
