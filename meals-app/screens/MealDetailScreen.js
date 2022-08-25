import { View, StyleSheet, Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  return (
    <View style={styles.container}>
      <Text>This is the Meal Detail screen ({mealId})</Text>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {},
});
