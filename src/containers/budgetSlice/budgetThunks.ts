import axiosApi from '../../axiosApi.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  // DishesPost, DishesList, GetDishesDetails, UpdateDish, ApiDishes,
  Budget} from '../../types';

export const postBudget = createAsyncThunk<void, Budget>(
  'budget/postBudget', async (budget) => {
    await axiosApi.post('/budget.json', budget);
  }
);

// export const getAllDish = createAsyncThunk<GetDishesDetails[]>(
//   'dishes/getAllDish', async () => {
//     const response = await axiosApi.get<DishesList | null>('/dishes.json');
//     const dishes = response.data;
//
//     let newDishes: GetDishesDetails[] = [];
//
//     if (dishes) {
//       newDishes = Object.keys(dishes).map(key => {
//         const dish = dishes[key];
//         return {
//           ...dish,
//           id: key,
//         };
//       });
//     }
//     return newDishes;
//   }
// );
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