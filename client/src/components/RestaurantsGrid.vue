<template lang="html">
  <div class="">

    <restaurant-name  v-for="(restaurant , index) in restaurants" :key= "index" :restaurant="restaurant" >
    </restaurant-name>
    <restaurants-map />
    <restaurant-view  :restaurant="selectedRestaurant" >
    </restaurant-view>

  </div>



</template>

<script>
import {eventBus} from '../main';

import RestaurantsMap from '@/components/RestaurantsMap.vue'
import RestaurantView from '@/components/RestaurantView'
import RestaurantName from '@/components/RestaurantName.vue'
import RestaurantsService from '@/services/RestaurantsService'

export default {
  data(){
    return {
      restaurants: [],
      selectedRestaurant: null
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
      eventBus.$on('restaurant-selected', (restaurant) => {
     this.selectedRestaurant = restaurant

   })

    },
  },
  components: {
     'restaurant-view': RestaurantView,
    'restaurants-map':RestaurantsMap,
    'restaurant-name': RestaurantName,
  }

}
</script>

<style lang="css" scoped>
</style>
