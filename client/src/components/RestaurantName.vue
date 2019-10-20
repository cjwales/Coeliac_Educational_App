<template lang="html">
  <div class="">
    <li v-on:click="handleNameClick">{{restaurant.name}}</li>

  </div>


</template>

<script>

import {eventBus} from '../main';
export default {
  name:"restaurant-name",
  props:['restaurant'],

methods:{
  handleNameClick(){
    eventBus.$emit('restaurant-selected', this.restaurant)
  }
},
}
</script>

<style lang="css" scoped>
</style>
