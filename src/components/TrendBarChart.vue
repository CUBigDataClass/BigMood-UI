<template>
  <fusioncharts
    type="bar2d"
    data-format="json"
    :data-source="dataSource"
    :width="720"
    :height="400"
  ></fusioncharts>
</template>

<script>
export default {
  name: "TrendBarChart",
  props: {
    barData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    dataSource() {
      return {
        chart: {
          caption: "Trending topics by tweet volumes",
          yaxisname: "Tweet Volumes",
          aligncaptionwithcanvas: "0",
          theme: "candy"
        },
        data: this.barData.map(element => ({
          label: element.name,
          value: element.tweetVolume
        }))
      };
    }
  }
};
</script>
