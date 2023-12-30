import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../app/store.ts";
import {deleteBudgetPost, getBudget, postBudget} from './budgetThunks.ts';
import {GetBudgetDetails} from '../../types';
// import {ApiDishes, DishesPost, GetDishesDetails} from '../../types';
// import {deleteOneDish, fetchOneDish, getAllDish, postDish, updateDishParam} from './budgetThunks.ts';
// import {RootState} from '../../app/store.ts';

interface BudgetState {
  budget: GetBudgetDetails[];
  actionModal: boolean,
  postLoadingBudget: boolean,
  getLoadingBudgets: boolean,
  deleteLoadingBudget: boolean,
  // dishes: GetDishesDetails[],
  // dishOne: ApiDishes | null,
  // getAllDish: boolean,
  // updataLoadingParam: boolean,
  // fetchOneLoading: boolean,
  // deleteOneDish: boolean,
}

const initialState: BudgetState = {
  budget: [],
  actionModal: false,
  postLoadingBudget: false,
  getLoadingBudgets: false,
  deleteLoadingBudget: false,
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

    builder.addCase(getBudget.pending, (state) => {
      state.getLoadingBudgets = true;
    });
    builder.addCase(getBudget.fulfilled, (state, {payload: budget}: PayloadAction<GetBudgetDetails[]>) => {
      state.getLoadingBudgets = false;
      state.budget = budget;
    });
    builder.addCase(getBudget.rejected, (state) => {
      state.getLoadingBudgets = false;
    });

    builder.addCase(deleteBudgetPost.pending, (state) => {
      state.deleteLoadingBudget = true;
    });
    builder.addCase(deleteBudgetPost.fulfilled, (state) => {
      state.deleteLoadingBudget = false;
    });
    builder.addCase(deleteBudgetPost.rejected, (state) => {
      state.deleteLoadingBudget = false;
    });

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
export const getBudgets = (state:RootState) => state.budget.budget;
export const actionForModal = (state: RootState) => state.budget.actionModal;
export const getFetchingLoadingBudget = (state:RootState) => state.budget.getLoadingBudgets;
export const deletePostBudget = (state:RootState) => state.budget.deleteLoadingBudget;

// export const getOneDish = (state:RootState) => state.budget.dishOne;
// export const fetchLoadingOneDish = (state: RootState) => state.budget.fetchOneLoading;
// export const loadingOfAllDishes = (state:RootState) => state.budget.getAllDish;
// export const updatesDishParametrs = (state: RootState) => state.budget.updataLoadingParam;


export const {
  startEventForModal,
  endEventForModal,
} = budgetSlice.actions;