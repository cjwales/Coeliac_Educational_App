<template lang="html">
  <div class="">
    <div class="row map">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for = "marker in markers":lat-lng="marker.position"
        @click="hello(marker)">
        <l-popup :content="marker.tooltip" />
      </l-marker>
    </l-map>
  </div>

</div>


</template>

<script>
import {eventBus} from '../main';
import {LMap, LTileLayer, LMarker ,LPopup } from 'vue2-leaflet';
export default {
  name: "restaurants-map",
  props: ['restaurants','markers'],

  data() {
    return {
      zoom:13,
      center: L.latLng(55.860218, -4.261282),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  methods:{
    hello: function (marker){
      let popUpSelectedRestaurent = this.restaurants.find(restaurant =>
        {
          return restaurant.name == marker.tooltip
        }
      )
      eventBus.$emit('restaurant-selected',popUpSelectedRestaurent)
    }
  }
}
</script>

<style lang="css" scoped>
.map {
  height:65vh;
  max-width: 500vh;
  margin-left: 50px;
}
</style>
