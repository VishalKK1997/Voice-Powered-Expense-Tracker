import { useContext } from "react";
import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from "./constants/categories";
import { ExpenseTracketContext } from "./context/context";

const useTransactions = (title) => {
  resetCategories();

  const { transactions } = useContext(ExpenseTracketContext);

  const TransactionsPerType = transactions.filter((t) => t.type === title);
  const total = TransactionsPerType.reduce(
    (acc, curVal) => (acc += curVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  TransactionsPerType.forEach((t) => {
    const category = categories.find((cat) => cat.type === t.category);
    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((cat) => cat.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((cat) => cat.amount),
        backgroundColor: filteredCategories.map((cat) => cat.color),
      },
    ],
    labels: filteredCategories.map((cat) => cat.type),
  };

  return { total, filteredCategories, chartData };
};

export default useTransactions;
