<template lang="html">

  <div class="restaurant-view">
  <h3>Name :{{ restaurant.name }}</h3>
  <p>Restaurant range :{{restaurant.range}}</p>
  <p>Cuisine :{{restaurant.cuisine}}</p>
  <p>Location :{{restaurant.location}}</p>
  <hr>

</div>

</template>

<script>
import RestaurantsService from '@/services/RestaurantsService'

export default {
  name: "restaurant-view",
  props:['restaurant']
}
</script>

<style lang="css" scoped>
</style>
