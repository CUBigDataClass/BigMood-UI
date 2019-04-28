<template>
  <fusioncharts
    type="bar2d"
    data-format="json"
    :data-source="dataSource"
    :width="width"
    :height="height"
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
  data() {
    return {
      height: "100%",
      width: "100%"
    };
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
