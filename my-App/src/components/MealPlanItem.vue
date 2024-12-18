<template>
    <div class="meal-plan-item">
      <!-- Use optional chaining (?.) to safely access the title property -->
      <h2>{{ mealPlan?.title }}</h2>
      <!-- Use optional chaining for other properties as well -->
      <p><strong>Description:</strong> {{ mealPlan?.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MealPlanItem',
    props: ['mealPlan'],
  };
  </script>