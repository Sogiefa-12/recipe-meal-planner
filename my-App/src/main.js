import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'
// import 'dotenv/config';

// Importing the components
import Home from './components/Home.vue'
import Profile from './components/Profile.vue';
import Search from './components/Search.vue';
import ShoppingList from './components/ShoppingList.vue';
import MealPlanner from './components/MealPlanner.vue';



createApp(App)
    .use(router)
    .component('Home', Home)
    .component('Profile', Profile)
    .component('Search', Search)
    .component('ShoppingList', ShoppingList)
    .component('MealPlanner', MealPlanner)
    .mount('#app')

