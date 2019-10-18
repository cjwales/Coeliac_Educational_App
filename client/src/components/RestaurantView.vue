<template lang="html">

  <div class="restaurant-view">
    <h3>{{ restaurant.name }}</h3>
    <p>Restaurant range :{{restaurant.range}}</p>
    <p>Cuisine :{{restaurant.cuisine}}</p>
    <p>Location :{{restaurant.location}}</p>
    <button type="button" class="delete-btn" v-on:click="deleteRestaurant">Delete</button>
    <hr>

  </div>

</template>

<script>
import { eventBus } from '@/main.js'
import RestaurantsService from '@/services/RestaurantsService'

export default {
  name: "restaurant-view",
  props:['restaurant'],
  methods: {
    deleteRestaurant(){
      RestaurantsService.deleteRestaurant(this.restaurant._id)
      .then(() => eventBus.$emit('restaurant-deleted', this.restaurant._id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
