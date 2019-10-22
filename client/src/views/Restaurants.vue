<template lang="html">
  <div class="">
    <h1>Restaurants</h1>
    <section>
      <restaurants-List />
      <restaurant-form/>
    </section>
  </div>
</template>

<script>
import RestaurantForm from '../components/RestaurantForm.vue'
import RestaurantsList from '../components/RestaurantsList.vue'

export default {
  name:"app",
  components:{
    'restaurants-List': RestaurantsList,
    'restaurant-form': RestaurantForm
  }
}
</script>

<style lang="css" scoped>
</style>
