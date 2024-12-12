<template>
  <div>
    <h2>Recipe Search</h2>
    <input type="text" v-model="searchQuery" placeholder="Enter recipe or ingredient..." />
    <button @click="debouncedSearch">Search</button>
    <div class="recipe-results" v-if="searchResults.length">
      <div class="recipe-result" v-for="recipe in searchResults" :key="recipe.id">
        <img :src="recipe.image" alt="Recipe Image" />
        <h3>{{ recipe.title }}</h3>
        <button @click="addToMealPlan(recipe)">Add to Meal Plan</button>
      </div>
    </div>
  </div>
</template>

<script>
import Search from './js/search.js';

export default  Search;
</script>

<style scoped>
@import '../assets/styles/search.css';
</style>