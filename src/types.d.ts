export interface Budget {
  // date: string,
  amount: number,
}

export interface GetBudgetDetails {
  id: string,
  // date: string,
  category: string
  amount: number,
}

export type ApiBudget = Omit<GetBudgetDetails, 'id'>
// export type ApiUpdDishes = Omit<GetDishesDetails, 'id'>

export interface BudgetList {
  [id: string]: ApiBudget;
}

// export interface UpdateDish {
//   id: string,
//   dish: ApiDishes,
// }