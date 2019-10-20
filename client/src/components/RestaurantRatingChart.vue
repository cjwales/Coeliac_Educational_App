<template lang="html">
  <div id="container">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import highcharts from 'highcharts-vue'
import Highcharts3d from "highcharts/highcharts-3d"
import HighchartsVue from "highcharts-vue"


export default {
  name: "restaurant-highcharts",
  props:['restaurant'],
  data(){
    return {
      ratings: [],
      chartOptions: {
        title: {
          text: 'Restaurant ratings'
        },
        chart: {
          type: 'column',
          options3d: {
            enabled: true,
            alpha: 5,
            beta: 5,
            viewDistance: 25,
            depth: 40
          }
        },

        xAxis: {
          categories: ['1', '2', '3', '4', '5'],
          labels: {
            skew3d: true,
            style: {
              fontSize: '16px'
            }
          }
        },

        series: [{
          name: 'No of persons rated',
          data: this.ratings,
          stack: 'male'
        }]
      }

    }
  },
  mounted(){
    this.fetchdata()

  },
  methods:{
    fetchdata(){
      let  ratings= this.restaurant.ratings
      var counts = {
        1 : 0,
        2 : 0,
        3 : 0,
        4 : 0,
        5 : 0
      };
      for (var i = 0; i < ratings.length; i++) {
        var num = ratings[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1 ;
      }
      ratings = [counts[1], counts[2], counts[3], counts[4],counts[5]]
      this.chartOptions.series[0].data=ratings;
    }
  }


}
</script>

<style lang="css" scoped>
#container, #sliders {
  min-width: 310px;
  max-width: 800px;
  margin: 0 auto;
}
#container {
  height: 400px;
}
</style>
