import axiosApi from '../../axiosApi.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Budget, BudgetList, Category, CategoryList, GetBudgetDetails} from '../../types';

export const postBudget = createAsyncThunk<void, Budget>(
  'budget/postBudget', async (budget) => {
    await axiosApi.post('/budget.json', budget);
  }
);

export const getBudget = createAsyncThunk<GetBudgetDetails[]>(
  'budget/getBudget', async () => {
    const response = await axiosApi.get<BudgetList | null>('/budget.json');
    const budget = response.data;

    let newBudgetArray: GetBudgetDetails[] = [];

    if (budget) {
      newBudgetArray = Object.keys(budget).map(key => {
        const budgets = budget[key];
        return {
          ...budgets,
          id: key,
        };
      });
    }
    return newBudgetArray;
  }
);

export const getCategory = createAsyncThunk<Category[]>(
  'budget/getCategory', async () => {
    const response = await axiosApi.get<CategoryList | null>('/budget.json');
    const category = response.data;

    let newCategory: Category[] = [];

    if (category) {
      newCategory = Object.keys(category).map(key => {
        const categries = category[key];
        return {
          ...categries,
          id: key,
        };
      });
    }
    return newCategory;
  }
);

export const deleteBudgetPost = createAsyncThunk<void, string>(
  'budget/deleteOnePostBudget',
  async (id) => {
    await axiosApi.delete(`/budget/${id}.json`);
  }
);