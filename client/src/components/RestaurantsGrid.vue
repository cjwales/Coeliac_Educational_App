<template lang="html">
  <div class="">
    <restaurant-view  v-for="(restaurant , index) in restaurants" :key= "index" :restaurant="restaurant" >
    </restaurant-view>
      <restaurants-map/>
  </div>



</template>

<script>
import {eventBus} from '../main';

import ReataurantsMap from '@/components/ReataurantsMap.vue'
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


      eventBus.$on('restaurant-added', (restaurant) => {
        this.restaurants.push(restaurant)
      })
      eventBus.$on('restaurant-deleted', (id) => {
        let index = this.restaurants.findIndex(restaurant => restaurant._id === id)
        this.restaurants.splice(index, 1)
      })

    },
  },
  components: {
    'restaurant-view': RestaurantView,
    'restaurants-map':ReataurantsMap,
  }

}
</script>

<style lang="css" scoped>
</style>
