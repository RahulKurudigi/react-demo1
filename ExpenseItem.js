import React from "react";
import "./Expense.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense">
      <ExpenseDate date={props.data} />
      <div>
        <h2>{props.title}</h2>
        <div>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
