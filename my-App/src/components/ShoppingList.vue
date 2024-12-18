<template>
    <div>
      <h2>Shopping List</h2>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }} - {{ item.quantity }}
          <button @click="removeItem(item)">Remove Item</button>
        </li>
      </ul>
      <form @submit.prevent="addItem">
        <input type="text" v-model="newItemName" placeholder="Enter item name" />
        <input type="number" v-model="newItemQuantity" placeholder="Enter item quantity" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        newItemName: '',
        newItemQuantity: 0,
      };
    },
    methods: {
      addItem() {
        if (this.newItemName && this.newItemQuantity > 0) {
          this.items.push({
            id: Date.now(),
            name: this.newItemName,
            quantity: this.newItemQuantity,
          });
          this.newItemName = '';
          this.newItemQuantity = 0;
        }
      },
      removeItem(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  form {

    width: 100%;
    background-color: lightslategray;
  }

  form input {
   width: 30%;
    height: 5.3vh;
    font-size: medium;
    margin: 10px;
    border: 5px solid black;
  }

</style>