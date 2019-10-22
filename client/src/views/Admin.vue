<template lang="html">
<div class="admin-list">
  <h1>Admin Control Panel</h1>
  <h4>Select a restaurant to delete:</h4>
  <ul>
    <li v-for="restaurant in restaurants"  :restaurants="restaurants" >{{restaurant.name}} <span @click="handleDelete(restaurant._id)">❌</span> </li>
  </ul>
  <h5>Total Restaurants: {{restaurants.length}}</h5>
</div>
</template>

<script>

import { eventBus } from '../main.js'
import RestaurantsService from '../services/RestaurantsService.js'

export default {
  name: 'admin',
  data(){
    return {
      restaurants: []
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.fetchData();
  },
  methods: {
    fetchData() {
      RestaurantsService.getRestaurants()
      .then(restaurants => this.restaurants = restaurants);
    },
    handleDelete(id) {
      RestaurantsService.deleteRestaurant(id)
      const index = this.restaurants.findIndex(restaurant => restaurant._id === id);
      this.restaurants.splice(index, 1);
    }
  }
}
</script>

<style lang="css" scoped>
.admin-list {
  font-family: 'Oswald', sans-serif;
  margin-left: 150px;
}

h1 {
  padding-left: 0;
}

h5 {
  padding-top: 20px;
}

h4 {
  font-size: 20px;
  padding-bottom: 20px;
}

li {
  font-weight: 300;
}
</style>
