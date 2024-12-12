<template> 
  <div>
    <header> 
      <h1>
        Recipe and Meal Planner
      </h1>
      <nav class="nav-wrapper" > 
        <router-link to="/">Home</router-link>
        <router-link to="/search">Search</router-link>
        <router-link to="/meal-planner">Meal Planner</router-link>
        <router-link to="/shopping-list">Shopping List</router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer>
      <p>Copyright &copy; 2023 Recipe and Meal Planner</p>
    </footer>
  </div>
</template>


<script>
export default {
  name: 'App',
};
</script>
<style>
@import 'assets/styles/app.css';
</style>
