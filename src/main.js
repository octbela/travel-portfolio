import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import '././assets/scss/main.scss'
import './registerServiceWorker'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.prototype.$api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
