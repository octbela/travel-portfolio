import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'slick-carousel/slick/slick.min'
import '././assets/scss/main.scss'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faComments, faCopyright, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue)

library.add(faEye, faCopyright, faComments, faSuitcaseRolling)
library.add(faTwitter, faFacebook)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
