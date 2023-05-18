// /expenses/analysis
import { Link, useLoaderData } from '@remix-run/react';

import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';
import { getExpenses } from '~/data/expenses.server';
import { requireUserSession } from '~/data/auth.server';
export default function ExpensesAnalysisPage() {
	const expenses = useLoaderData();
	const hasExpenses = expenses && expenses.length > 0;

	return (
	  <main>
		{hasExpenses ? (
			<>
				<Chart expenses={expenses} />
				<ExpenseStatistics expenses={expenses} />
			</>

		) : (
			<section id="no-expenses">
				<h1>No expenses found</h1>
				<p>
					Start <Link to="add">adding some</Link> today.
				</p>
			</section>
		)}
	  </main>
	);
  }

  export async function loader({request}: any) {
	const userId = await requireUserSession(request);
	const expenses = await getExpenses(userId);

  	return expenses;
  }

