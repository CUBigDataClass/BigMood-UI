<template>
  <v-data-table :headers="headers" :items="trends" class="elevation-1">
    <template v-slot:items="props">
      <td class="text-xs-center">{{ props.item.country }}</td>
      <td class="text-xs-center">{{ props.item.city }}</td>
      <td class="text-xs-center">{{ props.item.trends[0].trend }}</td>
      <td class="text-xs-center">{{ props.item.trends[0].sentiment }}</td>
      <!-- <td class="text-xs-center">{{ props.item.woeid }}</td> -->
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
export default {
  name: "GeoMap",
  props: {},
  data: function() {
    return {
      headers: [
        { text: "Country", value: "Country" },
        { text: "City", value: "City" },
        { text: "Hashtag", value: "Hashtag" },
        { text: "Sentiment", value: "Sentiment" },
        // { text: "Woeid", value: "Woeid" }
      ],
      trends: [],
    };
  },
  mounted () {
    axios
      .get('http://146.148.80.142:3000/bigmoodapi/trends')
      .then(response => {
        console.log(response.data.trends);
        this.trends = response.data.trends
        })
      .catch(error => {
        this.error = error
      })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.regions_div {
  width: 1200px;
  height: 800px;
  text-align: center;
}
</style>
