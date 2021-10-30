import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const onFilterByYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterByYear={onFilterByYearHandler}
      />
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
