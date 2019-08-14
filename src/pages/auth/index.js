import RedirectIfLoggedIn from '@/router/guards/RedirectIfLoggedIn'

const routes = [
  {
    path: 'auth/',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/auth/Auth.vue'),
    beforeEnter: RedirectIfLoggedIn,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/auth/Login.vue'),
        meta: { bodyClass: 'login' }
      },
      {
        path: 'reset/:token',
        name: 'Reset',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/auth/Reset.vue'),
        meta: { bodyClass: 'login' }
      },
      {
        path: 'forgot',
        name: 'Forgot',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/auth/Forgot.vue'),
        meta: { bodyClass: 'login' }
      }
    ]
  }
]

export default routes
