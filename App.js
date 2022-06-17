import "./App.css";
import ExpenseItem from "./ExpenseItem";

function App() {
  const expenseItems = [
    {
      title: "Car Insurence",
      amount: 453,
      date: new Date(2022, 2, 21),
    },
    {
      title: "Health Insurence",
      amount: 73,
      date: new Date(2022, 2, 21),
    },
    {
      title: "Home Insurence",
      amount: 231,
      date: new Date(2022, 2, 21),
    },
    {
      title: "Home loan",
      amount: 394,
      date: new Date(2022, 2, 21),
    },
  ];
  return (
    <div className="App">
      <ExpenseItem
        title={expenseItems[0].title}
        amount={expenseItems[0].amount}
        date={expenseItems[0].date}
      />
      <ExpenseItem
        title={expenseItems[1].title}
        amount={expenseItems[1].amount}
        date={expenseItems[1].date}
      />
      <ExpenseItem
        title={expenseItems[2].title}
        amount={expenseItems[2].amount}
        date={expenseItems[2].date}
      />
      <ExpenseItem
        title={expenseItems[3].title}
        amount={expenseItems[3].amount}
        date={expenseItems[3].date}
      />
    </div>
  );
}

export default App;
