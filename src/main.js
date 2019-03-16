import Vue from 'vue'
import App from './App.vue'
import VueChartkick from 'vue-chartkick'

Vue.use(VueChartkick)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
