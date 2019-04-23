<template>
  <div class='center'>
    <GChart
    :settings="{ packages: ['geochart', 'table', 'map'], mapsApiKey: 'AIzaSyBEJFeCpbl5tIQXvI5_C0XLhSnwfpHAe-E' }"
      type="GeoChart"
      :data="chartData"
      :options="chartOptions"
      
    />
    <!-- <geo-chart :data="chartData"></geo-chart> -->
  </div>
</template>
  
<script>
export default {
  name: "GeoMapGCharts",
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Country", "Popularity"],
        ["Germany", 200],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["RU", 700]
        // ['City', 'Popularity'],
        // ['Rome',      276147],
        // ['Milan',     1324110],
        // ['Naples',    959574],
        // ['Turin',     907563],
        // ['Palermo',   655875],
        // ['Genoa',     607906],
        // ['Bologna',   380181],
        // ['Florence',  371281],
        // ['Fiumicino', 67370],
        // ['Anzio',     52192],
        // ['Ciampino',  38262]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
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


