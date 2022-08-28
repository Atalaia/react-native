import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A guitar",
    amount: 150,
    date: new Date("2022-02-10"),
  },
  {
    id: "e3",
    description: "A bike",
    amount: 509,
    date: new Date("2022-04-20"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 19.99,
    date: new Date("2022-04-20"),
  },
  {
    id: "e5",
    description: "A CD",
    amount: 9.99,
    date: new Date("2022-03-20"),
  },
  {
    id: "e6",
    description: "Flowers",
    amount: 60,
    date: new Date("2022-01-20"),
  },
  {
    id: "e7",
    description: "A hanmburger",
    amount: 3,
    date: new Date("2022-08-05"),
  },
  {
    id: "e8",
    description: "Concert",
    amount: 25,
    date: new Date("2022-08-15"),
  },
  {
    id: "e9",
    description: "Concert 2",
    amount: 35,
    date: new Date("2022-07-15"),
  },
  {
    id: "e10",
    description: "Grosseries",
    amount: 26.4,
    date: new Date("2022-08-25"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
