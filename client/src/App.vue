<template>
  <div class="">
    <section>
      <restaurant-form/>
      <restaurants-Grid />
    </section>


  </div>

</template>

<script>

import RestaurantsGrid from './components/RestaurantsGrid.vue'
import RestaurantForm from './components/RestaurantForm.vue'
export default {
  name: 'app',
  components:{
    'restaurants-Grid': RestaurantsGrid,
    'restaurant-form': RestaurantForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
