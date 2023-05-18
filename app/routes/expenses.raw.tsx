// /expenses/raw
import { requireUserSession } from '~/data/auth.server';
import { getExpenses } from '~/data/expenses.server';
 
export async function loader({request}: any) {
  const userId = await requireUserSession(request);
  
  return getExpenses(userId);
}