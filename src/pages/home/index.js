import Home from '@/pages/home/Home'
import Index from '@/pages/home/Index'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/home/Home.vue'),
    children: [
      {
        path: '',
        name: 'HomeIndex',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/home/Index.vue'),
        meta: { bodyClass: 'home' }
      },
    ]
  }
]

export default routes
