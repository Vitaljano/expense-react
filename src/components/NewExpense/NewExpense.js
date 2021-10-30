import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveData={onSaveDataHandler} />
    </div>
  );
};

export default NewExpense;
