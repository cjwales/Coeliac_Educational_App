<template lang="html">
  <div class="">

    <restaurant-name  v-for="(restaurant , index) in restaurants" :key= "index" :restaurant="restaurant" >
    </restaurant-name>
    <restaurants-map  :restaurant="selectedRestaurant" :markers=markers>
    </restaurants-map>
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
      selectedRestaurant: null,
      markers:[]
    }
  },
  mounted(){
    this.fetchdata();
  },

  methods: {
    fetchdata(){
      RestaurantsService.getRestaurants()
    .then(data =>
    {

      let markers=[]
      this.restaurants=data
       for (var i = 0; i < this.restaurants.length; i++) {
        let marker = {position:'', tooltip:''}
        let ps = {lat:'',lng:''}
        ps.lat = this.restaurants[i].latitude
        ps.lng = this.restaurants[i].longitude
        marker.position = ps
        marker.tooltip = this.restaurants[i].name
        markers.push(marker)
      }
      this.markers=markers

   }
  )


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
