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

  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}
      />

      {props.items.map((expense)=>(
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      
    </Card>
  );
}
