import { ref, watch } from 'vue';
import debounce from 'lodash.debounce';

const searchQuery = ref('');
const searchResults = ref([]);

const SPOONACULAR_API_KEY = '287183c67530424b9365f23df2281430';

const searchByIngredients = async (searchQuery) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_API_KEY}&ingredients=${searchQuery}&number=10`;
      const response = await fetch(url);
      if (!response.ok) {
        reject(new Error('Network response was not ok'));
      }
      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      reject(error);
    }
  });
};

const searchByNutrients = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${SPOONACULAR_API_KEY}&minCarbs=15&maxCarbs=25&number=10`;
      const response = await fetch(url);
      if (!response.ok) {
        reject(new Error('Network response was not ok'));
      }
      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      reject(error);
    }
  });
};

const addToMealPlan = async (recipe) => {
  // Get the meal plan from local storage or initialize an empty array
  let mealPlan = JSON.parse(localStorage.getItem('mealPlan')) || [];

  // Add the recipe to the meal plan
  mealPlan.push(recipe);

  // Save the updated meal plan to local storage
  localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
};


export { searchByIngredients, searchByNutrients, addToMealPlan };



