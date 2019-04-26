<template>
  <div>
    <GeoMapGCharts :cityTrends="cityTrends" :countryCode="countryCode"/>
    <!-- <WordCloud :words="defaultWords" :urls="urls" /> -->
  </div>
</template>

<script>
import GeoMapGCharts from "./GeoMapGCharts.vue";
import WordCloud from "./WordCloud.vue";

export default {
  name: "CityView",
  components: {
    GeoMapGCharts,
    WordCloud
  },
  props: ["cityTrends", "countryCode", "defaultWords", "urls"],
};
</script>

<style>
</style>

