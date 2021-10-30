import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const onFilterByYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterByYear={onFilterByYearHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
