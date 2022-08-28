import { useContext } from "react";
import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} />
  );
}

export default AllExpenses;

const styles = StyleSheet.create({});
