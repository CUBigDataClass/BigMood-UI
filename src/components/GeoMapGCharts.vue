<template>
  <div id="chart_div" style="width: 100%; height: 500px;"></div>
</template>
  
<script>
export default {
  name: "GeoMapGCharts",
  props: {
    countryCode: { type: String, default: "US" },
    cityTrends: { type: Array, default: () => [] }
  },
  data() {
    return {
      chart: null,
      data: null
    };
  },
  mounted() {
    google.charts.load("current", {
      packages: ["geochart"],
      mapsApiKey: ""
    });
    google.charts.setOnLoadCallback(this.setupChart);
  },
  computed: {
    trends() {
      return this.cityTrends.map(el => {
        // Get names of top 3 trends
        const trends = el.trends
          .slice(0, 3)
          .map(t => t.name)
          .join("\n");

        const tooltip = `Top Trends\n${trends}`;

        return [el.city, el.trends[0].sentiment, tooltip];
      });
    }
  },
  methods: {
    setupChart() {
      this.data = new google.visualization.DataTable();

      this.data.addColumn("string", "City");
      this.data.addColumn("number", "Sentiment");
      this.data.addColumn({ type: "string", role: "tooltip" });
      this.data.addRows(this.trends);

      this.chart = new google.visualization.GeoChart(
        document.getElementById("chart_div")
      );

      this.drawRegionsMap();
    },
    cityClickedHandler(event) {
      const row_index = this.chart.getSelection()[0]["row"];
      if (row_index != undefined) {
        const url = this.cityTrends[row_index].trends[0].url;
        window.open(url, "_blank");
      }
    },
    drawRegionsMap() {
      const options = {
        region: this.countryCode,
        displayMode: "markers",
        backgroundColor: "#2c3e50",
        colorAxis: {
          colors: ["#DC143C", "#FFE303", "#32CD32"],
          minValue: -1,
          maxValue: 1
        },
        showZoomOut: true
      };

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