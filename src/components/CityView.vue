<template>
  <div>
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
  props: ["cityTrends", "countryCode"]
};
</script>
