import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useContext } from "react";
import { BudgetAppContext } from "../../context/BudgetAppContext";

const EntryForm = () => {
  // context
  const { transactionList, setTransactionList } = useContext(BudgetAppContext);

  // useState
  const [selectedOption, setSelectedOption] = useState("plus");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  // add transaction
  function addTransaction(trans) {
    setTransactionList([trans, ...transactionList]);
  }

  // submit form
  const submitBtn = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: desc,
      amount: selectedOption === "minus" ? -amount : +amount,
    };
    addTransaction(newTransaction);

    // reset form
    setAmount("");
    setDesc("");
    setSelectedOption("plus");
  };

  return (
    <div>
      <form className="entry-form">
        <div className="entry-form__container">
          {/* select symbol */}
          <select
            name=""
            className="entry-form__select-symbol"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="plus">+</option>
            <option value="minus">-</option>
          </select>

          {/* add description */}
          <input
            type="text"
            placeholder="Add description"
            maxLength="50"
            size="40"
            className="entry-form__desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          {/* add amount */}
          <input
            type="number"
            placeholder="Value"
            min="1"
            className="entry-form__amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          {/* submit btn */}
          <button
            type="submit"
            value="submit"
            onClick={(e) => submitBtn(e)}
            className={
              "entry-form__submit-btn " +
              (selectedOption === "plus" ? "plus-green" : "minus-red")
            }
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EntryForm;
