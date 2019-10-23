<template lang="html">

  <div class="">
    <div id="container">
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>

</template>

<script>
import {eventBus} from '../main';
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
        colors: ['#ff4d4d', 'orange', '#ffdb4d', '#adebad', '#47d147'],
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
          stack: 'male',
          colorByPoint: true
        }]
      }

    }
  },
  mounted(){

    eventBus.$on('restaurant-highchartRating', (ratings) => {
      console.log("hichart log ",ratings);
      this.newrating(ratings)

    })

    eventBus.$on('restaurant-selected',
     (restaurant) => {
    this.fetchdata(restaurant)
  })

  this.ratings = this.fetchdata(this.restaurant);
  Highcharts.Color.prototype.parsers.push({
regex: /^[a-z]+$/,
parse: function (result) {
  var rgb = new RGBColor(result[0]);
    if (rgb.ok) {
      return [rgb.r, rgb.g, rgb.b, 1]; // returns rgba to Highcharts
    }
}
});


  },
  //
  methods:{
    fetchdata(restaurant){
      let  ratings= restaurant.ratings
      this.newrating(ratings);

    },
    newrating(ratings){
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
  margin-top: 30px;
  margin-right: 120px
}
#container {
  height: 400px;
}

</style>
