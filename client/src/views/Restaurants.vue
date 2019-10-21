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
import RestaurantsList from '../components/RestaurantsList.vue'
import RestaurantForm from '../components/RestaurantForm.vue'
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
