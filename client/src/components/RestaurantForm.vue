<template lang="html">

  <div class="">

    <div class="add-rest">
      <h1>Add a Restaurant</h1>
      <h3>Have you found a restaurant that serves great gluten free food and are understanding about cross contamination?? We'd love to hear about it. </h3>
    </div>

    <form id="restaurant-form" v-on:submit="handleSubmit" method="post" >
      <label for="name">Restaurant name: </label>
      <input type="text" id="name" v-model="name" required/>
      <label for="location">Address: </label>
      <input type="text" id="location" v-model="location" required/>
      <label for="postcode">Postcode:</label>
      <input type="text" id="postcode" v-model="postcode"   pattern="[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}" title="eg: G2 3BZ "required/>
      <label for="range">Price Range</label>
      <select  name="range" v-model="range" >
        <option value="£">£</option>
        <option value="£">££</option>
        <option value="£££">£££</option>
      </select>

      <label for="phone">PhoneNumber:</label>
      <input type="text" id="phone" name="phone" v-model="phone"
             pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$"
             title=" UK format eg: 01312902600"required>

      <label for="cuisine">Cuisine:</label>
      <select  class="cuisine" name="cuisine" v-model="cuisine" >
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
        <option value="Healthy food">Healthy</option>
        <option value="European">European</option>
        <option value="British">British</option>
      </select>

    <button class="submit" type="submit" id ="submit">submit</button>

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
        RestaurantsService.postRestaurant(payload).then(restaurant =>
          {eventBus.$emit('restaurant-added',restaurant)})
      }
    )

    }

  }
}
</script>

<style lang="css" scoped>

h1 {
  text-align: center;
  margin-top: 80px;
}

h3  {
  text-align: center;
  padding: 30px;
  margin-left: 100px;
  margin-right: 100px;
  box-shadow: 15px 10px 20px #cbd0d8;
  margin-bottom: 50px;
  font-size: 24px;
  font-weight: 300;
}

#restaurant-form {
  font-family: 'Oswald', sans-serif;
  font-size: 24px;
}

label {
  margin: 15px 350px;
}

.submit {
  background-color: #9ED269;
  box-shadow: 5px 10px #89C053;
  padding: 20px;
  font-family: 'Lakki Reddy', cursive;
  font-size: 24px;
  border: none;
  margin-left: 350px;
  margin-right: 350px;
  margin-top: 20px;
}

.cuisine, .price {
  margin-left: 350px;
  margin-right: 350px;
  margin-left: 15px;
  font-size: 24px;
}

select.price, select.cuisine {
  margin-left: 350px;
}
#restaurant-form {
  display: flex;
  flex-direction: column;
}

input {
  font-weight: 300;
  font-size: 24px;
  padding-top: 8px;
  padding-bottom:8px;
  margin-left: 350px;
  margin-right: 350px;

}

</style>
