<template lang="html">
  <div class="row map">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for = "marker in markers":lat-lng="marker.position"
      v-on:l-add="realMarkerAdd">
      <l-popup :content="marker.tooltip"/>
    </l-marker>
    </l-map>
  </div>

</template>

<script>
import {LMap, LTileLayer, LMarker ,LPopup } from 'vue2-leaflet';
export default {
  name: "restaurants-map",
  props: ['restaurant','markers'],

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
    realMarkerAdd: function(event){
      Vue.nextTick(() => {
        event.target.openPopup();
      })
    }

  }
}
</script>

<style lang="css" scoped>
.map {
  height: 50vh;
  width:50vh


}
</style>
