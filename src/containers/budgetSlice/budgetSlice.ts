import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {deleteBudgetPost, getBudget, getCategory, postBudget} from './budgetThunks.ts';
import {Category, GetBudgetDetails} from '../../types';
import {RootState} from "../../app/store.ts";

interface BudgetState {
  budget: GetBudgetDetails[];
  categories: Category[],
  actionModal: boolean,
  postLoadingBudget: boolean,
  getLoadingBudgets: boolean,
  getLoadingCategories: boolean,
  deleteLoadingBudget: boolean,
}

const initialState: BudgetState = {
  budget: [],
  categories: [],
  actionModal: false,
  postLoadingBudget: false,
  getLoadingBudgets: false,
  getLoadingCategories: false,
  deleteLoadingBudget: false,
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
    builder.addCase(getCategory.pending, (state) => {
      state.getLoadingCategories = true;
    });
    builder.addCase(getCategory.fulfilled, (state, {payload: categories}: PayloadAction<Category[]>) => {
      state.getLoadingCategories = false;
      state.categories = categories;
    });
    builder.addCase(getCategory.rejected, (state) => {
      state.getLoadingCategories = false;
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
  }
});

export const budgetReducers = budgetSlice.reducer;
export const getBudgets = (state:RootState) => state.budget.budget;
export const getCategories = (state:RootState) => state.budget.categories;
export const getFetchingLoadingcategories = (state:RootState) => state.budget.getLoadingCategories;
export const actionForModal = (state: RootState) => state.budget.actionModal;
export const getFetchingLoadingBudget = (state:RootState) => state.budget.getLoadingBudgets;
export const deletePostBudget = (state:RootState) => state.budget.deleteLoadingBudget;

export const {
  startEventForModal,
  endEventForModal,
} = budgetSlice.actions;