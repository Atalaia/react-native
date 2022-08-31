import { useLayoutEffect } from "react";

import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  // To extract the parameters in the navigation route
  const catId = route.params.categoryId;

  // To find all the meals matching the category Id
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // To display the category title in the navigation stack header
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
