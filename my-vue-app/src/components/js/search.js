
import { defineComponent, ref } from 'vue';
import debounce from 'lodash.debounce';

const searchQuery = ref('');
const searchResults = ref([]);

const search = async () => {
  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=287183c67530424b9365f23df2281430&ingredients=${searchQuery.value}&number=10`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network  response was not ok');
    }
    const data = await response.json();
    searchResults.value = data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
  
};

const addToMealPlan = async (recipe) => {
  const currentMealPlan = JSON.parse(localStorage.getItem('mealPlan')) || [];

  const fullRecipe = await fetch(recipe.recipeAPIUrl).then(res => res.json());
  const nutritionInfo = fullRecipe.extendedIngredients.nutrition.find(info => info.measurementType === 'serving');

  const updatedRecipe = {
    ...recipe,
    cookingTime: fullRecipe.readyInMinutes,
    nutritionFacts: `${nutritionInfo.calories}, ${nutritionInfo.protein}, ${nutritionInfo.fat}, ${nutritionInfo.carbohydrates}`,
  };

  currentMealPlan.push(updatedRecipe);
  localStorage.setItem('mealPlan', JSON.stringify(currentMealPlan));
};

const debouncedSearch = () => {
  debounce(search, 500)();
};

const Search = defineComponent({
  name: 'Search',
  setup() {
    return { searchQuery, searchResults, debouncedSearch, addToMealPlan };
  },
});

export default Search;