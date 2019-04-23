<template>
  <div id="app">
    <NavBar/>
    <div class="chart">
      <GeoMap/>
    </div>
    <div class="margin">
      <WordCloud/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import WordCloud from "./components/WordCloud.vue";
import GeoMap from "./components/GeoMap.vue";


export default {
  name: "app",
  components: {
    GeoMap,
    NavBar,
    WordCloud
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.chart {
  margin-top: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.margin {
  margin-top: 100px;
}
body {
  background-image: url("./assets/bg.png");
  background-size: cover;
}
</style>
