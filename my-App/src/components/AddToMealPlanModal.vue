<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Add Recipe to Meal Plan</h2>
        <select v-model="selectedDay">
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
          <option value="7">Sunday</option>
        </select>
        <select v-model="selectedMeal">
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <button @click="confirmSelection">Add to Meal Plan</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    emits: ['addToMealPlan'],
    data() {
      return {
        selectedDay: 1,
        selectedMeal: 'Breakfast'
      };
    },
    methods: {
      confirmSelection() {
        this.$emit('addToMealPlan', { day: this.selectedDay, meal: this.selectedMeal });
      }
    }
  };
  </script>
  
  <style scoped>
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);
    }
  
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
    }
  </style>