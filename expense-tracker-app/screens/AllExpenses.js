import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";

function AllExpenses() {
  return <ExpensesOutput expensesPeriod="Total" />;
}

export default AllExpenses;

const styles = StyleSheet.create({});
