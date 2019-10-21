<template lang="html">
<div class="">
  <ul>
    <li v-for="restaurant in restaurants"  :restaurants="restaurants" @click="handleDelete(restaurant._id)">{{restaurant.name}} ❌</li>
  </ul>
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
</style>
