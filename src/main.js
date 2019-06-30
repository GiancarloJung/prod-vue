import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

// import styles
import '@/assets/sass/app.scss'

import Toasted from 'vue-toasted'
Vue.use(Toasted, {
  router,
  position: 'bottom-right',
  duration: 5000,
  closeOnSwipe: true
})

import vbclass from 'vue-body-class'
Vue.use(vbclass, router)

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: '#007bff',
  thickness: '4px'
})

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
