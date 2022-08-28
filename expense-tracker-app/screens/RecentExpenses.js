import { useContext } from "react";
import { createPortal } from "react-dom";
import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExpenses} />
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({});
