import { Text, View, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  // To extract the parameters in the navigation route
  const catId = route.params.categoryId;
  // Another way - we can use this hook to extract route params as well.
  // Useful if we want to access a nested component that it is not registered as a Screen
  //   const route = useRoute();
  //   route.params

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
