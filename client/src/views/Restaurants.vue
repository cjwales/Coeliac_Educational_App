<template lang="html">
  <div class="">
    <h1>Restaurants</h1>
    <p>Finding a restaurant that everyone can eat safely in can be difficult. We want to take away any stress from eating out. Our list of restaurants will help you eat out with confidence. </p>
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
p {
  margin-bottom: 50px;
  margin-left: 100px;
  margin-right: 100px;
  padding-left: 50px;
  padding-top:25px;
  padding-bottom: 25px;
  box-shadow: 15px 10px 20px #cbd0d8;
}
</style>
