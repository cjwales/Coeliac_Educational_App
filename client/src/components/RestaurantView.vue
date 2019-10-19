<template lang="html">

  <div class="restaurant-view">
    <h1>ffff</h1>
    <h3>{{ restaurant.name }}</h3>
    <p>Restaurant range :{{restaurant.range}}</p>
    <p>Cuisine :{{restaurant.cuisine}}</p>
    <p>Location :{{restaurant.location}}</p>
    <p>Postcode :{{restaurant.postcode}}</p>
    <label for="review">Add review</label>
    <input type="text" name="review" v-on:keyup.enter="submit" >
    <br>
    <button type="button" class="delete-btn" v-on:click="deleteRestaurant">Delete</button>

    <restaurant-review  v-for="review in restaurant.reviews"  :review="review" >
    </restaurant-review>

  <hr>

</div>

</template>

<script>
import { eventBus } from '@/main.js'
import RestaurantsService from '@/services/RestaurantsService'
import RestaurantReview from '@/components/RestaurantReview'

export default {
  name: "restaurant-view",

  props:['restaurant'],
  methods: {
    deleteRestaurant(){
      RestaurantsService.deleteRestaurant(this.restaurant._id)
      .then(() => eventBus.$emit('restaurant-deleted', this.restaurant._id))
    },
    submit(){
      console.log(event.target.value);
      this.restaurant.reviews.push(event.target.value);
      let reviewsLocal = {
        "reviews":[]
      }
      reviewsLocal.reviews = this.restaurant.reviews
      RestaurantsService.UpdateRestaurant(this.restaurant._id , reviewsLocal)
    }

  },
  components:{
    'restaurant-review': RestaurantReview
  }
}
</script>

<style lang="css" scoped>
</style>
