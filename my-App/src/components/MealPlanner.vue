

  <template>
    <div>
      <h2>Meal Planner</h2>
      <div class="meal-grid">
        <div v-for="recipe in mealPlan" :key="recipe.id" class="meal-item">
          <img :src="recipe.image" alt="Recipe Image" />
          <h3>{{ recipe.title }}</h3>
          <p>Cooking Time: {{ recipe.cookingTime }} minutes</p>
          <p>Nutrition Facts: {{ recipe.nutritionFacts }}</p>
          <button @click="removeRecipe(recipe)">Remove Recipe</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'MealPlanner',
    setup() {
      const mealPlan = ref(JSON.parse(localStorage.getItem('mealPlan')) || []);
  
      const removeRecipe = (recipe) => {
        const newMealPlan = mealPlan.value.filter((item) => item.id !== recipe.id);
        mealPlan.value = newMealPlan;
        localStorage.setItem('mealPlan', JSON.stringify(newMealPlan));
      };
  
      return {
        mealPlan,
        removeRecipe,
      };
    },
    mounted() {
      // console.log('Meal Plan recipes:', mealPlan);
    },
  };
  </script>
  
  <style scoped>
.meal-grid {
  display: grid;
  gap: 10px;
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 50px;
}

.meal-item {
  background: #f7f7f7;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.meal-item:nth-last-child(1) {
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .meal-grid {
    grid-template-columns: 1fr;
  }

  .meal-item {
    padding: 10px;
  }
}

@media (min-width: 768px) {
  .meal-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .meal-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>