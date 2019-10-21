<template lang="html">
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home'}">Home</router-link>
      <router-link :to="{ name: 'kids'}">Kids</router-link>
      <router-link :to="{ name: 'parents'}">Parents</router-link>
      <router-link :to="{ name: 'restaurants'}">Restaurants</router-link>
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
</style>
