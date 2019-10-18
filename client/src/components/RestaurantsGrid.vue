<template lang="html">

</template>

<script>
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
  }

}
</script>

<style lang="css" scoped>
</style>
