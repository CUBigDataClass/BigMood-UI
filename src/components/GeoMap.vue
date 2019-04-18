<template>
  <div>
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
    ></fusioncharts>
  </div>
</template>

<script>
import axios from "axios";
import countryIdsFusionCharts from "../data/fusionChartsWorldIds.json";
export default {
  name: "GeoMap",
  props: {},

  data: function() {
    return {
      headers: [
        { text: "Country", value: "Country" },
        { text: "City", value: "City" },
        { text: "Hashtag", value: "Hashtag" },
        { text: "Sentiment", value: "Sentiment" }
        // { text: "Woeid", value: "Woeid" }
      ],
      trends: [],
      width: "70%",
      height: "500",
      type: "worldwithcountries",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Sentiment based on what's trending",
          subcaption: "Click on a country to see trend stats",
          numbersuffix: "%",
          includevalueinlabels: "1",
          labelsepchar: ": ",
          entityfillhovercolor: "#FFF9C4",
          theme: "candy"
        },
        colorrange: {
          minvalue: "0",
          code: "#FFE0B2",
          gradient: "1",
          color: [
            {
              minvalue: "0.5",
              maxvalue: "1.0",
              color: "#FFD74D"
            },
            {
              minvalue: "1.0",
              maxvalue: "2.0",
              color: "#FB8C00"
            },
            {
              minvalue: "2.0",
              maxvalue: "3.0",
              color: "#E65100"
            }
          ]
        },
        data: [
          {
            id: "NA",
            value: ".82",
            showlabel: "1",
            link: "newchart-json-NAM"
          },
          {
            id: "23",
            value: "2.04",
            displayvalue: 'Hi',
            tooltext: "USA{br}Trend: #MarchMadness {br}TweetVolume: 1000",
            // showlabel: "1",
            link: "newchart-json-SAM"
          },
          {
            id: "104",
            value: "0.5",
            // showlabel: "1",
            link: "newchart-json-ASI"
          },
          {
            id: "IN",
            value: ".40",
            showlabel: "1",
            link: "newchart-json-EUP"
          },
          {
            id: "AF",
            value: "2.58",
            showlabel: "1",
            link: "newchart-json-AFC"
          },
          {
            id: "AU",
            value: "1.30",
            showlabel: "1",
            link: "newchart-json-AUS"
          }
        ]
      }
    };
  },

  mounted() {
    axios
      .get("http://146.148.80.142:3000/bigmoodapi/trends")
      .then(response => {
        // console.log(response.data.trends);
        this.trends = response.data.trends;
        const data = [];

        // Country trends
        let trends = this.trends.filter(
          trend => trend.locationType == "Country"
        );
        trends.forEach(trend => {
          const trendingHashtag = trend.twitterTrendInfo[0];
          let obj = {
            id: countryIdsFusionCharts[trend.countryCode],
            value: trendingHashtag.sentiment,
            tooltext: trend.country + "{br}Trend:" + trendingHashtag.name + "{br}Tweet Volume: " + trendingHashtag.tweetVolume,
            link: ""
          };
          data.push(obj);
        });
      })
      .catch(error => {
        this.error = error;
      });
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
