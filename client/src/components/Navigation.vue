<template lang="html">
  <div class="nav">
    <nav>
      <router-link class="nav-button button-1" :to="{ name: 'home'}">Home</router-link>
      <router-link class="nav-button button-2" :to="{ name: 'kids'}">Kids Zone</router-link>
      <router-link class="nav-button button-3" :to="{ name: 'parents'}">Parents</router-link>
      <router-link class="nav-button button-4" :to="{ name: 'restaurants'}">Restaurants</router-link>
      <router-link class="nav-button button-1" :to="{ name: 'login'}">Login</router-link>
      <!-- <router-link :to="{ name: 'admin'}">Admin</router-link> -->
    </nav>
    <router-view id="view"></router-view>
  </div>
</template>

<script>
export default {
  name:"navigation"
}
</script>

<style lang="css" scoped>

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 35px;
  padding-bottom: 35px;
}

a {
  font-family: 'Lakki Reddy', cursive;
  font-size: 24px;

}

.button-1 {
  background-color: #FECD57;
  box-shadow: 5px 10px #F5BA45;
  padding: 30px;
}

.button-2 {
  background-color: #46CEAD;
  box-shadow: 5px 10px #35BB9B;
  padding: 30px;
}

.button-3 {
  background-color: #CE5564;
  box-shadow: 5px 10px #D94452;
  padding: 30px;
}

.button-4 {
  background-color: #AC92EA;
  box-shadow: 5px 10px #967ADA;
  padding: 30px;
}
.button-5 {
  background-color: #4FBFE8;
  box-shadow: 5px 10px #3AADD9;
  padding: 30px;
}

/* .nav-button {
  background-color: pink;
  padding: 10px;
} */
</style>
