import { StyleSheet, View } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
