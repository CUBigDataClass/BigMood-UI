<template>
  <div>
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      @beforeRender="displayMap"
    ></fusioncharts>
  </div>
</template>

<script>
import axios from "axios";
import countryIdsFusionCharts from "../data/fusionChartsWorldIds.json";
export default {
  name: "GeoMap",
  props: {},
  methods: {
    displayMap: function(event) {
          event.sender.configureLink({
                "type": "usa"
            }, 0);
    }
  },

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
      newData: dummyData,
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
            // US D
            id: "23",
            value: "2.04",
            displayvalue: "Hi",
            tooltext: "USA{br}Trend: #MarchMadness {br}TweetVolume: 1000",
            link: "newchart-json-23"
          },
          {
            id: "104",
            value: "0.5",
            link: "newchart-json-ASI"
          },
        ],
        linkedData: [
          {
            id: "23",
            linkedchart: {
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
                startlabel: "Low",
                endlabel: "High",
                code: "#e44a00",
                minvalue: "0",
                gradient: "1",
                color: [
                  {
                    maxvalue: "150",
                    displayvalue: "Average",
                    code: "#f8bd19"
                  },
                  {
                    maxvalue: "600",
                    code: "#6baa01"
                  }
                ]
              },
              data: [
                {
                  id: "HI",
                  value: "99"
                },
                {
                  id: "DC",
                  value: "99"
                },
                {
                  id: "MD",
                  value: "90"
                },
                {
                  id: "DE",
                  value: "96"
                },
                {
                  id: "RI",
                  value: "90"
                },
                {
                  id: "WA",
                  value: "228"
                },
                {
                  id: "OR",
                  value: "105"
                },
                {
                  id: "CA",
                  value: "221"
                },
                {
                  id: "AK",
                  value: "260"
                },
                {
                  id: "ID",
                  value: "396"
                },
                {
                  id: "NV",
                  value: "169"
                },
                {
                  id: "AZ",
                  value: "435"
                },
                {
                  id: "MT",
                  value: "445"
                },
                {
                  id: "WY",
                  value: "455"
                },
                {
                  id: "UT",
                  value: "227"
                },
                {
                  id: "CO",
                  value: "214"
                },
                {
                  id: "NM",
                  value: "196"
                },
                {
                  id: "ND",
                  value: "331"
                },
                {
                  id: "SD",
                  value: "374"
                },
                {
                  id: "NE",
                  value: "329"
                },
                {
                  id: "KS",
                  value: "231"
                },
                {
                  id: "OK",
                  value: "150"
                },
                {
                  id: "TX",
                  value: "202"
                },
                {
                  id: "MN",
                  value: "137"
                },
                {
                  id: "IA",
                  value: "143"
                },
                {
                  id: "MO",
                  value: "424"
                },
                {
                  id: "AR",
                  value: "485"
                },
                {
                  id: "LA",
                  value: "124"
                },
                {
                  id: "WI",
                  value: "181"
                },
                {
                  id: "IL",
                  value: "120"
                },
                {
                  id: "KY",
                  value: "309"
                },
                {
                  id: "TN",
                  value: "250"
                },
                {
                  id: "MS",
                  value: "351"
                },
                {
                  id: "AL",
                  value: "271"
                },
                {
                  id: "GA",
                  value: "124"
                },
                {
                  id: "MI",
                  value: "120"
                },
                {
                  id: "IN",
                  value: "205"
                },
                {
                  id: "OH",
                  value: "476"
                },
                {
                  id: "PA",
                  value: "445"
                },
                {
                  id: "NY",
                  value: "369"
                },
                {
                  id: "VT",
                  value: "322"
                },
                {
                  id: "NH",
                  value: "216"
                },
                {
                  id: "ME",
                  value: "404"
                },
                {
                  id: "MA",
                  value: "165"
                },
                {
                  id: "CT",
                  value: "316"
                },
                {
                  id: "NJ",
                  value: "553"
                },
                {
                  id: "WV",
                  value: "560"
                },
                {
                  id: "VA",
                  value: "565"
                },
                {
                  id: "NC",
                  value: "534"
                },
                {
                  id: "SC",
                  value: "503"
                },
                {
                  id: "FL",
                  value: "503"
                }
              ]
            }
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
            tooltext:
              trend.country +
              "{br}Trend:" +
              trendingHashtag.name +
              "{br}Tweet Volume: " +
              trendingHashtag.tweetVolume,
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
