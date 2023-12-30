import axiosApi from '../../axiosApi.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Budget, BudgetList, GetBudgetDetails} from '../../types';

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

export const deleteBudgetPost = createAsyncThunk<void, string>(
  'budget/deleteOnePostBudget',
  async (id) => {
    await axiosApi.delete(`/budget/${id}.json`);
  }
);
//
// export const fetchOneDish = createAsyncThunk<ApiDishes, string>(
//   'dishes/fetchOneDish',
//   async (id) => {
//     const response = await axiosApi.get<ApiDishes | null>(`/dishes/${id}.json`);
//     const dish = response.data;
//
//     if (dish === null) {
//       throw new Error('Not found');
//     }
//
//     return dish;
//   }
// );
//
// export const updateDishParam = createAsyncThunk<void, UpdateDish>(
//   'dishes/updateDish',
//   async({id,dish}) => {
//     await axiosApi.put(`/dishes/${id}.json`, dish);
//   }
// );
//
// export const deleteOneDish = createAsyncThunk<void, string>(
//   'dishes/deleteDish',
//   async (id) => {
//     await axiosApi.delete(`/dishes/${id}.json`);
//   }
// );