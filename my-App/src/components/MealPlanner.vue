<!-- <template>
    <div>
      <h2>Meal Planner</h2>
      <form @submit.prevent="addMeal">
        <input type="text" v-model="mealInput" placeholder="Enter meal name">
        <button type="submit">Add Meal</button>
      </form>
      <h3>Your Meal Plan</h3>
      <ul>
        <li v-for="meal in meals" :key="meal.name">
          <div class="meal-container">
            {{ meal.name }}
            <button @click="removeMeal(meal)">Remove</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        meals: [],
        mealInput: '',
      };
    },
    methods: {
      addMeal() {
        if (this.mealInput.trim()) {
          // Basic duplicate meal name check
          if (!this.meals.some((meal) => meal.name === this.mealInput)) {
            this.meals.push({ name: this.mealInput });
            this.mealInput = '';
          } else {
            console.log("Meal already exists in the meal plan.");
          }
        }
      },
      removeMeal(mealToRemove) {
        const index = this.meals.indexOf(mealToRemove);
        this.meals.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .meal-container {
    display: flex;
    justify-content: space-between;
  }
  </style> -->


  <!-- MealPlanner.vue -->


  <!-- MealPlanner.vue -->
<template>
  <div>
    <h2>Meal Planner</h2>
    <div v-for="recipe in mealPlan" :key="recipe.id">
      <img :src="recipe.image" alt="Recipe Image" />
      <h3>{{ recipe.title }}</h3>
      <p>Cooking Time: {{ recipe.cookingTime }} minutes</p>
      <p>Nutrition Facts: {{ recipe.nutritionFacts }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MealPlanner',
  setup() {
    const mealPlan = ref(JSON.parse(localStorage.getItem('mealPlan')) || []);

    return {
      mealPlan,
    };
  },
  mounted() {
    // const plainMealPlan = JSON.parse(JSON.stringify(mealPlan)) ||
    // console.log('Meal Plan recipes:', plainMealPlan);
  },
};
</script>

<style scoped>
</style>