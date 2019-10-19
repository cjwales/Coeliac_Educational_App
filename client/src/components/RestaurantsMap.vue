<template lang="html">
  <div class="row map">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';
export default {
  name: "restaurants-map",
  // props: ['restaurantmap'],

  data() {
    return {
      zoom:13,
      center: L.latLng(55.814894, -4.306744),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(55.814894, -4.306744),
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  }
}
</script>

<style lang="css" scoped>
.map {
  height: 50vh;
  width:50vh


}
</style>
