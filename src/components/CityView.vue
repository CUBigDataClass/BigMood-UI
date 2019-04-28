<template>
  <div>
    <div class="box">Trends and Sentiment for {{country}}</div>
    <GeoMapGCharts :cityTrends="cityTrends" :countryCode="countryCode"/>
  </div>
</template>

<script>
import GeoMapGCharts from "./GeoMapGCharts.vue";

export default {
  name: "CityView",
  components: {
    GeoMapGCharts
  },
  props: ["cityTrends", "countryCode", "country"]
};
</script>

<style>
.box {
  padding: 15px;
  background-color: #262933;
  color: white;
  font-family: "Fira Sans Regular";
  font-size: 18px;
  text-align: center;
}
</style>
