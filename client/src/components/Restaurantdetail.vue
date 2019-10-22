<template lang="html">
  <div class="restaurant-detail">
        <h3>{{ restaurant.name }}</h3>
        <p>Restaurant range :{{restaurant.range}}</p>
        <p>Cuisine :{{restaurant.cuisine}}</p>
        <p>Location :{{restaurant.location}}</p>
        <p>Postcode :{{restaurant.postcode}}</p>
        <p>PhoneNumber: {{restaurant.phone}}</p>
        <!-- <input type="submit" name="review" v-model= "review" v-on:click="submit" > -->
        <form v-on:submit="submit" id="review-form">
          Add Review: <input type="text" name="review" id ="review" >
          <input type="submit">
          </form>
      <div id="ratings">
        <star-rating   @rating-selected ="setRating" ></star-rating>
      </div>
      <br>
    <!-- <button type="button" class="delete-btn" v-on:click="deleteRestaurant">Delete</button> -->
    <restaurant-review  v-for="review in restaurant.reviews"  :review="review" >
    </restaurant-review>
    <button type="button" name="button" v-on:click="seeRatingsHighchart" >see ratings </button>
    <restaurant-highcharts v-if="showChart" :restaurant="restaurant"></restaurant-highcharts>
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
      rating: [],
      showChart: false,
      resetableRating: 0,
      review:""
    }

  },


  props:['restaurant'],
  methods: {
    deleteRestaurant(){
      RestaurantsService.deleteRestaurant(this.restaurant._id)
      .then(() => eventBus.$emit('restaurant-deleted', this.restaurant._id))
    },
    submit(){
      event.preventDefault();
      this.restaurant.reviews.push(event.target.review.value);
      let reviewsLocal = {
        "reviews":[]
      }
      reviewsLocal.reviews = this.restaurant.reviews
      RestaurantsService.UpdateRestaurant(this.restaurant._id , reviewsLocal)
    },
    setRating(rating)
    {

      let rat = rating
      this.rating.push(rat);
      let lastRating = this.rating.pop()
      console.log("lod",lastRating);
      console.log("main",this.rating);
      this.restaurant.ratings.push(lastRating)
      let ratingsArray ={
        "ratings":[]
      }
      ratingsArray.ratings=this.restaurant.ratings
      RestaurantsService.UpdateRestaurant(this.restaurant._id , ratingsArray)
       eventBus.$emit('restaurant-highchartRating', this.restaurant.ratings)
    },

    seeRatingsHighchart(){
      this.showChart = true
     // eventBus.$emit('restaurant-highchartRating', this.restaurant.ratings)
    }

  },


  components:{
    'restaurant-review': RestaurantReview,
    'restaurant-highcharts': RestaurantRatingChart,
    StarRating


  },
  mounted() {
    eventBus.$on('restaurant-selected', (restaurant) => {
      this.showChart = false;
    })
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
