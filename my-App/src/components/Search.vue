<template>
  <div>
    <input v-model="searchQuery" type="text" placeholder="Search by ingredients or nutrients" />
    <button @click="debouncedSearchByIngredients">Search by Ingredients</button>
    <button @click="debouncedSearchByNutrients">Search by Nutrients</button>

    <div class="recipe-results">
      <div v-for="result in searchResults" class="recipe-result" :key="result.id">
        <img :src="result.image" alt="Recipe Image" />
        <div>{{ result.title }}</div>
        <button @click="addToMealPlan(result)">Add to Meal Plan</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { searchByIngredients, searchByNutrients, addToMealPlan } from './js/search.js';
import debounce from 'lodash.debounce';

export default defineComponent({
  name: 'SearchComponent',
  setup() {
    const searchQuery = ref('');
    const searchResults = ref([]);

    const debouncedSearchByIngredients = debounce(async () => {
      const results = await searchByIngredients(searchQuery.value);
      searchResults.value = results;
    }, 300);

    const debouncedSearchByNutrients = debounce(async () => {
      const results = await searchByNutrients(15, 25, 10);
      searchResults.value = results;
    }, 300);

    return {
      searchQuery,
      searchResults,
      debouncedSearchByIngredients,
      debouncedSearchByNutrients,
      addToMealPlan,
    };
  },
});
</script>

<style scoped>
  @import '../assets/styles/search.css';
</style>  

