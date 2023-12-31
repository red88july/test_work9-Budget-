import React from 'react';
import dayjs from 'dayjs';
import {GetBudgetDetails} from '../../types';
import {Link} from 'react-router-dom';
import ButtonSpinner from '../Spinners/ButtonSpinner';
import '../../style.css';
import {useAppSelector} from '../../app/hooks.ts';
import {getBudgets} from '../../containers/budgetSlice/budgetSlice.ts';

interface Props {
  budget: GetBudgetDetails;
  deletePostBudget: boolean | string;
  onRemove: React.MouseEventHandler;
}

const BudgetItem: React.FC<Props> = ({budget, deletePostBudget, onRemove}) => {
  const nowDate = new Date();
  const createdAt = nowDate.toISOString();
  const budgetList = useAppSelector(getBudgets);

  const resultOfChoiceCategory = () => {
    return budgetList.reduce((acc, value) => {
      const isExpense = ['salary', 'programming'].includes(value.category.toLowerCase());
      const amount = isExpense ? +value.amount : -(+value.amount);

      if (value.category === budget.category) {
        return acc + amount;
      }

      return acc;
    }, 0);
  };


  return (
    <div className="d-flex justify-content-between mb-2 border border-5 rounded-4 border-secondary p-2 w-50 flex-wrap">
      <div className="d-flex gap-3 align-items-center">
        <h5><em> <span>{dayjs(createdAt).format('DD.MM.YYYY HH:mm:ss')}</span></em></h5>
      </div>
      <div className="mb-2 d-flex flex-column">
        <span> Category: <b>{budget.category}</b></span>
        <span>Amount: <b>{resultOfChoiceCategory()}</b> <i>KGS</i></span>
      </div>
      <div className="d-flex gap-2 m-0 flex-wrap">
        <Link
          to={`/edit/${budget.id}`}
          className="btn btn-primary pt-3">
          Edit
        </Link>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onRemove}
          disabled={deletePostBudget ? deletePostBudget === budget.id : false}>
          {deletePostBudget && deletePostBudget === budget.id && (<ButtonSpinner/>)}
          Delete
        </button>
      </div>
    </div>
  );
};

export default BudgetItem;