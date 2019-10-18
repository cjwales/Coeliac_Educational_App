<template>
   <section>
    <restaurants-Grid />
  </section>
</template>

<script>
import RestaurantsService from './services/RestaurantsService'
import RestaurantsGrid from './components/RestaurantsGrid.vue'

export default {
  name: 'app',
  components:{
    'restaurants-Grid': RestaurantsGrid
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
