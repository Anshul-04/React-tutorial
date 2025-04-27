import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem"; // Adjust the path as needed
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"; // Adjust the path as needed
import "./Expenses.css";


export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  //filteredexpenses is an array of objects that match the selected year
  const filteredexpenses = props.items.filter( (expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expensesContent = <p>No expenses found.</p>;
  // If there are expenses that match the selected year, map them to ExpenseItem components
  if(filteredexpenses.length > 0){
    expensesContent = filteredexpenses.map((expense)=>(
      <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}           
    </Card>
  );
}
