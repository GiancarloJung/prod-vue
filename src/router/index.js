import Vue from 'vue'
import Router from 'vue-router'
import AppInit from './guards/AppInit'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'AboutIndex',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
  ]
})

router.beforeEach(AppInit)

export default router
