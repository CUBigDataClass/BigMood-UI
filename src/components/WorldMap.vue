<template>
  <fusioncharts
    :type="type"
    width="100%"
    height="500"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    @entityClick="getCountry"
  ></fusioncharts>
</template>

<script>
import Vue from "vue";
import countryIdsFusionCharts from "../data/fusionChartsWorldIds.json";

export default {
  name: "WorldMap",
  props: {
    data: {
      type: Array,
      default: () => []
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
              maxvalue: "-0.3",
              color: "#DC143C"
            },
            {
              minvalue: "-0.3",
              maxvalue: "0.3",
              color: "#FFE303"
            },
            {
              minvalue: "0.3",
              maxvalue: "1.0",
              color: "#32CD32"
            }
          ]
        }
      }
    };
  },
  computed: {
    trendData() {
      return this.getDataObjectForMap(this.data);
    }
  },
  methods: {
    getCountry(event) {
      this.country = event.data.label;
      this.$emit("selectedCountry", this.country);
    },
    getDataObjectForMap(trends) {
      const dataSource = [];
      trends.forEach(trend => {
        if ("trends" in trend) {
          const trendingHashtag = trend.trends[0];
          const id = countryIdsFusionCharts[trend.countryCode];
          if (!id || !trendingHashtag) {
            console.log("trending issue", trend);
          } else {
            let obj = {
              id: id["ID"].toString(),
              value: trendingHashtag.sentiment,
              tooltext:
                trend.country +
                "{br}Trend:" +
                trendingHashtag.name +
                "{br}Tweet Volume: " +
                trendingHashtag.tweetVolume
            };
            dataSource.push(obj);
          }
        }
      });
      return dataSource;
    }
  },
  watch: {
    trendData: {
      immediate: true,
      handler(data) {
        Vue.set(this.dataSource, "data", data);
      }
    }
  }
};
</script>

<style scoped>
.regions_div {
  width: 1200px;
  height: 800px;
  text-align: center;
}
</style>
