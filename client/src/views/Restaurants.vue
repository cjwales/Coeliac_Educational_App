<template lang="html">
  <div class="">
    <h1>restaurant</h1>
    <section>
      <restaurant-form/>
      <restaurants-List />
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
