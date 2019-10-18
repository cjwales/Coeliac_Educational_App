<template lang="html">
<div class="">
  <restaurant-view  v-for="(restaurant , index) in restaurants" :key= "index" :restaurant="restaurant" >
  </restaurant-view>
</div>



</template>

<script>
import RestaurantView from '@/components/RestaurantView'
import RestaurantsService from '@/services/RestaurantsService'
export default {
  data(){
    return {
      restaurants: []
    }
  },
  mounted(){
  this.fetchdata();
  },

  methods: {
    fetchdata(){
    RestaurantsService.getRestaurants()
    .then(restaurants => this.restaurants = restaurants)
  },
},
  components: {
    'restaurant-view': RestaurantView
  }

}
</script>

<style lang="css" scoped>
</style>
