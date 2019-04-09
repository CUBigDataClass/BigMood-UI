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
const dataSource = {
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
      id: "SA",
      value: "2.04",
      showlabel: "1",
      link: "newchart-json-SAM"
    },
    {
      id: "AS",
      value: "1.78",
      showlabel: "1",
      link: "newchart-json-ASI"
    },
    {
      id: "EU",
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
  ],
  linkeddata: [
    {
      id: "NAM",
      linkedchart: {
        chart: {
          caption: "Average Annual Population Growth - North America",
          subcaption: "1955 - 2015",
          yaxisname: "Growth",
          numbersuffix: "%",
          palettecolors: "FFD74D",
          theme: "fusion"
        },
        data: [
          {
            label: "1955",
            value: "1.5078"
          },
          {
            label: "1960",
            value: "1.5502"
          },
          {
            label: "1965",
            value: "1.3121"
          },
          {
            label: "1970",
            value: "0.8648"
          },
          {
            label: "1975",
            value: "0.6402"
          },
          {
            label: "1980",
            value: "0.62"
          },
          {
            label: "1985",
            value: "0.6748"
          },
          {
            label: "1990",
            value: "0.6882"
          },
          {
            label: "1995",
            value: "0.6804"
          },
          {
            label: "2000",
            value: "0.5627"
          },
          {
            label: "2005",
            value: "0.5373"
          },
          {
            label: "2010",
            value: "0.5536"
          },
          {
            label: "2015",
            value: "0.4291"
          }
        ]
      }
    },
    {
      id: "SAM",
      linkedchart: {
        chart: {
          caption: "Average Annual Population Growth - South America",
          subcaption: "1955 - 2015",
          yaxisname: "Growth",
          numbersuffix: "%",
          palettecolors: "E65100",
          theme: "fusion"
        },
        data: [
          {
            label: "1955",
            value: "2.6275"
          },
          {
            label: "1960",
            value: "2.6995"
          },
          {
            label: "1965",
            value: "2.757"
          },
          {
            label: "1970",
            value: "2.5376"
          },
          {
            label: "1975",
            value: "2.3431"
          },
          {
            label: "1980",
            value: "2.3261"
          },
          {
            label: "1985",
            value: "2.2036"
          },
          {
            label: "1990",
            value: "1.9611"
          },
          {
            label: "1995",
            value: "1.7184"
          },
          {
            label: "2000",
            value: "1.5965"
          },
          {
            label: "2005",
            value: "1.4482"
          },
          {
            label: "2010",
            value: "1.2031"
          },
          {
            label: "2015",
            value: "1.0698"
          }
        ]
      }
    },
    {
      id: "ASI",
      linkedchart: {
        chart: {
          caption: "Average Annual Population Growth - Asia",
          subcaption: "1955 - 2015",
          yaxisname: "Growth",
          numbersuffix: "%",
          theme: "fusion",
          palettecolors: "FB8C00"
        },
        data: [
          {
            label: "1955",
            value: "1.9075"
          },
          {
            label: "1960",
            value: "1.8842"
          },
          {
            label: "1965",
            value: "2.1082"
          },
          {
            label: "1970",
            value: "2.4554"
          },
          {
            label: "1975",
            value: "2.3036"
          },
          {
            label: "1980",
            value: "1.9889"
          },
          {
            label: "1985",
            value: "1.9683"
          },
          {
            label: "1990",
            value: "2.0176"
          },
          {
            label: "1995",
            value: "1.6823"
          },
          {
            label: "2000",
            value: "1.3682"
          },
          {
            label: "2005",
            value: "1.2435"
          },
          {
            label: "2010",
            value: "1.1661"
          },
          {
            label: "2015",
            value: "1.0731"
          }
        ]
      }
    },
    {
      id: "EUP",
      linkedchart: {
        chart: {
          caption: "Average Annual Population Growth - Europe",
          subcaption: "1955 - 2015",
          yaxisname: "Growth",
          numbersuffix: "%",
          theme: "fusion",
          palettecolors: "FFE0B2"
        },
        data: [
          {
            label: "1955",
            value: "1.026"
          },
          {
            label: "1960",
            value: "1.0652"
          },
          {
            label: "1965",
            value: "0.9381"
          },
          {
            label: "1970",
            value: "0.6925"
          },
          {
            label: "1975",
            value: "0.54"
          },
          {
            label: "1980",
            value: "0.4218"
          },
          {
            label: "1985",
            value: "0.354"
          },
          {
            label: "1990",
            value: "0.2971"
          },
          {
            label: "1995",
            value: "0.0276"
          },
          {
            label: "2000",
            value: "-0.1301"
          },
          {
            label: "2005",
            value: "-0.1558"
          },
          {
            label: "2010",
            value: "-0.0576"
          },
          {
            label: "2015",
            value: "-0.0292"
          }
        ]
      }
    },
    {
      id: "AFC",
      linkedchart: {
        chart: {
          caption: "Average Annual Population Growth - Africa",
          subcaption: "1955 - 2015",
          yaxisname: "Growth",
          numbersuffix: "%",
          theme: "fusion",
          palettecolors: "E65100"
        },
        data: [
          {
            label: "1955",
            value: "2.1242"
          },
          {
            label: "1960",
            value: "2.338"
          },
          {
            label: "1965",
            value: "2.5075"
          },
          {
            label: "1970",
            value: "2.5947"
          },
          {
            label: "1975",
            value: "2.7175"
          },
          {
            label: "1980",
            value: "2.8398"
          },
          {
            label: "1985",
            value: "2.8857"
          },
          {
            label: "1990",
            value: "2.8243"
          },
          {
            label: "1995",
            value: "2.6172"
          },
          {
            label: "2000",
            value: "2.5072"
          },
          {
            label: "2005",
            value: "2.4853"
          },
          {
            label: "2010",
            value: "2.5593"
          },
          {
            label: "2015",
            value: "2.6001"
          }
        ]
      }
    },
    {
      id: "AUS",
      linkedchart: {
        chart: {
          caption: "Average Annual Population Growth - Oceania",
          subcaption: "1955 - 2015",
          yaxisname: "Growth",
          numbersuffix: "%",
          theme: "candy",
          palettecolors: "FB8C00"
        },
        data: [
          {
            label: "1955",
            value: "1.511"
          },
          {
            label: "1960",
            value: "1.6045"
          },
          {
            label: "1965",
            value: "1.5578"
          },
          {
            label: "1970",
            value: "1.455"
          },
          {
            label: "1975",
            value: "1.4727"
          },
          {
            label: "1980",
            value: "1.2404"
          },
          {
            label: "1985",
            value: "1.2398"
          },
          {
            label: "1990",
            value: "1.1853"
          },
          {
            label: "1995",
            value: "1.2006"
          },
          {
            label: "2000",
            value: "1.1244"
          },
          {
            label: "2005",
            value: "1.0724"
          },
          {
            label: "2010",
            value: "1.1255"
          },
          {
            label: "2015",
            value: "1.0397"
          }
        ]
      }
    }
  ]
}
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
      width: "80%",
      height: "600",
      type: "world",
      dataFormat: "json",
      dataSource
    };
  },

  mounted() {
    axios
      .get("http://146.148.80.142:3000/bigmoodapi/trends")
      .then(response => {
        // console.log(response.data.trends);
        this.trends = response.data.trends;
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
