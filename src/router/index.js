import Vue from 'vue'
import Router from 'vue-router'
import AppInit from './guards/AppInit'

import AuthRoutes from '@/pages/auth/index.js'
import HomeRoutes from '@/pages/home/index.js'
import AboutRoutes from '@/pages/about/index.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes: [
    ...AuthRoutes,
    ...HomeRoutes,
    ...AboutRoutes,
  ]
})

router.beforeEach(AppInit)

export default router
