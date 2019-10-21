<template lang="html">
<div class="">
  <ul>
    <li v-for="restaurant in restaurants" :restaurants="restaurants">{{restaurant.name}}</li>
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
