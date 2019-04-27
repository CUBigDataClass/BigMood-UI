<template>
  <fusioncharts v-if="barData"
    :type="type"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
  ></fusioncharts>
</template>

<script>
export default {
  name: "TrendBarChart",
  props: ["countryTrends"],
  data: () => ({
    loading: false,
    type: "bar2d",
    // width: "50%",
    // height: "50%",
    dataFormat: "json",
    barData: null,
    dataSource: {
      chart: {
        caption: "Trending topics by tweet volumes",
        yaxisname: "Tweet Volumes",
        aligncaptionwithcanvas: "0",
        // plottooltext: "<b>$dataValue</b> leads received",
        theme: "candy"
      },
      data: null
    }
  }),
  watch: {
    countryTrends: function(newCountryTrends) {
      this.countryTrends = newCountryTrends;
      this.barData = this.countryTrends.map(element => ({
        label: element.name,
        value: element.tweetVolume
      }));
      this.dataSource['data'] = this.barData;
    }
  }
};
</script>

<style>
</style>




