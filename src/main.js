import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar'
import axios from 'axios'
import VueAxios from 'vue-axios'

// axios送資料必加
axios.defaults.withCredentials = true
Vue.config.productionTip = false

Vue.use(VCalendar, {
  componentPrefix: 'vc'
})
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
