<template>
  <div id="chart_div" style="width: 900px; height: 500px;"></div>
</template>
  
<script>
export default {
  name: "GeoMapGCharts",
  props: ["countryCode", "cityTrends"],
  data() {
    return {
      chart: null,
      region: "IT",
    };
  },
  watch: {
    countryCode: function(newCode) {
      this.region = newCode;
    },
    cityTrends: function(newCityTrends) {
      this.cityTrends = newCityTrends;
      const cityData = [];
      this.data = new google.visualization.DataTable();
      this.data.addColumn("string", "City");
      this.data.addColumn("number", "Sentiment");
      this.data.addColumn({ type: "string", role: "tooltip" });
      newCityTrends.forEach(element => {
        const tooltip =
          "Top Trends\n" +
          element.trends[0].name +
          "\n" +
          element.trends[1].name +
          "\n" +
          element.trends[2].name;
        cityData.push([element.city, element.trends[0].sentiment, tooltip]);
      });
      this.data.addRows(cityData);
      google.charts.setOnLoadCallback(this.drawRegionsMap);
    }
  },
  created() {
    google.charts.load("current", {
      packages: ["geochart"],
      mapsApiKey: ""
    });
  },

  methods: {
    cityClickedHandler(event) {
      const row_index = this.chart.getSelection()[0]["row"];
      if (row_index != undefined) {
        const url = this.cityTrends[row_index].trends[0].url;
        window.open(url, "_blank");
      }
    },
    drawRegionsMap() {
      const options = {
        region: this.region,
        displayMode: "markers",
        backgroundColor: "#2c3e50",
        colorAxis: {
          colors: ["#DC143C", "#FFE303", "#32CD32"],
          minValue: -1,
          maxValue: 1
        },
        showZoomOut: true
      };

      this.chart = new google.visualization.GeoChart(
        document.getElementById("chart_div")
      );
      google.visualization.events.addListener(
        this.chart,
        "select",
        this.cityClickedHandler
      );
      this.chart.draw(this.data, options);
    }
  }
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 20%;
  /* height: 20%; */
}
</style>


