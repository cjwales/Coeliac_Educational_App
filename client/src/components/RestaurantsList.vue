<template lang="html">
  <div class="">
    <div class="map-restaurant">

      <div class="restaurant-item">
        <restaurant-name  v-for="(restaurant , index) in restaurants" :key= "index" :restaurant="restaurant" >
        </restaurant-name>
      </div>
      <restaurants-map class="map-actual" :restaurants="restaurants" :markers="markers"></restaurants-map>
      <restaurant-detail class="detail" :restaurant="selectedRestaurant" ></restaurant-detail>

    </div>
    <!-- <div class="restaurant-lists">
      <restaurant-name class="restaurant-item" v-for="(restaurant , index) in restaurants" :key= "index" :restaurant="restaurant" >
      </restaurant-name>
    </div> -->
  </div>



</template>

<script>
import {eventBus} from '../main';

import RestaurantRatingChart from '@/components/RestaurantRatingChart.vue'
import RestaurantsMap from '@/components/RestaurantsMap.vue'
import Restaurantdetail from '@/components/Restaurantdetail'
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

    eventBus.$on('restaurant-selected', (restaurant) => {
      this.selectedRestaurant = restaurant
    })
    eventBus.$on('restaurant-added', (restaurant) => {
      this.restaurants.push(restaurant)
      let marker = this.prepareMarker(restaurant)
      this.markers.push(marker)
    })
    eventBus.$on('restaurant-deleted', (id) => {
      let index = this.restaurants.findIndex(restaurant => restaurant._id === id)
      this.restaurants.splice(index, 1)
    })
  },

  methods: {
    fetchdata(){
      RestaurantsService.getRestaurants()
      .then(data =>
        {
          let markers=[]
          this.restaurants=data
          for (var i = 0; i < this.restaurants.length; i++) {
            let marker = this.prepareMarker(this.restaurants[i])
            markers.push(marker)
          }
          this.markers=markers

        }
      )
    },
    prepareMarker(restaurant){
      let marker = {position:'', tooltip:''}
      let ps = {lat:'',lng:''}
      ps.lat = restaurant.latitude
      ps.lng = restaurant.longitude
      marker.position = ps
      marker.tooltip = restaurant.name
      return marker
    }

  },
  components: {
    'restaurant-detail': Restaurantdetail,
    'restaurants-map':RestaurantsMap,
    'restaurant-name': RestaurantName,

  }
}
</script>

<style lang="css" scoped>
.map-restaurant {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.map-actual {
  min-width: 50%;
}

.detail {
  margin-left: 30px;
  margin-right: 70px;
}

.restaurant-item {
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 24px;
  list-style: square;
  margin-left: 100px;
  min-width: 300px;
  max-width: 300px;

}

</style>
