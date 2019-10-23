<template lang="html">
<div class="review">

  {{review}}

</div>
</template>

<script>
export default {
  name: "restaurant-review",
  props:['review'],
}
</script>

<style lang="css" scoped>
.review {
  padding-top: 20px;
  font-family: 'Oswald', sans-serif;
  font-size: 24px;}
</style>
