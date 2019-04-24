<template>
  <div v-if="!loading">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      @entityClick="getCountry"
    ></fusioncharts>
  </div>
</template>

<script>
import axios from "axios";
import countryIdsFusionCharts from "../data/fusionChartsWorldIds.json";
import GeoMapGCharts from "./GeoMapGCharts";
export default {
  name: "WorldMap",
  props: ["data"],
  components: {},
  created() {
    this.trendData = this.getDataObjectForMap(this.data);
    this.dataSource["data"] = this.trendData;
    this.loading = false;
  },
  methods: {
    getCountry(event) {
      this.country = event.data.label;
      console.log(this.country);
    },
    getDataObjectForMap(trends) {
      const dataSource = [];
      trends.forEach(trend => {
        const trendingHashtag = trend.trends[0];
        const id = countryIdsFusionCharts[trend.countryCode];
        if (!id) {
          console.log(trend.country);
        } else {
          let obj = {
            id: id["ID"].toString(),
            value: trendingHashtag.sentiment,
            tooltext:
              trend.country +
              "{br}Trend:" +
              trendingHashtag.name +
              "{br}Tweet Volume: " +
              trendingHashtag.tweetVolume,
            link: ""
          };
          dataSource.push(obj);
        }
      });
      return dataSource;
    }
  },

  data() {
    return {
      width: "70%",
      height: "500",
      type: "worldwithcountries",
      loading: true,
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Sentiment based on what's trending in the world",
          subcaption: "Click on a country to see country wise trend stats",
          includevalueinlabels: "1",
          labelsepchar: ": ",
          entityfillhovercolor: "#FFF9C4",
          theme: "candy"
        },
        colorrange: {
          minvalue: "-1",
          code: "#8B0000",
          gradient: "1",
          startlabel: "Negative",
          endlabel: "Positive",
          color: [
            {
              minvalue: "-1",
              maxvalue: "-0.7",
              color: "#DC143C"
            },
            {
              minvalue: "-0.7",
              maxvalue: "0.3",
              color: "#FFE303	"
            },
            {
              minvalue: "0.3",
              maxvalue: "1.0",
              color: "#32CD32"
            }
          ]
        },
        data: this.trendData
      }
    };
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
