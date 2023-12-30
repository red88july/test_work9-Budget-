import {configureStore} from '@reduxjs/toolkit';
import {budgetReducers} from "../containers/budgetSlice/budgetSlice.ts";

export const store = configureStore({
  reducer: {
      budget: budgetReducers
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;