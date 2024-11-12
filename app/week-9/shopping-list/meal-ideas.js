"use client";

import { useState, useEffect } from "react";

// MealIdeas component definition
const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas from TheMealDB API
  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  };

  // Load meal ideas based on the ingredient prop
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // useEffect to call loadMealIdeas when the ingredient prop changes
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  // Render component
  return (
    <div className="meal-ideas">
      <h2 className="text-xl font-semibold mb-4">
        Meal Ideas for {ingredient}
      </h2>
      <ul className="meal-list space-y-2">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="meal-item flex items-center space-x-4"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 object-cover rounded"
            />
            <span>{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
