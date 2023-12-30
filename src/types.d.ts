export interface Budget {
  amount: number,
}

export interface GetBudgetDetails {
  id: string,
  category: string
  amount: number,
}

export type ApiBudget = Omit<GetBudgetDetails, 'id'>

export interface BudgetList {
  [id: string]: ApiBudget;
}

export interface Category {
  id: string,
  type: string,
  category: string
}

export type ApiCategory = Omit<Category, 'id'>

export interface CategoryList {
  [id: string]: ApiCategory;
}