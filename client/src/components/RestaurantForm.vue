<template lang="html">
  <div class=""id="restaurant-form">
    <h1>Suggest Restaurant</h1>
    <form id="restaurant-form" v-on:submit="handleSubmit" method="post" >
      <label for="name">Restaurant name:</label>
      <input type="text" id="name" v-model="name" required/>
      <label for="location">Address:</label>
      <input type="text" id="location" v-model="location" required/>
      <label for="postcode">Postcode:</label>
      <input type="text" id="postcode" v-model="postcode" required/>
      <label for="range">Price Range</label>
      <select  name="range" v-model="range" >
        <option value="£">£</option>
        <option value="£">££</option>
        <option value="£££">£££</option>
      </select>



      <label for="phone">PhoneNumber:</label>
      <input type="tel" id="phone" name="phone"
             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
             required>

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
    return {
      name:'',
      location:'',
      postcode:'',
      cuisine:'',
      longitude:'',
      latitude:'',
      range:'',
      phone:'',
      geolocation:{}
    }
  },
  methods:{
    handleSubmit(e){
      e.preventDefault()
      let postcode= e.target.postcode.value;
      console.log("postcode",postcode);
      fetch("https://api.postcodes.io/postcodes/"+postcode)
      .then(response => response.json())
      .then(data => this.geolocation=data.result)
      .then(res => {
        const payload = {
          name: this.name,
          location:this.location,
          postcode: this.postcode,
          cuisine:this.cuisine,
          longitude:this.geolocation.longitude,
          latitude:this.geolocation.latitude,
          phone:this.phone,
          range:this.range,
          reviews:[],
          ratings:[]
        }
        console.log("payload",payload);
        RestaurantsService.postRestaurant(payload).then(restaurant =>
          {eventBus.$emit('restaurant-added',restaurant)})
      }


    )

  }

}
}
</script>

<style lang="css" scoped>
</style>
