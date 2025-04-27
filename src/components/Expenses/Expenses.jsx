import React,{useState} from 'react';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"; // Adjust the path as needed
import "./Expenses.css";
import ExpensesList from './ExpensesList';


export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  //filteredexpenses is an array of objects that match the selected year
  const filteredexpenses = props.items.filter( (expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  
  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredexpenses} />          
      </Card>
    </li>    
  );
}
