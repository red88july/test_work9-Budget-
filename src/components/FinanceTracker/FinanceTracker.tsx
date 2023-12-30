import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {deleteBudgetPost, getBudget} from '../../containers/budgetSlice/budgetThunks.ts';
import {deletePostBudget, getBudgets, getFetchingLoadingBudget} from '../../containers/budgetSlice/budgetSlice.ts';
import SpinnerBig from '../Spinners/SpinnerBig';
import BudgetItem from '../BudgetItem/BudgetItem';

const FinanceTracker = () => {
  const dispatch = useAppDispatch();
  const budgetList = useAppSelector(getBudgets);
  const budgetLoadingList = useAppSelector(getFetchingLoadingBudget);
  const deleteBudgetPostFromList = useAppSelector(deletePostBudget);

  useEffect(() => {
    dispatch(getBudget());
  }, [dispatch]);

  const removeOneDish = async (id: string) => {
    await dispatch(deleteBudgetPost(id));
    await dispatch(getBudget());
  };

  const resultTotalAmount = () => {
    const incomeTotal = budgetList
      .filter(value => ['salary', 'programming'].includes(value.category.toLowerCase()))
      .reduce((acc, value) => acc + +value.amount, 0);

    const expenseTotal = budgetList
      .filter(value => !['salary', 'programming'].includes(value.category.toLowerCase()))
      .reduce((acc, value) => acc + +value.amount, 0);

    return incomeTotal - expenseTotal;
  };

  return (
    <>
      <h3 className="mt-3 ms-5">Finance Tracker</h3>
      <div className="d-flex align-items-start ms-5 mt-3">
        <div className="p-2 border border-2 rounded-2">
          <h3>Total:  {resultTotalAmount()} KGS</h3>
        </div>
      </div>
      <div className="d-flex mt-5 flex-column align-items-center">
        {budgetLoadingList ? <SpinnerBig /> : budgetList.map((budget) => (
          <BudgetItem
            key={budget.id}
            budget={budget}
            deletePostBudget={deleteBudgetPostFromList}
            onRemove={() => removeOneDish(budget.id)} />
        ))}
      </div>
    </>
  );
};

export default FinanceTracker;