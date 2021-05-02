import React, { createContext, useReducer } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 50,
    category: "Travel",
    type: "Expense",
    date: "2021-05-04",
    id: "ea7d958c-329b-4ea9-b3e6-ad02f726e18a",
  },
  {
    amount: 300,
    category: "Savings",
    type: "Income",
    date: "2021-05-04",
    id: "abfc618f-2942-4356-8be8-b7c0a8dccdd9",
  },
  {
    amount: 10,
    category: "Bills",
    type: "Expense",
    date: "2021-04-27",
    id: "28fb3a7e-df13-4ee0-ab4e-e652332ff709",
  },
  {
    amount: 50,
    category: "Business",
    type: "Income",
    date: "2021-05-02",
    id: "361bebaa-ef53-472d-8a17-a6fb4a793b37",
  },
  {
    amount: 50,
    category: "Business",
    type: "Income",
    date: "2021-05-04",
    id: "cf808258-fe73-4403-a2c1-1e47714d179b",
  },
  {
    amount: 100,
    category: "Salary",
    type: "Income",
    date: "2021-05-03",
    id: "1dddddd7-be4c-42bd-8fba-2a47e04627f4",
  },
];
//inital values when first visit on website

export const ExpenseTracketContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Action Creators
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  const balance = transactions.reduce(
    (acc, curVal) =>
      curVal.type === "Expense" ? acc - curVal.amount : acc + curVal.amount,
    0
  );

  return (
    <ExpenseTracketContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTracketContext.Provider>
  );
};
