<template>
  <fusioncharts
    type="bar2d"
    data-format="json"
    :dataSource="dataSource"
    width="100%"
    height="400px"
  ></fusioncharts>
</template>

<script>
export default {
  name: "TrendBarChart",
  props: {
    countryTrends: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    barData() {
      return this.countryTrends.map(element => ({
        label: element.name,
        value: element.tweetVolume
      }));
    },
    dataSource() {
      return {
        chart: {
          caption: "Trending topics by tweet volumes",
          yaxisname: "Tweet Volumes",
          aligncaptionwithcanvas: "0",
          theme: "candy"
        },
        data: this.barData
      };
    }
  }
};
</script>
