import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "../../app/store.ts";
import {postBudget} from './budgetThunks.ts';
// import {ApiDishes, DishesPost, GetDishesDetails} from '../../types';
// import {deleteOneDish, fetchOneDish, getAllDish, postDish, updateDishParam} from './budgetThunks.ts';
// import {RootState} from '../../app/store.ts';

interface BudgetState {
  actionModal: boolean,
  postLoadingBudget: boolean,
  // dish: DishesPost[];
  // dishes: GetDishesDetails[],
  // dishOne: ApiDishes | null,
  // getAllDish: boolean,
  // updataLoadingParam: boolean,
  // fetchOneLoading: boolean,
  // deleteOneDish: boolean,
}

const initialState: BudgetState = {
  actionModal: false,
  postLoadingBudget: false,
  // dish: [],
  // dishes: [],
  // dishOne:  null,
  // getAllDish: false,
  // updataLoadingParam: false,
  // fetchOneLoading: false,
  // deleteOneDish: false,
};

export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    startEventForModal: (state) => {
      state.actionModal = true;
    },
    endEventForModal: (state) => {
      state.actionModal = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(postBudget.pending, (state) => {
      state.postLoadingBudget = true;
    });
    builder.addCase(postBudget.fulfilled, (state) => {
      state.postLoadingBudget = false;
    });
    builder.addCase(postBudget.rejected, (state) => {
      state.postLoadingBudget = false;
    });
    // builder.addCase(getAllDish.pending, (state) => {
    //   state.getAllDish = true;
    // });
    // builder.addCase(getAllDish.fulfilled, (state, {payload: dishes}: PayloadAction<GetDishesDetails[]>) => {
    //   state.getAllDish = false;
    //   state.dishes = dishes;
    // });
    // builder.addCase(getAllDish.rejected, (state) => {
    //   state.getAllDish = false;
    // });
    // builder.addCase(deleteOneDish.pending, (state) => {
    //   state.deleteOneDish = true;
    // });
    // builder.addCase(deleteOneDish.fulfilled, (state) => {
    //   state.deleteOneDish = false;
    // });
    // builder.addCase(deleteOneDish.rejected, (state) => {
    //   state.deleteOneDish = false;
    // });
    // builder.addCase(updateDishParam.pending, (state) => {
    //   state.updataLoadingParam = true;
    // });
    // builder.addCase(updateDishParam.fulfilled, (state) => {
    //   state.updataLoadingParam = false;
    // });
    // builder.addCase(updateDishParam.rejected, (state) => {
    //   state.updataLoadingParam = false;
    // });
    // builder.addCase(fetchOneDish.pending, (state) => {
    //   state.fetchOneLoading = true;
    // });
    // builder.addCase(fetchOneDish.fulfilled, (state, {payload: dishOne}: PayloadAction<ApiDishes>) => {
    //   state.fetchOneLoading = false;
    //   state.dishOne = dishOne;
    // });
    // builder.addCase(fetchOneDish.rejected, (state) => {
    //   state.fetchOneLoading = false;
    // });
  }
});

export const budgetReducers = budgetSlice.reducer;
export const actionForModal = (state: RootState) => state.budget.actionModal;
// export const postOneDish = (state:RootState) => state.budget.postDish;
// export const getAllDishes = (state:RootState) => state.budget.dishes;
// export const getOneDish = (state:RootState) => state.budget.dishOne;
// export const fetchLoadingOneDish = (state: RootState) => state.budget.fetchOneLoading;
// export const loadingOfAllDishes = (state:RootState) => state.budget.getAllDish;
// export const updatesDishParametrs = (state: RootState) => state.budget.updataLoadingParam;
// export const deleteFetchingOneDish = (state:RootState) => state.budget.deleteOneDish;

export const {
  startEventForModal,
  endEventForModal,
} = budgetSlice.actions;