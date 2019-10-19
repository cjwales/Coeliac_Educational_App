<template lang="html">
  <div class="">
    <li v-on:click="handleNameClick">{{restaurant.name}}</li>
    <!-- <restaurant-view/> -->
  </div>


</template>

<script>
import {eventBus} from '../main';
// import RestaurantView from '@/components/RestaurantView'
export default {
  name:"restaurant-name",
  props:['restaurant'],

methods:{
  handleNameClick(){
    eventBus.$emit('restaurant-selected', this.restaurant)
  }
},
// components:{
//   'restaurant-view': RestaurantView
// }
}
</script>

<style lang="css" scoped>
</style>
