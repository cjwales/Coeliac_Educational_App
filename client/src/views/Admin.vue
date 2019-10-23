<template lang="html">
  <div class="admin-list">
    <h1>Admin Control Panel</h1>
    <h4>Select a restaurant to delete:</h4>
    <ul>
      <li v-for="restaurant in restaurants"  :restaurants="restaurants" >{{restaurant.name}} <span @click="handleDelete(restaurant._id)">❌</span> </li>
    </ul>
    <h5>Total Restaurants: {{restaurants.length}}</h5>
    <h4 class="review-title">Select a restaurant to view reviews:</h4>

    <form class="" v-on:submit.prevent>
      <select v-model="selectedRestaurant">
        <option disabled>Select a restaurant...</option>
        <option v-for="restaurant in restaurants" :value="restaurant">{{restaurant.name}}</option>
      </select>
    </form>
    <ul>
      <li v-for="(review, index) in selectedRestaurant.reviews" :value="review">{{review}} <span @click="handleReviewDelete(review)">❌</span> </li>
    </ul>
  </div>
</template>

<script>

import { eventBus } from '../main.js'
import RestaurantsService from '../services/RestaurantsService.js'

export default {
  name: 'admin',
  data(){
    return {
      restaurants: [],
      selectedRestaurant: []
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.fetchData();
  },
  methods: {
    fetchData() {
      RestaurantsService.getRestaurants()
      .then(restaurants => this.restaurants = restaurants);
    },
    handleDelete(id) {
      RestaurantsService.deleteRestaurant(id)
      const index = this.restaurants.findIndex(restaurant => restaurant._id === id);
      this.restaurants.splice(index, 1);
    },
    handleReviewDelete(review) {
      let reviews = this.selectedRestaurant.reviews
      for (let i = 0;i < reviews.length;i++)
      {
        if(reviews[i]==review){
          this.selectedRestaurant.reviews.splice(i, 1);
        }
      }
      let newRestaurant = this.selectedRestaurant
      RestaurantsService.UpdateRestaurant(newRestaurant._id, newRestaurant)
    }
  }
}
</script>

<style lang="css" scoped>
  .admin-list {
    font-family: 'Oswald', sans-serif;
    margin-left: 150px;
  }

  h1 {
    padding-left: 0;
  }

  h5 {
    padding-top: 20px;
  }

  h4 {
    font-size: 20px;
    padding-bottom: 20px;
  }

  li {
    font-weight: 300;
  }

  .review-title {
    font-size: 20px;
    margin-top: 20px;
  }
</style>
