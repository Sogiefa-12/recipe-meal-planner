import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import Search from './components/Search.vue';
import MealPlanner from './components/MealPlanner.vue';
import ShoppingList from './components/ShoppingList.vue';
import Profile from './components/Profile.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/search', name: 'Search', component: Search },
    { path: '/meal-planner', name: 'MealPlanner', component: MealPlanner },
    { path: '/shopping-list', name: 'ShoppingList', component: ShoppingList },
    { path: '/profile', name: 'Profile', component: Profile },
  ];


  const router = createRouter ({
    history: createWebHistory(),
    routes,
  });

  export default router;