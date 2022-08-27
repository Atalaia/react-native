import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;

  // To convert editedExpenseId into a boolean
  // True if we are editing, false otherwise
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>Manage Expense Screen</Text>
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({});
