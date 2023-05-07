import ExpenseListItem from './ExpenseListItem';

type ExpenseItemProps = {
	id: string;
	title: string;
	amount: number;
}

function ExpensesList({ expenses }: {expenses: ExpenseItemProps[]}) {

  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;