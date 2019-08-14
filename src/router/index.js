import Vue from 'vue'
import Router from 'vue-router'
import multiguard from 'vue-router-multiguard'
import { Trans } from '@/plugins/Translation'

import AppInit from './guards/AppInit'

// import AuthRoutes from '@/pages/auth/index.js'

import HomeRoutes from '@/pages/home/index.js'
import AboutRoutes from '@/pages/about/index.js'
import PortfolioRoutes from '@/pages/portfolio/index.js'
import ClientsRoutes from '@/pages/clients/index.js'
import ContactRoutes from '@/pages/contact/index.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [{
    path: '/:lang',
    component: {
      template: '<router-view />'
    },
    children: [
      // ...AuthRoutes,
      ...HomeRoutes,
      ...AboutRoutes,
      ...PortfolioRoutes,
      ...ClientsRoutes,
      ...ContactRoutes,
    ]
  }, {
    // Redirect user to supported lang version.
    path: '*',
    redirect (to) {
      return Trans.getUserSupportedLang()
    }
  }]
})

router.beforeEach(multiguard([ AppInit, Trans.routeMiddleware ]))

export default router
