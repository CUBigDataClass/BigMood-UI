import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import Maps from 'fusioncharts/fusioncharts.maps';
import 'vuetify/dist/vuetify.min.css';
import WorldWithCountries from 'fusionmaps/maps/fusioncharts.worldwithcountries';

Vue.use(Vuetify);
Vue.use(
  VueFusionCharts,
  FusionCharts,
  Charts,
  CandyTheme,
  Maps,
  WorldWithCountries,
);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
