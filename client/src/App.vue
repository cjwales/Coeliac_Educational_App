<template>
  <div class="">
    <!-- <section>
      <restaurant-form/>
      <restaurants-List />
    </section> -->

    <div id="app">
        <navigation/>
      <!-- <nav>
        <router-link :to="{ name: 'home'}">Home</router-link>
      </nav>
      <router-view id="view"></router-view> -->
    </div>

  </div>

</template>

<script>
import RestaurantsList from './components/RestaurantsList.vue'
import RestaurantForm from './components/RestaurantForm.vue'
import Navigation from './components/Navigation.vue'



export default {
  name: 'app',
  components:{
    // 'restaurants-List': RestaurantsList,
    // 'restaurant-form': RestaurantForm,
    'navigation': Navigation
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
