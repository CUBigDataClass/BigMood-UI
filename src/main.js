import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import Usa from 'fusionmaps/maps/fusioncharts.usa';
import 'vuetify/dist/vuetify.min.css';
import FusionMaps from 'fusioncharts/fusioncharts.maps';
import WorldWithCountries from 'fusionmaps/maps/fusioncharts.worldwithcountries';

Vue.use(Vuetify);
Vue.use(
  VueFusionCharts,
  FusionCharts,
  Charts,
  CandyTheme,
  Maps,
  World,
  WorldWithCountries,
  Usa
);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
