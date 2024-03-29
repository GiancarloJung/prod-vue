import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

// import styles
import '@/assets/sass/app.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

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
  color: '#ffffff',
  thickness: '4px'
})

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

import VuePlyr from 'vue-plyr'
Vue.use(VuePlyr)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD9aROUCigBoWm-uzv6Q4j1MhVNgr6dOkU',
    libraries: 'places',
  },
  installComponents: true
})

import AOS from 'aos'

import { i18n } from '@/plugins/i18n.js'
import { Trans } from '@/plugins/Translation'
Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  i18n,
  created() {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: true,
    })
  },
  render: h => h(App)
}).$mount('#app')
