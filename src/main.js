import Vue from 'vue'
import App from './App.vue'
import VueChartkick from 'vue-chartkick'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueChartkick)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
