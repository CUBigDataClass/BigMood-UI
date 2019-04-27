<template>
  <div>
    <GeoMapGCharts v-if='cityTrends' :cityTrends="cityTrends" :countryCode="countryCode"/>
    <WordCloud v-if="defaultWords" :words="defaultWords" :urls="urls"/>
    <div class="barChart">
      <TrendBarChart :countryTrends="countryTrends"/>
    </div>
  </div>
</template>

<script>
import GeoMapGCharts from "./GeoMapGCharts.vue";
import WordCloud from "./WordCloud.vue";
import TrendBarChart from "./TrendBarChart.vue";

export default {
  name: "CityView",
  components: {
    GeoMapGCharts,
    WordCloud,
    TrendBarChart
  },
  props: ["cityTrends", "countryCode", "defaultWords", "urls", "countryTrends"],
  watch: {
    defaultWords: function(newWords) {
      this.defaultWords = newWords;
    },
    countryTrends: function(newCountryTrends) {
      this.countryTrends = newCountryTrends;
    }
  }
};
</script>

<style>
.barChart {
  height: "300px";
  width: "500";
  margin: "10px";
}
</style>

