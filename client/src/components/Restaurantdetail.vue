<template lang="html">

  <div class="restaurant-detail">
    <h3>{{ restaurant.name }}</h3>
    <p>Restaurant range :{{restaurant.range}}</p>
    <p>Cuisine :{{restaurant.cuisine}}</p>
    <p>Location :{{restaurant.location}}</p>
    <p>Postcode :{{restaurant.postcode}}</p>
    <!-- <p>{{restaurant.ratings}}</p> -->
    <label for="review">Add review</label>
    <input type="text" name="review" v-on:keyup.enter="submit" >
    <div id="ratings">
      <star-rating @rating-selected ="setRating"></star-rating>
      <h3>Selected Rating:{{rating}} </h3>
    </div>
    <br>

    <button type="button" class="delete-btn" v-on:click="deleteRestaurant">Delete</button>

    <restaurant-review  v-for="review in restaurant.reviews"  :review="review" >
    </restaurant-review>
    <restaurant-highcharts :restaurant="restaurant"></restaurant-highcharts>

    <hr>

  </div>

</template>

<script>
import { eventBus } from '@/main.js'
import StarRating from 'vue-star-rating'
import RestaurantRatingChart from '@/components/RestaurantRatingChart.vue'
import RestaurantsService from '@/services/RestaurantsService'
import RestaurantReview from '@/components/RestaurantReview'

export default {
  name: "restaurant-detail",
  data(){
    return{
      rating: null
    }

  },


  props:['restaurant'],
  methods: {
    deleteRestaurant(){
      RestaurantsService.deleteRestaurant(this.restaurant._id)
      .then(() => eventBus.$emit('restaurant-deleted', this.restaurant._id))
    },
    submit(){
      this.restaurant.reviews.push(event.target.value);
      let reviewsLocal = {
        "reviews":[]
      }
      reviewsLocal.reviews = this.restaurant.reviews
      RestaurantsService.UpdateRestaurant(this.restaurant._id , reviewsLocal)
    },
    setRating(rating)
    {
      this.rating= rating;
      this.restaurant.ratings.push(rating)
      let ratingsArray ={
        "ratings":[]
      }
      ratingsArray.ratings=this.restaurant.ratings
      RestaurantsService.UpdateRestaurant(this.restaurant._id , ratingsArray)

    }

  },
  components:{
    'restaurant-review': RestaurantReview,
    'restaurant-highcharts': RestaurantRatingChart,
    StarRating


  }
}
</script>

<style lang="css" scoped>

body {
  font-family: 'Raleway', sans-serif;
}

.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
}


</style>
