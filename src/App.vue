<template>
  <div id="app">
    <GeoMap/>
  </div>
</template>

<script>
import GeoMap from './components/GeoMap.vue'

export default {
  name: 'app',
  components: {
    GeoMap
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
  margin-top: 60px;
}
</style>
