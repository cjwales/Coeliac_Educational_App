<template lang="html">
  <div class=""id="restaurant-form">
    <form id="restaurant-form" v-on:submit="handleSubmit" method="post" >
      <label for="name">Restaurant name:</label>
      <input type="text" id="name" v-model="name" required/>
      <label for="address">Address:</label>
      <input type="text" id="address" v-model="address" required/>
      <label for="postcode">Postcode:</label>
      <input type="text" id="postcode" v-model="postcode" required/>

        <label for="cuisine">Cuisine:</label>
      <select  name="cuisine" v-model="cuisine" >
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
        <option value="Healthy food">Healthy food</option>
        <option value="European">European</option>
        <option value="British">British</option>
      </select>
      <button type="submit" id ="submit">submit</button>

      <hr>
    </form>

  </div>


</template>

<script>
import {eventBus} from '../main';
import RestaurantsService from '../services/RestaurantsService';
export default {

  name:"restaurant-form",
  data(){
    //console.log("shjdgsg");
    return {
      name:'',
      address:'',
      postcode:'',
      cuisine:''

    }
  },
  // props:['name'],
  methods:{
    handleSubmit(e){
      e.preventDefault()
      const payload = {
        name: this.name,
        address:this.address,
        postcode: this.postcode,
        cuisine:this.cuisine
      }
      RestaurantsService.postRestaurant(payload).then(restaurant =>{eventBus.$emit('restaurant-added',restaurant)})
      event.target.reset();

    }
  }
}
</script>

<style lang="css" scoped>
</style>
