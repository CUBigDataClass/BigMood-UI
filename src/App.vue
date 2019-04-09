<template>
  <div id="app">
    <NavBar/>
    <GeoMap/>
  </div>
</template>

<script>
import GeoMap from './components/GeoMap.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'app',
  components: {
    GeoMap, 
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
